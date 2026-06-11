# Sprint 25A — Data Integrity Audit (EN / ES)

## Summary

- Audited all current files under `src/app/data/` plus visible text sources in Angular pages, layout components, shared components, theme metadata, viewport metadata, and navigation constants.
- The bilingual data layer is mostly synchronized, but **four structural parity issues must be fixed before Sprint 25 section polish**:
  1. `ABOUT_PAGE_DATA.professionalValues` has 5 EN entries and 6 ES entries.
  2. `JOURNEY_CTA_LINKS` has 4 EN entries and 3 ES entries.
  3. `PROJECTS_ES` adds `referencePlaceholders: undefined` to five projects where EN omits the property.
  4. `SKILLS_ES` adds `backendGroup: undefined` to many non-backend skills where EN omits the property.
- No empty arrays were detected in the localized data exports reviewed.
- Placeholder / pending language is intentionally present in several areas, especially documents, project availability, hero visuals, shared placeholder components, and footer copyright.
- Hardcoded visible text remains outside `src/app/data/`, mainly brand labels, theme/viewport labels, English theme descriptions used in Spanish ARIA labels, and viewport ARIA suffixes.
- No design, CSS, navigation, ThemeService, or LanguageService changes were made.

## Files Audited

### Data files

- `src/app/data/about.data.ts`
- `src/app/data/contact.data.ts`
- `src/app/data/documents.data.ts`
- `src/app/data/education.data.ts`
- `src/app/data/hero-slides.data.ts`
- `src/app/data/home-preview.data.ts`
- `src/app/data/journey.data.ts`
- `src/app/data/localized-data.ts`
- `src/app/data/projects.data.ts`
- `src/app/data/skills.data.ts`
- `src/app/data/ui-text.data.ts`
- `src/app/data/value.data.ts`

### Hardcoded text audit scope

- `src/app/pages/**/*.ts`
- `src/app/layout/**/*.ts`
- `src/app/shared/components/**/*.ts`
- `src/app/app.html`
- `src/app/core/constants/navigation.constants.ts`
- `src/app/models/viewport-preview.model.ts`
- `src/app/themes/theme.model.ts`

## Structural Differences Found

### 1. About data — `professionalValues` length mismatch

- EN contains 5 values: Responsibility, Maintainability, Teamwork, Documentation, Continuous improvement.
- ES contains 6 values: Responsabilidad, Mantenibilidad, Claridad, Pragmatismo, Confidencialidad, Consistencia.
- This is a real structural and narrative mismatch, not just translation variance.
- Recommended Sprint 25B decision: either translate the EN five-value set into ES or intentionally update both languages to the same six-value set.

### 2. Journey CTA links — array length mismatch

- EN contains 4 CTA links: View Projects, Explore Skills, How I Add Value, View Documents.
- ES contains 3 CTA links and is missing the Documents CTA equivalent.
- Recommended Sprint 25B fix: add `Ver Documentos` / `/documents` to ES or remove the EN documents CTA if no longer desired.

### 3. Projects — ES adds orphan `referencePlaceholders` keys

- `PROJECTS_ES` is created by spreading EN project objects and then `projectSpanishDetails`.
- For `expensux`, `ithelpcenter`, `discovery`, `testigo-electoral`, and `j3dev-portfolio`, ES explicitly sets `referencePlaceholders: undefined as never`.
- EN omits `referencePlaceholders` for those same projects.
- Runtime structure therefore differs because the ES object has the property with an `undefined` value while EN does not.
- Recommended Sprint 25B fix: remove the `referencePlaceholders: undefined as never` overrides and only define the key when a real object exists, or add the same optional key strategy to EN consistently.

### 4. Skills — ES adds orphan `backendGroup` keys to non-backend skills

