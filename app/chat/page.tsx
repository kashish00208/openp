'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Copy, Check } from 'lucide-react'

type Message = {
  role: 'user' | 'ai'
  content: string
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'
  }, [input])

  const send = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMsg: Message = { role: 'user', content: input }
    const aiIndex = messages.length + 1

    setMessages(prev => [...prev, userMsg, { role: 'ai', content: '' }])
    setInput('')
    setLoading(true)

    const response =
      "hiii"

    let output = ''

    for (let i = 0; i <= response.length; i += 5) {
      await new Promise(r => setTimeout(r, 15))
      output = response.slice(0, i)

      setMessages(prev => {
        const updated = [...prev]
        updated[aiIndex] = { role: 'ai', content: output }
        return updated
      })
    }

    setLoading(false)
  }

  const copy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 1000)
  }

  return (
    <div className="h-screen flex flex-col bg-neutral-950 text-neutral-100">

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto w-full">

          {messages.length === 0 && (
            <div className="h-[70vh] flex items-center justify-center text-neutral-600 text-sm">
              Start a conversation…
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap break-words border ${
                  msg.role === 'user'
                    ? 'bg-neutral-800 border-neutral-700'
                    : 'bg-neutral-900 border-neutral-800'
                }`}
              >
                <pre className="whitespace-pre-wrap font-sans">
                  {msg.content}
                </pre>

                <button
                  onClick={() => copy(msg.content, i)}
                  className="mt-2 flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-300"
                >
                  {copiedIndex === i ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  Copy
                </button>
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-neutral-600 text-sm mb-4">
              thinking…
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={send}
        className="border-t border-neutral-800 bg-neutral-950 p-3"
      >
        <div className="max-w-3xl mx-auto flex items-end gap-2">

          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Message..."
            rows={1}
            className="flex-1 resize-none bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm outline-none focus:border-neutral-600 max-h-32 overflow-hidden"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 transition"
          >
            <Send className="w-4 h-4" />
          </button>

        </div>
      </form>

    </div>
  )
}