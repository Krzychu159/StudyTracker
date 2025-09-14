type LoaderProps = {
  size?: number; // px
  label?: string; // dla a11y
  className?: string; // dodatkowe style
};

export default function Loader({
  size = 36,
  label = "Loading…",
  className = "",
}: LoaderProps) {
  const border = Math.max(2, Math.round(size / 12));
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span
        className="animate-spin rounded-full border-t-transparent border-solid"
        style={{
          width: size,
          height: size,
          borderWidth: border,
          borderColor: "#e5e7eb", // bg-gray-200
          borderTopColor: "#2563eb", // blue-600
        }}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
