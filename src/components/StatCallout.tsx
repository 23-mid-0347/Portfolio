// src/components/StatCallout.tsx
import CurlArrow from './CurlArrow'

type Props = {
  value: number
  label: string
  towards: 'left' | 'right'
}

export default function StatCallout({ value, label, towards }: Props) {
  const arrowSide = towards === 'right' ? 'self-end' : 'self-start -scale-x-100'

  return (
    <div className="flex flex-col">
      <span className="font-display text-6xl font-bold text-marigold">{value}</span>
      <span className="max-w-[16ch] text-lg text-chalk">{label}</span>
      <CurlArrow className={`mt-3 hidden h-16 w-28 md:block ${arrowSide}`} />
    </div>
  )
}