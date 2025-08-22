# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Paddle is a React component library designed for kayak and paddleboard sites. It provides reusable UI components following atomic design principles (atoms, molecules, organisms) and is built as an npm package that can be consumed by Gatsby applications.

## Common Commands

### Development
```bash
# Start Storybook development server
npm run start
# or
npm run storybook

# Build the library
npm run build

# Run linting
npm run lint

# Preview build
npm run preview

# Development server (Vite)
npm run dev
```

### Storybook
```bash
# Start Storybook on port 6006
npm run storybook

# Build Storybook for production
npm run build-storybook
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Use Biome for formatting and linting (configured in biome.json)
npx biome check
npx biome check --apply
```

## Architecture & Structure

### Component Organization
The library follows atomic design principles with components organized by complexity:

- **Atoms**: Basic building blocks (buttons, inputs, simple utilities)
- **Molecules**: Simple combinations of atoms (cards, form groups)
- **Organisms**: Complex components made from molecules and atoms (location decks, testimonials)

### Key Patterns

1. **Component + Types Structure**: Each component has a corresponding TypeScript type definition file in `src/types/`
   - Example: `paddle-location-card.tsx` → `types/paddle-location-card-types.ts`

2. **Export Pattern**: All public components are exported through `src/index.tsx` using named exports organized by atomic design level

3. **Storybook Integration**: Every component has corresponding `.stories.tsx` files for documentation and testing (45 story files)

4. **Theme System**: Supports multiple themes (clean, tahoeCity, southTahoe) via CSS classes, configured in Storybook

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Documentation**: Storybook with accessibility addon
- **Styling**: CSS modules with theme-based CSS custom properties
- **Code Quality**: ESLint + Biome (replacing traditional Prettier)
- **Testing**: Storybook stories serve as component tests

### Styling Architecture
CSS is organized in `src/styles/` with modular imports:
- `variables.css` - CSS custom properties for theming
- Component-specific styles (buttons, cards, layout, etc.)
- Theme switching via CSS classes

### Dependencies & Integration
- Built for Gatsby sites (uses `gatsby` and `gatsby-plugin-image`)
- Uses `react-aria-components` for accessibility
- Supports Markdown content via `react-markdown`
- SVG handling through `react-inlinesvg`

## Development Notes

### Component Development
- Components handle both internal Gatsby links and external URLs
- Season-aware components (opening/closing times, seasonal availability)
- Location-based components with address and phone number support
- Comprehensive TypeScript interfaces for all props

### Storybook Configuration
- Configured with accessibility addon for a11y testing
- Theme switching capability built-in
- Stories located in `src/stories/` directory
- Uses Vite as build tool for fast development

### Publishing
- Published as `@rileybathurst/paddle` npm package
- Excludes stories from published package via `files` field in package.json
- Entry point: `src/index.tsx`
