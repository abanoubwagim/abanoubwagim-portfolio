export interface SocialLink {
  label: string;
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export default function SocialLinks({ links, className = '' }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className={`flex gap-6 ${className}`}>
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="font-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
