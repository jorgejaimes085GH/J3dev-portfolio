# Public Asset Organization

This folder is reserved for static, public-facing portfolio assets. Keep asset types separated so documents, media, profile imagery, icons, logos, and backgrounds remain easy to maintain as the portfolio grows.

Do not add private, proprietary, or unapproved binary assets. Real PDFs, logos, photos, screenshots, videos, and project media should be added only when they are finalized and approved for public use.

## Folder Structure and Rules

### `documents/`

Use this area for professional files intended to be downloaded or reviewed directly, such as:

- CVs and resumes in `documents/resumes/`
- Cover letters in `documents/cover-letters/`
- Recommendation letters in `documents/recommendations/`
- Future certificates or other professional documents, organized in clearly named subfolders

### `project-media/`

Use this area for project-specific visual or demo assets, such as screenshots, videos, walkthroughs, and demo thumbnails.

Current project folders:

- `project-media/worker/`
- `project-media/expensux/`
- `project-media/j3dev-portfolio/`
- `project-media/ithelpcenter/`
- `project-media/discovery/`
- `project-media/testigo-electoral/`

### `profile/`

Use this area for Jorge's personal profile and branding imagery:

- Profile photos in `profile/photos/`
- Avatar images in `profile/avatar/`

### `images/logos/`

Use this area for larger representative logo visuals:

- Project logos in `images/logos/projects/`
- Company logos in `images/logos/companies/`
- Skill logos in `images/logos/skills/`
- Document logos in `images/logos/documents/`

### `images/icons/`

Use this area only for small UI and system icons, such as button icons, actions, navigation icons, status indicators, pin/unpin, external link, close, download, and print icons.

- System icons in `images/icons/system/`
- Action icons in `images/icons/actions/`
- Navigation icons in `images/icons/navigation/`

### `images/backgrounds/`

Use this area for decorative and contextual background images:

- Hero backgrounds in `images/backgrounds/hero/`
- Section backgrounds in `images/backgrounds/sections/`
- Theme backgrounds in `images/backgrounds/themes/`

## Maintenance Guidelines

- Keep file names descriptive, lowercase, and hyphenated where possible.
- Do not mix asset types across folders.
- Do not add external libraries or backend logic for asset handling.
- Prefer incremental additions and keep the application buildable after asset updates.
- Use `.gitkeep` files only to preserve intentionally empty folders in Git.
