import Link from 'next/link'
import Image from 'next/image'

const DOCS_REPO = process.env.NEXT_PUBLIC_DOCS_REPO ?? 'https://github.com/jdbohrman/nabla-docs'

export default function Home() {
  return (
    <main className="font-sans min-h-[calc(100vh-120px)] px-6 py-16 sm:px-10 md:px-12 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Nabla" width={48} height={48} className="rounded" />
              <span className="text-sm font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400">Nabla</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">A safer way to ship</h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">
              Policy-driven confidence for modern engineering teams. Define rules, enforce controls, and automate reviews across your software lifecycle.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                Read the docs
              </Link>
              <a
                href="https://www.usenabla.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_70%_20%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
            <Image
              src="/hero.png"
              alt="Nabla hero"
              width={1024}
              height={1024}
              priority
              className="w-full h-auto rounded-2xl border border-black/10 dark:border-white/10 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl mt-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {["Rules","Controls"].map((k) => (
            <div key={k} className="rounded-xl border border-black/10 dark:border-white/15 p-5">
              <h3 className="font-semibold">{k}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">First-class building blocks for reliable delivery.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
