import { useEffect, useState } from 'react'
import caseStudy from '../data/case-study.json'

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
          <p className="section-lede">A dedicated space for the course case study, its context, and the final document.</p>
        </div>
        <span className="section-aside">ACADEMIC WORK</span>
      </div>

      {pdfAvailable ? (
        <div className="case-study-layout">
          <div className="case-study-copy">
            <span className="case-label">FEATURED CASE STUDY</span>
            <h3>{caseStudy.title || 'Course case study'}</h3>
            <p>{caseStudy.summary || 'The case study document is available to read below.'}</p>
            <div className="case-actions">
              <a className="button button-primary" href="/case-study.pdf" download>Download PDF ↓</a>
              <a className="button button-quiet" href="/case-study.pdf" target="_blank" rel="noreferrer">Open full screen ↗</a>
            </div>
            {caseStudy.pageCount ? <span className="small-note">{caseStudy.pageCount} pages · PDF document</span> : null}
          </div>
          <div className="pdf-frame"><iframe src="/case-study.pdf#view=FitH" title="Course case study PDF" /></div>
          <div className="pdf-mobile-card">
            <span className="pdf-mobile-icon">PDF</span>
            <div><b>{caseStudy.title || 'Course case study'}</b><p>Open the document in your browser for the best reading experience on mobile.</p></div>
            <div className="pdf-mobile-actions">
              <a href="/case-study.pdf" target="_blank" rel="noreferrer">Open PDF ↗</a>
              <a href="/case-study.pdf" download>Download ↓</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="case-study-empty">
          <div className="pdf-cover" aria-hidden="true">
            <span className="pdf-mark">PDF</span><span className="pdf-line" /><span className="pdf-line short" /><span className="pdf-stamp">CASE<br />STUDY</span>
          </div>
          <div className="case-study-empty-copy">
            <span className="eyebrow">DOCUMENT SHELF</span>
            <h3>The case study is being prepared.</h3>
            <p>When the final document is ready, save it as public/case-study.pdf. This section will automatically show the PDF viewer, a download link, and a full-screen option.</p>
            <span className="small-note">No case study PDF has been added yet.</span>
          </div>
        </div>
      )}
    </section>
  )
}
