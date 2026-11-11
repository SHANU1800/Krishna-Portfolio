export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const targetCustomers = [
  'Small & Medium Businesses',
  'E-commerce Brands',
  'Digital Marketing Agencies',
  'Recruitment Agencies',
  'Accounting Firms',
  'Real Estate Businesses',
  'International Teams',
];

export const heroWorkflowNodes = [
  {
    id: 'form',
    step: '01',
    title: 'Website Form',
    subtitle: 'Trigger · Inbound inquiry',
    badge: 'Webhook',
    iconName: 'FileText',
    accent: 'blue',
    samplePayload: 'New client inquiry captured with name, company & workflow goal.',
  },
  {
    id: 'n8n',
    step: '02',
    title: 'n8n Automation',
    subtitle: 'Parse, qualify & route',
    badge: 'Workflow',
    iconName: 'Workflow',
    accent: 'indigo',
    samplePayload: 'Validates fields, removes duplicates, and formats lead data automatically.',
  },
  {
    id: 'sheets',
    step: '03',
    title: 'Google Sheets',
    subtitle: 'Structured CRM log',
    badge: 'Storage',
    iconName: 'Table',
    accent: 'emerald',
    samplePayload: 'Appends a clean record with status, timestamp, and category tags.',
  },
  {
    id: 'email',
    step: '04',
    title: 'Email Notification',
    subtitle: 'Instant alert & reply',
    badge: 'Action',
    iconName: 'Mail',
    accent: 'violet',
    samplePayload: 'Sends an immediate summary alert and tailored follow-up response.',
  },
];

export const valuePropositions = [
  {
    id: 'save-time',
    title: 'Save Time',
    description:
      'Eliminate repetitive administrative work so you and your team can focus on client delivery, strategy, and growth.',
    iconName: 'Clock',
    highlight: 'Reclaim operational hours',
  },
  {
    id: 'reduce-error',
    title: 'Reduce Human Error',
    description:
      'Standardize recurring processes and improve consistency across data entry, billing, reporting, and notifications.',
    iconName: 'ShieldCheck',
    highlight: 'Consistent execution',
  },
  {
    id: 'scale-operations',
    title: 'Scale Operations',
    description:
      'Handle growing workloads without proportionally increasing manual effort as inquiries, orders, and tasks expand.',
    iconName: 'TrendingUp',
    highlight: 'Built for growing teams',
  },
];

export const servicesData = [
  {
    id: 'lead-generation',
    title: 'Lead Generation Automation',
    inquiryTopic: 'Lead Generation Automation',
    summary:
      'Turn scattered inquiries into an organized pipeline that responds promptly and keeps prospects structured.',
    iconName: 'Users',
    features: [
      'Capture leads',
      'Organize prospect information',
      'Qualify incoming inquiries',
      'Send notifications and follow-ups',
    ],
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting Automation',
    inquiryTopic: 'Finance & Accounting Automation',
    summary:
      'Streamline recurring back-office finance tasks built on real accounting and billing workflows.',
    iconName: 'Calculator',
    features: [
      'Invoice generation',
      'Salary slip generation',
      'Payment reminders',
      'Financial calculations and reporting',
    ],
  },
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Automation',
    inquiryTopic: 'E-commerce Automation',
    summary:
      'Keep order intake, fulfillment coordination, and customer updates synchronized without constant manual checks.',
    iconName: 'ShoppingBag',
    features: [
      'Order processing',
      'Order tracking notifications',
      'Customer communication',
      'Dispatch workflow management',
    ],
  },
  {
    id: 'email-automation',
    title: 'Email Automation',
    inquiryTopic: 'Email Automation',
    summary:
      'Ensure important updates, client follow-ups, and inbox routing happen reliably on schedule.',
    iconName: 'MailCheck',
    features: [
      'Automated email notifications',
      'Follow-up sequences',
      'Lead response workflows',
      'Email organization',
    ],
  },
  {
    id: 'business-reporting',
    title: 'Business Reporting',
    inquiryTopic: 'Business Reporting',
    summary:
      'Consolidate operational spreadsheets into clear summaries without copy-pasting across files every week.',
    iconName: 'BarChart3',
    features: [
      'Automated Excel reports',
      'Sales reporting',
      'KPI summaries',
      'Data consolidation',
    ],
  },
  {
    id: 'ai-assistants',
    title: 'AI-powered Business Assistants',
    inquiryTopic: 'AI-powered Business Assistants',
    summary:
      'Put practical AI workflows to work handling recurring customer questions and internal information lookups.',
    iconName: 'Bot',
    features: [
      'FAQ assistants',
      'Customer inquiry handling',
      'Information retrieval',
      'Internal workflow assistance',
    ],
  },
];

