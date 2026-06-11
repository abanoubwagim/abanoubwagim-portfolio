import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-on-primary-fixed-variant',
  secondary:
    'bg-transparent text-primary border border-primary hover:bg-primary/5',
  ghost:
    'bg-transparent text-primary hover:bg-surface-container',
};

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-mono text-label-mono transition-colors duration-200 cursor-pointer';

/* Anchor variant */
interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a';
  variant?: ButtonVariant;
  children: ReactNode;
}

/* Native button variant */
interface NativeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
  variant?: ButtonVariant;
  children: ReactNode;
}

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '' } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (props.as === 'a') {
    const { as: _a, variant: _v, className: _c, children: _ch, ...anchorRest } =
      props as AnchorButtonProps;
    void _a; void _v; void _c; void _ch;
    return <a className={classes} {...anchorRest}>{children}</a>;
  }

  const { as: _a, variant: _v, className: _c, children: _ch, ...buttonRest } =
    props as NativeButtonProps;
  void _a; void _v; void _c; void _ch;
  return <button className={classes} {...buttonRest}>{children}</button>;
}
