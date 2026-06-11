import { useState, useCallback, useMemo } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import Icon from '../ui/Icon';

interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home',       href: '#home',       sectionId: 'home' },
  { label: 'About',      href: '#about',      sectionId: 'about' },
  { label: 'Projects',   href: '#projects',   sectionId: 'projects' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Skills',     href: '#skills',     sectionId: 'skills' },
  { label: 'Education',  href: '#education',  sectionId: 'education' },
  { label: 'References', href: '#references', sectionId: 'references' },
  { label: 'Contact',    href: '#contact',    sectionId: 'contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.sectionId);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
  const closeMobile  = useCallback(() => setMobileOpen(false), []);

  const linkClass = useCallback(
    (sectionId: string) =>
      sectionId === activeSection
        ? 'font-inter text-body-md text-primary font-semibold border-b-2 border-primary pb-1 transition-colors'
        : 'font-inter text-body-md text-on-surface-variant hover:text-primary transition-colors',
    [activeSection],
  );

  const mobileLinkClass = useCallback(
    (sectionId: string) =>
      sectionId === activeSection
        ? 'font-inter text-body-md text-primary font-semibold'
        : 'font-inter text-body-md text-on-surface-variant',
    [activeSection],
  );

  const memoedLinks = useMemo(() => NAV_LINKS, []);

  return (
    <header
      id="main-nav"
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300"
    >
      <div className="flex justify-between items-center max-w-container mx-auto px-gutter h-16">
        {/* Logo */}
        <a href="#home" className="font-geist text-headline-md tracking-tighter text-primary">
          Abanoub Wagim
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {memoedLinks.map(({ label, href, sectionId }) => (
            <a key={sectionId} href={href} className={linkClass(sectionId)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-on-primary px-4 py-2 rounded font-mono text-label-mono hover:bg-on-primary-fixed-variant transition-colors ml-4"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface-variant p-2"
          onClick={toggleMobile}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-surface border-b border-outline-variant/30"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-gutter py-4 gap-4">
            {memoedLinks.map(({ label, href, sectionId }) => (
              <a
                key={sectionId}
                href={href}
                className={mobileLinkClass(sectionId)}
                onClick={closeMobile}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-on-primary px-4 py-2 rounded font-mono text-label-mono text-center mt-2"
              onClick={closeMobile}
            >
              Hire Me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
