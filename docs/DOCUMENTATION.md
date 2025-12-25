# Portfolio Website - Documentation

## Overview

This is a professional portfolio website for Kshitij Zutshi, built with React, TypeScript, and Framer Motion. The design is inspired by the clean, minimal aesthetic of Sciemo with geometric network animations and professional typography.

## Design Philosophy

### Visual Identity
- **Clean & Minimal**: Light gray backgrounds, ample whitespace, focused content
- **Professional Typography**: Space Mono for headings (monospace, uppercase), Inter for body text
- **Accent Color**: Coral/Orange (#F06449) for CTAs and highlights
- **Geometric Animation**: Animated node network representing connected systems

### Key Features
1. **Animated Geometric Network**: Canvas-based visualization with moving nodes and connecting lines, blended into background
2. **Interactive Feature Cards**: Click to reveal detailed stats in a modal dialog
3. **Scroll-linked Timeline**: Experience section with scroll progress indicator
4. **GitHub Integration**: Real stats from [kshitijzutshi's GitHub profile](https://github.com/kshitijzutshi)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Framer Motion | Animations |
| Lucide React | Icons |
| CSS Variables | Theming |

## Project Structure

```
src/
├── components/
│   ├── Header/              # Fixed navigation with Download Resume CTA
│   ├── Hero/                # Landing section with geometric animation
│   │   └── Feature cards with clickable modals
│   ├── About/               # Profile with GitHub stats
│   ├── Experience/          # Timeline with scroll animation
│   ├── Projects/            # Project cards grid
│   ├── Skills/              # Categorized skill tags
│   ├── Education/           # Cards with university logos
│   ├── Contact/             # Contact form and social links
│   └── GeometricNetwork/    # Animated canvas visualization
├── data/
│   └── resume.ts            # All resume data including GitHub stats
├── index.css                # Design system and global styles
└── App.tsx                  # Main application component
```

## Resume Data

### Personal Information
- **Name**: Kshitij Zutshi
- **Title**: Software Engineer
- **Location**: Boston, MA, USA
- **Email**: kshitij.neu.21@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/kshitij-zutshi/
- **GitHub**: https://github.com/kshitijzutshi

### Professional Experience
1. **Wayfair LLC** - Software Engineer, Supply Chain Retail Tech (2024-Present)
2. **Abecedarian LLC** - Software Engineer, Contract (2024)
3. **Philips North America** - Software Engineer Co-Op (2023)
4. **WebileApps LLC** - Senior Software Engineer (2019-2021)
5. **Infosys Limited** - Software Engineer (2018-2019)

### Education
1. **Northeastern University** - MS Computer Software Engineering (2023)
2. **Politecnico di Milano** - Exchange Student, Ingegneria Elettronica (2018)
3. **Amrita Vishwa Vidyapeetham** - BTech Computer & Electronics Engineering (2018)

### GitHub Statistics (from profile)
- **Public Repositories**: 165
- **Total Pull Requests**: 151+
- **Followers**: 76
- **Achievements**: Starstruck, YOLO, Quickdraw, Pull Shark x3, Arctic Code Vault Contributor

## Component Details

### GeometricNetwork
Canvas-based animation with:
- 8 nodes with random movement
- Connecting lines between nearby nodes
- Coral/orange (#F06449) node color
- Gradient mask to blend into background
- 40% opacity for subtle effect

### Feature Cards Modal
Interactive cards that open a modal with:
- Dark, semi-transparent background
- Glassmorphism effect
- 4 statistics per feature
- Smooth enter/exit animations

### Timeline
Scroll-linked animation with:
- Progress line that fills as you scroll
- Dot indicators for each job
- Hover effects on timeline items

## Deployment

### Vercel (Recommended)
```bash
npx vercel
```

Or connect GitHub repository for automatic deployments.

### Build Commands
```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-accent: #F06449;
  --color-bg: #F5F5F5;
  --color-text: #1A1A1A;
}
```

### Content
Edit `src/data/resume.ts` to update:
- Personal information
- Work experience
- Education
- Skills
- GitHub stats

### Fonts
Uses Google Fonts:
- **Space Mono**: Headings, labels
- **Inter**: Body text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for off-screen content
- CSS-based animations where possible
- Canvas animation optimized with requestAnimationFrame
- Minimal bundle size (~340KB gzipped)

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus states for interactive elements
- Screen reader compatible

## License

MIT License - Free to use and modify.

---

Built with ❤️ by Kshitij Zutshi
