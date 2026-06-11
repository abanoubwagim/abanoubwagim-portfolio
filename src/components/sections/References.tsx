import { useFadeIn } from '../../hooks/useFadeIn';
import { references } from '../../data/references';
import Container from '../layout/Container';
import Icon from '../ui/Icon';

export default function References() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="references"
      ref={ref}
      className="fade-in-up bg-surface-container-low py-16 md:py-[120px] border-y border-outline-variant/30"
    >
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background mb-4">
            References
          </h2>
          <p className="font-inter text-body-md text-on-surface-variant">
            What colleagues and managers say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((r) => (
            <div
              key={r.id}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 hover:border-primary transition-colors duration-300 relative"
            >
              {/* Quote icon */}
              <Icon
                name="format_quote"
                size={32}
                filled
                className="text-primary/10 absolute top-4 right-4"
              />

              {/* Quote */}
              <p className="font-inter text-body-md text-on-surface-variant mb-6 relative z-10">
                "{r.quote}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="font-mono text-label-mono text-on-primary font-bold text-xs">
                    {r.initials}
                  </span>
                </div>
                <div>
                  <p className="font-geist font-medium text-on-background text-[15px]">{r.name}</p>
                  <p className="font-mono text-label-mono text-on-surface-variant">
                    {r.role} · {r.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
