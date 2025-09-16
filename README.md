# Spectrum Jekyll Theme

[![Gem Version](https://badge.fury.io/rb/spectrum.svg)](https://badge.fury.io/rb/spectrum)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, minimal Jekyll theme designed for developers and tech enthusiasts. Perfect for personal websites, tech blogs, and portfolios with a focus on readability and performance.

## ✨ Features

- **🎨 Minimal Design**: Clean, academic-style layout with focus on content
- **📱 Fully Responsive**: Mobile-first design that works on all devices  
- **🌙 Dark Mode**: Built-in dark/light theme toggle with system preference detection
- **⚡ Fast Performance**: Optimized CSS and minimal JavaScript for quick loading
- **📝 Tech Bites**: Dedicated section for tech insights and bite-sized content
- **🔍 SEO Optimized**: Built-in SEO tags and structured data
- **♿ Accessible**: WCAG compliant with proper focus indicators and semantic HTML
- **🎯 Photography Gallery**: Beautiful image showcase with smooth animations

## 🚀 Quick Start

### Installation

Add this line to your Jekyll site's `Gemfile`:

```
gem "spectrum"
```

And add this line to your Jekyll site's `_config.yml`:

```
theme: spectrum
```

And then execute:
```
$ bundle install
```

Or install it yourself as:
```
$ gem install spectrum
```

### Setup

1. **Configure your site** by editing `_config.yml`:

```
title: "Your Name"
description: "Your website description"
url: "https://yoursite.com"
author: "Your Name"

personal:
  name: "Your Display Name"
  bio: "Developer passionate about technology, design, and continuous learning"
  location: "Your Location"

social:
  enabled: true
  platforms:
    github:
      enabled: true
      url: "https://github.com/username"
    linkedin:
      enabled: true
      url: "https://linkedin.com/in/username"
    email:
      enabled: true
      url: "your@email.com"
```

2. **Run your site locally**:
```
bundle exec jekyll serve
```

3. **Visit** `http://localhost:4000` to see your site!

## 📖 Usage

### Creating Tech Bites

Create files in `_tech-bites/` directory:

```
***
title: "Your Tech Insight Title"
date: 2024-01-15
categories: ["JavaScript", "Web Dev"]
description: "Brief description of your tech insight"
reading_time: 3
***

Your content here using Markdown...
```

### Adding Photos

Place images in `assets/images/films/` directory. The theme will automatically generate a photo gallery with smooth animations.

### Customization

#### Colors & Theme

The theme uses CSS custom properties for easy customization:

```
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --bg-color: #ffffff;
  --text-color: #2c3e50;
}
```

#### Typography

Modify typography by overriding the default Sass variables:

```
$font-family: 'Your-Font', Lato, sans-serif;
$base-font-size: 1rem;
$line-height: 1.6;
```

## 🏗️ File Structure

```
├── _includes/           # Theme components
│   ├── site-navigation.html
│   ├── tech-bite-card.html
│   └── gallery-track.html
├── _layouts/           # Page templates
│   ├── default.html
│   ├── about.html
│   ├── tech-bite-list.html
│   └── tech-bite.html
├── _sass/             # Theme stylesheets
│   ├── base.scss
│   ├── components.scss
│   ├── layouts.scss
│   └── utilities.scss
└── assets/
    └── css/
        └── main.scss
```

## 🎨 Customization Guide

### Homepage Sections

Control which sections appear on your homepage:

```
homepage_sections:
  tech_bites_preview:
    enabled: true
    show_count: 5
    custom_title: "Recent Tech Insights"
  
  films_preview:
    enabled: true
    show_count: 6
    animation_duration: 60
```

### Navigation

Customize your site navigation in `_data/navigation.yml`:

```
primary:
  - title: "Home"
    url: "/"
  - title: "Tech Bites"  
    url: "/tech-bites/"
  - title: "About"
    url: "/about/"
```

## 🚢 Deployment

### GitHub Pages

1. Push your site to GitHub
2. Go to **Settings** > **Pages**
3. Select **Deploy from a branch** > **main**
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Deploy!

### Vercel

1. Import your repository to Vercel
2. Framework: **Jekyll**
3. Build command: `bundle exec jekyll build`
4. Output directory: `_site`

## 🤝 Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dudududukim/spectrum. This project is intended to be a safe, welcoming space for collaboration.

## 📄 License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## 💖 Support

If you like this theme, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs or suggesting features
- 🔗 Sharing it with others
- ☕ [Buying me a coffee](https://github.com/sponsors/dudududukim)

## 👨‍💻 Author

**Duhyeon Kim**
- GitHub: [@dudududukim](https://github.com/dudududukim)
- LinkedIn: [Duhyeon Kim](https://www.linkedin.com/in/duhyeon-kim-6623082b1/)

---

Built with ❤️ using Jekyll and modern web technologies.