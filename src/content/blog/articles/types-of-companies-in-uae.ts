import type { BlogArticle } from '../types';

const article: BlogArticle = {
  details: {
    imageTitle: 'Types of Companies in the UAE',
    imageCaption: 'The legal form of a UAE company determines ownership, liability and how the business can grow.',
    imageDescription: 'An explanation of UAE company legal forms, including LLC, sole establishment, civil company, FZE, FZCO and branches.',
    imageTags: [
      'Types of Companies in UAE',
      'LLC vs Sole Establishment',
      'FZCO vs FZE',
      'Legal Structure UAE Company',
    ],
    metaKeywords: 'types of companies in UAE, LLC vs sole establishment, FZCO vs FZE, legal structure UAE company',
    tags: [
      'Types of Companies in UAE',
      'LLC vs Sole Establishment',
      'FZCO vs FZE',
      'UAE Legal Structure',
      'Limited Liability Company UAE',
      'UAE Company Formation',
    ],
    audience: 'UK, EU, US and GCC founders choosing a legal form for a UAE company',
  },
  body: {
    kind: 'longform',
    introduction: 'Choosing a jurisdiction is only half of the incorporation decision. You also have to choose a legal form, which determines who owns the business, what the owners are liable for, and how the company can grow. Many founders hear acronyms such as LLC, FZE and FZCO without a clear explanation of the differences. This guide sets them out in plain language.',
    sections: [
      {
        heading: 'Legal Form vs Licence Type vs Jurisdiction',
        paragraphs: [
          'These three terms are often mixed up. The jurisdiction is where you are licensed, such as a Free Zone or a Mainland department. The licence type is what you may do, such as commercial or professional, as covered in our trade licence guide. The legal form is the structure of the entity itself: who owns it and who is liable. You choose all three, and they must fit together.',
        ],
      },
      {
        heading: 'Limited Liability Company (LLC)',
        paragraphs: [
          'The LLC is the most common Mainland structure. Shareholders\' liability is generally limited to their share capital, and the company can have a single shareholder or several. It suits trading, services and most commercial businesses, and with current rules foreign owners can hold 100% for most activities, as covered in our foreign ownership guide. Ownership and management are set out in the memorandum of association.',
        ],
      },
      {
        heading: 'Sole Establishment',
        paragraphs: [
          'A sole establishment is owned by one natural person. It is simple to set up and common for individual professionals on a professional licence. The key point is liability: the owner and the business are not legally separate for debts, so the owner can be personally liable. For businesses that take on contracts, staff or credit, an LLC is usually safer.',
        ],
      },
      {
        heading: 'Civil Company',
        paragraphs: [
          'A civil company is used by professionals who practise together, such as lawyers, accountants, engineers and consultants. It is licensed as a professional partnership and reflects the personal nature of professional services.',
        ],
      },
      {
        heading: 'Branch of a Foreign or UAE Company',
        paragraphs: [
          'A branch is an extension of its parent, not a separate legal entity. It operates under the parent\'s name and is closely tied to the parent\'s liability, as covered in our branch office guide. It suits established companies wanting to extend operations without creating a subsidiary.',
        ],
      },
      {
        heading: 'Public and Private Joint Stock Companies',
        paragraphs: [
          'Joint stock companies are structured around shares and a board, and are used for larger ventures, public offerings and regulated sectors. They carry heavier governance requirements and are rarely the right choice for a small founder-led business.',
        ],
      },
      {
        heading: 'Free Zone Forms: FZE, FZCO and FZ-LLC',
        paragraphs: [
          'Free Zones use their own entity names, which often confuse newcomers:',
        ],
        bulletList: [
          'FZE (Free Zone Establishment). A limited liability entity with a single shareholder',
          'FZCO (Free Zone Company). A limited liability entity with two or more shareholders',
          'FZ-LLC. A Free Zone limited liability company, used in some zones as an alternative designation',
        ],
        paragraphsAfter: [
          'The exact names and options vary by Free Zone. In practice, an FZE or FZCO provides limited liability like an LLC, but within the zone\'s own rules and licensing system.',
        ],
      },
      {
        heading: 'Quick Comparison',
        table: {
          headers: [
            'Form',
            'Owners',
            'Liability',
            'Typical use',
          ],
          rows: [
            [
              'LLC (Mainland)',
              'One or more',
              'Limited',
              'Trading, services, local market',
            ],
            [
              'Sole establishment',
              'One individual',
              'Owner personally liable',
              'Individual professionals',
            ],
            [
              'FZE',
              'One shareholder',
              'Limited',
              'Solo founder in a Free Zone',
            ],
            [
              'FZCO',
              'Two or more',
              'Limited',
              'Multi-founder Free Zone company',
            ],
            [
              'Branch',
              'Parent company',
              'Parent is liable',
              'Existing company expanding',
            ],
          ],
        },
      },
      {
        heading: 'How to Choose',
        list: [
          'Decide whether you need Mainland access or a Free Zone, using our jurisdiction guide',
          'Confirm how many owners you will have, now and soon',
          'Consider liability: will you sign leases, employ staff or take credit?',
          'Think about growth, investors and succession, as covered in our restructuring guide',
          'Check which forms your chosen authority actually offers for your activity',
        ],
      },
      {
        heading: 'Can You Change Legal Form Later?',
        paragraphs: [
          'You can, but it is usually a formal restructuring with amended documents, a new licence and updates to your bank and visas, as covered in our restructuring guide. It is cheaper to choose correctly at the start, particularly if you expect partners or investors.',
        ],
      },
      {
        heading: 'Liability in Practice: Why It Matters More Than Founders Expect',
        paragraphs: [
          'The difference between limited and unlimited liability stops being theoretical as soon as the business signs a lease, hires staff or takes a customer deposit. If a sole establishment cannot pay a supplier, the creditor may pursue the owner\'s personal assets. In an LLC, FZE or FZCO, the creditor\'s claim is generally limited to the company\'s assets, except where law or conduct creates personal responsibility. For any business with real commitments, limited liability is a basic form of protection, and the extra cost of a limited liability entity is usually modest compared with the risk it removes.',
        ],
      },
      {
        heading: 'How Legal Form Affects Banking and Credibility',
        paragraphs: [
          'Banks, landlords and larger customers generally find a limited liability entity easier to assess. They can review its constitutional documents, shareholders and accounts, as covered in our MOA and bookkeeping guides, and they know the legal framework governing it. Sole establishments are accepted by banks but often attract closer questions about the owner\'s personal standing. If you intend to raise investment, tender for contracts or sell the business one day, a limited liability structure with clean documents is easier to work with.',
        ],
      },
      {
        heading: 'Investors, Succession and Exit',
        paragraphs: [
          'Investors prefer companies with shares that can be issued and transferred, because that is how they take a stake and later exit. A sole establishment has no shares in this sense, so bringing in an investor usually means converting it to a company. If you are planning succession, as covered in our wills and business shares guides, shares in a limited liability company can be bequeathed or transferred in a structured way, while the assets of a sole establishment are harder to pass on cleanly. Choose the form you will need in three to five years, not just the one that is cheapest today.',
        ],
      },
      {
        heading: 'Examples: Matching Form to Business',
        subsections: [
          {
            heading: 'A solo consultant with no staff',
            paragraphs: [
              'May start with a Free Zone FZE or a professional licence, depending on where clients are. A freelance permit might be enough at first, as covered in our freelance guide.',
            ],
          },
          {
            heading: 'Two co-founders running a software company',
            paragraphs: [
              'Typically an FZCO or a Mainland LLC, with a shareholder agreement and clear IP assignment, as covered in our tech startup and shareholder agreement guides.',
            ],
          },
          {
            heading: 'An international company expanding into the UAE',
            paragraphs: [
              'May use a branch for continuity of brand and contracts, or a subsidiary LLC if it wants separation of liability and a local structure.',
            ],
          },
          {
            heading: 'A family business with several ventures',
            paragraphs: [
              'Often uses a holding company above operating LLCs, as covered in our holding company guide.',
            ],
          },
        ],
      },
      {
        heading: 'Questions to Ask Before You Decide',
        bulletList: [
          'Will I sign leases, hire staff or take credit in the company\'s name?',
          'Will I need co-founders or investors in the next few years?',
          'Do I need to trade on the Mainland, or is a Free Zone enough?',
          'How important is the separation of personal and business risk?',
          'How do I want the business to pass to my family or a buyer?',
        ],
        paragraphsAfter: [
          'If you are unsure, a short advisory session before incorporation is far cheaper than restructuring afterwards.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is an FZE the same as an LLC?',
        answer: 'They are similar in offering limited liability, but they are licensed under different regimes. An FZE sits within a Free Zone and follows that zone\'s rules, including its operating scope.',
      },
      {
        question: 'Should a solo founder use a sole establishment or an LLC?',
        answer: 'If you want your personal assets separated from business risk, a limited liability structure is generally the safer choice. A sole establishment can work for low-risk individual professional work.',
      },
      {
        question: 'Can I add a partner to a single-shareholder company later?',
        answer: 'Yes, by amending the constitutional documents and licence. In some Free Zones this also means changing the entity designation, for example from FZE to FZCO.',
      },
    ],
    cta: 'Not sure which structure fits your plans? Klay Consultants recommends a legal form and jurisdiction together, based on liability, ownership and growth plans.',
    disclaimer: 'This article provides general information only and is not legal, tax, immigration or financial advice. UAE licensing, ownership, regulatory and tax requirements vary by emirate, Free Zone, activity and individual circumstances, and can change. Confirm current requirements with the relevant authority or a qualified adviser before acting.',
    relatedLinks: [
      {
        href: '/blog/uae-trade-license-types-explained-klay-consultants',
        label: 'UAE trade licence types explained',
      },
      {
        href: '/blog/100-percent-foreign-ownership-uae',
        label: '100% foreign ownership in the UAE',
      },
      {
        href: '/blog/open-foreign-company-branch-in-uae',
        label: 'Opening a foreign company branch in the UAE',
      },
      {
        href: '/blog/restructuring-your-uae-company-when-and-how-to-change-structure',
        label: 'Restructuring your UAE company',
      },
      {
        href: '/blog/memorandum-of-association-uae',
        label: 'Memorandum of Association in the UAE',
      },
    ],
  },
};

export default article;
