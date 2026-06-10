# Sprint 21 — Asset Wiring & Asset Inventory

## Summary

This audit identifies the visual and downloadable assets needed to complete the portfolio without creating images, searching for images, changing visual design, or introducing libraries.

Reviewed surfaces:

- Home
- About
- How I Add Value
- Skills
- Projects
- Journey
- Education
- Documents
- Contact
- Header
- Theme Selector
- Viewport Preview
- Sticky Header Pin/Unpin

Current asset state summary:

- The asset folder structure already exists under `public/assets/` and is documented.
- Most visual surfaces currently rely on text labels, dashed visual placeholders, button text, or empty `.gitkeep` folders.
- The only real binary/static visual asset currently present in this audit scope is `public/favicon.ico`.
- No implementation changes are recommended in this sprint beyond documenting the inventory.

Status definitions:

- **Existe**: the exact asset file exists and can be used as-is.
- **Placeholder**: the UI has a text/structural placeholder or the target folder exists only through `.gitkeep`, but the final asset is not present.
- **Falta**: the asset is needed/recommended and no final file exists yet.

## Asset Inventory

### Branding

| Surface | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Browser favicon | `../` from `assets` root, currently `public/` | `favicon.ico` | ico | Multi-size favicon bundle: 16×16, 32×32, 48×48 | Existe | Current app references `favicon.ico` directly from `public/`. Keep unless a new branded favicon set is approved. |
| Main brand mark / symbol | `assets/images/logos/projects/` | `j3dev-mark.svg` | svg | Vector, designed for 24–64 px display | Falta | Header currently uses text brand only. Add only if an approved brand mark is available. |
| Full portfolio wordmark | `assets/images/logos/projects/` | `j3dev-portfolio-wordmark.svg` | svg | Vector, readable around 160×40 px | Falta | Optional enhancement for brand consistency; text brand remains accessible and usable. |
| Open Graph / social preview image | `assets/images/logos/projects/` | `j3dev-portfolio-og.webp` | webp | 1200×630 px | Falta | Useful for link previews if metadata is added later; do not add until content and branding are approved. |
| Apple touch icon | `assets/images/icons/system/` | `apple-touch-icon.png` | png | 180×180 px | Falta | Optional platform icon. |
| PWA-style maskable icon | `assets/images/icons/system/` | `j3dev-maskable-icon.png` | png | 512×512 px | Falta | Optional future-proof asset; no PWA behavior should be introduced in this sprint. |

### Profile

| Surface | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| About profile portrait | `assets/profile/photos/` | `jorge-jaimes-professional-portrait.webp` | webp | 800×1000 px | Placeholder | About data contains profile image alt text, but no final image file is present. |
| Compact avatar | `assets/profile/avatar/` | `jorge-jaimes-avatar.webp` | webp | 512×512 px | Placeholder | Useful for cards, contact, or compact header variants if approved later. |
| Professional headshot fallback | `assets/profile/photos/` | `jorge-jaimes-headshot.jpg` | jpg | 1200×1200 px | Falta | Use only if a photo source is approved for public use. |
| Journey / professional timeline portrait | `assets/profile/photos/` | `jorge-jaimes-career-journey.webp` | webp | 1200×900 px | Falta | Optional contextual image for Journey; text-first timeline remains sufficient. |
| Education profile/context image | `assets/profile/photos/` | `jorge-jaimes-learning-context.webp` | webp | 1200×900 px | Falta | Optional contextual image for Education; avoid decorative noise. |

### Skills

All current Skills UI entries use text initials or short labels as visual placeholders. Recommended final skill assets should be small, approved, legally safe logos or custom neutral icons. Prefer SVG for crisp rendering and theming. If official brand logos cannot be used safely, use custom monochrome SVG icons with accessible labels.

