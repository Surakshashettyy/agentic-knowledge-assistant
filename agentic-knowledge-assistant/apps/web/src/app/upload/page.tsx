'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const dropped = Array.from(e.dataTransfer.files)
    setFiles(dropped)
  }, [])

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
        <header className="border-b p-4 font-medium">Upload</header>
        <div className="flex-1 overflow-y-auto p-6">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center"
          >
            <div className="text-lg font-medium">Drag and drop files here</div>
            <div className="text-sm text-gray-500">PDFs, policies, reports</div>
          </div>
          {files.length > 0 && (
            <div className="mx-auto mt-6 max-w-2xl rounded border bg-white">
              <div className="border-b p-3 font-medium">Selected files</div>
              <ul className="divide-y">
                {files.map((f) => (
                  <li key={f.name} className="p-3 text-sm">{f.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