- `SKILLS_ES` maps every EN skill and always writes `backendGroup: skill.backendGroup ? backendSkillGroupEsMap[skill.backendGroup] : undefined`.
- This creates an own `backendGroup` property with `undefined` on many ES non-backend skills where EN has no `backendGroup` property.
- Affected skill IDs detected: `sql-server`, `stored-procedures`, `microsoft-access`, `angular`, `typescript`, `scss`, `responsive-design`, `solid`, `layered-architecture`, `clean-code`, `api-design`, `vb-net`, `winforms`, `wpf`, `foxpro`, `visual-basic-6`, `git`, `github`, `codex`, `azure-learning`, `docker-learning`, `problem-solving`, `technical-analysis`, `documentation`, `team-collaboration`, `continuous-learning`, `maintainability-mindset`, `javascript`, `html`, `css`, `search-ux`, `spa-like-architecture`, `lazy-loading`, `ai-assisted-ux`, `enterprise-maintenance`, and `team-conventions`.
- Recommended Sprint 25B fix: change the ES mapper to conditionally spread `backendGroup` only when `skill.backendGroup` exists.

## Missing Fields

### Confirmed missing / mismatched fields

- `ABOUT_PAGE_DATA.en.professionalValues` does not align with `ABOUT_PAGE_DATA.es.professionalValues` in count or semantic list.
- `JOURNEY_CTA_LINKS.es` is missing the fourth EN link for documents.
- `PROJECTS.en[1..5]` omit `referencePlaceholders` while `PROJECTS.es[1..5]` include an undefined own property.
- `SKILLS.en` omits `backendGroup` for non-backend skills while `SKILLS.es` includes an undefined own property for many of the same items.

### Placeholder / pending fields detected

- Documents include `PDF pending publication` / `PDF pendiente de publicación` status labels and descriptions for cover letters and recommendation documents.
- `UI_TEXT` includes pending content for documents, skill evidence, about image, shared placeholder components, hero visual references, and footer copyright.
- Project data includes pending demo, video, company reference, official website, logo, GitHub URL, and visual asset labels.
- These are not necessarily bugs because the current portfolio intentionally protects private information and uses safe placeholders, but they should be reviewed before publication.

## Hardcoded Texts Detected

### Layout / shared UI

- `J3dev Portfolio` appears directly in the navbar brand text and footer project label.
- `J3` appears directly as the navbar logo fallback.
- Theme switcher Spanish titles are hardcoded in `SPANISH_THEME_TITLES` instead of `src/app/data/ui-text.data.ts`.
- Theme descriptions remain in `src/app/themes/theme.model.ts` and are used in `getThemeAriaLabel`; in Spanish mode, the title changes but the description remains English.
- Viewport switcher ARIA labels concatenate hardcoded English suffixes: `viewport preview` and `preview`.
- Viewport labels `Mobile`, `Tablet`, and `Desktop` live in `src/app/models/viewport-preview.model.ts`, not in localized data.
- Navigation constants still include English fallback labels (`Home`, `About`, `How I Add Value`, etc.). Runtime labels appear localized through `labelKey`, but these fallback labels are still hardcoded.

### Pages / shared components

- Page templates and shared component placeholders mostly consume `UI_TEXT` and localized data.
- No major page-section headings were found hardcoded inside pages outside data; the main visible exceptions are the layout/control metadata listed above.

## Potential Duplicates

Candidate repeated narratives to simplify later, without changing them in Sprint 25A:

- **Problem-first / understand before building** appears in About, Value, Home preview, Skills, and Journey.
- **Architecture before implementation / clear boundaries / layered design** appears in About, Value, Projects, Skills, and Journey.
- **Maintainability / long-term evolution / incremental improvement** appears across About, Value, Projects, Skills, Education, Journey, and Home preview.
- **Legacy modernization path** (`VB6`, `Access`, `WinForms`, `SQL Server`, `.NET`, `REST APIs`, `Angular`) appears in About, Journey, Skills, Value, and Projects.
- **Confidentiality / public-safe details / no proprietary information** appears heavily in Projects, Documents, Value, Skills, and Journey.

These duplicates are generally aligned with the portfolio strategy, but Sprint 25 polish should avoid making every section restate the same full career narrative.