| Skill | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status |
| --- | --- | --- | --- | --- | --- |
| .NET | `assets/images/logos/skills/` | `dotnet.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| C# | `assets/images/logos/skills/` | `csharp.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| ASP.NET Core | `assets/images/logos/skills/` | `aspnet-core.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| REST APIs | `assets/images/logos/skills/` | `rest-apis.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| JWT | `assets/images/logos/skills/` | `jwt.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Dapper | `assets/images/logos/skills/` | `dapper.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| ADO.NET | `assets/images/logos/skills/` | `ado-net.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| LINQ | `assets/images/logos/skills/` | `linq.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| SQL Server | `assets/images/logos/skills/` | `sql-server.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Stored Procedures | `assets/images/logos/skills/` | `stored-procedures.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Microsoft Access | `assets/images/logos/skills/` | `microsoft-access.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Angular | `assets/images/logos/skills/` | `angular.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| TypeScript | `assets/images/logos/skills/` | `typescript.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| SCSS | `assets/images/logos/skills/` | `scss.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Responsive Design | `assets/images/logos/skills/` | `responsive-design.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| SOLID | `assets/images/logos/skills/` | `solid.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Layered Architecture | `assets/images/logos/skills/` | `layered-architecture.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Clean Code | `assets/images/logos/skills/` | `clean-code.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| API Design | `assets/images/logos/skills/` | `api-design.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| VB.NET | `assets/images/logos/skills/` | `vb-net.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| WinForms | `assets/images/logos/skills/` | `winforms.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| WPF | `assets/images/logos/skills/` | `wpf.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| FoxPro | `assets/images/logos/skills/` | `foxpro.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Visual Basic 6 | `assets/images/logos/skills/` | `visual-basic-6.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Git | `assets/images/logos/skills/` | `git.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| GitHub | `assets/images/logos/skills/` | `github.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Codex | `assets/images/logos/skills/` | `codex.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Swagger | `assets/images/logos/skills/` | `swagger.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Azure Learning | `assets/images/logos/skills/` | `azure-learning.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Docker Learning | `assets/images/logos/skills/` | `docker-learning.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Problem Solving | `assets/images/logos/skills/` | `problem-solving.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Technical Analysis | `assets/images/logos/skills/` | `technical-analysis.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Documentation | `assets/images/logos/skills/` | `documentation.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Team Collaboration | `assets/images/logos/skills/` | `team-collaboration.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Continuous Learning | `assets/images/logos/skills/` | `continuous-learning.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Maintainability Mindset | `assets/images/logos/skills/` | `maintainability-mindset.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| JavaScript | `assets/images/logos/skills/` | `javascript.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| HTML | `assets/images/logos/skills/` | `html.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| CSS | `assets/images/logos/skills/` | `css.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| ASP.NET | `assets/images/logos/skills/` | `aspnet.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| WebSockets | `assets/images/logos/skills/` | `websockets.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Search UX | `assets/images/logos/skills/` | `search-ux.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| SPA-like Architecture | `assets/images/logos/skills/` | `spa-like-architecture.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Lazy Loading | `assets/images/logos/skills/` | `lazy-loading.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| AI-assisted UX | `assets/images/logos/skills/` | `ai-assisted-ux.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Enterprise Maintenance | `assets/images/logos/skills/` | `enterprise-maintenance.svg` | svg | 32×32 viewBox, scalable | Placeholder |
| Team Conventions | `assets/images/logos/skills/` | `team-conventions.svg` | svg | 32×32 viewBox, scalable | Placeholder |

### Projects

| Project / Surface | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Worker project card / detail visual | `assets/project-media/worker/` | `worker-overview.webp` | webp | 1600×900 px | Placeholder | Must avoid proprietary UI or private business data. |
| Worker thumbnail | `assets/project-media/worker/` | `worker-thumbnail.webp` | webp | 800×450 px | Falta | Use approved/sanitized visual only. |
| Worker demo/video thumbnail | `assets/project-media/worker/` | `worker-video-thumbnail.webp` | webp | 1280×720 px | Falta | Only if a safe overview video is approved. |
| Worker logo/mark | `assets/images/logos/projects/` | `worker-logo.svg` | svg | Vector, readable at 48–96 px | Falta | Use only if public use is approved. |
| Expensux project card / detail visual | `assets/project-media/expensux/` | `expensux-overview.webp` | webp | 1600×900 px | Placeholder | Can be a safe showcase screenshot when final UI is approved. |
| Expensux thumbnail | `assets/project-media/expensux/` | `expensux-thumbnail.webp` | webp | 800×450 px | Falta | Use sanitized demo data. |
| Expensux logo/mark | `assets/images/logos/projects/` | `expensux-logo.svg` | svg | Vector, readable at 48–96 px | Falta | Prefer custom logo if project branding exists. |
| ItHelpCenter project card / detail visual | `assets/project-media/ithelpcenter/` | `ithelpcenter-overview.webp` | webp | 1600×900 px | Placeholder | Requires approved public-safe asset because LeverIT/client details are confidential. |
| ItHelpCenter thumbnail | `assets/project-media/ithelpcenter/` | `ithelpcenter-thumbnail.webp` | webp | 800×450 px | Falta | Avoid internal UI, ticket data, or client content. |
| ItHelpCenter logo/mark | `assets/images/logos/projects/` | `ithelpcenter-logo.svg` | svg | Vector, readable at 48–96 px | Falta | Use only with approval. |
| Discovery project card / detail visual | `assets/project-media/discovery/` | `discovery-overview.webp` | webp | 1600×900 px | Placeholder | Requires public-safe, non-proprietary visual. |
| Discovery thumbnail | `assets/project-media/discovery/` | `discovery-thumbnail.webp` | webp | 800×450 px | Falta | Avoid exposing internal workflows. |
| Discovery logo/mark | `assets/images/logos/projects/` | `discovery-logo.svg` | svg | Vector, readable at 48–96 px | Falta | Use only with approval. |
| Testigo Electoral project card / detail visual | `assets/project-media/testigo-electoral/` | `testigo-electoral-overview.webp` | webp | 1600×900 px | Placeholder | Requires approved generic/sanitized visual. |
| Testigo Electoral thumbnail | `assets/project-media/testigo-electoral/` | `testigo-electoral-thumbnail.webp` | webp | 800×450 px | Falta | Avoid client-specific UI or private workflows. |
| Testigo Electoral logo/mark | `assets/images/logos/projects/` | `testigo-electoral-logo.svg` | svg | Vector, readable at 48–96 px | Falta | Use only with approval. |
| J3dev Portfolio project card / detail visual | `assets/project-media/j3dev-portfolio/` | `j3dev-portfolio-overview.webp` | webp | 1600×900 px | Placeholder | Can be a screenshot of the public portfolio after visual content stabilizes. |
| J3dev Portfolio thumbnail | `assets/project-media/j3dev-portfolio/` | `j3dev-portfolio-thumbnail.webp` | webp | 800×450 px | Falta | Should reflect the default professional experience. |
| J3dev Portfolio logo/mark | `assets/images/logos/projects/` | `j3dev-portfolio-logo.svg` | svg | Vector, readable at 48–96 px | Falta | Can reuse approved branding mark. |
| LeverIT company logo | `assets/images/logos/companies/` | `leverit-logo.svg` | svg | Vector, readable at 120×40 px | Placeholder | Referenced as pending approval in project data. |
| Netcom company logo | `assets/images/logos/companies/` | `netcom-logo.svg` | svg | Vector, readable at 120×40 px | Falta | Only if approved for recommendation/document context. |
| Avances Software company logo | `assets/images/logos/companies/` | `avances-software-logo.svg` | svg | Vector, readable at 120×40 px | Falta | Only if approved for recommendation/document context. |
| Myssas / Worker client logo | `assets/images/logos/companies/` | `myssas-worker-logo.svg` | svg | Vector, readable at 120×40 px | Falta | Only if approved for public client reference. |

### Documents

Document data currently points to safe pending PDF paths while final PDFs are unpublished. Recommended routes below align with the existing asset folder taxonomy.

| Document | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| CV Español PDF | `assets/documents/resumes/` | `cv-es.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Current data uses a pending PDF path; final file not present. |
| CV English PDF | `assets/documents/resumes/` | `cv-en.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Final file not present. |
| Carta de Presentación Español PDF | `assets/documents/cover-letters/` | `cover-letter-es.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Final file not present. |
| Cover Letter English PDF | `assets/documents/cover-letters/` | `cover-letter-en.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Final file not present. |
| LeverIT Recommendation PDF | `assets/documents/recommendations/` | `recommendation-leverit.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Final file not present; publish only with approval. |
| Netcom Recommendation PDF | `assets/documents/recommendations/` | `recommendation-netcom.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Final file not present; publish only with approval. |
| Avances Software Recommendation PDF | `assets/documents/recommendations/` | `recommendation-avances.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Final file not present; publish only with approval. |
| Myssas / Worker Client Recommendation PDF | `assets/documents/recommendations/` | `recommendation-myssas-worker.pdf` | pdf | A4 / Letter, optimized under 2 MB if possible | Placeholder | Final file not present; publish only with approval. |
| Resume/CV document icon | `assets/images/logos/documents/` | `document-resume.svg` | svg | 32×32 or 48×48 viewBox | Falta | Optional card icon; text labels are currently sufficient. |
| Cover letter document icon | `assets/images/logos/documents/` | `document-cover-letter.svg` | svg | 32×32 or 48×48 viewBox | Falta | Optional card icon. |
| Recommendation document icon | `assets/images/logos/documents/` | `document-recommendation.svg` | svg | 32×32 or 48×48 viewBox | Falta | Optional card icon. |
| Download action icon | `assets/images/icons/actions/` | `download.svg` | svg | 24×24 viewBox | Falta | Useful for document actions if replacing or supporting text later. |
| View/open action icon | `assets/images/icons/actions/` | `open-external.svg` | svg | 24×24 viewBox | Falta | Useful for external/open document actions. |
| Print action icon | `assets/images/icons/actions/` | `print.svg` | svg | 24×24 viewBox | Falta | Useful for print actions. |

