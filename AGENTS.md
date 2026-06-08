# AGENTS.md

## Project Name

J3dev Portfolio

---

## Project Purpose

J3dev Portfolio is a professional portfolio website created to present Jorge Jaimes as a Software Engineer with strong Backend specialization in .NET and Fullstack capabilities.

The portfolio is designed to demonstrate technical evolution, software engineering principles, real-world production experience, project history, problem-solving skills, and continuous professional growth.

This project is intended for recruiters, hiring managers, technical leaders, architects, and software engineering teams.

---

## Target Audience

Primary Audience:

* Technical Recruiters
* Hiring Managers
* Software Architects
* Technical Leads
* Engineering Managers

Secondary Audience:

* Software Developers
* Students
* Technology Enthusiasts

The website must prioritize credibility, clarity, professionalism, and technical depth.

---

## Professional Positioning

The portfolio should present Jorge as:

* Software Engineer
* Backend Developer specialized in .NET
* SQL Server specialist
* Enterprise Software Developer
* Legacy System Modernization Engineer
* API and Architecture Oriented Developer
* Fullstack Developer with Angular experience
* Problem Solver
* Continuous Learner

The portfolio must NOT position Jorge as:

* Freelancer
* Agency Owner
* Independent Consultant
* Software Service Seller

The objective is to demonstrate value as a long-term contributor within technology companies.

---

## Engineering Philosophy

The portfolio should reflect the following principles:

### Understand Before Building

Always understand the problem before implementing the solution.

### Architecture Before Code

Design and planning should guide implementation.

### Fundamentals Before Frameworks

Frameworks evolve. Fundamentals remain valuable.

### Real Experience Over Buzzwords

Production experience is more valuable than technology lists.

### Evolution Matters

Professional growth and learning journey are as important as technical skills.

### Maintainability First

Maintainability should always be preferred over unnecessary complexity.

---

## Technical Evolution Narrative

The portfolio should communicate a journey similar to:

* Algorithms and Flowcharts
* Visual Basic 6
* Microsoft Access
* C++
* FoxPro
* University Studies
* VB.NET
* WinForms
* SQL Server
* JavaScript
* Enterprise Applications
* Software Architecture
* SOLID Principles
* APIs
* Angular
* .NET Modern Development

The emphasis should be on evolution, learning, and problem-solving rather than technology accumulation.

---

## Core Technologies To Highlight

Primary Technologies:

* .NET
* C#
* SQL Server
* ASP.NET Core
* REST APIs
* JWT Authentication
* Dapper
* LINQ
* ADO.NET
* SOLID Principles

Secondary Technologies:

* Angular
* TypeScript
* RxJS
* SCSS
* Responsive Design

Historical Technologies:

* Visual Basic 6
* FoxPro
* VB.NET
* WinForms
* Microsoft Access
* Vanilla JavaScript

---

## Project Architecture

The project must follow the approved architecture:

```text
src/app/

core/
layout/
pages/
shared/
models/
data/
themes/
```

### Core

Application-wide services and shared logic.

Examples:

* ThemeService
* NavigationService
* ViewportPreviewService

### Layout

Global layout structure.

Examples:

* Navbar
* Footer
* Theme Switcher
* Viewport Switcher

### Pages

Application pages and navigation endpoints.

### Shared

Reusable UI components.

### Models

Shared domain entities.

### Data

Typed static application data.

### Themes

Theme definitions and visual configurations.

---

## Main Navigation

The application should include:

* Home
* About
* Why Hire Me
* Skills
* Projects
* Journey
* Education
* Documents
* Contact

---

## Home Page

The home page should contain:

* Full-screen hero slider
* Professional background images
* Strong visual headlines
* Call-to-action buttons
* Quick navigation

Sections below the hero:

* Why Hire Me Preview
* Featured Projects
* Core Skills
* Professional Highlights

---

## About Page

Include:

* Professional profile
* Personal story
* Philosophy
* Vision
* Goals
* Professional values

---

## Why Hire Me Page

Focus on evidence rather than self-promotion.

Demonstrate:

* Production experience
* Problem-solving ability
* Software architecture understanding
* Legacy modernization experience
* Continuous learning
* Long-term commitment

---

## Skills Page

Skills must NOT use:

* Percentages
* Progress bars
* Beginner / Intermediate / Expert labels

Skills should present:

* Years of usage
* Production experience
* Context of usage
* Related projects

Each skill should be linked to one or more projects.

---

## Projects Page

Primary Projects:

* Worker
* Expensux
* ItHelpCenter

Additional Projects:

* Maximum 3 public showcase projects

Prioritize quality over quantity.

Each project should include:

* Problem
* Solution
* Technologies
* Responsibilities
* Results
* Lessons Learned

---

## Project Details

Project detail pages should support:

* Screenshots
* Videos
* Architecture information
* Technologies used
* Business context
* Lessons learned

Project types:

### Worker

Production software.

No source code exposure.

Use:

* Screenshots
* Videos
* Business impact

### Expensux

Demo access allowed.

Source code remains private.

### ItHelpCenter

Describe contributions.

Use public company references.

Do not expose proprietary information.

---

## Journey Page

Represent:

* Technical evolution
* Professional growth
* Career milestones
* Technology adoption timeline

Focus on growth rather than employment history.

---

## Education Page

Include:

* University studies
* Independent learning
* Courses
* Certifications
* Self-directed education

Present learning continuity as a strength.

---

## Documents Page

Support:

* Spanish CV
* English CV
* Cover Letters
* Recommendation Letters
* Certificates

Documents should be viewable and downloadable.

---

## Themes

Supported themes:

* Dark Tech
* Light Professional
* Premium 3D

Theme preference must persist locally.

---

## Responsive Design

Support:

* Mobile
* Tablet
* Desktop

Include a manual viewport preview selector for recruiter demonstrations.

---

## UI Principles

Prioritize:

* Clarity
* Readability
* Professionalism
* Accessibility
* Simplicity

Use animations only when they improve the experience.

Avoid excessive visual noise.

---

## Data Management

Do NOT use:

* Backend
* Database
* API

Use static typed TypeScript data sources.

Examples:

* projects.data.ts
* skills.data.ts
* experience.data.ts
* education.data.ts
* documents.data.ts

---

## Code Standards

Use:

* Angular Standalone Components
* TypeScript Strict Mode
* Reusable Components
* Clean Architecture
* Separation of Concerns

Avoid:

* Duplicated Logic
* Hardcoded Data Inside Components
* Unnecessary Dependencies

---

## Rules For AI Agents

Before creating new code:

1. Respect the approved architecture.
2. Reuse existing components whenever possible.
3. Keep the project maintainable.
4. Prioritize recruiter experience.
5. Prioritize technical credibility.
6. Avoid unnecessary complexity.
7. Avoid introducing external libraries without explicit approval.
8. Keep the application buildable at all times.
9. Do not introduce backend functionality.
10. Do not expose private or proprietary project information.
11. Prefer incremental changes over large uncontrolled modifications.
