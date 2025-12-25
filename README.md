# Kshitij Zutshi - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, clean design, and mobile-first approach.

## 🚀 Live Demo

[View Live Site](https://kshitij-portfolio.vercel.app)

## ✨ Features

- **Modern Design** - Clean, professional aesthetic with Space Mono + Inter typography
- **Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Interactive Projects** - Expandable project cards with detailed views
- **Dynamic Content** - Experience and education timelines with scroll animations
- **Tech Icon Integration** - Uses Devicon CDN for technology logos
- **Downloadable Resume** - Direct PDF download functionality

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS Modules with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React, Devicon CDN
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/kshitijzutshi/kshitij-portfolio.git

# Navigate to directory
cd kshitij-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

This project is configured for Vercel deployment:

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically detect Vite and deploy

Or deploy manually:
```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/       # Navigation header
│   ├── Hero/         # Landing section with feature cards
│   ├── About/        # About section with GitHub stats
│   ├── Experience/   # Work experience timeline
│   ├── Education/    # Education cards
│   ├── Skills/       # Skills grid
│   ├── Projects/     # Project cards with detail view
│   ├── Contact/      # Contact form
│   ├── GeometricNetwork/  # Animated background
│   └── TechIcon/     # Technology icon component
├── data/
│   └── resume.ts     # Resume data (experience, education, skills)
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Kshitij Zutshi**
- LinkedIn: [kshitij-zutshi](https://www.linkedin.com/in/kshitij-zutshi/)
- GitHub: [kshitijzutshi](https://github.com/kshitijzutshi)
