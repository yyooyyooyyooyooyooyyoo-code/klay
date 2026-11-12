import type { BlogArticle } from '../types';

const article: BlogArticle = {
  details: {
    imageTitle: 'Memorandum of Association (MOA) in the UAE',
    imageCaption: 'The MOA records who owns a UAE company, what it does and how it is run.',
    imageDescription: 'A guide to the UAE memorandum of association, its typical contents, key clauses and how it differs from a shareholder agreement.',
    imageTags: [
      'Memorandum of Association UAE',
      'MOA LLC Dubai',
      'Articles of Association Free Zone',
      'UAE Company Constitution',
    ],
    metaKeywords: 'memorandum of association UAE, MOA LLC Dubai, articles of association free zone',
    tags: [
      'Memorandum of Association UAE',
      'MOA LLC Dubai',
      'Articles of Association Free Zone',
      'Shareholder Agreement',
      'UAE Company Formation',
    ],
    audience: 'UK, EU, US and GCC founders forming a UAE company with one or more shareholders',
  },
  body: {
    kind: 'longform',
    introduction: 'The memorandum of association, usually shortened to MOA, is the founding document of a UAE company. It records who owns the company, what it does and how it is run, and it is the document authorities, banks and courts rely on when they need to know the legal position. Many founders treat it as paperwork to sign. In reality, mistakes in the MOA are among the most expensive to fix later.',
    sections: [
      {
        heading: 'What an MOA Does',
        paragraphs: [
          'The MOA formally establishes the company and sets out its basic constitution. It is registered with the licensing authority and forms part of the public regulatory record. Together with the trade licence, it is what a bank will ask for when you open an account, and what an investor will examine during due diligence.',
        ],
      },
      {
        heading: 'Typical Contents',
        bulletList: [
          'Company name and legal form',
          'Registered address and jurisdiction',
          'Business activities the company is licensed to carry out',
          'Shareholders, their nationality and their details',
          'Share capital and the number and value of shares held by each shareholder',
          'Management: who the manager or managers are and what powers they hold',
          'Profit and loss distribution between shareholders',
          'Duration of the company, which can be fixed or renewable',
          'Dispute resolution and governing law provisions',
          'Rules on transfer of shares and on the admission of new shareholders',
        ],
      },
      {
        heading: 'MOA vs Articles of Association',
        paragraphs: [
          'Depending on the jurisdiction, the constitutional document may be called a memorandum, articles of association, or both. Free Zones often use a standard set of articles that you adopt, with limited room to customise. Mainland LLCs typically use an MOA that you or your adviser draft to reflect your arrangements. Whichever name is used, the function is the same: it is the company\'s constitution.',
        ],
      },
      {
        heading: 'MOA vs Shareholder Agreement',
        paragraphs: [
          'The MOA is a formal, registered document. A shareholder agreement is a private contract between the owners that deals with matters the MOA does not cover in detail, such as exit terms, deadlock and decision-making, as covered in our shareholder agreement guide. They should be consistent: the shareholder agreement adds to the MOA and should not contradict it.',
        ],
      },
      {
        heading: 'Who Signs and How',
        paragraphs: [
          'All shareholders, or their authorised representatives, sign the MOA. Depending on the authority, signing may take place before a notary, through an electronic process, or through an authorised representative using a power of attorney, as covered in our Power of Attorney guide. Remote signing is increasingly common, but you should confirm what is accepted before you assume you can sign from abroad.',
        ],
      },
      {
        heading: 'Key Clauses Worth Careful Thought',
        subsections: [
          {
            heading: 'Business activities',
            paragraphs: [
              'List the activities you genuinely need, including ones you may add soon. Adding activities later requires an amendment.',
            ],
          },
          {
            heading: 'Management powers',
            paragraphs: [
              'Define clearly what managers can do alone and what needs shareholder approval. Banks and counterparties rely on this when they decide whether a signature is valid.',
            ],
          },
          {
            heading: 'Share transfers',
            paragraphs: [
              'Set out how shares can be sold or transferred, including any right of first refusal. This links directly to the process described in our shareholder transfer guide.',
            ],
          },
          {
            heading: 'Profit distribution',
            paragraphs: [
              'Profit sharing does not always have to match shareholding percentages, but any difference should be deliberate and documented.',
            ],
          },
          {
            heading: 'Succession',
            paragraphs: [
              'Consider how the MOA interacts with shareholders\' wills and succession plans, as covered in our business shares guide.',
            ],
          },
        ],
      },
      {
        heading: 'Amending the MOA',
        paragraphs: [
          'You can amend the MOA, for example to add a shareholder, change activities or alter management. Amendments require shareholder approval, a formal amended document, registration with the authority and updates to your licence and bank records, as covered in our restructuring guide. Each amendment carries a fee and takes time, so a well-drafted original is more cost-effective.',
        ],
      },
      {
        heading: 'Common Mistakes',
        bulletList: [
          'Signing a standard template without reading how it affects control and exits',
          'Giving a manager broad powers without limits',
          'Recording shareholding that does not match the real commercial agreement',
          'Leaving out activities that the business will clearly need',
          'Failing to align the MOA with a shareholder agreement',
          'Not keeping a final signed copy accessible to the owners',
        ],
      },
      {
        heading: 'A Worked Example: When the MOA Causes Trouble',
        paragraphs: [
          'Two co-founders, one based in Dubai and one in London, set up an LLC using a standard template. The MOA says that all decisions need the signatures of both shareholders and that profits are shared equally. Eighteen months later, the Dubai founder wants to sign a lease for a new office while the London founder is travelling and unreachable. Because the MOA does not give either manager independent authority up to a stated limit, the lease cannot be signed, and the bank will not release a deposit. A better MOA would have set a spending threshold below which either manager could act alone, and above which both needed to agree. The company\'s operations and the founders\' relationship would have been smoother as a result.',
        ],
      },
      {
        heading: 'Drafting for Growth and Change',
        paragraphs: [
          'Companies change. A well-drafted MOA anticipates new shareholders, new activities and new managers without forcing you to rewrite the constitution each time. Consider including a clear process for admitting shareholders, for issuing additional shares and for changing activities. Also think about how profits will be distributed if one founder contributes capital and the other contributes work. If those arrangements are not recorded properly, disputes can arise years later when memories differ.',
        ],
      },
      {
        heading: 'Language, Translation and Notarisation',
        paragraphs: [
          'Depending on the authority, the MOA may need to be in Arabic, English or both, with the Arabic version often carrying legal weight on the Mainland. If the two language versions differ, the one the authority treats as controlling will prevail. Ask which language governs, check the translation carefully, and avoid signing a version you cannot read. For remote signing, confirm whether the authority accepts electronic signatures or requires notarisation or a power of attorney, as covered in our Power of Attorney and remote setup guides.',
        ],
      },
      {
        heading: 'Free Zone Articles: What You Can and Cannot Change',
        paragraphs: [
          'Free Zones often provide standard articles, with limited room for amendments. If you need bespoke terms, such as detailed deadlock provisions, special voting rights or tailored exit mechanics, add them in a private shareholder agreement, as covered in our shareholder agreement guide, rather than expecting the standard articles to accommodate them. Check with your Free Zone about what is flexible so that you can plan accordingly.',
        ],
      },
      {
        heading: 'Reviewing the MOA Regularly',
        list: [
          'Review the MOA whenever you add a shareholder, change activities or move premises',
          'Check that the managers named in the MOA still reflect who actually runs the company',
          'Confirm the MOA is consistent with your shareholder agreement and your wills',
          'Keep a signed, current copy accessible to all owners and your adviser',
        ],
        paragraphsAfter: [
          'A short annual check takes minutes and can prevent a very expensive discovery later.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is the MOA public?',
        answer: 'It forms part of the company\'s registered documents and may be accessible to authorities and banks. Sensitive commercial terms are better placed in a private shareholder agreement.',
      },
      {
        question: 'Do single-shareholder companies need an MOA?',
        answer: 'Yes. Even a company with one owner needs constitutional documents, though they are shorter and simpler.',
      },
      {
        question: 'Can I draft my own MOA?',
        answer: 'You can use an authority\'s template where available, but for multiple shareholders or any unusual arrangement, professional drafting is strongly recommended.',
      },
    ],
    cta: 'Need an MOA that actually protects you? Klay Consultants works with legal partners to draft and review constitutional documents that match your commercial arrangement.',
    disclaimer: 'This article provides general information only and is not legal, tax, immigration or financial advice. UAE licensing, ownership, regulatory and tax requirements vary by emirate, Free Zone, activity and individual circumstances, and can change. Confirm current requirements with the relevant authority or a qualified adviser before acting.',
    relatedLinks: [
      {
        href: '/blog/shareholder-agreement-uae-why-it-matters',
        label: 'Why a shareholder agreement matters in the UAE',
      },
      {
        href: '/blog/transfer-shareholders-uae-company',
        label: 'Adding, removing or transferring shareholders',
      },
      {
        href: '/blog/including-business-shares-in-your-uae-will-klay-consultants',
        label: 'Including business shares in your UAE will',
      },
      {
        href: '/blog/power-of-attorney-in-the-uae-a-guide-for-business-owners-expats-klay-consultants',
        label: 'Power of Attorney in the UAE',
      },
      {
        href: '/blog/restructuring-your-uae-company-when-and-how-to-change-structure',
        label: 'Restructuring your UAE company',
      },
    ],
  },
};

export default article;