export const projectCategories = [
  'All',
  'n8n Automation',
  'Financial Modeling',
  'Concept Demo',
];

export const projectsData = [
  {
    id: 'lead-gen-automation',
    title: 'Lead Generation Automation',
    category: 'n8n Automation',
    statusLabel: 'n8n Workflow',
    isConceptDemo: false,
    problem: 'Manual collection and organization of potential customer information.',
    solution:
      'An automated workflow to collect, process and organize incoming leads into a clean, actionable tracker with instant notifications.',
    outcome:
      'Replaces manual copy-pasting from forms or messages into spreadsheets and ensures every inquiry receives timely attention.',
    tools: ['n8n', 'Webhooks', 'Google Sheets', 'Gmail'],
    workflowSteps: [
      { label: 'Lead Input', detail: 'Form / Webhook captures prospect contact and inquiry details' },
      { label: 'Clean & Format', detail: 'Standardizes fields and validates required information' },
      { label: 'CRM Sheet', detail: 'Appends organized prospect record into Google Sheets' },
      { label: 'Notify & Reply', detail: 'Triggers team alert and automated acknowledgment' },
    ],
    media: {
      demoVideoUrl: null,
      screenshots: [],
      githubUrl: null,
    },
  },
  {
    id: 'salary-slip-generator',
    title: 'Salary Slip Generator & Mailer',
    category: 'n8n Automation',
    statusLabel: 'n8n Workflow',
    isConceptDemo: false,
    problem: 'Repetitive salary calculations and manual salary slip distribution.',
    solution:
      'Automate salary processing, generate structured salary slips from payroll inputs, and distribute them individually through email.',
    outcome:
      'Eliminates repetitive monthly document formatting and individual email sending for payroll administration.',
    tools: ['n8n', 'Google Sheets', 'Document Generation', 'Gmail'],
    workflowSteps: [
      { label: 'Payroll Sheet', detail: 'Reads employee earnings, deductions, and attendance entries' },
      { label: 'Compute Net Pay', detail: 'Calculates net payable components automatically' },
      { label: 'Generate Slip', detail: 'Populates formatted salary slip document per employee' },
      { label: 'Batch Email', detail: 'Sends each employee their individual slip securely via email' },
    ],
    media: {
      demoVideoUrl: null,
      screenshots: [],
      githubUrl: null,
    },
  },
  {
    id: 'bonus-calculator',
    title: 'Bonus Calculator',
    category: 'n8n Automation',
    statusLabel: 'n8n Workflow',
    isConceptDemo: false,
    problem: 'Manual calculation of employee bonuses based on target achievement.',
    solution:
      'Automate achievement percentage calculations and apply rule-based bonus computation without manual formula lookups.',
    outcome:
      'Standardizes incentive calculations across target tiers and keeps payout calculations consistent.',
    tools: ['n8n', 'Google Sheets', 'Rule Logic'],
    workflowSteps: [
      { label: 'Target Data', detail: 'Fetches assigned targets and actual performance numbers' },
      { label: 'Achievement Ratio', detail: 'Computes target attainment percentage automatically' },
      { label: 'Tier Evaluation', detail: 'Applies conditional bonus slab rules cleanly' },
      { label: 'Payout Sheet', detail: 'Outputs finalized bonus amounts ready for payroll review' },
    ],
    media: {
      demoVideoUrl: null,
      screenshots: [],
      githubUrl: null,
    },
  },
  {
    id: 'loan-emi-calculator',
    title: 'Loan & EMI Calculator',
    category: 'Financial Modeling',
    statusLabel: 'Excel Tool',
    isConceptDemo: false,
    problem: 'Manual financial calculations when evaluating loan schedules and repayment commitments.',
    solution:
      'A structured Microsoft Excel tool for calculating monthly loan EMI, interest-vs-principal breakdown, and repayment schedules.',
    outcome:
      'Provides transparent loan repayment visibility and quick scenario comparison for financing decisions.',
    tools: ['Microsoft Excel', 'Financial Formulas', 'Amortization Modeling'],
    workflowSteps: [
      { label: 'Loan Parameters', detail: 'Inputs principal amount, interest rate, and tenure' },
      { label: 'EMI Computation', detail: 'Calculates fixed monthly installment accurately' },
      { label: 'Amortization Table', detail: 'Splits monthly principal repayment and interest cost' },
      { label: 'Summary View', detail: 'Displays total interest payable and schedule overview' },
    ],
    media: {
      demoVideoUrl: null,
      screenshots: [],
      githubUrl: null,
    },
  },
  {
    id: 'retirement-calculator',
    title: 'Retirement Calculator',
    category: 'Financial Modeling',
    statusLabel: 'Excel Tool',
    isConceptDemo: false,
    problem: 'Difficulty estimating long-term savings growth and future retirement corpus requirements.',
    solution:
      'An Excel-based retirement calculation tool modeling recurring contributions, compounding timelines, and long-term corpus projections.',
    outcome:
      'Helps clarify savings requirements across different contribution levels, timelines, and return assumptions.',
    tools: ['Microsoft Excel', 'Compounding Models', 'Financial Planning'],
    workflowSteps: [
      { label: 'Baseline Inputs', detail: 'Captures current age, target retirement age, and savings' },
      { label: 'Growth Projection', detail: 'Applies expected return and inflation assumptions' },
      { label: 'Corpus Modeling', detail: 'Projects accumulated savings across annual milestones' },
      { label: 'Requirement Check', detail: 'Compares projected corpus against estimated needs' },
    ],
    media: {
      demoVideoUrl: null,
      screenshots: [],
      githubUrl: null,
    },
  },
  {
    id: 'business-operations-demo',
    title: 'Business Operations Automation',
    category: 'Concept Demo',
    statusLabel: 'Concept Demo',
    isConceptDemo: true,
    problem:
      'E-commerce teams often spend hours copying order details between storefronts, dispatch trackers, and customer status emails.',
    solution:
      'A conceptual workflow demonstrating how e-commerce order processing, dispatch tracking, and customer status notifications can be automated end-to-end.',
    outcome:
      'Illustrates how operations grounded in real D2C fulfillment experience can run with fewer manual handoffs and timely customer updates.',
    tools: ['n8n', 'Webhooks', 'REST APIs', 'Google Sheets', 'Gmail'],
    workflowSteps: [
      { label: 'Order Event', detail: 'Storefront webhook triggers when a new order is placed' },
      { label: 'Operations Log', detail: 'Creates fulfillment checklist row for warehouse dispatch' },
      { label: 'Dispatch Sync', detail: 'Updates tracking status once handed to delivery partner' },
      { label: 'Customer Alert', detail: 'Automatically sends order & tracking notification email' },
    ],
    media: {
      demoVideoUrl: null,
      screenshots: [],
      githubUrl: null,
    },
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business and identify repetitive tasks.',
    detail: 'We review how your team currently handles daily workflows and locate bottlenecks.',
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'Map the existing workflow and identify automation opportunities.',
    detail: 'I break down inputs, rules, exceptions, and tool connections before building.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Create automation using n8n, APIs and AI integrations.',
    detail: 'Workflows are constructed cleanly with modular logic and clear data mapping.',
  },
  {
    number: '04',
    title: 'Test & Deploy',
    description: 'Test edge cases, verify outputs and deploy the workflow.',
    detail: 'Every trigger, calculation, and notification is verified before going live.',
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Monitor performance and improve the automation over time.',
    detail: 'Refinements keep your systems aligned as tools, volumes, and needs evolve.',
  },
];

