import type { BlogArticle } from '../types';

const article: BlogArticle = {
  details: {
    imageTitle: 'Directors, Managers and Signatories in a UAE Company',
    imageCaption: 'Shareholders, managers, directors and authorised signatories have different roles and powers in a UAE company.',
    imageDescription: 'A guide to the roles of shareholders, directors, managers and authorised signatories in a UAE company, including residency, duties and appointments.',
    imageTags: [
      'Director of a UAE Company',
      'LLC Manager Requirements',
      'Resident Director UAE',
      'Authorised Signatory UAE',
    ],
    metaKeywords: 'director of a UAE company, LLC manager requirements, resident director UAE, authorised signatory',
    tags: [
      'UAE Company Directors',
      'LLC Manager Requirements',
      'Resident Director UAE',
      'Authorised Signatory',
      'Corporate Governance UAE',
      'UAE Company Formation',
    ],
    audience: 'UK, EU, US and GCC founders appointing managers, directors and signatories for a UAE company',
  },
  body: {
    kind: 'longform',
    introduction: 'Incorporation forms are full of titles: shareholder, director, manager, general manager, authorised signatory. Founders often assume they all mean the same thing. They do not, and mixing them up can cause banking delays, signing authority problems and personal liability you did not expect. This guide explains each role and how to set them up sensibly.',
    sections: [
      {
        heading: 'Shareholder vs Director vs Manager',
        bulletList: [
          'Shareholder. An owner of the company. Owns shares and benefits from profits',
          'Director. A member of a board of directors, used mainly in structures with a board, including many Free Zone companies and joint stock companies',
          'Manager. The person authorised to manage an LLC and act on its behalf, as defined in the MOA',
          'Authorised signatory. A person authorised to sign contracts, open bank accounts or sign cheques on the company\'s behalf',
        ],
        paragraphsAfter: [
          'One person can hold all of these roles, which is typical for a solo founder, or the roles can be split among different people.',
        ],
      },
      {
        heading: 'Do Shareholders Have to Be Managers?',
        paragraphs: [
          'No. Owners can appoint someone else to manage the company, such as a trusted professional. This can be useful if you are an investor who does not want day-to-day involvement, or if the authority requires a person with particular qualifications or residence. If you appoint someone else, define their powers carefully in the MOA, as covered in our MOA guide.',
        ],
      },
      {
        heading: 'Residency Requirements',
        paragraphs: [
          'Requirements differ by authority. Some Free Zones allow non-resident directors or managers, while some Mainland and regulated structures expect at least one manager or signatory who is resident in the UAE. If you plan to run the company remotely, as covered in our remote setup guide, check this before choosing a structure. Banks also often prefer a signatory who can attend the UAE in person.',
        ],
      },
      {
        heading: 'Corporate Directors and Managers',
        paragraphs: [
          'Some authorities allow a company, rather than an individual, to act as director or manager through a representative. Others require natural persons. This matters for founders using holding structures, as covered in our holding company guide, so confirm what your authority accepts.',
        ],
      },
      {
        heading: 'Powers and Limits',
        paragraphs: [
          'A manager\'s powers come from the MOA and, where relevant, shareholder resolutions. Typical provisions include the authority to sign contracts up to a certain value, open bank accounts, hire staff and represent the company before authorities. Reserved matters, such as selling major assets, borrowing above a limit or amending the MOA, usually require shareholder approval. Clear limits protect owners and give banks confidence.',
        ],
      },
      {
        heading: 'Duties and Personal Liability',
        paragraphs: [
          'Managers and directors owe duties to the company and may be liable if they act outside their authority, breach the law or cause loss through negligence or misconduct. In some circumstances, including serious mismanagement, personal liability can arise. This is one reason to choose managers carefully, document decisions and ensure the company keeps proper accounts, as covered in our bookkeeping guide.',
        ],
      },
      {
        heading: 'Authorised Signatories and Banking',
        paragraphs: [
          'The bank will ask for a board or shareholder resolution naming the people who may operate the account, along with specimen signatures and identification. Choose signatories who are reliable and available, and consider whether you want dual signing for higher-value payments. A power of attorney can authorise someone to act in specific matters, as covered in our Power of Attorney guide, but banks have their own rules on what they accept.',
        ],
      },
      {
        heading: 'Appointing and Changing Roles',
        list: [
          'Decide who needs which role and what authority they require',
          'Record appointments in the MOA or by shareholder resolution',
          'Register the appointment with the licensing authority where required',
          'Update bank mandates and signatory records',
          'Update contracts, licences and visas that name the manager',
        ],
        paragraphsAfter: [
          'When a manager leaves, a formal removal and updated registration are needed, and the bank should be informed immediately to stop their access.',
        ],
      },
      {
        heading: 'Common Mistakes',
        bulletList: [
          'Naming a manager without defining or limiting their powers',
          'Appointing someone who cannot meet residency or availability needs',
          'Forgetting to update the bank after a manager changes',
          'Assuming a shareholder automatically has authority to sign for the company',
          'Giving broad signing power to someone you do not fully trust',
        ],
      },
      {
        heading: 'A Worked Example: Who Can Sign What?',
        paragraphs: [
          'An American founder sets up a Free Zone company and appoints himself as the manager. He also wants his UAE-based operations lead to be able to sign supplier contracts and approve payments. If the company documents and bank mandate name only the founder, the operations lead cannot sign anything and every payment waits for the founder\'s approval across time zones. A better structure would appoint the operations lead as an authorised signatory with a clear spending limit, record this in a resolution and give the bank an updated mandate. The founder keeps control through limits and reporting, and the business keeps moving.',
        ],
      },
      {
        heading: 'Segregation of Duties and Internal Controls',
        paragraphs: [
          'As the company grows, avoid concentrating every power in one person. Separate the people who approve payments from those who record them, require two signatures above a certain amount and review bank statements regularly. These controls protect the business from error and fraud, and they also reassure banks, auditors and investors. Even a two-person company can adopt simple rules, such as written approval for any payment above a threshold.',
        ],
      },
      {
        heading: 'Nominee Directors and Managers: A Word of Caution',
        paragraphs: [
          'Some providers offer nominee managers or directors who appear on paper but do not actually run the company. These arrangements can create legal and compliance risk, because the named person may carry duties and liabilities they do not control, and because beneficial ownership rules look through nominees, as covered in our UBO guide. If you need a local manager for practical reasons, appoint a real person with a clear written mandate, and make sure the arrangement is transparent and properly documented.',
        ],
      },
      {
        heading: 'Visas, Roles and Titles',
        paragraphs: [
          'The role you hold can influence your visa. Owners and partners may qualify for an investor or partner visa, while a manager who is not an owner may need an employment visa, as covered in our visa guides. The job title on your visa, your licence and your bank records should be consistent. If the title in one place says "General Manager" and another says "Director", you may be asked to explain the difference.',
        ],
      },
      {
        heading: 'What Happens When a Manager Is Unavailable',
        bulletList: [
          'Include a deputy or alternate signatory in your bank mandate for emergencies',
          'Consider a limited power of attorney for specific tasks, as covered in our Power of Attorney guide',
          'Plan for incapacity or death with wills and shareholder arrangements, as covered in our wills and business succession guides',
          'Keep a short operations manual so that a deputy can step in without confusion',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I be the only shareholder, director and signatory?',
        answer: 'Yes, in most structures. This is common for single-founder companies.',
      },
      {
        question: 'Do I need a UAE resident to act as manager?',
        answer: 'It depends on the jurisdiction and activity. Some structures allow non-resident managers, while others need a resident, so confirm before you apply.',
      },
      {
        question: 'Can a manager be removed without a court case?',
        answer: 'Generally yes, through the shareholder resolution process and the procedures in your MOA, followed by formal registration of the change.',
      },
    ],
    cta: 'Setting up roles and signing authority? Klay Consultants helps you structure management and banking mandates so your company runs smoothly, even when you are abroad.',
    disclaimer: 'This article provides general information only and is not legal, tax, immigration or financial advice. UAE licensing, ownership, regulatory and tax requirements vary by emirate, Free Zone, activity and individual circumstances, and can change. Confirm current requirements with the relevant authority or a qualified adviser before acting.',
    relatedLinks: [
      {
        href: '/blog/memorandum-of-association-uae',
        label: 'Memorandum of Association in the UAE',
      },
      {
        href: '/blog/ubo-registration-uae',
        label: 'UBO registration in the UAE',
      },
      {
        href: '/blog/power-of-attorney-in-the-uae-a-guide-for-business-owners-expats-klay-consultants',
        label: 'Power of Attorney in the UAE',
      },
      {
        href: '/blog/set-up-uae-company-remotely',
        label: 'Setting up a UAE company remotely',
      },
      {
        href: '/blog/uae-investor-visa-vs-partner-visa-guide',
        label: 'UAE investor visa vs partner visa',
      },
    ],
  },
};

export default article;
