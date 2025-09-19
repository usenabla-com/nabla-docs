function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width="16"
      height="16"
      {...props}
    >
      <path d="M12 3.172 3.172 12H6v7h4v-5h4v5h4v-7h2.828L12 3.172z" />
    </svg>
  )
}

export default {
  index: { display: 'hidden' },
  home: {
    title: (
      <span className="inline-flex items-center gap-1.5">
        <HomeIcon /> Home
      </span>
    ),
    href: '/'
  },
  '-getting-started': { type: 'separator', title: 'Getting started' },
  'getting-access': { title: 'Schedule a 30-day Pilot' },
  'installation': { title: 'Installation' },
  '-architecture': { type: 'separator', title: 'Architecture' },
  'highlevel-overview': { title: 'Overview' },
  'decision-making': { title: 'Decision Making' },
  limits: { title: 'Limits' },
  '-reference': { type: 'separator', title: 'Reference' },
  rules: { title: 'Rules' },
  controls: { title: 'Controls' },
  configuration: { title: 'Configuration' },
  'cli-reference': { title: 'CLI Reference' },
  outputs: { title: 'Outputs' },
  templates: { title: 'Templates' },
  glossary: { title: 'Glossary' }
} as const
