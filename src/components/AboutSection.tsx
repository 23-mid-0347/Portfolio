import { profile } from '../data/profile'

export default function AboutSection() {
  const hasContact = Boolean(profile.email || profile.github || profile.linkedin || profile.resumeUrl)

  return (
    <section className="section-wrap content-section about-section" id="about">
      <div className="about-grid">
        <div>
          <span className="eyebrow section-eyebrow">A LITTLE CONTEXT</span>
          <h2 className="section-title">The learner <em>behind</em> the notes.</h2>
        </div>
        <div className="about-copy">
          <p className="about-lede">{profile.bio}</p>
          <div className="about-facts">
            <div><span>NAME</span><b>{profile.name}</b></div>
            <div><span>INSTITUTION</span><b>{profile.college || 'To be added'}</b></div>
            {profile.location ? <div><span>BASED IN</span><b>{profile.location}</b></div> : null}
          </div>
          {hasContact ? (
            <div className="contact-links">
              {profile.email ? <a href={'mailto:' + profile.email}>Email <span>↗</span></a> : null}
              {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a> : null}
              {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a> : null}
              {profile.resumeUrl ? <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume <span>↗</span></a> : null}
            </div>
          ) : <p className="small-note">Contact links can be added in src/data/profile.ts when they are ready to be shared.</p>}
        </div>
      </div>
      <div className="about-signoff"><span>KEEP ASKING GOOD QUESTIONS.</span><strong>One page at a time <i>✳</i></strong></div>
    </section>
  )
}
