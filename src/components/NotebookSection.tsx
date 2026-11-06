import { useState } from 'react'
import { notebooks } from '../data/notebooks'
import type { NotebookDocument, NotebookSummary } from '../types/notebook'

export default function NotebookSection() {
  const [activeNotebook, setActiveNotebook] = useState<NotebookDocument | null>(null)
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null)
  const [error, setError] = useState('')

  async function openNotebook(notebook: NotebookSummary) {
    setError('')
    setLoadingSlug(notebook.slug)
    try {
      const response = await fetch(notebook.jsonUrl)
      if (!response.ok) throw new Error('This notebook could not be opened. Run the notebook converter and try again.')
      const data = (await response.json()) as NotebookDocument
      setActiveNotebook(data)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Unable to open this notebook.')
    } finally {
      setLoadingSlug(null)
    }
  }

  return (
    <section className="section-wrap content-section notebooks-section" id="notebooks">
      <div className="section-heading-row">
        <div>
          <span className="eyebrow section-eyebrow">PRACTICAL WORK</span>
          <h2 className="section-title">Ideas, <em>in practice.</em></h2>
          <p className="section-lede">The lab notebooks behind the learning — original work, readable outputs, and code that can be revisited.</p>
        </div>
        <span className="section-aside">NOTEBOOK ARCHIVE</span>
      </div>

      {notebooks.length > 0 ? (
        <div className="notebook-grid">
          {notebooks.map((notebook, index) => (
            <article className="notebook-card" key={notebook.slug}>
              <div className="notebook-card-top"><span className="notebook-index">{String(index + 1).padStart(2, '0')}</span><span className="notebook-type">JUPYTER NOTEBOOK</span></div>
              <div className="notebook-art" aria-hidden="true"><span>{'{ }'}</span><i /></div>
              <div className="notebook-card-copy">
                <p className="notebook-date">{notebook.date || 'NLP PRACTICAL'}</p>
                <h3>{notebook.title}</h3><p>{notebook.description}</p>
              </div>
              <div className="notebook-actions">
                <button className="text-button" type="button" onClick={() => void openNotebook(notebook)} disabled={loadingSlug === notebook.slug}>{loadingSlug === notebook.slug ? 'Opening…' : 'Read notebook'} <span>↗</span></button>
                <a className="download-link" href={notebook.downloadUrl} download>Original .ipynb ↓</a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="notebook-empty">
          <div className="notebook-empty-art" aria-hidden="true"><span>.ipynb</span><i>↗</i></div>
          <div>
            <span className="eyebrow">THE PRACTICAL ARCHIVE</span>
            <h3>Notebooks will live here.</h3>
            <p>Drop the original Jupyter files into content/notebooks/raw/, then run the converter. Each notebook will get a readable page and an original-file download.</p>
            <span className="small-note">No files have been added yet.</span>
          </div>
        </div>
      )}
      {error && <p className="inline-error" role="alert">{error}</p>}

      {activeNotebook && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveNotebook(null) }}>
          <section className="notebook-modal" role="dialog" aria-modal="true" aria-labelledby="notebook-modal-title">
            <div className="modal-topbar">
              <div><span className="eyebrow">JUPYTER NOTEBOOK</span><h3 id="notebook-modal-title">{activeNotebook.title}</h3></div>
              <button className="modal-close" type="button" onClick={() => setActiveNotebook(null)} aria-label="Close notebook">×</button>
            </div>
            <div className="notebook-cells">
              {activeNotebook.cells.map((cell, index) => (
                <article className={cell.type === 'code' ? 'notebook-cell code-cell' : 'notebook-cell markdown-cell'} key={activeNotebook.slug + '-' + index}>
                  <span className="cell-label">{cell.type === 'code' ? 'IN [' + (cell.executionCount ?? ' ') + ']:' : 'MARKDOWN'}</span>
                  {cell.type === 'code' ? <pre><code>{cell.source}</code></pre> : <p className="cell-markdown">{cell.source}</p>}
                  {cell.outputs?.map((output, outputIndex) => (
                    <div className="cell-output" key={outputIndex}>{output.kind === 'image' && output.src ? <img src={output.src} alt="Notebook output" /> : <pre>{output.data}</pre>}</div>
                  ))}
                </article>
              ))}
            </div>
            <div className="modal-footer">
              <a className="button button-primary" href={activeNotebook.downloadUrl} download>Download original notebook ↓</a>
              <button className="text-button" type="button" onClick={() => setActiveNotebook(null)}>Close reader</button>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}
