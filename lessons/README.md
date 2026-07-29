# Lesson Content

The 20 interactive lessons are stored as structured objects in [`../js/lessons.js`](../js/lessons.js). Keeping the content in one data file lets the application generate the sidebar, course cards, lesson pages, navigation, exercises, and progress tracking consistently.

To add a lesson, append a new object to the `LESSONS` array with an `id`, `title`, `level`, `summary`, `content`, `code`, `exercise`, and `solution`. The optional `after` field adds explanatory HTML immediately after the main code example.

Choose a unique, lowercase, URL-safe `id` such as `list-comprehensions`. The application uses this value in the lesson URL (`#lesson/<id>`) and as the saved progress key, so changing it later resets completion for that lesson. Navigation, numbering, previous/next links, and the progress percentage update automatically from the array order.
