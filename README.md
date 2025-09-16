# Spectrum - Jekyll Personal Website Theme

[![Jekyll](https://img.shields.io/badge/Jekyll-%3E%3D%204.3-blue.svg)](https://jekyllrb.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Ruby](https://img.shields.io/badge/Ruby-%3E%3D%202.7-red.svg)](https://www.ruby-lang.org/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen.svg)]()
[![SEO](https://img.shields.io/badge/SEO-Ready-brightgreen.svg)]()
[![GitHub stars](https://img.shields.io/github/stars/dudududukim/spectrum.svg?style=social&label=Star)](https://github.com/dudududukim/spectrum)

A clean, minimal Jekyll template for personal websites with a focus on tech content and photography. Built for developers, designers, and content creators who want a professional, responsive site without the complexity.

## Features

- Minimal Design with excellent typography
- Fully Responsive, Mobile-first layout  
- Fast & Optimized CSS
- Dedicated Tech Blog and Photography sections
- Easy to Customize with modular SCSS
- SEO Ready with structured data
- Multiple Layouts including About, Blog, Gallery

## Quick Start

### Prerequisites
- Ruby 2.7+ and Bundler
- Git

### Installation
1. Clone the repo
```
git clone https://github.com/dudududukim/spectrum.git
cd spectrum
```
2. Install dependencies
```
bundle install
```
3. Configure your site
Edit `_config.yml` to update site details and social links.

4. Run locally
```
bundle exec jekyll serve
```
5. Open `http://localhost:4000` in your browser

## Adding Content

### Tech Bites (Blog Posts)
Create Markdown files in `_tech-bites/` with proper front matter.

### Photography (Films)
Add image files to `assets/images/films/` - these display automatically in the Films section.

## Customization

Change colors in `_sass/color-variables.scss`.

Modify typography in `_sass/base.scss`.

Update navigation, footer, and card styles in `_includes/` and `_sass/components.scss`.

## Deployment

Supports GitHub Pages, Netlify, and Vercel with standard Jekyll build commands.

## Project Structure

```
spectrum/
├── _includes/          # Reusable components
├── _layouts/           # Page templates  
├── _sass/             # Stylesheets
├── _tech-bites/       # Blog posts
├── assets/            # Images and CSS
├── _config.yml        # Site configuration
├── index.md           # Homepage
├── tech-bites.md      # Blog listing
├── films.md           # Photography page
└── README.md
```

## Development

Use `bundle exec jekyll serve` for local development with live reload.

## Contributing

Fork the repository, create a feature branch, commit your changes, and open a pull request.

## Author

**Duhyeon Kim**
- GitHub: [@dudududukim](https://github.com/dudududukim)
- LinkedIn: [Duhyeon Kim](https://www.linkedin.com/in/duhyeon-kim-6623082b1/)

## License

MIT License. See LICENSE file for details.

## Support

Submit issues via GitHub Issues or check the inline documentation in the code files.

---

## Show Your Support

**⭐ If you find this theme helpful, please give it a star on GitHub!** Your support helps me maintain and improve this project.

**⭐ Star this repository** to show your appreciation and help others discover this theme!

---

**Built with Jekyll**