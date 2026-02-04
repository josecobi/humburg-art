# Custom Hooks for Next.js Artist Portfolio

This directory contains custom hooks that implement the functionality defined in PROJECT_CONTEXT.md.

## Available Hooks

### 1. TypeScript Error Fixer (`TypeScriptErrorFixer`)
When you say "fix ts errors", this hook will:
- Run `tsc --noEmit` to identify all TypeScript errors
- Fix them prioritizing missing imports, type mismatches, and undefined properties
- Explain fixes briefly

### 2. Component Generator (`ComponentGenerator`)
When you say "create component [Name]", this hook will:
- Generate a TypeScript component in `/components` directory
- Include proper TypeScript interface for props
- Support for `className` prop
- Default export

### 3. Image Optimizer (`ImageOptimizer`)
When you say "optimize images", this hook will:
- Check `/public` directory for images >500KB
- Suggest compression or conversion to WebP
- Generate next/image config if needed

### 4. Lighthouse Check Reminder (`LighthouseReminder`)
Reminds to check:
- Image optimization
- Lazy loading implementation
- Core Web Vitals metrics
- Mobile responsiveness

### 5. Framer Motion Helper (`FramerMotionHelper`)
When adding animations:
- Default to: `initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }}, transition={{ duration: 0.6 }}`
- Always use `useInView` hook for scroll triggers

## Usage

To use these hooks in your project:

```javascript
import {
  TypeScriptErrorFixer,
  ComponentGenerator,
  ImageOptimizer,
  LighthouseReminder,
  FramerMotionHelper
} from '../hooks/customHooks';

// Example usage:
// TypeScriptErrorFixer.fixErrors();
// ComponentGenerator.generateComponent('MyComponent');
// ImageOptimizer.optimizeImages();
// LighthouseReminder.remind();
// FramerMotionHelper.applyAnimation(element, 'scroll');
```

## Implementation Notes

These hooks are designed to be used as part of a development workflow. In a real implementation, they would:
- Interact with the file system to create/edit files
- Execute command-line tools like `tsc` and image optimization utilities
- Provide actual error fixing and optimization recommendations