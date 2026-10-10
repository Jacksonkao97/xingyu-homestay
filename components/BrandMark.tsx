/** A granite peak with a star above it: Kinabalu and 星语. */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <path
        d="M16 3.5l1.2 3.3 3.3 1.2-3.3 1.2L16 12.5l-1.2-3.3L11.5 8l3.3-1.2z"
        className="fill-accent"
      />
      <path
        d="M2 28l7.5-11 2.5 2.5 3-5 2 2.5 2-3 4 4.5L30 28z"
        className="fill-primary"
      />
    </svg>
  );
}
