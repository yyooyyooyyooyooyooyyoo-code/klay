import type { ReactNode } from 'react';

type MarkdownBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; rows: string[][] };

function splitTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  const blocks: MarkdownBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let listOrdered = false;
  let table: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
    paragraph = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: 'list', ordered: listOrdered, items: list });
    list = [];
  };
  const flushTable = () => {
    if (table.length) {
      const rows = table.map(splitTableRow);
      blocks.push({ type: 'table', rows: rows.filter((row) => !row.every((cell) => /^:?-{3,}:?$/.test(cell))) });
    }
    table = [];
  };
  const flushTextBlocks = () => {
    flushParagraph();
    flushList();
    flushTable();
  };

  for (const line of lines) {
    const trimmed = line.trim();
    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushTextBlocks();
      const level = heading[1].length;
      if (level > 1) {
        blocks.push({ type: 'heading', level: level === 2 ? 2 : 3, text: heading[2].trim() });
      }
      continue;
    }

    if (trimmed.startsWith('|')) {
      flushParagraph();
      flushList();
      table.push(trimmed);
      continue;
    }
    flushTable();

    const bullet = trimmed.match(/^[-*+]\s+(.+)$/);
    const numbered = trimmed.match(/^\d+[.)]\s+(.+)$/);
    if (bullet || numbered) {
      flushParagraph();
      const ordered = Boolean(numbered);
      if (list.length && listOrdered !== ordered) flushList();
      listOrdered = ordered;
      list.push((numbered ?? bullet)![1]);
      continue;
    }

    flushList();
    if (!trimmed) flushParagraph();
    else paragraph.push(trimmed);
  }
  flushTextBlocks();
  return blocks;
}

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export function MarkdownArticleContent({ markdown }: { markdown: string }) {
  const blocks = parseMarkdown(markdown);

  return (
    <div className="space-y-5 leading-relaxed text-black">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return block.level === 2 ? (
            <h2 key={index} className="pt-2 text-2xl font-bold leading-tight text-black">
              {renderInline(block.text)}
            </h2>
          ) : (
            <h3 key={index} className="text-lg font-semibold text-black">
              {renderInline(block.text)}
            </h3>
          );
        }
        if (block.type === 'paragraph') {
          return <p key={index}>{renderInline(block.text)}</p>;
        }
        if (block.type === 'list') {
          const List = block.ordered ? 'ol' : 'ul';
          return (
            <List key={index} className={`${block.ordered ? 'list-decimal' : 'list-disc'} space-y-2 pl-6`}>
              {block.items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}
            </List>
          );
        }
        const [headers, ...rows] = block.rows;
        if (!headers) return null;
        return (
          <div key={index} className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  {headers.map((header, cellIndex) => (
                    <th key={cellIndex} className="border-b border-black/10 px-4 py-3 font-semibold">
                      {renderInline(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border-b border-black/10 px-4 py-3 align-top">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
