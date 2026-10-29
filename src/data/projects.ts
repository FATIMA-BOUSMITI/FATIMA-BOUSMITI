export type Project = {
  name: string
  summary: string
  techStack: string[]
  features: string[]
  githubLink: string
  githubLabel?: string
  qaLink?: string
  demoLink?: string
  accent: string
}

export const projects: Project[] = [
  {
    name: 'OCP – Internal Collaborative Platform',
    summary:
      'Internal web-based collaborative platform designed to improve communication, project management, and coordination across OCP departments.',
    techStack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      
      'React',
      'TypeScript',
      'PostgreSQL',
      'Swagger/OpenAPI',
      'Postman',
      'Manual Testing',
      'Selenium',
      'JUnit 5',
      'Mockito',
      'Robot Framework',
      'k6',
      'Performance Testing',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'CI/CD',
    ],
    features: [
      'Role-based user and team management',
      'Project and task workflows with collaborative tracking',
      'Document management with Cloudinary storage',
      'Real-time messaging and notifications with WebSocket/STOMP',
      'Secure REST APIs with Spring Security, JWT, and OTP authentication',
      'Microservice architecture for authentication, users, projects, communication, and documents',
      'Swagger/OpenAPI documentation and Postman API validation',
      'Manual, UI, API, security, and performance testing',
      'Automated checks with Selenium, JUnit 5, Robot Framework, and k6',
      'Docker-based services and a GitHub Actions CI/CD pipeline',
    ],
    githubLink:
      'https://github.com/FATIMA-BOUSMITI/Platform-collaboration-ocp-frontend',
    accent: 'from-indigo-500/20 via-blue-500/15 to-cyan-500/20',
  },

  {
    name: 'eBus Smart Transport System',
    summary:
      'Academic transport application combining a Flutter mobile app, Spring Boot REST APIs, and software-quality practices.',
    techStack: [
      'Flutter',
      'Dart',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Stripe',
      'JWT',
      'Playwright',
      'Robot Framework',
      'Appium',
      'JMeter',
      'QA Automation',
      'Postman',
      'JUnit 5',
      'GitHub Actions',
      'CI/CD',
    ],
    features: [
      'Developed Flutter and Spring Boot transport workflows for bus lines, subscriptions, and lost-property management',
      'Designed JWT-secured REST APIs for authentication and user management',
      'Integrated Stripe payments for transport subscriptions',
      'Worked with PostgreSQL, user profiles, and document-management features',
      'Designed and executed functional tests for user journeys and business rules',
      'Performed manual REST API validation with Postman',
      'Automated API checks with Robot Framework',
      'Created unit and integration tests with JUnit 5',
      'Automated UI and end-to-end scenarios with Playwright',
      'Prepared performance scenarios with JMeter',
      'Integrated automated checks into a GitHub Actions CI/CD workflow',
      'Prepared backend deployment and documented test results and defects',
    ],
    githubLink: 'https://github.com/ikraammel/eBus_frontend',
    githubLabel: 'Frontend',
    qaLink: 'https://github.com/FATIMA-BOUSMITI/eBus-qa-automation',
    demoLink: 'https://ebus-frontend-1an4.onrender.com/',
    accent: 'from-emerald-500/20 via-teal-500/15 to-cyan-500/20',
  },

  {
    name: 'AgoraCampus',
    summary:
      'Academic university platform combining Vue.js and Laravel with UI/UX design, student services, and facial-recognition-assisted attendance.',
    techStack: [
      'Vue 3',
      'Vite',
      'JavaScript',
      'Laravel',
      'PHP',
      'MySQL',
      'REST API',
      'Axios',
      'Figma',
      'Python',
      'Flask',
      'Facial Recognition',
      'Manual Functional Testing',
    ],
    features: [
      'Designed UI/UX mockups with Figma',
      'Developed university workflows with Vue.js 3 and Laravel',
      'Implemented course, timetable, and user-management features',
      'Developed student-to-teacher messaging workflows',
      'Integrated a Python/Flask facial-recognition microservice using a camera for attendance tracking',
      'Performed manual functional testing for courses, messaging, user journeys, and attendance recording',
    ],
    githubLink: 'https://github.com/sofiastron/AgoraCampus',
    accent: 'from-cyan-500/20 via-sky-500/15 to-violet-500/20',
  },

  {
    name: 'SauceDemo QA Automation',
    summary:
      'Automated testing project for the SauceDemo web application, developed with Playwright and TypeScript to validate login flows, product interactions, and cart behavior using a maintainable Page Object Model structure.',
    techStack: [
      'Playwright',
      'TypeScript',
      'Page Object Model',
      'GitHub Actions',
      'CI/CD',
      'QA Automation',
      'Functional Testing',
    ],
    features: [
      'Designed functional scenarios for authentication, catalog, cart, and checkout workflows',
      'Automated UI and end-to-end scenarios with Playwright and TypeScript',
      'Structured reusable test scripts with the Page Object Model',
      'Validated expected behavior with automated assertions',
      'Generated and analyzed execution reports to investigate test failures',
      'Integrated automated checks into a GitHub Actions CI pipeline',
    ],
    githubLink:
      'https://github.com/FATIMA-BOUSMITI/SauceDemo-QA-Automation',
    accent: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
  },

  {
    name: 'REST API Test Automation',
    summary:
      'Personal QA automation project focused on validating REST APIs, authentication, CRUD operations, error handling, and business rules.',
    techStack: [
      'Robot Framework',
      'Python',
      'RequestsLibrary',
      'REST API',
      'JSON',
      'GitHub Actions',
      'CI/CD',
    ],
    features: [
      'Designed REST API scenarios for authentication, CRUD operations, and error cases',
      'Automated API checks with Robot Framework and Python RequestsLibrary',
      'Validated JSON responses, HTTP status codes, and returned API data',
      'Executed positive and negative tests for error handling and business rules',
      'Integrated automated tests into a GitHub Actions CI workflow',
      'Automated test execution on code changes and generated test reports',
    ],
    githubLink:
      'https://github.com/FATIMA-BOUSMITI/QA-Automation-Portfolio',
    githubLabel: 'QA Automation Repository',
    accent: 'from-fuchsia-500/20 via-purple-500/15 to-indigo-500/20',
  },

  {
    name: 'IT Asset Management System',
    summary:
      'Web-based IT asset management application designed to track incidents, assign support tickets, and monitor technical interventions.',
    techStack: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'Tailwind CSS',
      'XAMPP',
    ],
    features: [
      'User and technician authentication',
      'Ticket submission and tracking',
      'Ticket assignment to technicians',
      'Technical dashboard',
      'Incident closure with detailed resolution',
      'Machine and failure status management',
    ],
    githubLink:
      'https://github.com/FATIMA-BOUSMITI/gestion-parc-info-ocp.git',
    demoLink: 'https://example.com/gestion-parc-demo',
    accent: 'from-slate-500/20 via-zinc-500/15 to-cyan-500/20',
  },
]

