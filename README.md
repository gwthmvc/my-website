Course Grade Dashboard
A clean, responsive web interface designed to display academic progress. This project features a centralized dashboard with a styled data table to track course names and their respective grades.

🚀 Features
Modern UI: Uses a card-based layout with subtle shadows and a professional color palette.

Dynamic Table: Styled with zebra-striping and hover effects for better data readability.

Responsive Design: Centered container that adapts to different screen sizes.

Clean Typography: Uses a sans-serif stack for high legibility.

📂 Project Structure
Plaintext
├── index.html   # The structure of the dashboard
├── style.css    # Modern styling and layout rules
└── README.md    # Project documentation
🛠️ Getting Started
Prerequisites
You only need a modern web browser (Chrome, Firefox, Edge, or Safari).

Installation
Clone this repository or download the source code.

Ensure your index.html links to your style.css in the <head> section:

HTML
<link rel="stylesheet" href="style.css">
Open index.html in your browser.

🖥️ Usage
The table body is currently empty (id="table-body"), making it perfect for dynamic data injection via JavaScript. To add data manually for testing, insert rows into the <tbody> like this:

HTML
<tr>
    <td>Introduction to Computer Science</td>
    <td>A</td>
</tr>
🎨 Customization
Colors: Change the --background-color or header hex codes in style.css to match your school colors.

Width: Adjust the #dashboard max-width to make the container wider or narrower.

📝 License
This project is open-source and free to use for educational purposes.