export const aboutStoryParagraphs = [
  "I'm Krishna Agarwal, a Business and Finance graduate with an interest in using technology to solve practical business problems.",
  'My experience in accounting, operations and e-commerce helped me understand how businesses function behind the scenes.',
  'I became interested in AI and automation because I saw how much repetitive work could be simplified through better systems.',
  'Today, I focus on building practical automation solutions that help businesses operate more efficiently.',
];

export const aboutHighlights = [
  'B.Com (Management & Finance), SVKM\'s Mithibai College, University of Mumbai',
  'Accounting and operations experience',
  'E-commerce operations experience',
  'AI and automation using n8n',
  'Microsoft Excel and financial calculations',
  'Leadership and team collaboration',
];

export const experienceTimeline = [
  {
    role: 'Accounting & Operations Intern',
    organization: 'Scholastic (Book Publishing Company)',
    location: 'Mumbai, India',
    period: 'May 2025 – July 2025',
    summary:
      'Managed and recorded financial transactions in enterprise accounting systems, supported senior accountants with monthly ledger reconciliations, and reviewed operating expense variances.',
  },
  {
    role: 'Operations & Billing Intern',
    organization: 'M/S Kamdhenu (FMCG Distributing Agency)',
    location: 'Varanasi, India',
    period: 'November 2024 – January 2025',
    summary:
      'Created POS bills and GST invoices using Tally ERP Prime, verified outward items loaded into delivery vehicles against printed manifests, and coordinated corrections when discrepancies arose.',
  },
  {
    role: 'E-commerce & Brand Management Intern',
    organization: 'Flying Shark (Online Clothing Brand)',
    location: 'Mumbai, India',
    period: 'June 2024 – August 2024',
    summary:
      'Managed end-to-end D2C e-commerce operations including order processing, order tracking, dispatch coordination with warehouse and delivery partners, and cross-functional issue resolution.',
  },
];

