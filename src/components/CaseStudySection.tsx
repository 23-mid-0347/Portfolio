import { useEffect, useState } from 'react'
import caseStudy from '../data/case-study.json'
import { profile } from '../data/profile'

const projectImages = [
  {
    src: '/images/promptvault-workflow.webp',
    alt: 'PromptVault project architecture and processing workflow diagram',
    title: 'Inside PromptVault',
    caption: 'The workflow behind query-aware chat-history compression.',
  },
  {
    src: '/images/pooja-presentation.webp',
    alt: 'Pooja presenting her NLP coursework beside a whiteboard',
    title: 'The classroom presentation',
    caption: 'Pooja presenting the NLP project as part of the course work.',
  },
  {
    src: '/images/promptvault-demo-result.webp',
    alt: 'Screenshot of the PromptVault demo comparison and recall result',
    title: 'A demo run',
    caption: 'The saved comparison from one synthetic recall demonstration.',
  },
]

export default function CaseStudySection() {
  const [pdfAvailable, setPdfAvailable] = useState(false)

  useEffect(() => {
    let alive = true
    fetch('/case-study.pdf', { method: 'HEAD' })
      .then((response) => { if (alive) setPdfAvailable(response.ok) })
      .catch(() => { if (alive) setPdfAvailable(false) })
    return () => { alive = false }
  }, [])

  return (
    <section className="section-wrap content-section case-study-section" id="case-study">
      <div className="section-heading-row">
        <div>
          <span className="eyebrow section-eyebrow">RESEARCH & DOCUMENTATION</span>
          <h2 className="section-title">A closer <em>look.</em></h2>
          <p className="section-lede">The project story, its workflow, and moments from the original course portfolio.</p>
        </div>
        <span className="section-aside">ACADEMIC WORK</span>
      </div>

      <article className="case-project-overview">
        <div className="case-study-copy">
          <span className="case-label">FEATURED COURSE PROJECT</span>
          <h3>{caseStudy.title || 'Course case study'}</h3>
          <p>{caseStudy.summary || 'Project details will be added here.'}</p>
          <div className="case-actions">
            {profile.writeup ? <a className="button button-primary" href={profile.writeup} target="_blank" rel="noreferrer">Project write-up ↗</a> : null}
            {profile.ppt ? <a className="button button-quiet" href={profile.ppt} target="_blank" rel="noreferrer">Presentation slides ↗</a> : null}
            {profile.video ? <a className="button button-quiet" href={profile.video} target="_blank" rel="noreferrer">Demo video ↗</a> : null}
            {profile.courseGithub ? <a className="button button-quiet" href={profile.courseGithub} target="_blank" rel="noreferrer">Course GitHub ↗</a> : null}
          </div>
          <span className="small-note">The token comparison shown below is one saved synthetic demonstration, not a general benchmark.</span>
        </div>
      </article>

      <div className="project-gallery" aria-label="Images from the previous NLP portfolio">
        {projectImages.map((item) => (
          <figure className="project-media" key={item.src}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>
              <b>{item.title}</b>
              <span>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {pdfAvailable ? (
        <div className="case-pdf-section">
          <div className="case-pdf-heading">
            <div>
              <span className="eyebrow">FINAL DOCUMENT</span>
              <h3>Read the case study.</h3>
            </div>
            <div className="case-actions">
              <a className="button button-primary" href="/case-study.pdf" download>Download PDF ↓</a>
              <a className="button button-quiet" href="/case-study.pdf" target="_blank" rel="noreferrer">Open full screen ↗</a>
            </div>
          </div>
          <div className="pdf-frame"><iframe src="/case-study.pdf#view=FitH" title="Course case study PDF" /></div>
        </div>
      ) : (
        <p className="case-pdf-note">The original portfolio's project write-up, slides and demo links are available above. A separate final case-study PDF has not been added yet.</p>
      )}
    </section>
  )
}
