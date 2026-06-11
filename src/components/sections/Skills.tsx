import type { SkillCategory } from '../../data/skills';
import Badge from '../ui/Badge';

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <div id="skills">
      <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background mb-8">
        Technical Skills
      </h2>

      <div className="space-y-6">
        {categories.map(({ id, name, items }) => (
          <div key={id}>
            <h4 className="font-mono text-label-mono text-on-surface-variant mb-3 uppercase tracking-wider">
              {name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge key={skill} variant="skill">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
