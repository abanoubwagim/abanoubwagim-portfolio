import { useFadeIn } from '../../hooks/useFadeIn';
import Container from '../layout/Container';

const CORE_STACK = [
  'Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Lombok','PostgreSQL', 'REST APIs',
  'Redis', 'JUnit', 'Mockito', 'Maven',
];

const PRINCIPLES = [
  'I focus on applying clean architecture principles to keep systems maintainable over time rather than optimizing for short-term delivery.',
  'I design APIs with consistency and clarity to ensure they are easy to integrate and evolve.',
  'I consider performance and scalability during system and database design, especially in backend services built with Spring Boot and relational databases.',
];

export default function About() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="fade-in-up bg-surface-container-low py-16 md:py-[120px] border-y border-outline-variant/30"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Left: Title + intro */}
          <div className="md:col-span-5">
            <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background mb-6">
              About Me
            </h2>
            <div className="w-10 h-px bg-primary mb-6" />
            <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">
              Java Backend Developer focused on building backend systems using Spring Boot. I design and implement REST APIs and backend services with a focus on clean architecture and maintainability.
            </p>
            <p className="font-inter text-body-md text-on-surface-variant leading-relaxed mt-4">
              I have experience building systems involving authentication, modular design, real-time communication, and data-driven applications using PostgreSQL and Redis.
            </p>
          </div>

          {/* Right: Stack + Principles */}
          <div className="md:col-span-7 flex flex-col gap-10">

            {/* Block 1: Core Stack */}
            <div>
              <h3 className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-4">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {CORE_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[13px] text-primary bg-primary/5 border border-primary/15 px-3 py-1.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-outline-variant/30" />

            {/* Block 2: Engineering Principles */}
            <div>
              <h3 className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-4">
                Engineering Principles
              </h3>
              <ul className="space-y-3">
                {PRINCIPLES.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-3 font-inter text-body-md text-on-surface-variant"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}