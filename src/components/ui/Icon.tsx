interface IconProps {
  /** Material Symbols icon name, e.g. "terminal", "send", "code" */
  name: string;
  /** Icon size in pixels */
  size?: number;
  /** Whether to render the filled variant */
  filled?: boolean;
  className?: string;
}

export default function Icon({ name, size = 24, filled = false, className = '' }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        lineHeight: 1,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
