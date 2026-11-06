// src/components/CurlArrow.tsx
type Props = { className?: string }

export default function CurlArrow({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-lilac ${className ?? ''}`}
      aria-hidden="true"
    >
      <path d="M8 66 C40 70 78 52 64 28 C54 10 30 22 42 38 C54 52 88 36 108 14" />
      <path d="M94 10 L108 14 L102 28" />
    </svg>
  )
}