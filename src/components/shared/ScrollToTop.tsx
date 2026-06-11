import { useEffect, useState } from 'react';
import Icon from '../ui/Icon';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        'fixed bottom-8 right-8 z-50',
        'w-10 h-10 rounded-full',
        'bg-primary text-on-primary',
        'flex items-center justify-center',
        'shadow-md hover:bg-on-primary-fixed-variant',
        'transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      ].join(' ')}
    >
      <Icon name="keyboard_arrow_up" size={20} />
    </button>
  );
}
