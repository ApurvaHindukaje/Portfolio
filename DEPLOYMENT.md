# Deployment Guide

## Deployment Options

### 1. Vercel (Recommended)
Vercel is the easiest way to deploy Vite applications.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### 2. Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages
```bash
# Build the project
npm run build

# Deploy to GitHub Pages using gh-pages
npm install -D gh-pages
npx gh-pages -d dist
```

### 4. Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### 5. AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Configure AWS CLI and deploy
aws s3 sync dist/ s3://your-bucket-name/
```

## Environment Setup

### Before Deployment

1. **Update Contact Information**
   - Replace placeholder emails in `ContactSection.tsx`
   - Update social media links
   - Add your actual contact details

2. **Update Content**
   - Replace all placeholder text
   - Update project information
   - Add your own images and portfolio pieces

3. **Optimize Images**
   - Compress all images
   - Use modern formats (WebP)
   - Consider using image optimization services

4. **SEO Configuration**
   - Update meta tags in `index.html`
   - Add OpenGraph images
   - Update sitemap if needed

## Performance Optimization

### Current Performance Metrics
- HTML: 1.38 kB (gzipped: 0.62 kB)
- CSS: 28.36 kB (gzipped: 5.56 kB)
- JavaScript: 348.17 kB (gzipped: 109.49 kB)

### Further Optimization Tips

1. **Image Optimization**
   - Use `next/image` if migrating to Next.js
   - Implement lazy loading for portfolio images
   - Use WebP format with fallbacks

2. **Code Splitting**
   - Lazy load components that are below the fold
   - Dynamic imports for heavy sections

3. **Caching**
   - Configure proper cache headers
   - Use service workers for offline support

## Domain Setup

### Steps to Connect Custom Domain

1. **Purchase Domain**
   - Buy from GoDaddy, Namecheap, or preferred registrar

2. **Update DNS Records**
   - Point domain to deployment service
   - Vercel: Use nameservers or CNAME record
   - Netlify: Update nameservers or DNS records

3. **SSL Certificate**
   - Most platforms provide free SSL
   - Ensure HTTPS is enabled

4. **Update Portfolio**
   - Update title tag in `index.html`
   - Update meta tags with your domain
   - Update social media links

## Monitoring & Analytics

### Google Analytics
```html
<!-- Add to index.html before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}
```

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Test on mobile devices
- [ ] Verify contact form works
- [ ] Check loading performance (Lighthouse)
- [ ] Test SEO (Meta tags, Open Graph)
- [ ] Verify analytics tracking
- [ ] Test in different browsers
- [ ] Check responsive design on all breakpoints
- [ ] Test accessibility with screen readers
- [ ] Verify forms and CTAs work correctly
- [ ] Check 404 error page
- [ ] Monitor for JavaScript errors

## Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Check Node.js version matches deployment environment
- Ensure all environment variables are set
- Verify build output exists in `dist/` folder

### Performance Issues
- Run Lighthouse audit
- Check for unused dependencies
- Optimize images and bundles
- Enable compression on server

## Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor deployment health

### Content Updates
- Update projects regularly
- Keep contact information current
- Refresh skills and services as needed

---

Need help? Check the main README.md or documentation
