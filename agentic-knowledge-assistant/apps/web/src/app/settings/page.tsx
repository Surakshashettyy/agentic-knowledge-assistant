'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SettingsPage() {
  const [openaiKey, setOpenaiKey] = useState('')
  const [claudeKey, setClaudeKey] = useState('')
  const [apiBase, setApiBase] = useState('')

  useEffect(() => {
    const storedOpenai = localStorage.getItem('aka_openai_key') || ''
    const storedClaude = localStorage.getItem('aka_claude_key') || ''
    const storedApi = localStorage.getItem('aka_api_base') || ''
    setOpenaiKey(storedOpenai)
    setClaudeKey(storedClaude)
    setApiBase(storedApi)
  }, [])

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem('aka_openai_key', openaiKey)
    localStorage.setItem('aka_claude_key', claudeKey)
    localStorage.setItem('aka_api_base', apiBase)
    alert('Saved settings locally')
  }

  return (
    <div className="flex h-screen">
      <aside className="w-64 shrink-0 border-r bg-gray-900 text-gray-100">
        <div className="p-4 font-semibold">AKA</div>
        <nav className="flex flex-col gap-1 p-2 text-sm">
          <Link className="rounded px-3 py-2 hover:bg-gray-800" href="/">Chat</Link>
          <Link className="rounded px-3 py-2 hover:bg-gray-800" href="/upload">Upload</Link>
          <Link className="rounded px-3 py-2 hover:bg-gray-800" href="/settings">Settings</Link>
        </nav>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="border-b p-4 font-medium">Settings</header>
        <form onSubmit={handleSave} className="mx-auto w-full max-w-2xl space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">OpenAI API Key</label>
            <input
              type="password"
              value={openaiKey}
              onChange={(e) => setOpenaiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Claude API Key</label>
            <input
              type="password"
              value={claudeKey}
              onChange={(e) => setClaudeKey(e.target.value)}
              placeholder="sk-ant-..."
              className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Backend API Base</label>
            <input
              value={apiBase}
              onChange={(e) => setApiBase(e.target.value)}
              placeholder="http://localhost:8000"
              className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring"
            />
          </div>
          <div className="pt-2">
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Save</button>
          </div>
        </form>
      </main>
    </div>
  )
}

