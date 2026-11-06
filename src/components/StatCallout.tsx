type Props = { value: number; label: string }

export default function StatCallout({ value, label }: Props) {
  return (
    <div className="stat-callout">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}
