import type { BlogArticle } from '../types';

const article: BlogArticle = {
  details: {
    imageTitle: 'UAE Tax Strategy Hub Infographic',
    imageCaption: 'A strategic overview of UAE corporate tax, Free Zone conditions and international business planning.',
    imageDescription: 'Infographic illustrating Dubai, UAE corporate tax planning, Free Zone structures and international business strategy.',
    imageTags: [
      'UAE tax strategy',
      'UAE corporate tax',
      'UAE Free Zone tax benefits',
      'UAE holding company',
      'UAE compliance laws',
    ],
    metaKeywords: 'UAE tax strategy, UAE corporate tax, UAE Free Zone tax benefits, tax optimization UAE, UAE holding company benefits, corporate tax UAE 2026, UAE tax residency, UAE compliance laws',
    tags: [
      'UAE Corporate Tax',
      'UAE Tax Strategy',
      'UAE Free Zone Tax Benefits',
      'Business Setup UAE',
      'Tax Optimization UAE',
      'UAE Holding Company',
      'UAE Tax Residency',
      'Corporate Tax UAE 2026',
      'UAE Compliance Laws',
      'International Business Setup',
    ],
    audience: 'Business owners and international investors assessing UAE tax and holding structures',
  },
  body: {
    kind: 'longform',
    introduction: 'The UAE is not simply a low-tax destination; it is a jurisdiction where business owners need to plan around Corporate Tax, VAT, Free Zone conditions, substance, reporting and cross-border obligations. A sound UAE tax strategy starts with the actual business model and ownership structure, not assumptions about zero tax or automatic exemptions. This 2026 overview explains how tax registration and compliance fit into a broader strategy and why any holding-company or international structure should be assessed with qualified tax and legal advisers.',
    sections: [
      {
        heading: 'From “Tax Haven” Thinking to Tax Strategy',
        paragraphs: [
          'The UAE has introduced a federal Corporate Tax regime alongside its existing VAT framework and other compliance obligations. Businesses should understand their registration, filing, payment and record-keeping duties rather than relying on outdated claims that a company will face no tax or reporting.',
          'A tax strategy is a lawful plan that aligns the company’s activities, ownership, locations, income, contracts, people and records with applicable rules. It should consider the UAE requirements and the tax laws of any other countries connected to the business or its owners.',
        ],
        bulletList: [
          'Map where the business is incorporated, managed and operated.',
          'Identify the taxable persons, activities and income streams.',
          'Review ownership, related-party arrangements and cross-border transactions.',
          'Plan for registrations, filing deadlines, accounting records and evidence.',
          'Reassess the structure when business facts or relevant laws change.',
        ],
      },
      {
        heading: 'Corporate Tax and VAT: Two Different Obligations',
        paragraphs: [
          'Corporate Tax generally applies to the taxable income of businesses and other taxable persons under the UAE Corporate Tax Law. VAT is a consumption tax collected on taxable supplies and imports by businesses that are required or eligible to register. Registering for one tax does not automatically register a business for the other.',
          'A business may have to register for Corporate Tax even if it expects no tax to pay, while VAT registration is generally based on taxable supplies and imports and the applicable registration tests. Identify each obligation separately and keep the relevant records and filing dates.',
        ],
      },
      {
        heading: 'UAE Corporate Tax Rates and Taxable Income',
        paragraphs: [
          'Under the current general rate structure, taxable income up to AED 375,000 is subject to a 0% rate, and taxable income above AED 375,000 is generally subject to a 9% rate. The threshold applies to taxable income, not turnover, and the calculation may differ from accounting profit because of tax adjustments and reliefs under the law.',
          'Different rules may apply to qualifying extractive and non-extractive natural resource businesses and other specified cases. Businesses should calculate their position under the applicable legislation and FTA guidance rather than treating the rate table as a tax estimate.',
        ],
        table: {
          headers: [
            'General taxable income band',
            'General Corporate Tax rate',
          ],
          rows: [
            [
              'Up to AED 375,000',
              '0%',
            ],
            [
              'Above AED 375,000',
              '9% on the portion above the threshold, subject to the applicable rules',
            ],
          ],
        },
      },
      {
        heading: 'Corporate Tax Registration and Returns',
        paragraphs: [
          'Taxable persons generally need to register for Corporate Tax with the FTA and obtain a Tax Registration Number. Registration deadlines depend on the person’s legal form and the dates and circumstances specified by the applicable Cabinet and FTA decisions. Do not assume that a small company, a company with no tax payable or a Free Zone entity is automatically exempt from registration.',
          'A taxable person generally files a Corporate Tax return and pays any Corporate Tax due within nine months from the end of its relevant tax period, subject to the applicable rules and any requirements that apply to the particular person. Confirm your tax period, registration deadline and return due date using current FTA guidance and maintain reminders well in advance.',
        ],
        bulletList: [
          'Identify the taxable person and the applicable registration deadline.',
          'Determine the company’s tax period and keep accounting records for that period.',
          'Prepare the return using the required financial and tax information.',
          'File and pay by the applicable due date, retaining submission and payment evidence.',
        ],
      },
      {
        heading: 'Free Zone Corporate Tax: What the 0% Rate Means',
        paragraphs: [
          'A Free Zone company is not automatically exempt from Corporate Tax. A Free Zone Person is generally within the Corporate Tax regime and may be able to apply a 0% rate to qualifying income only if it meets the requirements to be a Qualifying Free Zone Person and satisfies the relevant conditions.',
          'These conditions can include maintaining adequate substance in the UAE, deriving qualifying income, complying with transfer pricing requirements, preparing audited financial statements and meeting other statutory tests. Non-qualifying income may be subject to the standard rate under the applicable rules, and failure to meet conditions can affect the company’s status. Review the current law and FTA guidance against the company’s specific activities and income streams.',
        ],
      },
      {
        heading: 'UAE VAT Registration Thresholds',
        paragraphs: [
          'For many UAE businesses, mandatory VAT registration is required when the value of taxable supplies and imports exceeds AED 375,000 over the relevant preceding 12-month period, or is expected to exceed that amount in the next 30 days, subject to the statutory rules. Voluntary registration may generally be available when taxable supplies, imports or relevant taxable expenses exceed AED 187,500 under the applicable test.',
          'The calculation is based on the VAT rules and should not be confused with corporate turnover or profit for Corporate Tax. Certain supplies, imports and persons may receive special treatment. Confirm how the threshold applies to your business before deciding whether to register.',
        ],
        table: {
          headers: [
            'VAT registration test',
            'General threshold',
          ],
          rows: [
            [
              'Mandatory registration',
              'Taxable supplies and imports exceed AED 375,000 under the applicable test',
            ],
            [
              'Voluntary registration',
              'Taxable supplies, imports or relevant taxable expenses exceed AED 187,500 under the applicable test',
            ],
          ],
        },
      },
      {
        heading: 'VAT Returns, Payments and Records',
        paragraphs: [
          'After VAT registration, a business must charge VAT where required, issue compliant tax invoices, maintain records and submit VAT returns for its assigned tax periods. VAT returns and any tax due are generally submitted and paid within 28 days after the end of the relevant tax period, but confirm the precise deadline shown by the FTA for your filing period.',
          'VAT-registered businesses should reconcile sales, purchases, output VAT and recoverable input VAT before submitting each return. Keep tax invoices, credit notes, import records and supporting accounting documents for the retention period required by law. Correct errors using the applicable FTA procedures.',
        ],
      },
      {
        heading: 'Corporate Tax and VAT Compliance Checklist',
        list: [
          'Map the legal entities, branches, activities and tax registrations in the business group.',
          'Check Corporate Tax registration requirements and deadlines for each taxable person.',
          'Assess VAT registration using the correct taxable supplies, imports and time period.',
          'Maintain reliable accounting records and supporting invoices, contracts and bank records.',
          'Review related-party transactions and transfer pricing obligations where relevant.',
          'Assess whether a Free Zone company meets all conditions for any claimed tax treatment.',
          'Track tax-period end dates, filing deadlines, payments and FTA correspondence.',
          'Review changes in activities, ownership, revenue or law that may affect tax obligations.',
        ],
      },
      {
        heading: 'Common UAE Tax Compliance Mistakes',
        bulletList: [
          'Assuming no registration is needed because the company has low revenue or no tax payable.',
          'Treating VAT and Corporate Tax as one registration or filing obligation.',
          'Assuming all Free Zone income automatically qualifies for a 0% Corporate Tax rate.',
          'Using accounting profit or total turnover as a substitute for the applicable tax calculation.',
          'Missing a registration, return or payment deadline because reminders were not maintained.',
          'Claiming input VAT without the required evidence or eligibility.',
          'Keeping incomplete records or failing to reconcile returns to accounting data.',
          'Relying on old thresholds or guidance without checking current FTA requirements.',
        ],
      },
      {
        heading: 'Getting Ready for UAE Tax Registration',
        paragraphs: [
          'Gather the company’s trade licence and incorporation documents, ownership information, accounting records, tax-period details and a clear description of its activities. For VAT, collect information about taxable supplies, imports, expenses and expected revenue. For Corporate Tax, prepare financial statements and details needed to identify taxable income, adjustments, reliefs and related-party transactions.',
          'The FTA portal and current legislation determine the required application details and submissions. Professional support can help organise records and identify issues to review, but the business remains responsible for complete and accurate filings.',
        ],
      },
      {
        heading: 'Plan for Tax Compliance Throughout the Year',
        paragraphs: [
          'Tax registration is only the first step. Assign responsibility for bookkeeping, invoice controls, reconciliations, return preparation, approvals and payment scheduling. Review the company’s tax position when its activities, revenue, ownership or operations change, and seek qualified advice if the rules or business facts are unclear.',
          'A consistent compliance process helps businesses prepare filings on time, explain their tax positions and respond to FTA requests with appropriate records.',
        ],
      },
      {
        heading: 'Free Zone Tax Benefits Are Conditional',
        paragraphs: [
          'A Free Zone company is not automatically exempt from UAE Corporate Tax. A Qualifying Free Zone Person may be eligible for a 0% rate on qualifying income only when the statutory requirements and conditions are met. The appropriate analysis depends on the entity, activities, income, substance and current rules.',
          'Do not choose a Free Zone solely on a claim of tax-free status. Confirm licensing, operational and substance requirements, qualifying income treatment, transfer-pricing compliance, audit obligations and the consequences of non-qualifying income with qualified advisers.',
        ],
      },
      {
        heading: 'Holding Companies and International Structures',
        paragraphs: [
          'A UAE holding company may be used to own shares in subsidiaries, investments or other assets and to organise group governance. Potential benefits depend on the commercial purpose and the facts; a holding company does not automatically reduce tax, remove reporting obligations, protect assets from claims or make distributions tax-free.',
          'Before establishing or reorganising a group, assess the business rationale, ownership and control, management and substance, financing, transfer pricing, tax residence, beneficial ownership reporting and rules in every relevant jurisdiction. A structure that is appropriate for one group may be unsuitable for another.',
        ],
        bulletList: [
          'Document a genuine commercial purpose and the roles of each entity.',
          'Consider where strategic decisions and management are actually carried out.',
          'Review intercompany services, financing, royalties and other related-party transactions.',
          'Check tax residence, withholding taxes and treaty requirements across jurisdictions.',
          'Account for incorporation, annual administration, accounting and audit costs.',
        ],
      },
      {
        heading: 'Tax Residency and Cross-Border Planning',
        paragraphs: [
          'UAE residence, a UAE company registration or a residence visa does not automatically determine an individual’s or company’s tax residence for every country. Tax residence depends on the applicable domestic law, facts, treaties and relevant evidence.',
          'International founders should consider where they live, where they work, where decisions are made, the location of family and economic ties, and whether reporting or tax obligations continue in their previous country. Obtain advice in each relevant jurisdiction before relying on a tax-residence position.',
        ],
      },
      {
        heading: 'Build Compliance into the Business Structure',
        paragraphs: [
          'A practical structure should be manageable as well as legally and commercially appropriate. Keep licence activities, contracts, invoices, accounting, bank transactions and tax filings consistent with the real operations of the business.',
        ],
        bulletList: [
          'Maintain reliable books, supporting documents and a clear audit trail.',
          'Calendar tax registration, return, payment and licence-renewal deadlines.',
          'Review VAT treatment and Corporate Tax positions separately.',
          'Maintain evidence for ownership, source of funds, business activity and substance.',
          'Monitor changes in ownership, activities, income, operations and applicable law.',
        ],
      },
      {
        heading: 'A Practical UAE Tax Strategy Checklist',
        list: [
          'Define the business model, activities, customers, markets and operating locations.',
          'Compare relevant Mainland and Free Zone options based on licensing, operations and compliance—not headline tax claims.',
          'Identify the relevant Corporate Tax and VAT registration requirements and current filing deadlines.',
          'Assess any Free Zone treatment against all current qualifying conditions.',
          'Review whether a holding company has a real commercial purpose and manageable ongoing obligations.',
          'Map the tax-residence and reporting position of the company, owners and connected entities in each relevant jurisdiction.',
          'Coordinate tax planning with company formation, banking, accounting and governance arrangements.',
          'Have qualified advisers review the plan before implementing cross-border changes or transferring assets.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does every UAE company need to register for Corporate Tax?',
        answer: 'Corporate Tax registration generally applies to taxable persons, subject to the law and specified exemptions. Registration obligations can apply even when no tax is ultimately payable. Confirm the rules and deadlines for the company’s legal form and circumstances.',
      },
      {
        question: 'What is the UAE Corporate Tax rate in 2026?',
        answer: 'Under the general rate structure, taxable income up to AED 375,000 is taxed at 0% and taxable income above that threshold is generally taxed at 9%. Special rules and tax adjustments can apply, so this is not a calculation of a particular company’s liability.',
      },
      {
        question: 'Are Free Zone companies exempt from UAE Corporate Tax?',
        answer: 'No. A Free Zone company is not automatically exempt. A Qualifying Free Zone Person may apply a 0% rate to qualifying income only if it meets the statutory conditions; other income or circumstances may receive different treatment.',
      },
      {
        question: 'When is a UAE business required to register for VAT?',
        answer: 'For many businesses, mandatory registration applies when taxable supplies and imports exceed AED 375,000 under the relevant 12-month or expected-supplies test. A voluntary threshold of AED 187,500 may apply. Confirm what counts toward the threshold under current VAT rules.',
      },
      {
        question: 'When are UAE Corporate Tax returns due?',
        answer: 'A Corporate Tax return and any payment due are generally due within nine months from the end of the relevant tax period, subject to applicable rules. Confirm the company’s actual tax period and deadline.',
      },
      {
        question: 'When are UAE VAT returns due?',
        answer: 'VAT returns and related payment are generally due within 28 days after the end of the relevant tax period. Follow the specific period and deadline assigned by the FTA.',
      },
      {
        question: 'Can VAT registration be voluntary?',
        answer: 'Voluntary registration may generally be available when taxable supplies, imports or relevant taxable expenses exceed AED 187,500 under the statutory test. Confirm eligibility and the application requirements with the FTA.',
      },
      {
        question: 'Can a business file its taxes without an accountant?',
        answer: 'Some businesses may manage their own records and filings, but they remain responsible for accurate registration, calculations, returns and deadlines. The complexity of the business, transactions and available reliefs can make qualified tax advice useful.',
      },
    ],
    cta: 'Need help organising your UAE business setup and tax-registration steps? Klay Consultants can help you understand the administrative requirements and prepare for the next stage. Contact our team to discuss your situation, and confirm tax treatment and filing obligations with the FTA or a qualified tax professional.',
    disclaimer: 'This article is for general informational purposes only and does not constitute tax, legal, accounting or financial advice. Tax laws, Cabinet and FTA decisions, thresholds, deadlines and interpretations can change and may apply differently depending on a taxpayer’s legal form, activities, tax period and circumstances. Confirm current requirements with the Federal Tax Authority and consult a qualified UAE tax professional before relying on any information.',
    relatedLinks: [
      {
        href: '/blog/uae-company-incorporation-process-2026',
        label: 'UAE Company Formation Guide 2026',
      },
      {
        href: '/blog/free-zone-vs-mainland-uae-company-setup-which-is-better',
        label: 'Free Zone vs Mainland UAE',
      },
      {
        href: '/blog/uae-golden-visa-2026-eligibility-cost-application-guide',
        label: 'Golden Visa UAE 2026',
      },
      {
        href: '/blog/open-bank-account-uae-company-why-banking-takes-longer-than-the-license',
        label: 'Open Bank Account UAE Company',
      },
      {
        href: '/blog/inheritance-planning-uae-expats',
        label: 'Inheritance Planning UAE',
      },
    ],
  },
};

export default article;
