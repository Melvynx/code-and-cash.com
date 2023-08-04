'use client'

import { useState, useRef } from 'react'

export default function SubscribeForm() {

  const [url, setUrl] = useState<string>('https://cruip.com/podcast')

  const input = useRef<HTMLInputElement>(null)

  const copyUrl = () => {
    navigator.clipboard.writeText(url)
    input.current?.select()
  }

  return (
    <div className="max-w-[360px] mx-auto">
      <div className="text-xs text-slate-500 font-medium uppercase italic mb-8">Subscribe by RSS feed</div>
      <div className="w-full">
        <label className="sr-only" htmlFor="url">
          URL
        </label>
        <div className="relative flex items-center">
          <div
            className="absolute inset-0 opacity-60 bg-gradient-to-r from-slate-700 to-slate-700/50 rounded-full pointer-events-none -z-10"
            aria-hidden="true"
          />
          <input
            id="url"
            type="text"
            className="form-input w-full bg-transparent border-transparent text-slate-300 focus:border-blue-300 focus:ring-0 pr-24 text-sm"
            defaultValue="https://cruip.com/podcast"
            ref={input}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="absolute inset-0 left-auto text-sm pl-2 pr-3 font-medium text-blue-500" onClick={copyUrl}>
            <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-slate-600" aria-hidden="true" />
            <span>Copy URL</span>
          </button>
        </div>
      </div>
    </div>
  )
}
