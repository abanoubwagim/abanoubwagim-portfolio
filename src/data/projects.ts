export interface Project {
  id: string;
  title: string;
  summary: string;
  focus: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'unihub',
    title: 'UniHub',
    featured: true,
    summary:
      'Backend system built with Spring Boot, focusing on modular monolith architecture and event-driven communication.',
    focus: 'Modular monolith architecture, auth flows, async communication, and maintainability.',
    highlights: [
      'Designed a modular monolith architecture with strict domain separation between core system modules.',
      'Implemented JWT and OAuth2 authentication with role-based access control for multiple user types.',
      'Built event-driven communication using RabbitMQ with durable queues and dead-letter handling.',
      'Enabled real-time notifications using WebSocket/STOMP for asynchronous user updates.',
      'Used Redis for token management and caching to improve authentication performance.',
      'Managed PostgreSQL schema evolution using Flyway migrations for safe deployments.'
    ],
    techStack: [ 'Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis', 'JWT', 'RabbitMQ', 'WebSocket', 'JUnit', 'Mockito', 'Flyway', 'OAuth2', 'Postman', 'Swagger'],
    githubUrl: 'https://github.com/abanoubwagim/unihub',
  },
  {
    id: 'scout-management',
    title: 'Scout Management System',
    summary:
      'A web-based system for managing scout members, attendance, activities, and daily operations.',
    focus:
      'QR-based attendance workflows, clean admin operations, and structured reporting.',
    highlights: [
      'QR attendance flow with late detection and category-based tracking.',
      'Member, activity, and financial management with validation and export support.',
      'Admin authentication, database backup, and WhatsApp communication workflows.',
    ],
    techStack: ['Java', 'Spring Boot', 'SQLite'],
    githubUrl: 'https://github.com/abanoubwagim/scout-management-system',
  },
  {
    id: 'skillswap',
    title: 'SkillSwap',
    summary:
      'Platform that connects users based on skills they want to learn and share.',
    focus: 'User interaction flows, backend validation, and MVC-based system structure.',
    highlights: [
      'Profile and skill management with exchange request workflows.',
      'Backend validation and structured business logic.',
      'Spring MVC, Hibernate, and MySQL data layer.',
    ],
    techStack: ['Spring MVC', 'Hibernate', 'MySQL'],
    githubUrl: 'https://github.com/abanoubwagim/SkillSwap',
  },
];