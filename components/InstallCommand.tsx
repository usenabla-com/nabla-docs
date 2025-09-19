"use client"

import React, { useMemo, useState } from "react"

type Platform = {
  key: string
  label: string
  path: string
  outfile: string
}

const versions = ["v1.1.0", "v1.2.0"]
const platforms: Platform[] = [
  { key: "macos-arm64", label: "macOS (Apple Silicon)", path: "nabla-macos-arm64", outfile: "nabla" },
  { key: "macos-amd64", label: "macOS (Intel)", path: "nabla-macos-amd64", outfile: "nabla" },
  { key: "linux-amd64", label: "Linux (x86_64)", path: "nabla-linux-amd64", outfile: "nabla" },
]

export default function InstallCommand() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0].key)
  const [selectedVersion, setSelectedVersion] = useState(versions[0])

  const { url, cmd } = useMemo(() => {
    const p = platforms.find((x) => x.key === selectedPlatform) ?? platforms[0]
    const filename = p.outfile
    const url = `https://cdn.usenabla.com/${p.path}-${selectedVersion}/${filename}`
    const cmd = `curl -fL ${url} -o ${filename}`
    return { url, cmd }
  }, [selectedPlatform, selectedVersion])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd)
    } catch (e) {
      // ignore copy errors in environments without clipboard access
    }
  }

  return (
    <div className="mt-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 p-4">
      <div className="flex flex-wrap items-center gap-2">
        {platforms.map((p) => (
          <button
            key={p.key}
            onClick={() => setSelectedPlatform(p.key)}
            className={
              `rounded-lg px-3 py-1.5 text-sm font-medium border transition-colors ` +
              (selectedPlatform === p.key
                ? 'border-[#FF5C00] text-[#FF5C00] bg-[#FF5C00]/10'
                : 'border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40')
            }
            aria-pressed={selectedPlatform === p.key}
          >
            {p.label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <label htmlFor="version" className="text-sm text-neutral-600 dark:text-neutral-300">Version</label>
          <select
            id="version"
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}
            className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-2 py-1 text-sm"
          >
            {versions.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-neutral-200/60 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800 px-3 py-2">
          <span className="text-xs text-neutral-600 dark:text-neutral-400">Download command</span>
          <button
            onClick={copy}
            className="text-xs rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >Copy</button>
        </div>
        <pre className="m-0 overflow-x-auto p-3 text-sm"><code>{cmd}</code></pre>
      </div>

      <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">
        Tip: If a brand‑new version isn’t live yet, switch back to v1.1.0.
      </p>
    </div>
  )
}