## Potential Narrative Improvements

- **About professional values:** Decide whether the intended message is the EN set (responsibility, maintainability, teamwork, documentation, continuous improvement) or the ES set (responsibility, maintainability, clarity, pragmatism, confidentiality, consistency). Both are professionally valid, but the mismatch weakens bilingual integrity.
- **Documents:** The placeholders are clear, but several document CTAs may feel premature until PDFs exist. Consider making the publication state more explicit before public launch.
- **Projects:** Placeholder availability is safe and transparent, but repeated pending website/logo/reference language appears across LeverIT projects and can feel repetitive.
- **Skills:** The fallback partial string replacement strategy for Spanish descriptions is risky for future additions because it can create partially translated objects if a new skill is added without an explicit Spanish description.
- **Theme / viewport controls:** Spanish UI currently leaves some metadata in English (`viewport preview`, theme descriptions). This is small but visible to assistive technologies and browser tooltips.
- **Long paragraphs:** About introduction/adaptability and Education learning philosophy are among the longest localized strings and may benefit from tightening during polish.

## CTA Review

- Main navigation CTA labels are present in `UI_TEXT.nav` for EN and ES and structurally aligned.
- Home project preview CTA differs by composition: EN uses `View` + project + `context`; ES uses `Ver contexto de` + project + empty suffix. The generated Spanish phrase is acceptable, but the empty suffix should be treated as intentional and documented or refactored to full phrase templates.
- Skills and Journey project-detail CTAs use a similar EN prefix/suffix pattern while ES uses a full prefix and empty suffix. This is acceptable if rendered correctly, but empty suffix fields should not be confused with missing data.
- Project detail link CTA uses EN `Open` + label + `link`; ES uses `Abrir enlace` + label + empty suffix. This appears acceptable but should be verified in UI after Sprint 25B.
- Journey CTA links are structurally inconsistent because ES is missing the documents CTA.

## Recommended Fixes For Sprint 25B

1. Align `ABOUT_PAGE_DATA.professionalValues` so EN and ES have the same count, order, and professional ideas.
2. Add the missing ES documents CTA to `JOURNEY_CTA_LINKS` or remove the EN documents CTA if it was unintended.
3. Remove undefined own properties from `PROJECTS_ES` by avoiding `referencePlaceholders: undefined as never` in Spanish detail overrides.
4. Update the `SKILLS_ES` mapper so `backendGroup` is conditionally spread only when the EN skill has a backend group.
5. Move theme title/description localization into `UI_TEXT` or another data source so Spanish ARIA labels do not include English descriptions.
6. Localize viewport labels and ARIA suffixes or move them into `UI_TEXT`.
7. Decide whether brand strings (`J3dev Portfolio`, `J3`) should remain intentionally hardcoded constants or be moved into shared UI data.
8. Replace fragile Spanish fallback `.replace()` translation logic for skills with explicit data or a validation guard that flags missing translations.
9. After structural fixes, add a lightweight parity check script/test that compares EN/ES keys, array lengths, and placeholder markers for all localized data exports.

## Testing

- `node /tmp/audit-data.js` — Used a temporary local audit script to evaluate exported localized data objects, compare key parity, compare array lengths, and scan for placeholder markers / long strings. The script was not committed.
- `rg --files -g 'src/app/data/**' -g 'src/app/**/*.ts' -g 'src/app/**/*.html'` — Enumerated data files and Angular source audit scope.
- `rg -n "'[^']*[A-Za-zÁÉÍÓÚáéíóúÑñ][^']*'|\"[^\"]*[A-Za-zÁÉÍÓÚáéíóúÑñ][^\"]*\"|>[^<]*[A-Za-zÁÉÍÓÚáéíóúÑñ][^<]*<" src/app --glob '!src/app/data/**'` — Searched for visible/human-readable strings outside data files.
- `npm run build` — Required Sprint 25A build verification.
- `git diff --check` — Required whitespace / patch integrity verification.