### Navigation

| Surface | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Home navigation icon | `assets/images/icons/navigation/` | `home.svg` | svg | 24×24 viewBox | Falta | Optional; main navigation currently uses text links, which should remain. |
| About navigation icon | `assets/images/icons/navigation/` | `about.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| How I Add Value navigation icon | `assets/images/icons/navigation/` | `value.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| Skills navigation icon | `assets/images/icons/navigation/` | `skills.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| Projects navigation icon | `assets/images/icons/navigation/` | `projects.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| Journey navigation icon | `assets/images/icons/navigation/` | `journey.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| Education navigation icon | `assets/images/icons/navigation/` | `education.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| Documents navigation icon | `assets/images/icons/navigation/` | `documents.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| Contact navigation icon | `assets/images/icons/navigation/` | `contact.svg` | svg | 24×24 viewBox | Falta | Optional enhancement only. |
| Header pin icon | `assets/images/icons/actions/` | `pin.svg` | svg | 24×24 viewBox | Falta | Recommended replacement for visible `Pin` text only after implementation is approved. |
| Header unpin icon | `assets/images/icons/actions/` | `pin-off.svg` | svg | 24×24 viewBox | Falta | Recommended replacement for visible `Unpin` text only after implementation is approved. |
| Previous slide icon | `assets/images/icons/actions/` | `chevron-left.svg` | svg | 24×24 viewBox | Falta | Optional; hero controls currently use text and are clear. |
| Next slide icon | `assets/images/icons/actions/` | `chevron-right.svg` | svg | 24×24 viewBox | Falta | Optional; hero controls currently use text and are clear. |
| Close modal icon | `assets/images/icons/actions/` | `close.svg` | svg | 24×24 viewBox | Falta | Needed if modal close text is replaced by an icon later. |
| Back navigation icon | `assets/images/icons/actions/` | `arrow-left.svg` | svg | 24×24 viewBox | Falta | Useful for project detail navigation if text is supplemented later. |

### Social

| Surface | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Email contact icon | `assets/images/icons/actions/` | `email.svg` | svg | 24×24 viewBox | Placeholder | Contact data has an `Email contact icon` placeholder. |
| WhatsApp contact icon | `assets/images/icons/actions/` | `whatsapp.svg` | svg | 24×24 viewBox | Placeholder | Use approved/simple icon or neutral chat/phone icon if brand use is a concern. |
| LinkedIn contact icon | `assets/images/icons/actions/` | `linkedin.svg` | svg | 24×24 viewBox | Placeholder | Use approved logo asset if allowed. |
| GitHub social icon | `assets/images/icons/actions/` | `github.svg` | svg | 24×24 viewBox | Falta | Useful if GitHub link becomes public in Contact or Projects. |
| External link icon | `assets/images/icons/actions/` | `external-link.svg` | svg | 24×24 viewBox | Falta | Useful for project/document/contact external links. |

### Home

| Surface | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Hero slide: backend systems | `assets/images/backgrounds/hero/` | `hero-backend-systems.webp` | webp | 1920×1080 px, optional 2560×1440 master | Placeholder | Current slide uses `Backend systems visual reference pending final asset`. |
| Hero slide: architecture planning | `assets/images/backgrounds/hero/` | `hero-architecture-planning.webp` | webp | 1920×1080 px, optional 2560×1440 master | Placeholder | Current slide uses `Architecture planning visual reference pending final asset`. |
| Hero slide: frontend integration | `assets/images/backgrounds/hero/` | `hero-frontend-integration.webp` | webp | 1920×1080 px, optional 2560×1440 master | Placeholder | Current slide uses `Frontend integration visual reference pending final asset`. |
| How I Add Value preview illustration | `assets/images/backgrounds/sections/` | `home-value-preview.webp` | webp | 1200×800 px | Falta | Optional; content should remain readable without it. |
| Featured Projects section visual | `assets/images/backgrounds/sections/` | `home-featured-projects.webp` | webp | 1200×800 px | Falta | Optional, can be replaced by project thumbnails. |
| Core Skills section visual | `assets/images/backgrounds/sections/` | `home-core-skills.webp` | webp | 1200×800 px | Falta | Optional supporting visual. |
| Professional Highlights section visual | `assets/images/backgrounds/sections/` | `home-professional-highlights.webp` | webp | 1200×800 px | Falta | Optional supporting visual. |

### Themes

| Surface | Recommended route inside `assets` | Recommended file name | Type | Recommended size | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Light Professional theme preview/background | `assets/images/backgrounds/themes/` | `theme-light-professional-preview.webp` | webp | 1200×675 px | Falta | Optional preview for theme selector or docs; default should remain clean and readable. |
| Dark Tech theme preview/background | `assets/images/backgrounds/themes/` | `theme-dark-tech-preview.webp` | webp | 1200×675 px | Falta | Optional preview; avoid reducing contrast. |
| Premium 3D theme preview/background | `assets/images/backgrounds/themes/` | `theme-premium-3d-preview.webp` | webp | 1200×675 px | Falta | Optional enhancement only; content access must remain standard. |
| Light Professional selector icon | `assets/images/icons/system/` | `theme-light-professional.svg` | svg | 24×24 viewBox | Falta | Theme selector currently uses text labels and should remain clear. |
| Dark Tech selector icon | `assets/images/icons/system/` | `theme-dark-tech.svg` | svg | 24×24 viewBox | Falta | Optional icon-only support; keep label visible or accessible. |
| Premium 3D selector icon | `assets/images/icons/system/` | `theme-premium-3d.svg` | svg | 24×24 viewBox | Falta | Optional icon-only support; avoid implying required interaction. |
| Viewport mobile icon | `assets/images/icons/system/` | `viewport-mobile.svg` | svg | 24×24 viewBox | Falta | Viewport selector currently uses text and remains clear. |
| Viewport tablet icon | `assets/images/icons/system/` | `viewport-tablet.svg` | svg | 24×24 viewBox | Falta | Optional if viewport buttons become more compact. |
| Viewport desktop icon | `assets/images/icons/system/` | `viewport-desktop.svg` | svg | 24×24 viewBox | Falta | Optional if viewport buttons become more compact. |

## Missing Assets

Highest-priority missing or placeholder assets for portfolio completion:

1. **Profile portrait**: `assets/profile/photos/jorge-jaimes-professional-portrait.webp`.
2. **Hero visuals**:
   - `assets/images/backgrounds/hero/hero-backend-systems.webp`
   - `assets/images/backgrounds/hero/hero-architecture-planning.webp`
   - `assets/images/backgrounds/hero/hero-frontend-integration.webp`
3. **Project visuals and thumbnails** for Worker, Expensux, ItHelpCenter, Discovery, Testigo Electoral, and J3dev Portfolio.
4. **Professional PDFs** for CVs, cover letters, and recommendation letters.
5. **Contact/social icons** for Email, WhatsApp, LinkedIn, external link, and optional GitHub.
6. **Header Pin/Unpin icons**:
   - `assets/images/icons/actions/pin.svg`
   - `assets/images/icons/actions/pin-off.svg`
7. **Skill icons/logos** for all Skills page entries, using SVG or approved custom neutral icons.
8. **Optional navigation/theme/viewport icons** only if future UI iterations need more compact controls.

## Recommended Sizes

| Asset class | Recommended size |
| --- | --- |
| Favicon ICO | Multi-size: 16×16, 32×32, 48×48 |
| Apple touch icon | 180×180 px |
| Maskable/platform icon | 512×512 px |
| Brand mark / wordmark | SVG vector; test at 24, 32, 48, and 160 px widths |
| Profile portrait | 800×1000 px or 1200×1500 px source, exported to WebP |
| Avatar | 512×512 px square |
| Hero backgrounds | 1920×1080 px delivery; optional 2560×1440 px source/master |
| Section background/support visuals | 1200×800 px or 1200×675 px depending layout |
| Project overview images | 1600×900 px |
| Project thumbnails | 800×450 px |
| Video thumbnails | 1280×720 px |
| Skill icons | 32×32 SVG viewBox, scalable |
| Navigation/action/system icons | 24×24 SVG viewBox |
| Document card icons | 32×32 or 48×48 SVG viewBox |
| PDF documents | A4 or Letter; optimized under 2 MB when possible |
| Open Graph image | 1200×630 px |
| Theme preview images | 1200×675 px |

## Recommended File Formats

| Use case | Recommended format | Reason |
| --- | --- | --- |
| UI icons, action icons, navigation icons, skill custom icons | svg | Crisp at any density, small, easy to theme when authored safely. |
| Logos / marks / wordmarks | svg | Best for scaling and transparent backgrounds. |
| Photos, screenshots, hero images, thumbnails | webp | Good compression and modern browser support for web visuals. |
| Archival or externally provided photos where WebP conversion is not approved | jpg | Broad compatibility for photographic images. |
| Transparent raster assets that cannot be represented as SVG | png | Best fallback for alpha transparency. |
| Downloadable professional documents | pdf | Expected format for CVs, cover letters, and recommendations. |
| Browser favicon | ico plus optional png/svg variants | ICO remains compatible; PNG/SVG variants can be added later if needed. |

## Pin/Unpin Header Button Review

Current state:

- The sticky header toggle currently displays the visible text `Pin` or `Unpin`.
- It already exposes a dynamic `aria-label` that explains the action: pinning keeps the header visible while scrolling; unpinning lets it scroll with the page.
- This is accessible and clear, but visually less compact than an icon button.

Recommended future implementation approach:

1. Use an **icon-only button with an explicit dynamic `aria-label`**.
2. Keep the button state clear through the icon swap:
   - `pin.svg` when the action is to pin the header.
   - `pin-off.svg` when the action is to unpin the header.
3. Add `aria-pressed` if the button is treated as a persistent toggle state, where pressed means “header is pinned.”
4. Provide a visible tooltip or visually hidden text if extra clarity is needed, but do not depend on `title` as the only explanation.

Best practice recommendation:

- **Best default**: `icon + aria-label + aria-pressed`.
- **Best UX when space allows**: `icon + visible/hover/focus tooltip + aria-label + aria-pressed`.
- **Do not rely on `title` alone**: native `title` is inconsistent across touch devices, keyboard use, and assistive technology. It may be added as a supplemental hint, but not as the primary accessible name.

Recommended labels:

- When header is unpinned and the action will pin it: `aria-label="Pin header so it remains visible while scrolling"`, `aria-pressed="false"`, icon `pin.svg`.
- When header is pinned and the action will unpin it: `aria-label="Unpin header so it scrolls with the page"`, `aria-pressed="true"`, icon `pin-off.svg`.

UX guidance:

- Keep the control in the same Header tools area.
- Ensure the focus outline remains visible.
- Ensure the icon has `aria-hidden="true"` if the button has a complete `aria-label`.
- If a tooltip is added, it must appear on both hover and keyboard focus.
- Maintain enough touch target size, ideally at least 44×44 CSS px.

## Files Modified

- `docs/sprint-21-asset-inventory.md`

## Testing

Commands required for this audit:

```bash
npm run build
git diff --check
```
