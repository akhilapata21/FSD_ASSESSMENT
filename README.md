# Student Registration Form (React)

A modern, responsive React application for registering students into academic courses. Built with React, Vite, and CSS Modules.

## Features

- **Controlled Components**: Each input field (`Name`, `Email`, and `Course`) is bound to state using `value` and updated via `onChange`.
- **`useState` Hook**: Form inputs and registered records are managed cleanly using React's built-in `useState`.
- **Live Validation**:
  - Name: Required, minimum 2 characters.
  - Email: Required, formatted with valid email regex pattern.
  - Course: Required selection from course options.
- **Output Section**: Immediately displays entered student details below the form upon submission with avatar initials, student ID, enrolled course badge, email link, and submission timestamp.
- **Records Directory**: Maintains a log table of all submitted registrations with options to copy information or delete records.
- **Modular Styling (CSS Modules)**: Uses scoped CSS modules (`RegistrationForm.module.css`, `StudentCard.module.css`, `App.module.css`) with modern gradients, subtle shadows, and responsive layout.

## Project Structure

```text
Student Registration Form/
├── src/
│   ├── components/
│   │   ├── RegistrationForm.jsx          # Form with controlled inputs & validation
│   │   ├── RegistrationForm.module.css   # Scoped styling for the form
│   │   ├── StudentCard.jsx               # Details card & directory output section
│   │   └── StudentCard.module.css        # Scoped styling for output display
│   ├── App.jsx                           # Main layout & state integration
│   ├── App.module.css                    # App header & container styling
│   ├── index.css                         # Global CSS variables & typography
│   └── main.jsx                          # React 19 root entry
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed in the terminal (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
The optimized production files will be output to the `dist/` directory.
