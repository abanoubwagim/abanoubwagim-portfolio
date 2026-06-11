import type { Project } from '../../data/projects';
import Badge from './Badge';

interface ProjectCardProps {
  project: Project;
}

/* Shared footer row */
function CardFooter({ project }: { project: Project }) {
  return (
    <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
      <p className="font-mono text-[11px] text-on-surface-variant">
        <span className="text-on-background">Focus: </span>
        {project.focus}
      </p>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[12px] text-primary hover:underline transition-colors w-fit"
      >
        View Repository →
      </a>
    </div>
  );
}

/* Featured caard */
function FeaturedCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 h-full">

      {/* Title + summary */}
      <div className="mb-6">
        <div className="inline-flex items-center rounded border border-primary/20 bg-primary/5 px-2.5 py-1 mb-3">
          <span className="font-mono text-[10px] text-primary uppercase tracking-wider">
            Featured Project
          </span>
        </div>
        <h3 className="font-geist text-headline-md text-on-background mb-2">
          {project.title}
        </h3>
        <p className="font-inter text-[14px] text-on-surface-variant leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Horizontal split: highlights | stack + footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left: highlights */}
        <ul className="space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-[13px] text-on-surface-variant leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[5px] shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Right: stack + footer */}
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="tech">{tech}</Badge>
            ))}
          </div>
          <CardFooter project={project} />
        </div>

      </div>
    </article>
  );
}

/* Regular card */
function RegularCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">

      {/* Title + summary */}
      <div className="mb-4">
        <h3 className="font-geist text-headline-md text-on-background mb-2">
          {project.title}
        </h3>
        <p className="font-inter text-[14px] text-on-surface-variant leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Highlights */}
      <ul className="space-y-2 flex-grow mb-4">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 text-[13px] text-on-surface-variant leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[5px] shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="tech">{tech}</Badge>
        ))}
      </div>

      <CardFooter project={project} />
    </article>
  );
}

/* Export */
export default function ProjectCard({ project }: ProjectCardProps) {
  return project.featured
    ? <FeaturedCard project={project} />
    : <RegularCard project={project} />;
}