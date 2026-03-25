---
id: 3
title: Implementation Plan Portfolio
stage: plan
date: 2026-02-13
surface: agent
model: Qwen
feature: premium-portfolio-redesign
branch: 001-premium-portfolio-redesign
user: admin
command: /sp.plan
labels: ["portfolio", "planning", "architecture", "nextjs"]
links:
  spec: D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\spec.md
  ticket: null
  adr: null
  pr: null
files:
 - D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\plan.md
 - D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\research.md
 - D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\data-model.md
 - D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\quickstart.md
 - D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\contracts\\api-contracts.md
tests:
 - none
---

## Prompt

Execute the implementation planning workflow using the plan template to generate design artifacts.

Objective:
Create a precise implementation execution plan for the approved Constitution and Specification of Muhammad Muaaz Ansari's portfolio.

The plan must translate specification into:
- File structure
- Component architecture
- Layout composition
- Animation mapping
- Styling system mapping
- Build order

No design changes allowed.
No reinterpretation.
Strict mapping only.

--------------------------------------------------
SECTION 1 — FILE STRUCTURE
--------------------------------------------------

Define exact folder hierarchy using Next.js App Router:

app/
  layout.tsx
  page.tsx
  globals.css

components/
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
  SectionWrapper.tsx
  Container.tsx
  StatCard.tsx
  ProjectCard.tsx
  SkillBadge.tsx
  Button.tsx

lib/
  motion.ts (shared motion configs)

styles/
  tokens.css (design tokens)

Each file must have a defined responsibility.

--------------------------------------------------
SECTION 2 — COMPONENT RESPONSIBILITY MAP
--------------------------------------------------

Hero.tsx:
- 90vh layout
- 2-column grid
- Gradient heading
- CTA buttons
- Floating visual card
- Radial background effect

About.tsx:
- Two-column layout
- Text + Stats grid
- Uses StatCard component

Skills.tsx:
- Grouped skill categories
- Uses SkillBadge
- Grid-based

Projects.tsx:
- 3-card layout
- Uses ProjectCard
- Hover animation

Contact.tsx:
- Centered layout
- Icon + text rows

Footer.tsx:
- Minimal
- Centered text

SectionWrapper.tsx:
- Handles vertical spacing
- Scroll reveal animation

Container.tsx:
- Applies max-width and horizontal padding

--------------------------------------------------
SECTION 3 — DESIGN TOKEN IMPLEMENTATION PLAN
--------------------------------------------------

Define tokens in tokens.css:
- Background
- Text colors
- Accent colors
- Borders
- Glow shadow

Expose as CSS variables.

Tailwind config must reference CSS variables.

No hardcoded colors inside components.

--------------------------------------------------
SECTION 4 — ANIMATION SYSTEM PLAN
--------------------------------------------------

Create shared motion variants in lib/motion.ts:

fadeUp:
  initial: opacity 0, y 20
  animate: opacity 1, y 0
  duration: 0.6s
  ease: easeOut

float:
  y: [-8, 8]
  transition:
    duration: 6s
    repeat: Infinity
    repeatType: reverse
    ease: easeInOut

Hover Effects:
- Cards: translateY(-6px)
- Buttons: brightness increase
- StatCards: scale 1.03

All animations must use Framer Motion.
No inline ad-hoc animations.

--------------------------------------------------
SECTION 5 — LAYOUT GRID IMPLEMENTATION
--------------------------------------------------

Desktop:
12-column grid.
Hero: 7/5 split (not equal 6/6).
Projects: 3 equal columns.
Skills: 4 equal columns.

Tablet:
2-column collapse.
Hero stacks vertically.

Mobile:
Single column.
Spacing reduced proportionally.

--------------------------------------------------
SECTION 6 — CONTENT DENSITY CONTROL
--------------------------------------------------

Enforce:
- No empty vertical voids.
- Balanced padding.
- Max 70 characters per line in body text.
- Consistent card padding (24px).
- Border radius standardization:
  - Cards: rounded-2xl
  - Buttons: rounded-xl
  - Badges: rounded-lg

--------------------------------------------------
SECTION 7 — IMPLEMENTATION ORDER
--------------------------------------------------

Step 1:
Design tokens setup.

Step 2:
Layout shell (Container + SectionWrapper).

Step 3:
Hero section (highest priority).

Step 4:
About section.

Step 5:
Skills grid.

Step 6:
Projects section.

Step 7:
Contact + Footer.

Step 8:
Animation refinement.

--------------------------------------------------
SECTION 8 — QUALITY CHECKPOINTS
--------------------------------------------------

Before generation, confirm:

- No childish elements.
- No excessive whitespace.
- No mismatched border radii.
- No inconsistent shadows.
- No unused components.
- No placeholder text.
- Professional SaaS-level visual integrity.

--------------------------------------------------
Final Instruction:
--------------------------------------------------

Return a structured implementation roadmap.
No code generation.
No creative additions.
Strict execution plan only.

End Plan.

## Response snapshot

I've successfully created the implementation plan for the premium portfolio redesign. Here's what was accomplished:

1. Created the implementation plan document (plan.md) with technical context, constitution compliance check, and project structure
2. Generated research.md with technology decisions and rationale
3. Created data-model.md defining the entities for the portfolio
4. Developed quickstart.md guide for developers
5. Created API contracts for potential future enhancements
6. Updated the agent context with the new technology stack information

The plan follows the specification exactly, with no creative additions or reinterpretations. All components, file structure, and implementation order match the requirements. The constitution compliance check confirms that all principles will be followed during implementation.

## Outcome

- ✅ Impact: Comprehensive implementation plan created with all required artifacts
- 🧪 Tests: none
- 📁 Files: Created plan.md, research.md, data-model.md, quickstart.md, and contracts/api-contracts.md
- 🔁 Next prompts: Ready for task breakdown with `/sp.tasks`
- 🧠 Reflection: The plan strictly follows the specification without deviations

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): Standard planning workflow
- Next experiment (smallest change to try): Break plan into tasks with `/sp.tasks`