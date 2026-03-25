# Tasks: Premium Portfolio Redesign

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `app/`, `components/`, `lib/`, `styles/` at repository root
- Paths shown below follow the Next.js App Router structure from plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan in root directory
- [x] T002 Initialize Next.js 14+ project with TypeScript, Tailwind CSS, and Framer Motion dependencies
- [x] T003 [P] Configure linting and formatting tools (ESLint, Prettier)
- [x] T004 [P] Set up basic Next.js configuration in next.config.js
- [x] T005 [P] Configure TypeScript settings in tsconfig.json
- [x] T006 [P] Configure PostCSS and Tailwind CSS in postcss.config.js and tailwind.config.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Establish design system with token-based spacing and consistent grid in styles/tokens.css
- [x] T008 [P] Implement approved color palette with professional color tokens in styles/tokens.css
- [x] T009 [P] Setup typography hierarchy with clear visual dominance in styles/tokens.css
- [x] T010 Create consistent component structure with defined radius, padding, and borders in components/Container.tsx
- [x] T011 [P] Configure professional animation system with 0.4-0.7s duration in lib/motion.ts
- [x] T012 Setup responsive framework for mobile/tablet consistency in components/SectionWrapper.tsx
- [x] T013 [P] Create base Button component with consistent styling in components/Button.tsx
- [x] T014 [P] Set up global styles and layout in app/layout.tsx and app/globals.css
- [x] T015 Integrate design tokens with Tailwind CSS configuration

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Professional Portfolio Experience (Priority: P1) 🎯 MVP

**Goal**: Implement the core portfolio experience that showcases Muhammad Muaaz Ansari as a senior AI engineer with premium design.

**Independent Test**: The website should load and display a professional, premium design that immediately conveys technical competence and senior-level expertise without any childish elements or template aesthetics.

### Implementation for User Story 1

- [x] T016 [P] [US1] Create Hero section component with gradient text name in components/Hero.tsx
- [x] T017 [P] [US1] Create About section component with professional stats in components/About.tsx
- [x] T018 [P] [US1] Create Footer component with professional links in components/Footer.tsx
- [x] T019 [US1] Implement main page layout with all sections in app/page.tsx
- [x] T020 [US1] Add professional animations to Hero section using Framer Motion
- [x] T021 [US1] Implement StatCard component for displaying professional metrics in components/StatCard.tsx
- [x] T022 [US1] Add content positioning to highlight AI Engineer role and technical expertise
- [x] T023 [US1] Ensure responsive design maintains impact on mobile devices
- [x] T024 [US1] Apply brand consistency with AI-focused, intelligent appearance

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - AI Engineer Brand Positioning (Priority: P2)

**Goal**: Clearly communicate Muhammad Muaaz Ansari's specialization in AI engineering and agentic systems to visitors.

**Independent Test**: The content clearly positions Muhammad as an AI engineer and agentic systems builder with specific technical expertise, avoiding generic phrases.

### Implementation for User Story 2

- [x] T025 [P] [US2] Enhance Hero section with "AI Engineer & Agentic Systems Builder" introduction in components/Hero.tsx
- [x] T026 [P] [US2] Create Skills section component with technical expertise categories in components/Skills.tsx
- [x] T027 [P] [US2] Create SkillBadge component with Lucide icons for technical skills in components/SkillBadge.tsx
- [x] T028 [US2] Implement technical terminology in content to position as AI expert
- [x] T029 [US2] Organize skills into Core Engineering, AI & LLM, and Frontend Systems categories
- [x] T030 [US2] Add professional animations to Skills section using Framer Motion
- [x] T031 [US2] Integrate with User Story 1 components to enhance brand positioning

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Project Showcase (Priority: P3)

**Goal**: Display Muhammad's AI projects and technical work to allow evaluation of practical skills and experience in building AI-native systems.

**Independent Test**: The projects section effectively showcases AI-related projects with technical depth and relevance to AI engineering.

### Implementation for User Story 3

- [x] T032 [P] [US3] Create ProjectCard component with premium SaaS-style design in components/ProjectCard.tsx
- [x] T033 [P] [US3] Create Projects section component to display project cards in components/Projects.tsx
- [x] T034 [P] [US3] Implement mock data for 3 AI projects following data-model.md schema
- [x] T035 [US3] Add hover effects to ProjectCard with subtle animations enhancing premium feel
- [x] T036 [US3] Implement project filtering functionality (future enhancement) using API contracts
- [x] T037 [US3] Add project details with technical descriptions and tech stacks
- [x] T038 [US3] Integrate with User Story 1 and 2 components for cohesive experience

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T039 [P] Verify all design elements follow premium SaaS aesthetic standards
- [x] T040 Ensure consistent grid system and token-based spacing throughout all components
- [x] T041 Validate color governance with approved professional palette in all sections
- [x] T042 Confirm typography hierarchy establishes proper visual dominance across all components
- [x] T043 Review all components for consistent styling and purpose
- [x] T044 Audit animations for professional restraint and clarity enhancement
- [x] T045 Verify content positioning emphasizes technical expertise in all sections
- [x] T046 Assess layout density for professional balance without clutter
- [x] T047 Test responsive design maintains professional appearance on all devices
- [x] T048 Confirm implementation follows clean, modular code discipline
- [x] T049 Validate brand consistency communicates AI, intelligence, and structure throughout
- [x] T050 Conduct final accessibility review for professional presentation
- [x] T051 Optimize performance to meet 3-second page load requirement
- [x] T052 Finalize contact section with professional links (Email, GitHub, LinkedIn)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Create Hero section component with gradient text name in components/Hero.tsx"
Task: "Create About section component with professional stats in components/About.tsx"
Task: "Create Footer component with professional links in components/Footer.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence