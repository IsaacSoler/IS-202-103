# Copilot instructions for IS-202-103

Purpose
- Help AI coding agents be productive in this repository: a small student web assignment collection (HTML/CSS). Provide repository-specific patterns, key files, and examples.

Quick context / big picture
- This repo contains simple static web pages for class assignments. Main folders:
  - `Assignment1/` — student's assignment (resume page) using `index.html` and `style.css` (note: current link in `index.html` references `styles.css`).
  - `css – My Site/` — another assignment with `index.html` and `style.css`.
  - Root `README.md` — one-line project title.

What AI agents should know (concise)
- This is a static website repository (no build tools, no package.json). Changes should preserve file layout and relative links.
- File naming and casing matters on some hosts — keep `style.css` vs `styles.css` consistent with references.
- Keep edits minimal and focused: student work is expected to be simple HTML/CSS files, not new frameworks or build systems.

Patterns and examples
- CSS linkage: HTML files use a link tag to a stylesheet in the same folder (e.g., `<link rel="stylesheet" href="style.css">`). When editing `index.html`, update the correct href.
- Basic structure: files are plain HTML (doctype, head, body). Avoid adding server-side code.
- Example fix: `Assignment1/index.html` currently links `styles.css` but the repository file is `style.css` (or vice-versa). Align the filename or update the link.

Quick-start editing rules
- For visual changes, edit the matching `style.css` in the same folder as the `index.html` you modify.
- For HTML structure changes, prefer semantic tags and correct nesting. Keep modifications to a single assignment folder unless instructed.

Developer workflows
- There are no automated tests or build steps; verify changes by opening the modified `index.html` in a browser.
- On Windows, a quick check can be done by opening the file in the default browser from PowerShell: `Start-Process .\\Assignment1\\index.html`.

Conventions & caveats
- Do not add transpilers, package managers, or node_modules. This repo is educational and intentionally simple.
- Preserve student authorship in file content (do not remove signature lines like `&copy; Isaac Soler`).

Edges and safety
- Avoid network calls or external dependency installs.
- Don't rewrite the repo into a new framework. Keep changes educational and minimal.

Files worth looking at
- `Assignment1/index.html` — resume page; note stylesheet filename mismatch.
- `css – My Site/index.html` — lab page referencing `style.css`.
- `README.md` — repo title only.

If unsure
- Ask the user which assignment or file they want modified. Provide a one-paragraph summary of the intended change before applying edits.

---
Please review these instructions and tell me if you'd like the file expanded with more examples or a different tone.