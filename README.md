<div align="center">
  <img src="https://github.com/user-attachments/assets/ac8062cd-6725-480f-9fa7-9ea35e431b03" width="120" height="120" style="border-radius: 50%; object-fit: cover;">
  
  # Binary-Bridges-Tech 
  
</div>


Binary Bridges Tech is dedicated to bridging Palestine to the digital world through innovative web development and design services. This website showcases our commitment to quality, innovation, and cultural understanding with international standards.

# Binary Bridges Tech - Static Website

This is the static website for Binary Bridges Tech, a Palestinian-based software development company.

## Development

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

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Deployment

If you need to deploy manually:

```bash
npm run deploy
```

### GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Set folder to "/ (root)"
6. Save the settings

The site will be available at: `https://binary-bridges-tech.github.io/.github/`

## Build Output

The build process creates a `dist` folder with the following structure:
- `index.html` - Main HTML file
- `assets/` - Compiled CSS and JS files
- Other static assets

## Troubleshooting

If you see 404 errors for source files, make sure:
1. The build completed successfully
2. GitHub Pages is serving from the correct branch
3. The base path in `vite.config.ts` matches your repository name
