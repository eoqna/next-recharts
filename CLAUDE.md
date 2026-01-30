# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 App Router project demonstrating Recharts integration with React 19.

### Project Structure

- `app/` - Next.js App Router pages (routes: `/`, `/area`, `/line`, `/bar`)
- `feature/components/` - Reusable chart components and UI elements

### Key Patterns

**Client Components for Charts**: All Recharts components require `"use client"` directive since Recharts uses browser APIs. Page components in `app/` are server components that import client chart components.

**Path Alias**: Use `@/*` to import from the project root (configured in tsconfig.json).

**Styling**: Tailwind CSS v4 with PostCSS. Global styles in `app/globals.css`.

### Recharts Usage

Chart components follow a consistent pattern:
- Inline data arrays for demonstration
- Styled with inline `style` prop for responsive behavior
- Custom tooltip components for AreaChart and LineChart
- Type imports from `recharts/types/state/chartDataSlice` for `ChartData`
