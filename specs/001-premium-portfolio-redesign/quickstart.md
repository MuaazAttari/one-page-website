# Quickstart Guide: Premium Portfolio Redesign

**Feature**: 001-premium-portfolio-redesign
**Date**: 2026-02-13

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Visit `http://localhost:3000` in your browser

### Project Structure

```
app/
  layout.tsx          # Root layout with global styles
  page.tsx            # Main page component
  globals.css         # Global CSS styles

components/
  Hero.tsx           # Hero section component
  About.tsx          # About section component
  Skills.tsx         # Skills section component
  Projects.tsx       # Projects section component
  Contact.tsx        # Contact section component
  Footer.tsx         # Footer component
  SectionWrapper.tsx # Section wrapper with consistent spacing
  Container.tsx      # Container with max-width and padding
  StatCard.tsx       # Statistic card component
  ProjectCard.tsx    # Project card component
  SkillBadge.tsx     # Skill badge component
  Button.tsx         # Reusable button component

lib/
  motion.ts          # Shared motion configurations

styles/
  tokens.css         # Design tokens as CSS variables
```

### Key Features

#### Design Tokens
All colors, typography, and spacing values are defined as CSS custom properties in `styles/tokens.css` and integrated with Tailwind CSS configuration.

#### Responsive Design
The layout uses a 12-column grid system that adapts to different screen sizes:
- Desktop: 12 columns
- Tablet: 2 columns or stacked
- Mobile: Single column

#### Animations
Animations are implemented using Framer Motion with consistent variants defined in `lib/motion.ts`.

### Development

To add a new project to the portfolio:
1. Update the projects data in `app/page.tsx` or a data file
2. Ensure the project object follows the Project schema defined in data-model.md

To add a new skill:
1. Update the skills data in `app/page.tsx` or a data file
2. Ensure the skill object follows the Skill schema defined in data-model.md

### Building for Production

To build the application for production:

```bash
npm run build
```

To serve the production build locally:

```bash
npm run start
```