import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // You can customize Nextra options here if needed.
})

// Export the final Next.js config with Nextra included
export default withNextra({
  // Export a fully static site so Pagefind can index HTML files
  output: 'export',
  // Ensure images work with static export
  images: { unoptimized: true },
})
