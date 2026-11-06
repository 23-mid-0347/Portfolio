// src/components/Hero.tsx
import StatCallout from './StatCallout'
import { profile } from '../data/profile'
import { getStats } from '../lib/stats'

export default function Hero() {
  const stats = getStats()

  return (
    <header className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-display text-5xl font-bold text-marigold md:text-7xl">
        Hi, I’m {profile.name}!
      </h1>
      <p className="mt-3 text-lg text-sandstone">{profile.tagline}</p>

      <div className="mt-14 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col gap-16 md:gap-28">
          <StatCallout value={stats.questions} label="questions answered in class" towards="right" />
          <StatCallout value={stats.stars} label="stars from faculty" towards="right" />
        </div>

        <img
          src="/hero-placeholder.svg"
          alt="Portrait placeholder"
          className="cutout mx-auto w-64 md:w-80"
        />

        <div>
          <StatCallout value={stats.notebooks} label="lab notebooks completed" towards="left" />
        </div>
      </div>
    </header>
  )
}