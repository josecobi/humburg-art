# Project Context

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations

## Common Commands
- `fix ts errors` - Automatically run tsc --noEmit, identify all errors, and fix them
- `create component [Name]` - Generate a TypeScript component in /components
- `optimize images` - Check /public for images >500KB and suggest compression

## Coding Standards
- TypeScript strict mode enabled
- Functional components with TypeScript interfaces
- Named exports for utility functions
- Proper className prop support in components
- Follow Next.js App Router conventions

## File Structure Preferences
- Components in `/components` directory
- Global styles in `/app/globals.css`
- Page components in `/app` directory
- Assets in `/public` directory

## Animation Defaults
When adding animations with Framer Motion:
- Default to: initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }}, transition={{ duration: 0.6 }}
- Always use useInView hook for scroll triggers

## Quality Standards
- Lighthouse 100s score
- Perfect mobile responsiveness
- Optimized image loading
- Proper lazy loading
- Core Web Vitals optimization

## Custom Hooks Configuration

### 1. TypeScript Error Fixer
When I say "fix ts errors", automatically:
- Run `tsc --noEmit`
- Identify all errors
- Fix them prioritizing:
  - Missing imports
  - Type mismatches
  - Undefined properties
- Explain fixes briefly

### 2. Component Generator
When I say "create component [Name]", generate a TypeScript component in `/components` with:
- Proper TypeScript interface for props
- Default export
- Basic structure with className prop support

### 3. Image Optimizer
When I say "optimize images", check `/public` for images >500KB:
- Suggest compression or conversion to WebP
- Generate next/image config if needed

### 4. Lighthouse Check Reminder
Before suggesting "done", remind to check:
- Image optimization
- Lazy loading
- Core Web Vitals

### 5. Framer Motion Helper
When adding animations:
- Default to: initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }}, transition={{ duration: 0.6 }}
- Always use useInView hook for scroll triggers


### 6. Design ideas I might take into consideration (No implement yet)

url: https://dpotferstudio.com/work/art-de-vivre-communication/