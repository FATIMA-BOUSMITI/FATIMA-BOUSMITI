export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Functional & Manual Testing',
    items: [
      'Functional Testing',
      'Regression Testing',
      'API Testing',
      'UI Testing',
      'Smoke Testing',
      'Manual Testing',
      'End-to-End Testing',
      'Integration Testing',
      'Mobile Testing',
    ],
  },
  {
    title: 'Testing Techniques & Performance',
    items: [
      'Performance Testing',
      'Stress Testing',
      'Security Testing',
      'Black-Box Testing',
      'White-Box Testing',
      'Static Testing',
      'Dynamic Testing',
    ],
  },
  {
    title: 'Test Planning & Reporting',
    items: [
      'Test Cases',
      'Test Execution & Reporting',
      'Bug Reporting',
      'Defect Tracking',
      'Test Planning',
    ],
  },
  {
    title: 'Automation',
    items: [
      'Selenium',
      'Cypress',
      'Playwright',
      'Robot Framework',
      'JUnit 5',
      'Mockito',
      'TestNG',
      'Appium',
      'Postman',
      'Swagger/OpenAPI',
      'JMeter',
      'k6',
      'GitHub Actions',
    ],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      'React',
      'TypeScript',
      'Vue.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Vite',
      'Flutter',
      'Dart',
      'Kotlin',
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'PHP',
      'Laravel',
      'Node.js',
      'Django',
      'Microservices',
      'REST APIs',
      'WebSocket/STOMP',
      'JWT',
    ],
  },
  {
    title: 'Database & Validation',
    items: ['PostgreSQL', 'MySQL', 'JPA/Hibernate', 'Firebase', 'Supabase', 'SQL'],
  },
  {
    title: 'DevOps & Workflow',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Docker Compose',
      'Maven',
      'GitHub Actions',
      'CI/CD',
      'Jira',
      'Trello',
      'Agile/Scrum',
    ],
  },
]
