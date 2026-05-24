# Apurva Hindukaje - Premium Portfolio

A modern, premium dark-themed portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Premium Dark Theme** - Carefully crafted dark color scheme with gradient accents and smooth transitions

🎨 **Modern Design** - Clean, minimalist design with premium typography and spacing

📱 **Fully Responsive** - Mobile-first approach, works seamlessly on all devices

⚡ **Performance Optimized** - Fast loading times, optimized images, and smooth animations

🎭 **Smooth Animations** - Framer Motion animations for engaging user interactions

♿ **Accessible** - WCAG compliant with proper semantic HTML

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful SVG icons
- **Vite** - Lightning-fast build tool

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── AnimatedText.tsx
│   ├── ContactButton.tsx
│   ├── FadeIn.tsx
│   ├── LiveProjectButton.tsx
│   ├── Magnet.tsx
│   └── Navbar.tsx
├── sections/            # Page sections
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   └── ServicesSection.tsx
├── assets/              # Images and media
├── App.tsx              # Main app component
├── App.css              # Global styles
├── main.tsx             # Entry point
└── index.css            # Base styles
```

## Sections

### 1. Hero Section
- Animated introduction with hero image
- Call-to-action buttons
- Smooth scroll indicators

### 2. About Section
- Personal introduction
- Skills showcase in cards
- Statistics display
- Professional background

### 3. Services Section
- Full-Stack Development
- Responsive Web Design
- UI/UX Design
- Performance Optimization
- Hover effects with icons

### 4. Projects Section
- Featured project showcase
- Scrollable project cards with scale animation
- Project details and links
- Image galleries

### 5. Contact Section
- Multiple contact methods
- Social media links
- Call-to-action buttons
- Professional messaging

### 6. Footer
- Navigation links
- Brand section
- Copyright information
- Quick links

## Color Scheme

- **Background**: `#0C0C0C` (Deep black)
- **Text Primary**: `#D7E2EA` (Light blue-gray)
- **Text Secondary**: `#B0B8C4` (Medium blue-gray)
- **Accent**: `#3a5a7a` (Premium blue)
- **Borders**: `#2a3a4a` (Dark blue-gray)

## Animations & Interactions

- **FadeIn**: Smooth entrance animations with customizable delay and direction
- **Hover Effects**: Interactive hover states on cards and buttons
- **Scroll Animations**: Elements animate into view on scroll
- **Framer Motion**: Advanced motion design for premium feel
- **Mobile Menu**: Responsive navigation for small screens

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The project uses Vite for fast development and builds. CSS is handled through Tailwind CSS with a custom color theme defined in `index.css`.

### Key Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## Customization

### Colors
Update the color palette in `src/index.css`:

```css
@theme {
  --color-dark-bg: #0C0C0C;
  --color-light-text: #D7E2EA;
}
```

### Typography
The portfolio uses the "Kanit" font family from Google Fonts. Update the font weight and sizes by modifying Tailwind utilities.

### Content
Replace placeholder content in:
- `src/sections/AboutSection.tsx` - About information
- `src/sections/ServicesSection.tsx` - Service offerings
- `src/sections/ProjectsSection.tsx` - Project showcases
- `src/sections/ContactSection.tsx` - Contact information

## Performance

The portfolio is optimized for performance:
- Lazy loading images
- Optimized CSS (28.36 kB gzipped)
- Efficient JavaScript bundling (348.17 kB total, 109.49 kB gzipped)
- Smooth animations without jank
- Mobile-friendly responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

The portfolio includes:
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Mobile viewport configuration

## Contributing

Feel free to fork and customize this portfolio for your own use!

## License

This portfolio template is open source and available for personal and professional use.

## Contact

**Apurva Hindukaje**
- Email: apurva@example.com
- GitHub: [@apurvahindukaje](https://github.com/apurvahindukaje)
- LinkedIn: [@apurvahindukaje](https://linkedin.com/in/apurvahindukaje)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
