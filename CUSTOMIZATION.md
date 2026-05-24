# Quick Customization Guide

Get your portfolio personalized in 15 minutes!

## 1. Personal Information (5 mins)

### Update Navbar
**File**: `src/components/Navbar.tsx`
```tsx
<h1 className="text-2xl font-black uppercase tracking-tighter text-[#D7E2EA] sm:text-3xl md:text-4xl">
  Your Name Here  // ← Change this
</h1>
```

### Update Hero Section
**File**: `src/sections/HeroSection.tsx`
```tsx
<h1 className="hero-heading w-full text-[10vw] font-black uppercase...">
  Hi, I'm Your Name  // ← Change this
</h1>

<p className="mx-auto max-w-[600px] text-center...">
  Your Professional Title | Your Tagline  // ← Change this
</p>
```

### Update Footer
**File**: `src/sections/Footer.tsx`
```tsx
<h3 className="text-2xl font-black uppercase...">
  Your Name  // ← Change this
</h3>
```

## 2. Contact Information (3 mins)

**File**: `src/sections/ContactSection.tsx`

Replace all instances of:
- `apurva@example.com` → Your actual email
- `https://github.com/apurvahindukaje` → Your GitHub URL
- `https://linkedin.com/in/apurvahindukaje` → Your LinkedIn URL
- `https://twitter.com/apurvahindukaje` → Your Twitter URL

Example:
```tsx
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',  // ← Update
    link: 'mailto:your.email@example.com',  // ← Update
  },
  // ... more contacts
];
```

## 3. About Section (3 mins)

**File**: `src/sections/AboutSection.tsx`

Replace the introduction text:
```tsx
<AnimatedText
  text="Replace this text with your actual bio. Talk about your experience, passion, and what drives you as a developer."
  className="text-center font-light leading-relaxed text-[#B0B8C4]"
/>
```

Update skills array if desired:
```tsx
const skills = [
  { icon: Code2, label: 'Your Skill 1', desc: 'Tech stack' },
  // ... more skills
];
```

Update stats:
```tsx
{ number: 'Your Number', label: 'Your Label' }
```

## 4. Services Section (2 mins)

**File**: `src/sections/ServicesSection.tsx`

Update service titles, descriptions, and features:
```tsx
const services = [
  {
    icon: Code2,
    title: 'Your Service Title',
    description: 'Your service description here...',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  // ... more services
];
```

## 5. Projects Section (5 mins)

**File**: `src/sections/ProjectsSection.tsx`

Update the PROJECTS array:
```tsx
const PROJECTS = [
  {
    num: '01',
    category: 'Your Category',
    name: 'Your Project Name',
    url: 'https://your-project.com',
    col1Img1: 'image-url-1',
    col1Img2: 'image-url-2',
    col2Img: 'image-url-3',
  },
  // ... more projects
];
```

## 6. Hero Image (Optional)

**File**: `src/sections/HeroSection.tsx`

Replace the image URL:
```tsx
<img
  src="your-portrait-image-url"  // ← Change this
  alt="Your Name"  // ← Change this
  className="relative z-10 w-full object-contain drop-shadow-2xl"
/>
```

## 7. Meta Tags & SEO (2 mins)

**File**: `index.html`

```html
<meta name="description" content="Your professional description here" />
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:description" content="Your description" />
```

## 8. Color Customization (Optional)

**File**: `src/index.css`

```css
@theme {
  --color-dark-bg: #0C0C0C;  // ← Change background
  --color-light-text: #D7E2EA;  // ← Change primary text
  --font-sans: 'Kanit', sans-serif;  // ← Change font
}
```

Accent colors in sections:
- Primary Accent: `#3a5a7a`
- Dark Accent: `#2a3a4a`
- Light Accent: `#B0B8C4`

## 9. Typography Updates (Optional)

**File**: Global Tailwind classes

Update text sizes using Tailwind utilities:
- `text-sm` → `text-xs` (smaller)
- `text-lg` → `text-xl` (larger)
- Font weights: `font-light`, `font-medium`, `font-bold`, `font-black`

## 10. Testing Checklist

After customization:

- [ ] Update all text content
- [ ] Replace images with your own
- [ ] Update contact information
- [ ] Test all links work
- [ ] Check mobile responsiveness
- [ ] Verify all sections display correctly
- [ ] Test navigation menu
- [ ] Run `npm run build` successfully

## Command to Test Locally

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## Deploy When Ready

```bash
# Build for production
npm run build

# Deploy to your hosting (see DEPLOYMENT.md for options)
```

## Quick Find & Replace

Use VS Code's Find & Replace (Ctrl+H / Cmd+H) to quickly update:

1. Search: `apurva@example.com` → Replace: `your@email.com`
2. Search: `Apurva Hindukaje` → Replace: `Your Name`
3. Search: `apurvahindukaje` → Replace: `yourhandle`

## Tips

✅ Use relative paths for images in public folder
✅ Use HTTPS URLs for external images
✅ Keep descriptions concise and impactful
✅ Use your best professional photo for hero image
✅ Add real project links and screenshots
✅ Ensure all contact links are active

## Need Help?

- Check `PORTFOLIO_README.md` for feature details
- Check `DEPLOYMENT.md` for hosting options
- Check component files for prop details

---

**You're all set! Customize away and launch your portfolio! 🚀**
