# Lesson Content

The 20 interactive lessons are stored as structured objects in [`../js/lessons.js`](../js/lessons.js). Keeping the content in one data file lets the application generate the sidebar, course cards, lesson pages, navigation, exercises, and progress tracking consistently.

To add a lesson, append a new object to the `LESSONS` array with an `id`, `title`, `level`, `summary`, `content`, `code`, `exercise`, and `solution`.
