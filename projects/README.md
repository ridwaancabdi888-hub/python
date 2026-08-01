# Project Content

The six beginner project guides and their complete Python source code are stored in the `PROJECTS` array in [`../js/lessons.js`](../js/lessons.js). The website renders each guide in an accessible modal with requirements and run instructions.

## Project schema

Each object in `PROJECTS` must include:

- `id` — a unique, filename-safe identifier. The UI uses it to find the project and to suggest a `.py` filename.
- `icon` — the short symbol displayed on the project card.
- `title` — the project name.
- `description` — a brief summary shown on the card and in the modal.
- `tags` — an array of topic labels.
- `requirements` — an array of steps or capabilities rendered as a list.
- `code` — the complete Python example displayed in the source-code block.

Keep every `id` unique so the correct project opens when a learner selects a card.

## Verify a project change

Serve the repository locally, open the **Projects** section, and select the edited card. Confirm that its description, tags, requirements, source code, and suggested filename all render correctly.
