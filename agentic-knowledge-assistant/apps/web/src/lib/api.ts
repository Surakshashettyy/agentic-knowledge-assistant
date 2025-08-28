export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000'

export async function getHealth(): Promise<{ ok: boolean }> {
  const res = await fetch(`${API_BASE}/health`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`)
  }
  return res.json()
}

export async function ingestPlaceholder() {
  // TODO: implement real call; placeholder for now
  return { status: 'ok', message: 'Ingest placeholder' }
}

export async function queryPlaceholder() {
  // TODO: implement real call; placeholder for now
  return { status: 'ok', message: 'Query placeholder' }
}

