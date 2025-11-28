export const hero = {
  name: 'Suraj Prakash Sahu',
  title: 'Senior Backend & Conversational Systems Engineer',
  location: 'Bhubaneswar, India',
  summary:
    'Backend-focused engineer with 8 years of experience building scalable pricing, payment, and voice-assistant systems across fintech and media domains. Obsessed with marrying physics-inspired thinking with practical engineering.',
  contact: {
    email: 'surajprakashsahu1@gmail.com',
    phone: '+918335910278',
    phoneDisplay: '(+91) 8335910278',
    linkedin: 'https://www.linkedin.com/in/suraj-prakash-sahu/',
    city: 'Bhubaneswar'
  }
};

export const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'Senior Software Engineer',
    client: 'American Express',
    location: 'Bhubaneswar',
    period: 'Sep 2022 — Present',
    highlights: [
      'Led backend development for the Global Merchant Pricing System (GMPS) covering Annual Pricing Review and Merchant Onboarding & Pricing flows.',
      'Hardened REST APIs, automated CI/CD with Jenkins, and containerized services using Docker + Kubernetes for predictable deployments.',
      'Built a regression testing framework and production observability routines to guarantee pricing stability at scale.'
    ],
    tech: ['Spring Boot', 'Java', 'Jenkins', 'Docker', 'Kubernetes', 'PostgreSQL', 'SonarQube', 'JMeter']
  },
  {
    company: 'Tonetag / Naffa Innovation',
    role: 'Senior Software Engineer',
    client: 'Amazon India',
    location: 'Bengaluru',
    period: 'Dec 2020 — Aug 2022',
    highlights: [
      'Crafted multimodal voice experiences across Alexa, Google Actions, Dialog Flow ES, and Siri Shortcuts.',
      'Shipped a bi-directional voice-to-speech IVR payment engine with a 150% boost in accuracy and speed.',
      'Developed IVR chatbots with Rasa and accelerated support workflows with telemetry-rich dashboards.'
    ],
    tech: ['Java', 'Spring Boot', 'Lambda', 'Rasa', 'Node.js', 'Pipelines']
  },
  {
    company: 'Mindfire Solutions',
    role: 'Senior Software Engineer',
    location: 'Bhubaneswar',
    period: 'Aug 2017 — Dec 2020',
    highlights: [
      'Delivered full-stack solutions using Spring Boot 2, Angular, and AWS for media and analytics clients.',
      'Integrated Elasticsearch for an 80% faster global search and tuned uploads with multithreading + pre-signed URLs.',
      'Built Alexa content services with Lambda, enabling audio/video skills, ISP, and session orchestration.'
    ],
    tech: ['Spring Boot', 'Angular', 'AWS', 'Lambda', 'WebSockets', 'Multithreading']
  },
  {
    company: 'ShieldWatch Infotech',
    role: 'Trainee Programmer',
    location: 'Kolkata',
    period: 'Jun 2016 — Jul 2017',
    highlights: [
      'Prototyped indoor navigation with Beacon devices for museums.',
      'Built an HR management app with leave tracking and availability insights.'
    ],
    tech: ['Android', 'Cordova', 'Firebase', 'Google Cloud Messaging']
  }
];

export const projects = [
  {
    name: 'Global Merchant Pricing System (GMPS)',
    blurb:
      'Priced merchants planet-wide with deterministic workflows and automated financial configurations.',
    impact: 'Ensured resilient onboarding and lifecycle management for American Express merchants.',
    stack: ['Spring Boot', 'PostgreSQL', 'Kubernetes', 'Jenkins'],
    link: null
  },
  {
    name: 'VoiceSe',
    blurb:
      'Cashless transactions on feature phones via voice recognition + TTS for low-bandwidth regions.',
    impact: 'Enabled secure, inclusive payments leveraging voice UX.',
    stack: ['Java 8', 'Python', 'Angular', 'PostgreSQL', 'AWS', 'Google Speech'],
    link: 'https://www.tonetag.com/discovers/feature-phone-payments-at-pos-terminals/'
  },
  {
    name: 'Resource Fulfillment System',
    blurb:
      'Workflow orchestration for TV network hubs with tracking, assignments, and role-aware access.',
    impact: 'Provided real-time visibility into production pipelines.',
    stack: ['Java 8', 'Angular', 'PostgreSQL', 'AWS', 'Elasticsearch'],
    link: 'https://fts.graphics'
  },
  {
    name: 'Alexa: IKIGAI Journey',
    blurb:
      'Conversational guide that surfaces content + commerce to help users pursue goals.',
    impact: 'Blended audio, video, blogs, and products through Alexa experiences.',
    stack: ['AWS Lambda', 'Node.js', 'PostgreSQL', 'Spring Boot'],
    link: null
  },
  {
    name: 'Oyeti: Voice-Driven Food Delivery',
    blurb:
      'Hands-free ordering on Alexa, Google Actions, and Siri Shortcuts.',
    impact: 'Extended commerce to natural language channels.',
    stack: ['AWS Lambda', 'Node.js', 'Alexa Skills', 'Google Actions', 'Siri Shortcuts'],
    link: 'https://play.google.com/store/apps/details?id=com.tonetag.mywallet&hl=en_IN'
  },
  {
    name: 'Leave Watch App',
    blurb:
      'Leave planning for managers and employees with approvals and forecasting.',
    impact: 'Streamlined workforce planning in a single app.',
    stack: ['Android', 'Firebase', 'Google Cloud Messaging'],
    link: 'https://play.google.com/store/apps/details?id=com.shieldwatch.leavewatch&hl=en_IN'
  }
];

export const skills = {
  core: ['Java', 'Spring Boot', 'Liquibase', 'Hibernate', 'Logback', 'slf4j'],
  cloud: ['AWS EC2', 'RDS', 'Lambda', 'S3', 'SQS', 'CloudWatch', 'SNS', 'SES', 'Elasticsearch', 'API Gateway', 'Route53'],
  data: ['PostgreSQL', 'MySQL'],
  delivery: ['Git', 'Bitbucket', 'Maven', 'Gradle', 'Docker', 'Jenkins'],
  secondary: ['Angular', 'TypeScript', 'JavaScript', 'Python', 'GenAI', 'Ollama', 'Gemma3', 'Alexa Skills', 'Google Actions', 'Dialog Flow ES', 'Siri Shortcuts'],
  languages: ['English', 'Hindi', 'Odia']
};
