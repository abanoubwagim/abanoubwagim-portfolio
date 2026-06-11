interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  /** Show the short primary-blue accent bar beneath the title */
  showBar?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  showBar = false,
  className = '',
}: SectionTitleProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const barAlign  = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-12 ${textAlign} ${className}`}>
      <h2 className="font-geist text-display-mobile md:text-display-lg text-on-background mb-4">
        {title}
      </h2>
      {showBar && (
        <div className={`w-16 h-1 bg-primary rounded ${barAlign}`} />
      )}
      {subtitle && (
        <p className="font-inter text-body-md text-on-surface-variant mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
