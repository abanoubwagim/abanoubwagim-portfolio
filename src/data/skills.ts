export interface SkillCategory {
  id: string;
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Data JPA',
      'REST APIs',
      'Hibernate',
      'Spring Modulith',
      'JWT',
      'OAuth2',
      'DTOs',
      'Swagger / OpenAPI',
      'Lombok',
      'MapStruct',
    ],
  },

  {
    id: 'architecture',
    name: 'Architecture',
    items: [
      'Microservices',
      'Modular Monolith',
      'Event-Driven Architecture',
      'Clean Architecture',
      'Service Discovery',
    ],
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
      'Liquibase',
    ],
  },

  {
    id: 'messaging',
    name: 'Messaging & Real-Time',
    items: [
      'RabbitMQ',
      'ActiveMQ Artemis',
      'WebSocket',
      'STOMP',
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    items: [
      'JUnit 5',
      'Mockito',
      'Unit Testing',
    ],
  },

  {
    id: 'tools',
    name: 'DevOps & Tools',
    items: [
      'Docker',
      'Git',
      'GitHub',
      'Azure DevOps',
      'Maven',
      'Postman',
      'Apidog',
      'IntelliJ IDEA',
    ],
  },

  {
    id: 'additional',
    name: 'Additional',
    items: [
      'Angular',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'Flutter',
    ],
  },
];