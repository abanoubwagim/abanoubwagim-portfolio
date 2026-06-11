import { useFadeIn } from '../../hooks/useFadeIn';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Container from '../layout/Container';
import avatarImage from '../../../images/avatar.webp';
import cvPdf from '../../../cv/Abanoub_Wagim_CV.pdf';


const HERO_TECH_TAGS = ['Java', 'Spring Boot', 'PostgreSQL'];

const FOCUS_LINE = 'Clean architecture · RESTful APIs · Backend systems';

export default function Hero() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="fade-in-up pt-8 md:pt-16 pb-16 md:pb-[120px]"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left */}
          <div className="md:col-span-8 space-y-6">
            <h1 className="font-geist text-display-mobile md:text-display-lg text-on-background">
              Java Backend Developer focused on scalable APIs and maintainable systems.
            </h1>

            <p className="font-inter text-body-lg text-on-surface-variant max-w-2xl">
              Building REST APIs and scalable backend applications using Java and Spring Boot with a focus on clean architecture and maintainable systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button as="a" href="#projects" variant="primary">
                View Projects
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-4">
            <div className="bg-surface-container-lowest border border-outline-variant p-7 md:p-8 rounded-lg hover:border-primary transition-colors duration-300">

              <div className="flex flex-col items-center text-center space-y-4">

                {/* Avatar */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface-container-high flex items-center justify-center shrink-0">
                  <img
                    src={avatarImage}
                    alt="Abanoub Wagim"
                    className="w-full h-full object-cover scale-[1.02]"
                  />
                </div>

                {/* Name & role */}
                <div>
                  <h3 className="font-geist text-headline-md text-on-background">
                    Abanoub Wagim
                  </h3>
                  <p className="font-mono text-label-mono text-on-surface-variant mt-1">
                    Java Backend Developer
                  </p>
                </div>

                {/* Focus line */}
                <p className="font-inter text-[13px] text-on-surface-variant/70 leading-relaxed">
                  {FOCUS_LINE}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-outline-variant/30" />

                {/* Tech tags */}
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  {HERO_TECH_TAGS.map((tag) => (
                    <Badge key={tag} variant="tech">{tag}</Badge>
                  ))}
                </div>

                <div className="pt-2">
                  <Button 
                    as="a"
                    href={cvPdf}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </Button>
                </div>


              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}