import { profile } from '../data/profile'
import { getStats } from '../lib/stats'
import StatCallout from './StatCallout'
import CurlArrow from './CurlArrow'

export default function Hero() {
  const stats = getStats()

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-topline">
        <span className="eyebrow"><i /> NATURAL LANGUAGE PROCESSING · COURSE PORTFOLIO</span>
        <span className="hero-edition">A RECORD OF LEARNING <b>2026</b></span>
      </div>

      <div className="hero-heading">
        <h1>Hi, I’m {profile.name}!</h1>
        <p>{profile.tagline}</p>
      </div>

      <div className="hero-grid">
        <div className="hero-side hero-side-left">
          <article className="hero-note">
            <span className="hero-note-label">CLASSROOM PARTICIPATION</span>
            <StatCallout value={stats.questions} label="Questions answered in class" />
            <CurlArrow className="note-arrow arrow-right" />
          </article>
          <article className="hero-note">
            <span className="hero-note-label">RECOGNITION</span>
            <StatCallout value={stats.stars} label="Stars earned from faculty" />
            <CurlArrow className="note-arrow arrow-right lower-arrow" />
          </article>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-halo" />
          <div className="portrait-frame">
            <div className="pooja-slices" role="img" aria-label="Portrait of Pooja Suresh S">
              <img src="/pooja-slice-1.webp" alt="" />
              <img src="/pooja-slice-2.webp" alt="" />
              <img src="/pooja-slice-3.webp" alt="" />
              <img src="/pooja-slice-4.webp" alt="" />
            </div>
            <div className="portrait-fallback" aria-hidden="true">
              <span>N.</span>
              <small>PORTRAIT</small>
            </div>
          </div>
          <span className="portrait-caption">NLP / LEARN / GROW</span>
        </div>

        <div className="hero-side hero-side-right">
          <article className="hero-note">
            <span className="hero-note-label">PRACTICAL WORK</span>
            <StatCallout value={stats.notebooks} label="Lab notebooks completed" />
            <CurlArrow className="note-arrow arrow-left" />
          </article>
          <p className="hero-side-copy">Learning the language of people, patterns, and machines — one concept at a time.</p>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>LEARN WITH CURIOSITY</span>
        <span className="hero-bottom-rule" />
        <span>GROW WITH EVIDENCE</span>
        <span className="hero-scroll">SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  )
}
