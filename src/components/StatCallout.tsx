type Props = { value: number; label: string }

export default function StatCallout({ value, label }: Props) {
  return (
    <div className="stat-callout">
      <strong>{String(value).padStart(2, '0')}</strong>
      <span>{label}</span>
      <small>TRACKED</small>
    </div>
  )
}
