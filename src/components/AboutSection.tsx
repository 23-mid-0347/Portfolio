import { profile } from '../data/profile'

export default function AboutSection() {
  const hasContact = Boolean(profile.email || profile.github || profile.linkedin || profile.resumeUrl)

  return (
    <section className="section-wrap content-section about-section" id="about">
      <div className="about-grid">
        <div className="about-intro">
          <span className="eyebrow section-eyebrow">A LITTLE CONTEXT</span>
          <h2 className="section-title">The learner <em>behind</em> the notes.</h2>
          <figure className="about-archive-photo">
            <img src="/images/pooja-previous-profile.webp" alt="Pooja, in a portrait from her previous portfolio" loading="lazy" />
            <figcaption>ANOTHER PHOTO FROM THE PREVIOUS PORTFOLIO</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <p className="about-lede">{profile.bio}</p>
          <div className="about-facts">
            <div><span>NAME</span><b>{profile.name}</b></div>
            <div><span>INSTITUTION</span><b>{profile.college}</b></div>
            <div><span>COURSE</span><b>{profile.tagline}</b></div>
            <div><span>REGISTER NUMBER</span><b>{profile.registerNumber}</b></div>
            <div><span>FACULTY GUIDE</span><b>{profile.facultyGuide}</b></div>
            {profile.location ? <div><span>BASED IN</span><b>{profile.location}</b></div> : null}
          </div>
          {hasContact ? (
            <div className="contact-links">
              {profile.email ? <a href={'mailto:' + profile.email}>Email <span>↗</span></a> : null}
              {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a> : null}
              {profile.courseGithub ? <a href={profile.courseGithub} target="_blank" rel="noreferrer">NLP coursework <span>↗</span></a> : null}
              {profile.writeup ? <a href={profile.writeup} target="_blank" rel="noreferrer">Project write-up <span>↗</span></a> : null}
              {profile.ppt ? <a href={profile.ppt} target="_blank" rel="noreferrer">Project presentation <span>↗</span></a> : null}
              {profile.video ? <a href={profile.video} target="_blank" rel="noreferrer">Project demo video <span>↗</span></a> : null}
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
