# Spectrum Jekyll Theme

[![Jekyll](https://img.shields.io/badge/Jekyll-%3E%3D%204.3-blue.svg)](https://jekyllrb.com/)

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

### Prerequisites
- Ruby 2.7+
- Bundler
- Jekyll 4.3+

### Installation

1. **Clone and setup**
   ```
   git clone https://github.com/dudududukim/spectrum.git
   cd spectrum
   bundle install
   ```

2. **Configure your site** by editing `_config.yml`:
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

3. **Run your site locally**:
   ```
   bundle exec jekyll serve
   ```

4. **Visit** `http://localhost:4000` to see your site!

### 🔮 Future: Gem Installation (Coming Soon)

We're working on distributing this theme as a gem for easier installation and updates:

```
# This will be available soon
gem "spectrum"
```

```
# _config.yml
theme: spectrum
```

**Stay tuned for the gem release!**

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
├── _tech-bites/       # Your tech content goes here
├── assets/
│   ├── css/
│   └── images/
└── _config.yml        # Main configuration
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

1. Fork this repository to your GitHub account
2. Rename it to `username.github.io` (replace `username` with your GitHub username)
3. Edit `_config.yml` with your information
4. Go to **Settings** > **Pages**
5. Select **Deploy from a branch** > **main**
6. Your site will be available at `https://username.github.io`

### Netlify

1. Fork this repository
2. Connect your forked repository to Netlify
3. Set build command: `bundle exec jekyll build`
4. Set publish directory: `_site`
5. Deploy!

### Vercel

1. Fork this repository
2. Import your forked repository to Vercel
3. Framework: **Jekyll**
4. Build command: `bundle exec jekyll build`
5. Output directory: `_site`

## 📋 Development Roadmap

- [x] Core theme functionality
- [x] Responsive design
- [x] Dark mode support
- [x] Tech Bites system
- [x] Photo gallery
- [ ] **Gem distribution** (In Progress)
- [ ] Theme customization UI
- [ ] Additional layout options
- [ ] Plugin ecosystem

## 🤝 Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/dudududukim/spectrum](https://github.com/dudududukim/spectrum). This project is intended to be a safe, welcoming space for collaboration.

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/spectrum.git`
3. Create a feature branch: `git checkout -b feature-name`
4. Make your changes and test locally
5. Submit a pull request

## 📄 License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## 💖 Support

If you like this theme, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs or suggesting features
- 🔗 Sharing it with others
- 💬 Joining discussions in Issues

## 👨‍💻 Author

**Duhyeon Kim**
- GitHub: [@dudududukim](https://github.com/dudududukim)
- LinkedIn: [Duhyeon Kim](https://www.linkedin.com/in/duhyeon-kim-6623082b1/)

---

Built with ❤️ using Jekyll and modern web technologies.

**Ready to get started?** Clone the repository and start building your awesome Jekyll site!