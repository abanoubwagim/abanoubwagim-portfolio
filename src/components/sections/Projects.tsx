import { useFadeIn } from '../../hooks/useFadeIn';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import Container from '../layout/Container';

export default function Projects() {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="fade-in-up py-16 md:py-[120px]"
    >
      <Container>

        <div className="mb-10">
          <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background">
            Projects
          </h2>
          <div className="w-10 h-px bg-primary/70 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}