import { useMemo, useState } from 'react'
import qa from '../data/qa.json'
import { getStats } from '../lib/stats'
import type { QAEntry } from '../types/portfolio'

const questions = qa as QAEntry[]

function getWeekLabel(date: Date) {
  return date.toLocaleDateString('en', { month: 'short', day: 'numeric' })
}

export default function QuestionsSection() {
  const [showQuestions, setShowQuestions] = useState(false)
  const stats = getStats()

  const topicCounts = useMemo(() => {
    const counts = new Map<string, number>()
    questions.forEach((item) => counts.set(item.topic, (counts.get(item.topic) ?? 0) + 1))
    return [...counts.entries()].sort((a, b) => b[1] - a[1])
  }, [])

  const weeklyCounts = useMemo(() => {
    const now = new Date()
    const start = new Date(now)
    start.setDate(now.getDate() - 34)
    start.setHours(0, 0, 0, 0)
    const buckets = Array.from({ length: 6 }, (_, index) => {
      const date = new Date(start)
      date.setDate(start.getDate() + index * 7)
      return { label: getWeekLabel(date), count: 0 }
    })
    questions.forEach((item) => {
      const date = new Date(item.date)
      if (Number.isNaN(date.getTime()) || date < start || date > now) return
      const index = Math.min(5, Math.floor((date.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000)))
      buckets[index].count += 1
    })
    return buckets
  }, [])

  const maxTopic = Math.max(1, ...topicCounts.map(([, count]) => count))
  const maxWeek = Math.max(1, ...weeklyCounts.map((item) => item.count))

  return (
    <section className="section-wrap content-section questions-section" id="questions">
      <div className="section-heading-row">
        <div>
          <span className="eyebrow section-eyebrow">CLASSROOM PARTICIPATION</span>
          <h2 className="section-title">Questions <em>&</em> answers.</h2>
          <p className="section-lede">A place for the questions asked, the concepts clarified, and the knowledge that stayed.</p>
        </div>
        <span className="section-aside">{String(stats.questions).padStart(2, '0')} QUESTIONS LOGGED</span>
      </div>

      <div className="metric-grid metric-grid-three">
        <article className="metric-panel"><span className="metric-symbol">✳</span><strong>{stats.questions}</strong><span>Questions recorded</span></article>
        <article className="metric-panel"><span className="metric-symbol">✦</span><strong>{stats.stars}</strong><span>Faculty stars earned</span></article>
        <article className="metric-panel"><span className="metric-symbol">⌘</span><strong>{stats.topics}</strong><span>Topics explored</span></article>
      </div>

      <div className="insight-grid">
        <article className="paper-panel topic-panel">
          <div className="panel-heading">
            <div><span className="eyebrow">WHAT I’VE EXPLORED</span><h3>Topics in focus.</h3></div>
            <span className="panel-count">{topicCounts.length} TOPICS</span>
          </div>
          {topicCounts.length > 0 ? (
            <div className="topic-list">
              {topicCounts.map(([topic, count]) => (
                <div className="topic-row" key={topic}>
                  <span>{topic}</span>
                  <div className="topic-track"><i style={{ width: (count / maxTopic * 100) + '%' }} /></div>
                  <b>{count}</b>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-inline"><span className="empty-spark">✳</span><p>Topic insights will appear here as classroom questions are added to the portfolio data.</p></div>
          )}
        </article>

        <article className="paper-panel activity-panel">
          <div className="panel-heading">
            <div><span className="eyebrow">CONSISTENCY OVER TIME</span><h3>Learning rhythm.</h3></div>
            <span className="panel-count">LAST 6 WEEKS</span>
          </div>
          <div className="weekly-chart" role="img" aria-label="Weekly classroom question activity chart">
            {weeklyCounts.map((item) => (
              <div className="week-column" key={item.label}>
                <span className="week-value">{item.count || ''}</span>
                <div className="week-track"><i style={{ height: Math.max(4, item.count / maxWeek * 100) + '%' }} /></div>
                <span className="week-label">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="chart-note">A small visual of steady learning, updated from the question log.</p>
        </article>
      </div>

      <div className="question-log">
        <div className="question-log-intro">
          <div><span className="eyebrow">THE CLASSROOM LOG</span><h3>Questions worth keeping.</h3></div>
          <button className="text-button" type="button" onClick={() => setShowQuestions((show) => !show)} aria-expanded={showQuestions}>
            {showQuestions ? 'Hide question log' : 'See the questions'} <span>{showQuestions ? '−' : '＋'}</span>
          </button>
        </div>
        {showQuestions && (
          <div className="question-list">
            {questions.length > 0 ? questions.map((item, index) => (
              <article className="question-item" key={item.date + '-' + index}>
                <span className="question-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="question-copy">
                  <div className="question-meta"><span>{item.topic}</span>{item.date ? <time dateTime={item.date}>{item.date}</time> : <span>Class question</span>}</div>
                  <h4>{item.question}</h4><p>{item.answer}</p>
                </div>
                <span className="question-stars">{'★'.repeat(Math.max(0, Math.min(5, item.stars)))}</span>
              </article>
            )) : (
              <div className="empty-state compact-empty">
                <span className="empty-spark">✳</span>
                <h4>The question log is ready.</h4>
                <p>Real classroom questions will appear here once they are added to src/data/qa.json. There is no public submission form.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
