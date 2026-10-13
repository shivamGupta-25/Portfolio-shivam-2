# Shivam Raj Gupta — Personal Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE.md)

<p align="center">
  A clean, modern, and high-performance developer portfolio built with <strong>Next.js 16</strong>, <strong>React 19</strong>, <strong>Tailwind CSS v4</strong>, <strong>Motion</strong>, and <strong>Radix UI</strong>.
</p>

[**Explore Live Demo »**](https://shivamgupta-25.vercel.app/)

</div>

---

## 📌 Overview

This repository hosts the personal portfolio of **Shivam Raj Gupta** — Master's student in Operational Research working at the intersection of **Data Science**, **Machine Learning**, **Optimization**, and **Data Analytics**.

Designed with a modern bento-inspired aesthetic, the portfolio showcases research, projects, categorized work experiences, technical skill sets, and real-time interactive widgets.

---

## ✨ Features

- **⚡ Modern & Fast**: Built on Next.js 16 (App Router) and React 19 with static optimization for lightning-fast page loads.
- **🌤️ Live Weather & Local Time**: Displays real-time weather conditions and local time in New Delhi via the Open-Meteo API.
- **💼 Interactive Work Experience**:
  - Support for flat chronological view or categorized grouping (Full-Time vs. Internships).
  - Expandable role progression timeline to display multiple roles, promotions, and tenure transitions within a single company.
- **🛠️ Categorized Skills Matrix**: Filtered skill groups (Data Analysis, Databases, BI Tools, AI/ML, Advanced Excel) rendered with custom SVGs.
- **🚀 Featured Projects**: Showcase cards with live preview links, GitHub repository links, video/image media, and tech stack tags.
- **🌗 Theme Toggle**: Smooth Dark / Light mode switching with theme persistence via `next-themes`.
- **🎭 Micro-interactions & Polish**: Fluid animations and staggered blur-fade entrances powered by `motion`.
- **⚙️ Single Data Config**: Effortlessly manage all portfolio content (bio, experiences, education, skills, socials) from [`src/data/resume.tsx`](./src/data/resume.tsx).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components & Icons**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **Markdown Rendering**: [react-markdown](https://github.com/remarkjs/react-markdown) & [rehype-raw](https://github.com/rehypejs/rehype-raw)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
├── public/                 # Static assets (images, icons, resumes)
├── src/
│   ├── app/                # Next.js App Router (pages, layout, globals.css)
│   ├── components/         # Reusable UI components
│   │   ├── magicui/        # Custom animation and visual effect primitives
│   │   ├── section/        # Page section modules (Work, Projects, Contact)
│   │   ├── ui/             # Radix & base UI primitives + custom SVG icons
│   │   ├── datetime-weather.tsx  # Live time & weather widget
│   │   └── navbar.tsx      # Floating dock / navigation bar
│   ├── data/
│   │   └── resume.tsx      # Central configuration file for all portfolio data
│   └── lib/                # Utility helpers (cn, utils)
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js 18.0.0 or higher** installed on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/shivamGupta-25/Portfolio-shivam-2.git
cd Portfolio-shivam-2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio live.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## ⚙️ Customization

All portfolio data is centralized in a single file:

👉 [**`src/data/resume.tsx`**](./src/data/resume.tsx)

You can easily modify:
- **Personal Details**: Name, tagline, bio, contact emails, and social URLs.
- **Weather Location**: Latitude, longitude, and timezone for the live weather widget.
- **Work Experience**: Add entries, define sub-roles/promotions in the `roles` array, or toggle `SHOW_WORK_BY_CATEGORY`.
- **Education & Skills**: Add degrees, certifications, or custom skill groups.
- **Projects**: Title, dates, description, tags, GitHub links, and live previews.

---

## 📬 Contact & Connect

- **Portfolio**: [shivamgupta-25.vercel.app](https://shivamgupta-25.vercel.app/)
- **GitHub**: [@shivamGupta-25](https://github.com/shivamGupta-25)
- **LinkedIn**: [Shivam Raj Gupta](https://www.linkedin.com/in/shivam-raj-gupta/)
- **Email**: [guptashivam25oct@gmail.com](mailto:guptashivam25oct@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE.md).
