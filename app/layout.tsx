import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Nabla Docs',
    template: '%s – Nabla Docs'
  },
  description: 'Official documentation site.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Nabla Docs',
    description: 'Official documentation site.',
    url: '/',
    siteName: 'Nabla Docs',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabla Docs',
    description: 'Official documentation site.'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
}

const banner = (
  <Banner storageKey="nabla-banner-announce" className="docusaurus-banner">
    <a href="/docs" aria-label="Announcement">
      <span>🎉 </span>
      <span className="docusaurus-gradient-text">Nabla 1.2.0</span>
      <span> is out! 🥳 Read the docs →</span>
    </a>
  </Banner>
)

const DOCS_REPO = process.env.NEXT_PUBLIC_DOCS_REPO ?? 'https://github.com/jdbohrman/nabla-docs'

const navbar = (
  <Navbar
    projectLink={"mailto:hello@usenabla.com"}
    projectIcon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="20"
        height="20"
        aria-hidden="true"
      >
        <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75zm2.88.75 7.07 5.3c.21.16.49.16.7 0l7.07-5.3H4.38z" />
      </svg>
    }
    logo={
      <span className="inline-flex items-center gap-2">
        <Image src="/logo.png" alt="Nabla" width={40} height={40} />
        <span className="font-semibold">Nabla</span>
      </span>
    }
  >
    <a href="https://www.usenabla.com">Home</a>
  </Navbar>
)

const footer = <Footer>MIT {new Date().getFullYear()} © Nabla.</Footer>

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase={DOCS_REPO}
          darkMode={false}
          nextThemes={{
            attribute: 'class',
            defaultTheme: 'dark',
            forcedTheme: 'dark',
            disableTransitionOnChange: true,
            storageKey: 'theme'
          }}
          navigation
          sidebar={{ defaultMenuCollapseLevel: 2, defaultOpen: true, toggleButton: true }}
          toc={{ float: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
