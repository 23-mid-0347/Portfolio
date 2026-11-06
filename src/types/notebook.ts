export type NotebookSummary = {
  slug: string
  title: string
  date: string
  description: string
  jsonUrl: string
  downloadUrl: string
}

export type NotebookOutput = {
  kind: 'text' | 'image'
  data?: string
  src?: string
}

export type NotebookCell = {
  type: 'markdown' | 'code'
  source: string
  executionCount?: number | null
  outputs?: NotebookOutput[]
}

export type NotebookDocument = {
  slug: string
  title: string
  date: string
  cells: NotebookCell[]
  downloadUrl: string
}
