import { profile } from '../data/profile'
import { getStats } from '../lib/stats'
import StatCallout from './StatCallout'
import CurlArrow from './CurlArrow'

export default function Hero() {
  const stats = getStats()
  const ownerText = profile.name === 'Your Name' ? 'a student’s' : profile.name + '’s'

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-topline">
        <span className="eyebrow"><i /> Natural language processing · Course portfolio</span>
        <span className="hero-edition">A learning journal <b>2026</b></span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">Curiosity, captured.</p>
          <h1>Every question.<br />Every <em>insight.</em><br />Every milestone.</h1>
          <p className="hero-description">
            A living record of {ownerText} NLP learning journey — from classroom questions and practical explorations to projects and academic work.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#questions">Explore the journey <span>↗</span></a>
            <a className="button button-quiet" href="#notebooks">View practical work</a>
          </div>
          <div className="hero-footnote"><span>LEARN WITH CURIOSITY</span><i /><span>GROW WITH EVIDENCE</span></div>
        </div>

        <div className="hero-art" aria-label="Portfolio highlights">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-halo" />
          <div className="portrait-frame">
            <img src="/hero-cutout.png" alt="Portrait of the portfolio owner" className="hero-portrait" onError={(event) => { event.currentTarget.style.display = 'none' }} />
            <div className="portrait-fallback" aria-hidden="true"><span>N.</span><small>LEARNING IN PROGRESS</small></div>
          </div>
          <div className="floating-note note-top">
            <span className="note-icon">✦</span>
            <span><small>THE LEARNING JOURNEY</small><b>NLP enthusiast</b></span><i />
          </div>
          <div className="floating-note note-bottom">
            <span className="note-icon note-star">✦</span>
            <span><small>THE GOAL</small><b>Learn. Build. Grow.</b></span>
          </div>
          <span className="art-caption art-caption-left">NLP / LEARN</span>
          <span className="art-caption art-caption-right">PORTFOLIO / EXPLORE</span>
        </div>
      </div>

      <div className="hero-metrics">
        <div className="hero-metric-intro"><span className="eyebrow">THE JOURNEY SO FAR</span><p>Small steps. Real progress.</p></div>
        <StatCallout value={stats.questions} label="Questions answered" />
        <StatCallout value={stats.stars} label="Faculty stars earned" />
        <StatCallout value={stats.notebooks} label="Practical notebooks" />
      </div>
      <div className="hero-bottom-line"><span>01 / A PORTFOLIO OF PRACTICE</span><span>SCROLL TO EXPLORE ↓</span></div>
      <CurlArrow className="hero-scribble" />
    </section>
  )
}
