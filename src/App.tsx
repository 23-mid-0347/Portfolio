import { useState } from 'react'
import Hero from './components/Hero'
import QuestionsSection from './components/QuestionsSection'
import NotebookSection from './components/NotebookSection'
import CaseStudySection from './components/CaseStudySection'
import AboutSection from './components/AboutSection'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Questions', href: '#questions' },
  { label: 'Notebooks', href: '#notebooks' },
  { label: 'Case study', href: '#case-study' },
  { label: 'About', href: '#about' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Portfolio home">
            <span className="brand-mark">N.</span>
            <span className="brand-name">NLP <span>/ PORTFOLIO</span></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span />
          </button>
          <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
          </nav>
          <a className="nav-profile" href="#about">About the learner <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main>
        <Hero />
        <div className="page-divider" />
        <QuestionsSection />
        <div className="page-divider" />
        <NotebookSection />
        <div className="page-divider" />
        <CaseStudySection />
        <div className="page-divider" />
        <AboutSection />
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">N.</span>
          <span className="brand-name">NLP <span>/ PORTFOLIO</span></span>
        </a>
        <p>A record of learning, one question at a time.</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}
