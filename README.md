# Learn Python

A modern, responsive learning platform that teaches Python from beginner to intermediate level. Learners can follow 20 structured lessons, run Python directly in the browser, complete exercises, take an instant-feedback quiz, track their progress, and build six practical projects.

![Learn Python course banner](https://img.shields.io/badge/Learn-Python-306998?style=for-the-badge&logo=python&logoColor=ffd43b)

## Live Demo

The production website is deployed on Vercel:

**https://learn-python-ridwaan.vercel.app/**

## Features

- 20 lessons arranged from beginner foundations to intermediate concepts
- Clear English explanations, highlighted Python examples, and copy buttons
- Practice exercise and suggested solution in every lesson
- Previous and next lesson navigation
- Browser-based Python playground powered by Pyodide
- Ten-question multiple-choice quiz with instant feedback and scoring
- Persistent lesson completion and progress bar using `localStorage`
- Six complete beginner projects with requirements, source code, and run steps
- Responsive sidebar navigation for desktop and mobile
- Light and dark themes saved across visits
- Accessible semantic HTML, keyboard-friendly controls, and reduced-motion support
- No backend, build step, account, or database required

## Lessons

1. Introduction to Python
2. Installing Python
3. Python Syntax
4. Variables
5. Data Types
6. Numbers
7. Strings
8. Booleans
9. Lists
10. Tuples
11. Sets
12. Dictionaries
13. If / Else Statements
14. For Loops
15. While Loops
16. Functions
17. Modules
18. File Handling
19. Error Handling
20. Object-Oriented Programming

## Included Projects

- Calculator
- Number Guessing Game
- To-Do List
- Password Generator
- Simple Quiz App
- Student Grade Calculator

## Technologies Used

- HTML5
- CSS3 with responsive layouts, custom properties, and animations
- Vanilla JavaScript (ES6+)
- Python examples
- [Pyodide](https://pyodide.org/) for Python execution in the browser
- [Prism.js](https://prismjs.com/) for syntax highlighting
- Browser `localStorage` for saved theme and course progress

## Project Structure

```text
python/
├── index.html                 # Main single-page learning experience
├── css/
│   └── style.css              # Theme, components, responsive layouts
├── js/
│   ├── app.js                 # Routing, UI, editor, theme, progress
│   ├── lessons.js             # 20 lessons and 6 project guides
│   └── quiz.js                # Quiz questions, score, and feedback
├── assets/
│   └── python-mark.svg        # Python-inspired site icon
├── lessons/
│   └── README.md              # Guide for extending lessons
├── projects/
│   └── README.md              # Guide for extending projects
├── .gitignore
├── README.md
└── existing Python files      # Original repository practice files preserved
```

## Run Locally

No package installation or build command is required.

### Option 1: Open directly

Open `index.html` in a modern browser. Most of the site works this way, but some browsers restrict CDN or clipboard features on `file://` pages.

### Option 2: Use a local server (recommended)

From the repository folder, run:

```bash
python -m http.server 8000
```

On Windows, if the `python` command is not recognized, use the Python launcher instead:

```powershell
py -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

An internet connection is required the first time the code editor loads because Pyodide and Prism.js are delivered from a CDN.

### Local server troubleshooting

- Stop the local server by returning to the terminal and pressing `Ctrl+C`.
- If port `8000` is already in use, choose another port, for example `python -m http.server 8080` (or `py -m http.server 8080` on Windows), then open [http://localhost:8080](http://localhost:8080).
- Run the command from the repository root so `index.html`, `css/`, `js/`, and `assets/` are served from the expected paths.

## Deploy to Vercel

This project is currently deployed as the Vercel project `learn-python-ridwaan`.

1. Import this GitHub repository into Vercel.
2. Keep the framework preset as **Other** because this is a static website.
3. Leave the build command empty.
4. Set the output directory to the repository root (`.`).
5. Deploy the `main` branch.

The production URL is [https://learn-python-ridwaan.vercel.app/](https://learn-python-ridwaan.vercel.app/).

## Alternative: Deploy to GitHub Pages

1. Open this repository on GitHub.
2. Select **Settings**.
3. In the left sidebar, select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Select **Save**.
7. Wait one or two minutes, then open `https://ridwaancabdi888-hub.github.io/python/`.

Because the project uses relative file paths and has no build step, it can be hosted directly from the repository root.

## Screenshots

Add screenshots here after the first GitHub Pages deployment:

```markdown
![Homepage](assets/screenshots/homepage.png)
![Interactive lesson](assets/screenshots/lesson.png)
![Python playground](assets/screenshots/playground.png)
```

## Browser Support

The platform is designed for current versions of Chrome, Edge, Firefox, and Safari. Pyodide requires WebAssembly support, which is available in modern browsers.

## Future Improvements

- Add more intermediate and advanced lessons
- Add optional lesson search and filters
- Add exercise test cases and automatic answer checking
- Cache Pyodide for improved offline use
- Add achievement badges and learning streaks
- Add Somali translations alongside English lessons
- Add downloadable completion certificates

## Author

**Ridwaan**  
Software Engineering student and aspiring developer  
GitHub: [@ridwaancabdi888-hub](https://github.com/ridwaancabdi888-hub)

## License

This educational project is open for learning and personal improvement.
