export interface SkillCategory {
  id: string;
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Core Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'REST APIs',
      'Hibernate',
      'OAuth2',
      'JWT',
      'Swagger / OpenAPI',
    ]
  },

  {
    id: 'database',
    name: 'Databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'Redis',
      'SQLite',
      'Flyway',
    ],
  },

  {
    id: 'tools',
    name: 'Tools',
    items: [
      'Git',
      'GitHub Actions',
      'Maven',
      'Docker',
    ],
  },

  {
    id: 'messaging',
    name: 'Messaging',
    items: [
      'RabbitMQ',
      'WebSockets',
      'STOMP',
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    items: [
      'JUnit',
      'Mockito',
      'Unit Testing',
    ],
  },

  {
    id: 'additional',
    name: 'Additional',
    items: [
      'Angular',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Flutter',
    ],
  },
];
