# Data Model: Premium Portfolio Redesign

**Feature**: 001-premium-portfolio-redesign
**Date**: 2026-02-13

## Overview
Data structures and entities for the premium portfolio website.

## Portfolio Content
The main content entity containing all information displayed on the portfolio site.

**Fields**:
- name: string (Muhammad Muaaz Ansari)
- title: string (AI Engineer & Agentic Systems Builder)
- description: string (2-line positioning statement)
- contact: Contact object

## Contact
Information for contacting Muhammad Muaaz Ansari.

**Fields**:
- email: string
- github: string (URL)
- linkedin: string (URL)

## Project
Represents an individual project in the portfolio.

**Fields**:
- id: string (unique identifier)
- title: string
- description: string (2-line description)
- technologies: string[] (tech stack tags)
- link: string (CTA link)
- category: string (AI, Automation, etc.)

## Skill
Represents a technical skill or competency.

**Fields**:
- id: string (unique identifier)
- name: string
- category: string (Core Engineering, AI & LLM, Frontend Systems)
- icon: string (Lucide icon name)

## Statistic
Represents a numerical statistic in the About section.

**Fields**:
- id: string (unique identifier)
- label: string (e.g., "AI Projects Built")
- value: number or string (e.g., "25+" or "5 years")