
export type ExperienceItem = {
  period: string
  title: string
  summary?: string
  responsibilities?: string[]
  achievements?: string[]
  softSkills?: string[]
  techStack?: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2026 – Present',
    title: 'OCP – Internal Collaborative Platform | Full-Stack Developer & QA Engineer',
    summary:
      'Development of an internal web-based collaborative platform designed to facilitate communication, project management, and collaboration across OCP departments. The platform is designed to be secure, customizable, user-friendly, and accessible across different devices.',

    responsibilities: [
      'Developed the Authentication & Identity Access Management (IAM) module using JWT and OTP.',
      'Designed and executed functional, API, security, and performance test cases.',
      'Documented and validated REST APIs using Swagger/OpenAPI and Postman.',
      'Automated tests and implemented the CI/CD pipeline.',
      'Contributed to API development, testing, and validation.',
    ],

    achievements: [
      'Delivered secure authentication and identity-management workflows for a microservices-based platform.',
      'Contributed to frontend, backend, API documentation, and test automation activities across the delivery cycle.',
      'Improved release confidence through functional, API, security, and performance validation supported by CI/CD practices.',
    ],

    softSkills: [
      'Team collaboration',
      'Analytical problem-solving',
      'Clear technical communication',
      'Adaptability',
      'Quality mindset',
    ],

    techStack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'OTP',
      'React',
      'TypeScript',
      'PostgreSQL',
      'REST API',
      'Swagger/OpenAPI',
      'Postman',
      'Performance Testing',
      'Security Testing',
      'Maven',
      'Git',
      'GitHub Actions',
      'CI/CD',
    ],
  },

  {
    period: '2025',
    title: 'OCP – Safi | Web Development & IT Intern',
    summary:
      'Developed a web-based IT ticket management application for tracking and resolving IT incidents. The application was designed to centralize requests, improve response times, and provide better monitoring of IT incidents.',

    responsibilities: [
      'Designed the application architecture using UML.',
      'Developed the application using PHP, JavaScript, Bootstrap, MySQL, and XAMPP.',
      'Implemented dashboards and storage capacity alerts.',
      'Managed and tracked internal IT tickets.',
      'Performed unit testing and improved the application’s security, reliability, and usability.',
    ],

    achievements: [
      'Delivered a centralized ticket-management solution to improve the tracking of IT incidents and interventions.',
      'Created dashboards and storage alerts to make operational information easier to monitor.',
      'Applied UML design, development, and testing practices throughout the internship project.',
    ],

    softSkills: [
      'Requirements analysis',
      'Autonomy',
      'Time management',
      'Attention to detail',
      'User-focused communication',
    ],

    techStack: [
      'UML',
      'PHP',
      'JavaScript',
      'Bootstrap',
      'MySQL',
      'XAMPP',
    ],
  },
]

