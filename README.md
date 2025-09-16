# Spectrum - Jekyll Personal Website

A clean, minimal Jekyll template for personal websites with tech content focus.

## Features

- **Minimal Design**: Clean, academic-style layout
- **Tech Content**: Dedicated section for tech insights
- **Dark Mode**: Built-in dark/light theme toggle
- **Responsive**: Mobile-first design
- **Fast**: Optimized for performance

## Quick Start

### Prerequisites
- Ruby 2.7+
- Bundler

### Installation

1. **Clone and setup**
   ```bash
   git clone https://github.com/dudududukim/spectrum.git
   cd spectrum
   bundle install
   ```

2. **Configure your site**
   Edit `_config.yml` with your information:
   ```yaml
   title: "Your Name"
   description: "Your website description"
   url: "https://yoursite.com"
   author: "Your Name"

   personal:
     name: "Your Display Name"
     bio: "Your bio"
     social_links:
       github: "username"
       linkedin: "username"
       email: "your@email.com"
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```
   Open `http://localhost:4000`

## Adding Content

### Tech Bites
Create files in `_tech-bites/` with this format:

```yaml
---
title: "Your Title"
date: 2024-01-15
categories: ["JavaScript", "Web Dev"]
description: "Brief description"
---
Your content here...
```

## Customization

### Colors & Theme
Edit `_data/theme.yml`:
```yaml
colors:
  primary: "#3498db"
  secondary: "#2c3e50"
  accent: "#e74c3c"
```

### Typography
Modify `_sass/_base.scss` for fonts and spacing.

## Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings > Pages
3. Select "Deploy from main branch"
4. Your site will be at `https://username.github.io/spectrum`

### Netlify/Vercel
- **Build command**: `bundle exec jekyll build`
- **Publish directory**: `_site`

## File Structure

```
├── _layouts/          # Page templates
├── _includes/         # Components
├── _sass/            # Styles
├── _tech-bites/      # Tech content
├── assets/           # Static files
└── _config.yml       # Configuration
```

## License

MIT License - feel free to use and modify.

---

**Built with Jekyll** 🚀