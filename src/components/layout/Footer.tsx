import SocialLinks from '../shared/SocialLinks';
import type { SocialLink } from '../shared/SocialLinks';

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abanoubwagim' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/abanoubwagim' },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface">
      <div className="max-w-container mx-auto px-gutter py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Name */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-geist text-[15px] text-on-background">
              Abanoub Wagim
            </span>

            <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">
              Java Backend Developer
            </span>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[12px] text-on-surface-variant text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Socials */}
          <SocialLinks links={SOCIAL_LINKS} />
        </div>

      </div>
    </footer>
  );
}