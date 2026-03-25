---
id: 2
title: Premium Portfolio Redesign Spec
stage: spec
date: 2026-02-13
surface: agent
model: Qwen
feature: premium-portfolio-redesign
branch: 001-premium-portfolio-redesign
user: admin
command: /sp.specify
labels: ["portfolio", "redesign", "specification", "ai-engineer"]
links:
  spec: D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\spec.md
  ticket: null
  adr: null
  pr: null
files:
 - D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\spec.md
 - D:\\prompt-eng\\one-page-website\\specs\\001-premium-portfolio-redesign\\checklists\\requirements.md
tests:
 - none
---

## Prompt

Create or update the feature specification from a natural language feature description.

Redesign Muhammad Muaaz Ansari's one-page portfolio into a premium, high-end, AI-engineer-level personal brand website. The result must feel senior, intelligent, modern (2026 standard), and visually dense without clutter. No childish elements. No template aesthetics. No empty spacing abuse. Scope: Frontend only. Next.js (App Router). TypeScript. Tailwind CSS. Framer Motion. No backend. No CMS. No assumptions. -------------------------------------------------- DESIGN SYSTEM -------------------------------------------------- Color System (Tokenized): Background: --bg-primary: #0B0F19 --bg-secondary: #111827 --bg-elevated: #1F2937 Primary Brand: --accent-primary: #3B82F6 --accent-glow: rgba(59,130,246,0.35) Secondary Accent: --accent-purple: #8B5CF6 Text: --text-primary: #F9FAFB --text-secondary: #9CA3AF --text-muted: #6B7280 Border: --border-subtle: rgba(255,255,255,0.06) No random colors allowed. -------------------------------------------------- TYPOGRAPHY SCALE -------------------------------------------------- Font: Inter (or modern grotesk equivalent) Hero Name: - 64px desktop - 42px tablet - 32px mobile - Font-weight: 800 - Letter spacing: -0.02em Section Headings: - 32px - Font-weight: 700 Body: - 16px - Line height: 1.7 Micro Text: - 14px - Color: text-secondary -------------------------------------------------- LAYOUT SYSTEM -------------------------------------------------- Max Width: 1200px centered Section Padding: Desktop: 120px top/bottom Tablet: 80px Mobile: 60px Grid: 12-column system desktop Single column mobile All sections must align vertically. No uneven spacing. No floating random elements. -------------------------------------------------- HERO SECTION (CRITICAL) -------------------------------------------------- Height: Minimum 90vh. Layout: Left content (60%) Right visual element (40%) Left Content Structure: 1. Small intro line (text-secondary) "AI Engineer & Agentic Systems Builder" 2. Large Name (gradient text) Gradient: linear-gradient(90deg, #3B82F6, #8B5CF6) 3. Short 2-line positioning statement: "I design and build intelligent AI-native systems, from autonomous agents to real-world automation tools." 4. CTA Row: Primary Button: Background: accent-primary Hover: brightness 110% Shadow: accent glow Secondary Button: Transparent Border: border-subtle Hover: bg-elevated Right Side: Animated glassmorphic card showing: - "Digital Khata" - "Translator Agent" - "Voice AI Assistant" Card must: - Have subtle border - Backdrop blur - Glow on hover - Floating animation (slow 6s loop) Background: Subtle radial gradient: circle at 30% 40% → accent-glow fade to transparent. No particles. No childish blobs. -------------------------------------------------- ABOUT SECTION -------------------------------------------------- Two-column layout desktop. Left: Heading + short paragraph. Right: Stats grid (3 cards): - AI Projects Built - LLM Integrations - Years Learning & Building Each stat card: - bg-elevated - 1px subtle border - 16px padding - Hover: slight scale 1.03 -------------------------------------------------- SKILLS SECTION -------------------------------------------------- Dense grid. 4 columns desktop. 2 tablet. 1 mobile. Each skill: - Minimal badge style - Border subtle - Rounded-xl - Hover: bg-elevated Grouped: Core Engineering AI & LLM Frontend Systems No emoji icons. Use Lucide icons only. -------------------------------------------------- PROJECTS SECTION -------------------------------------------------- 3-card horizontal layout. Card Design: - bg-secondary - border-subtle - 24px padding - Rounded-2xl - Shadow: very soft On hover: - translateY(-6px) - subtle blue glow Each card contains: - Title - 2-line description - Tech stack tags - CTA link styled as inline arrow Cards must feel premium SaaS style. No gradients inside cards. -------------------------------------------------- CONTACT SECTION -------------------------------------------------- Centered layout. Compact. Professional. Show: Email GitHub LinkedIn Use minimal icon + text layout. No contact form. No unnecessary fields. -------------------------------------------------- ANIMATION RULES -------------------------------------------------- Use Framer Motion. Scroll reveal: Fade + Y 20px Duration: 0.6s Ease: easeOut Hero floating card: Subtle vertical oscillation. No excessive motion. No bounce effects. No childish transitions. -------------------------------------------------- FOOTER -------------------------------------------------- Minimal. Small text-muted. Centered. © 2026 Muhammad Muaaz Ansari -------------------------------------------------- VISUAL TONE -------------------------------------------------- This website must feel: - AI-focused - Technical - Structured - Premium SaaS - High-competence - Not a beginner developer No cartoon style. No flashy neon overload. No empty white space. No template vibes. -------------------------------------------------- Output Requirements: -------------------------------------------------- Generate exact component hierarchy. Define file structure. No creative interpretation outside specification. Implement exactly as defined. End.

## Response snapshot

I've successfully created a feature specification for redesigning Muhammad Muaaz Ansari's portfolio website. Here's what was accomplished:

1. Created a new git branch named `001-premium-portfolio-redesign`
2. Generated a comprehensive feature specification document in `specs/001-premium-portfolio-redesign/spec.md` with:
   - User scenarios and testing requirements
   - Functional requirements aligned with the design system
   - Success criteria that are measurable and technology-agnostic
   - Key entities identification
3. Created a requirements checklist in `specs/001-premium-portfolio-redesign/checklists/requirements.md` to validate the specification quality

The specification captures all the requirements from the feature description, including the design system, typography scale, layout system, and all section-specific requirements. It focuses on creating a premium, high-end portfolio that positions Muhammad as a senior AI engineer without any childish elements or template aesthetics.

## Outcome

- ✅ Impact: Created comprehensive feature specification for premium portfolio redesign
- 🧪 Tests: none
- 📁 Files: Created spec.md and requirements.md checklist
- 🔁 Next prompts: Ready for technical planning with `/sp.plan`
- 🧠 Reflection: The specification aligns with the constitution's requirements for professional appearance and technical competence

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): Standard specification creation
- Next experiment (smallest change to try): Proceed to technical planning phase