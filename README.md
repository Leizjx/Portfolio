# 👨‍💻 Mai Ngoc Phuc | Personal Portfolio

A sleek, modern, and highly interactive **Frontend Developer Portfolio**, designed to showcase my engineering capabilities, problem-solving skills, and deep understanding of the modern web ecosystem.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## 🎯 Project Overview & Engineering Decisions

This project is not just a static webpage; it is a live demonstration of how I approach **Frontend Architecture**, **State Management**, and **UI/UX Optimization**. 

Instead of relying purely on massive heavy-weight templates, I focused on building core functionalities to demonstrate foundational strength and coding discipline:

### ✨ Key Technical Highlights

- **🌐 Custom Multi-Language System (i18n):** Implemented a lightweight translation engine from scratch using `React.createContext()`. It switches between English and Vietnamese seamlessly without incurring the heavy bundle size payload of external libraries like `react-i18next`.
- **🌗 Native Light/Dark Mode:** Built a customized `ThemeContext` that fully hooks into the user's OS preference (`prefers-color-scheme`) and allows manual overrides. Controlled globally via optimized state mapping and custom CSS Variables.
- **🎭 High-Performance Animations:** Leveraged **Framer Motion** (`<ScrollReveal />`, `HoverButton`) for smooth viewport-triggered entrance animations. This deliberate choice avoids scroll-jank and reliably maintains high FPS rates across both mobile and desktop.
- **⚡ Custom Hooks & Interactions:** Programmed a custom React lifecycle logic for the Hero section's intelligent Typewriter effect, demonstrating solid control over the `useEffect` cleanup and Javascript `setInterval` APIs.
- **🧱 Component Modularity:** Code is strictly segregated into granular, reusable React 19 components (`Hero`, `Experience`, `Activities`, etc.) ensuring excellent scalability and maintainability.

## 🛠️ Tech Stack Core

- **Framework:** React 19 + Vite (Ensuring ultra-fast HMR & optimal build sizes)
- **Styling:** CSS + Tailwind CSS utilities
- **Animation Engine:** Framer Motion
- **Deployment:** Vercel / GitHub Pages

## 🚀 Getting Started

If you'd like to run this application locally to review the source code architecture:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Leizjx/Portfolio.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd Portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📬 Let's Connect

Currently looking for an environment to dedicate myself as a **Frontend Developer Intern**. Extremely motivated, eager to learn, and fully available for full-time work starting June 2026.

- **GitHub:** [github.com/Leizjx](https://github.com/Leizjx)
- **Email:** *Available upon request via GitHub/Contact form*

---
*“Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?'”* – Steve McConnell
