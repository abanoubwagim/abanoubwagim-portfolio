import { useFadeIn } from '../../hooks/useFadeIn';
import { education } from '../../data/education';
import Container from '../layout/Container';

export default function Education() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className="fade-in-up py-16 md:py-[120px]"
    >
      <Container>
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background">
            Education
          </h2>
          <div className="w-10 h-px bg-primary/70 mt-4" />
        </div>

        {/* Education */}
        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Degree + Period */}
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h3 className="font-geist text-headline-md text-on-background">
                  {item.degree}
                </h3>

                <span className="font-mono text-label-mono text-primary shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Institution + location */}
              <p className="font-inter text-[14px] text-on-surface-variant">
                {item.institution}
                <span className="mx-1">/</span>
                {item.location}
              </p>

              {/* Grade */}
              {item.grade && (
                <p className="font-mono text-[13px] text-primary mt-2">
                  {item.grade}
                </p>
              )}

              {/* Focus */}
              {item.highlight && (
                <p className="font-inter text-[14px] text-on-surface-variant leading-relaxed mb-4">
                  {item.highlight}
                </p>
              )}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}