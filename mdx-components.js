import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { Callout, Cards } from 'nextra/components'
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    // Make common Nextra components available in MDX without per-page imports
    Callout,
    Cards,
    ...components
  }
}
