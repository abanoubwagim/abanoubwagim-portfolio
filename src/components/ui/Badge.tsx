import type { ReactNode } from 'react';

export type BadgeVariant = 'tech' | 'status-open' | 'status-neutral' | 'skill';

const variantClasses: Record<BadgeVariant, string> = {
  tech:
    'bg-primary/5 text-primary border border-primary/10 px-2 py-1 rounded text-xs',
  'status-open':
    'bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full',
  'status-neutral':
    'bg-surface-container-high text-on-surface border border-outline-variant/50 px-3 py-1 rounded-full',
  skill:
    'bg-surface-container-lowest border border-outline-variant px-3 py-1.5 rounded text-sm text-on-background hover:border-primary transition-colors cursor-default',
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export default function Badge({ variant = 'tech', children, className = '' }: BadgeProps) {
  return (
    <span className={`font-mono ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
