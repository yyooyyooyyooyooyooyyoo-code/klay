import { Link } from '@/components/ui/link';
import type { LongFormArticle } from '@/content/blog/types';

export function LongFormArticleContent({ article }: { article: LongFormArticle }) {
  const introduction = typeof article.introduction === 'string' ? [article.introduction] : article.introduction;

  return (
    <div className="space-y-6 text-black">
      {introduction.map((paragraph) => (
        <p key={paragraph} className="text-lg leading-relaxed">{paragraph}</p>
      ))}
      {article.sections.map((section) => (
        <section key={section.heading} className="space-y-3">
          <h2 className="text-2xl font-bold leading-tight text-black">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed">{paragraph}</p>
          ))}
          {section.list && (
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed">
              {section.list.map((item) => <li key={item}>{item}</li>)}
            </ol>
          )}
          {section.bulletList && (
            <ul className="list-disc space-y-2 pl-6 leading-relaxed">
              {section.bulletList.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {section.table && (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr>
                    {section.table.headers.map((header) => (
                      <th key={header} className="border-b border-black/10 px-4 py-3 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${rowIndex}-${cellIndex}`} className="border-b border-black/10 px-4 py-3 align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.paragraphsAfter?.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed">{paragraph}</p>
          ))}
          {section.subsections?.map((subsection) => (
            <div key={subsection.heading} className="space-y-3">
              <h3 className="text-lg font-semibold text-black">{subsection.heading}</h3>
              {subsection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">{paragraph}</p>
              ))}
              {subsection.list && (
                <ol className="list-decimal space-y-2 pl-6 leading-relaxed">
                  {subsection.list.map((item) => <li key={item}>{item}</li>)}
                </ol>
              )}
              {subsection.bulletList && (
                <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                  {subsection.bulletList.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
          {section.misconceptions && (
            <ul className="space-y-4">
              {section.misconceptions.map((item) => (
                <li key={item.claim} className="leading-relaxed">
                  <strong className="font-semibold text-black">{item.claim}</strong>{' '}
                  {item.correction}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      {article.faqs.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold leading-tight text-black">Frequently Asked Questions</h2>
          {article.faqs.map((faq) => (
            <div key={faq.question} className="space-y-2">
              <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
              <p className="leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </section>
      )}
      <p className="rounded-2xl bg-white/70 p-5 leading-relaxed">
        {article.cta}{' '}
        <Link href="/contact" className="font-semibold text-gold-ink underline underline-offset-4">
          Book a free consultation.
        </Link>
      </p>
      {article.disclaimer && (
        <p className="text-sm leading-relaxed text-black/70">{article.disclaimer}</p>
      )}
      {article.externalLinks && (
        <section aria-label="Official sources" className="space-y-2 border-t border-black/10 pt-5">
          <h2 className="text-lg font-semibold text-black">Official sources</h2>
          <ul className="list-inside list-disc space-y-1">
            {article.externalLinks.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
      {article.relatedLinks.length > 0 && (
        <nav aria-label="Related articles" className="space-y-2 border-t border-black/10 pt-5">
          <h2 className="text-lg font-semibold text-black">Related guides</h2>
          <ul className="list-inside list-disc space-y-1">
            {article.relatedLinks.map((relatedLink) => (
              <li key={relatedLink.href}>
                <Link href={relatedLink.href} className="underline underline-offset-4">{relatedLink.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