export const educationAndAcademic = [
  {
    title: 'Bachelor of Commerce (Management & Finance)',
    institution: "University of Mumbai — SVKM's Mithibai College",
    location: 'Mumbai, India',
    period: 'July 2023 – May 2026',
    detail: 'SGPA / CGPA: 8.0 / 10.0',
  },
  {
    title: 'Class XII (CBSE Board — Commerce) & Class X',
    institution: 'Sunbeam English School, Bhagwanpur',
    location: 'Varanasi, India',
    period: '2020 – 2023',
    detail: 'Class XII: 93.0% · Class X: 88.0%',
  },
  {
    title: 'Academic Finance Case Studies',
    institution: 'Capital Budgeting & JSW Steel Financial Management',
    location: 'Mithibai College Coursework',
    period: '2024 – 2025',
    detail:
      'Applied NPV, IRR, payback period, working capital control, and cost-leadership frameworks to real-world investment and corporate finance cases.',
  },
];

export const leadershipHighlights = [
  {
    title: 'Third Bridge (via Forage)',
    subtitle: 'Client Service Delivery Job Simulation · Aug 2024',
    detail: 'Practiced consultative client scoping, research synthesis, and structured delivery.',
  },
  {
    title: 'Mithibai Reclamo & Mithibai Finanza',
    subtitle: 'Executive Member & Committee Member',
    detail:
      'Coordinated inter-collegiate event vendor logistics, financial seminars, and case discussions.',
  },
  {
    title: 'Department of Lifelong Learning & Extension (DLLE)',
    subtitle: 'Active Member',
    detail: 'Participated in student extension and community outreach initiatives.',
  },
  {
    title: 'National Level Medalist — Boxing',
    subtitle: 'Competitive Athletics',
    detail: 'Recognized for discipline, endurance, and calm execution under pressure.',
  },
];

