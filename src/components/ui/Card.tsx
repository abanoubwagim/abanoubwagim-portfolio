import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  /** Apply hover border-primary transition */
  hoverable?: boolean;
  /** Apply standard card padding */
  padded?: boolean;
  className?: string;
}

export default function Card({ children, hoverable = true, padded = true, className = '' }: CardProps) {
  return (
    <div
      className={[
        'bg-surface-container-lowest border border-outline-variant rounded-lg',
        hoverable ? 'hover:border-primary transition-colors duration-300' : '',
        padded ? 'p-6' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
