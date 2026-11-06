import qa from '../data/qa.json'
import { notebooks } from '../data/notebooks'
import type { QAEntry } from '../types/portfolio'

export function getStats() {
  const entries = qa as QAEntry[]
  const topics = new Set(entries.map((entry) => entry.topic.trim()).filter(Boolean))
  return {
    questions: entries.length,
    stars: entries.reduce((total, entry) => total + Math.max(0, Number(entry.stars) || 0), 0),
    topics: topics.size,
    notebooks: notebooks.length,
  }
}