export const toolsTechnologies = [
  {
    name: 'n8n',
    role: 'Workflow Orchestration',
    description: 'Visual multi-step workflow automation connecting triggers, logic, and apps.',
  },
  {
    name: 'OpenAI',
    role: 'AI Processing & Assistants',
    description: 'Drafting, classification, FAQ handling, and structured text extraction.',
  },
  {
    name: 'Google Sheets',
    role: 'Data & Tracking',
    description: 'Automated lead logs, reporting trackers, and operational databases.',
  },
  {
    name: 'Google Forms',
    role: 'Structured Intake',
    description: 'Clean client and internal submission forms connected directly to workflows.',
  },
  {
    name: 'Gmail',
    role: 'Email Workflows',
    description: 'Automated alerts, client acknowledgments, and batch document delivery.',
  },
  {
    name: 'Microsoft Excel',
    role: 'Financial Modeling',
    description: 'Amortization tables, retirement models, reporting sheets, and business logic.',
  },
  {
    name: 'REST APIs',
    role: 'System Integration',
    description: 'Connecting cloud apps and business tools without manual exports.',
  },
  {
    name: 'Webhooks',
    role: 'Real-Time Triggers',
    description: 'Instant event-driven execution whenever forms or orders arrive.',
  },
  {
    name: 'JavaScript',
    role: 'Custom Logic',
    description: 'Data transformation, validation, and custom formatting inside workflows.',
  },
];

export const pricingPackages = [
  {
    id: 'starter',
    name: 'Starter Automation',
    price: '₹5,000',
    pricePrefix: 'Starting from',
    period: '',
    subtitle: 'For one simple repetitive workflow.',
    featured: false,
    deliverables: [
      'Discovery call to map your single process',
      'End-to-end build for one focused workflow',
      'Testing across standard inputs & notifications',
      'Handover walkthrough and usage guidance',
    ],
    inquiryTopic: 'Starter Automation (Starting from ₹5,000)',
  },
  {
    id: 'business',
    name: 'Business Workflow',
    price: '₹15,000',
    pricePrefix: 'Starting from',
    period: '',
    subtitle: 'For multi-step business automation.',
    featured: true,
    badge: 'Most Versatile',
    deliverables: [
      'Multi-step workflow spanning multiple tools',
      'API, webhook, spreadsheet & email integration',
      'Optional AI assistance for routing or replies',
      'Edge-case testing and operational documentation',
    ],
    inquiryTopic: 'Business Workflow (Starting from ₹15,000)',
  },
  {
    id: 'support',
    name: 'Ongoing Support',
    price: '₹3,000',
    pricePrefix: 'Starting from',
    period: '/month',
    subtitle: 'For monitoring, troubleshooting and improvements.',
    featured: false,
    deliverables: [
      'Regular workflow health monitoring',
      'Prompt troubleshooting when APIs or inputs shift',
      'Incremental refinements as operations evolve',
      'Priority support for workflow adjustments',
    ],
    inquiryTopic: 'Ongoing Support (Starting from ₹3,000/month)',
  },
];

export const automationTopics = [
  'Lead Generation Automation',
  'Finance & Accounting Automation',
  'E-commerce Automation',
  'Email Automation',
  'Business Reporting',
  'AI-powered Business Assistants',
  'Starter Automation (Starting from ₹5,000)',
  'Business Workflow (Starting from ₹15,000)',
  'Ongoing Support (Starting from ₹3,000/month)',
  'Custom Business Workflow / Discovery Call',
];

