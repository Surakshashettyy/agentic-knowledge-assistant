'use client'

import Link from 'next/link'
import { useState } from 'react'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export default function ChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm1', role: 'assistant', content: 'Welcome to Agentic Knowledge Assistant 👋' },
    { id: 'm2', role: 'assistant', content: 'Upload PDFs and ask questions with citations.' },
  ])

  function handleSend(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', content: trimmed }
    setMessages((prev) => [...prev, userMsg, { id: crypto.randomUUID(), role: 'assistant', content: 'Placeholder response...' }])
    setInput('')
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
        <header className="border-b p-4 font-medium">Chat</header>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mx-auto max-w-3xl space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={`inline-block rounded-lg px-3 py-2 ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSend} className="border-t p-3">
          <div className="mx-auto flex max-w-3xl gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring"
            />
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Send
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

