import type { ExperienceItem } from '../../data/experience';
import type { TrainingItem } from '../../data/training';
import type { Leadership } from '../../data/leadership';

/* Work & Volunteering */
interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  isCurrent?: boolean;
}

function TimelineGroup({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative border-l border-outline-variant/50 ml-3 pl-7">
      {entries.map((entry, idx) => (
        <div
          key={entry.id}
          className={`relative ${idx < entries.length - 1 ? 'mb-8' : ''}`}
        >
          {/* Dot */}
          <div className={[
            'absolute -left-[33px] top-[5px] w-[8px] h-[8px] rounded-full ring-4 ring-surface-container-low',
            entry.isCurrent ? 'bg-primary' : 'bg-outline-variant',
          ].join(' ')} />

          <span className={`font-mono text-[11px] block mb-1 ${entry.isCurrent ? 'text-primary' : 'text-on-surface-variant'
            }`}>
            {entry.period}
          </span>

          <h4 className="font-geist text-[18px] font-medium text-on-background leading-snug">
            {entry.title}
          </h4>
          <p className="font-inter text-[13px] text-on-surface-variant mb-2">
            {entry.subtitle}
          </p>
          <p className="font-inter text-[13px] leading-relaxed max-w-[65ch] text-on-surface-variant leading-relaxed">
            {entry.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/* Training Cards */
function TrainingCards({ items }: { items: TrainingItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-outline-variant/60 rounded-lg p-4 bg-surface-container-lowest hover:border-primary transition-colors duration-200"
        >
          <span className="font-mono text-[10px] text-on-surface-variant block mb-2">
            {item.period}
          </span>
          <h4 className="font-geist text-[14px] font-medium text-on-background leading-snug mb-1">
            {item.title}
          </h4>
          <p className="font-mono text-[11px] text-primary">
            {item.organization}
          </p>
        </div>
      ))}
    </div>
  );
}

/* Leadership Card */
function LeadershipCard({ item }: { item: Leadership }) {
  return (
    <div className="rounded-2xl border border-outline-variant/30 p-6 bg-surface-container-low">
      <span className="font-mono text-[11px] text-primary">
        {item.period}
      </span>
      <h3 className="font-geist text-2xl mt-2 text-on-background">
        {item.title}
      </h3>
      <p className="font-inter text-[14px] text-on-surface-variant mt-1">
        {item.organization}
      </p>
      <p className="font-inter text-[14px] text-on-surface-variant leading-relaxed mt-4">
        {item.description}
      </p>
    </div>
  );
}

/* Main Export */
interface ExperienceProps {
  experience: ExperienceItem[];
  training: TrainingItem[];
  leadership: Leadership;
}

export default function Experience({ experience, training, leadership }: ExperienceProps) {
  return (
    <div className="space-y-10">

      <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background">
        Experience
      </h2>

      {/* Work timeline */}
      <div>
        <h3 className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-5">
          Work & Volunteering
        </h3>
        <TimelineGroup
          entries={experience.map((e) => ({
            id: e.id,
            period: e.period,
            title: e.title,
            subtitle: e.company,
            description: e.description,
            isCurrent: e.isCurrent,
          }))}
        />
      </div>

      <div className="h-px bg-outline-variant/30" />

      {/* Training cards */}
      <div>
        <h3 className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-5">
          Training & Internships
        </h3>
        <TrainingCards items={training} />
      </div>

      <div className="h-px bg-outline-variant/30" />

      {/* Leadership single card */}
      <div>
        <h3 className="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-5">
          Leadership
        </h3>
        <LeadershipCard item={leadership} />
      </div>

    </div>
  );
}