# Course Grade Dashboard

A clean, responsive web dashboard for tracking academic progress — built with vanilla HTML and CSS.

## Preview

> A card-based layout with a styled data table, hover effects, and zebra-striping for quick grade scanning.

---

## Features

- **Modern UI** — Card layout with a professional color palette and subtle depth
- **Readable Table** — Zebra-striping and hover effects for easy scanning
- **Responsive Design** — Centered container that adapts to any screen size
- **JavaScript-Ready** — Empty `#table-body` designed for dynamic data injection

---

## Project Structure
├── index.html    # Dashboard structure
├── style.css     # Styling and layout rules
└── README.md     # Project documentation
---

## Getting Started

**Prerequisites:** Any modern browser — Chrome, Firefox, Edge, or Safari.

**Installation:**

1. Clone the repository:
```bash
   git clone https://github.com/your-username/course-grade-dashboard.git
```
2. Make sure `index.html` links to your stylesheet inside `<head>`:
```html
   <link rel="stylesheet" href="style.css">
```
3. Open `index.html` in your browser.

---

## Usage

The table body (`id="table-body"`) is intentionally empty — ready for dynamic data injection via JavaScript. To test it manually, add rows directly inside the `<tbody>`:
```html
<tr>
  <td>Introduction to Computer Science</td>
  <td>A</td>
</tr>
```

---

## Customization

| What | Where | How |
|---|---|---|
| Background color | `style.css` | Edit `--background-color` |
| Header color | `style.css` | Update the header hex code |
| Dashboard width | `style.css` | Adjust `#dashboard` `max-width` |

---

## License

Open-source and free to use for educational purposes.