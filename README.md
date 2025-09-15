# Jekyll Terminal - Personal Website Template

A minimal, clean Jekyll template inspired by Jon Barron's aesthetic, focused on tech content with a configuration-first approach for easy personalization.

## Features

- **Minimal Design**: Clean, academic-style layout without navigation clutter
- **Tech-Focused**: Dedicated section for tech insights and discoveries
- **Interactive Color Picker**: Personalized theme colors on first visit
- **Responsive Design**: Mobile-first approach with clean typography
- **Dark Mode Support**: Toggle between light and dark themes
- **Performance Optimized**: Fast loading with modern web standards
- **Breadcrumb Navigation**: Simple content navigation within pages

## Quick Start

### Prerequisites

- Ruby 2.7 or higher (Ruby 3.4.0+ supported with additional gems)
- Bundler gem
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jekyll-terminal.git
   cd jekyll-terminal
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Customize your site**
   - Edit `_config.yml` with your personal information
   - Modify theme settings for color presets

4. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4000`

## Ruby 3.4.0+ Compatibility

This template includes compatibility fixes for Ruby 3.4.0 and later versions. Starting from Ruby 3.4.0, several standard library gems (csv, base64, bigdecimal, logger) are no longer included by default and must be explicitly added to the Gemfile.

The following gems are automatically included in this template:
- `csv` - For CSV file processing
- `base64` - For base64 encoding/decoding
- `bigdecimal` - For high-precision decimal arithmetic
- `logger` - For logging functionality

If you encounter any "cannot load such file" errors related to these libraries, make sure you've run `bundle install` after cloning the repository.

## Configuration

### Basic Setup

Edit `_config.yml` to customize your site:

```yaml
# Site Information
title: "Your Name"
description: "Personal website description"
url: "https://yoursite.com"
author: "Your Name"

# Personal Customization
personal:
  name: "Your Display Name"
  tagline: "Your tagline or subtitle"
  bio: "A brief personal introduction"
  social_links:
    github: "username"
    linkedin: "username"
    email: "your@email.com"
```

### Theme Customization

#### Colors
- **Default Color**: Set your primary brand color
- **Dark Mode**: Toggle dark mode support

```yaml
theme:
  default_color: "#3498db"
  dark_mode: true
```

#### Typography
- **Font Family**: Choose your preferred font
- **Font Fallback**: Set fallback fonts

```yaml
theme:
  font_family: "JetBrains Mono"
  font_fallback: "Monaco, 'Lucida Console', monospace"
```

### Section Configuration

#### Tech Bites
```yaml
sections:
  tech_bite:
    enabled: true
    main_page_count: 5
    title: "Tech Bites"
    description: "Daily tech insights"
    show_categories: true
    show_dates: true
```


## Content Management

### Adding Tech Bites

Create new files in `_tech-bites/` with the following front matter:

```yaml
---
title: "Your Tech Bite Title"
date: 2024-01-15
categories: ["JavaScript", "Web Development"]
tags: ["tips", "tutorial", "best-practices"]
description: "Brief description of your tech bite"
reading_time: 5
---
```


## Customization Levels

### Level 1: Basic Configuration
- Edit `_config.yml` for site-wide settings
- Update personal information and social links
- Modify section titles and descriptions

### Level 2: Theme Customization
- Edit theme settings in `_config.yml` for color presets
- Customize typography and spacing

### Level 3: Advanced Styling
- Override CSS custom properties in `_sass/_color-variables.scss`
- Modify component styles in `_sass/_components.scss`
- Add custom JavaScript functionality

### Level 4: Layout Modifications
- Edit layout files in `_layouts/`
- Modify includes in `_includes/`
- Create custom page templates

## File Structure

```
├── _layouts/           # Page templates
├── _includes/          # Reusable components
├── _sass/             # SCSS stylesheets
├── _tech-bites/       # Tech bite posts collection
├── assets/            # Static assets
│   ├── css/           # Compiled stylesheets
│   └── js/            # JavaScript files
├── _config.yml        # Main configuration
└── README.md          # This file
```

## Deployment

### GitHub Pages

1. Push your repository to GitHub
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Jon Barron's clean Jekyll aesthetic
- Built with Jekyll and modern web standards
- Uses Lato font family for clean typography
- Color picker inspired by modern design systems

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/jekyll-terminal/issues) page
2. Create a new issue with detailed information
3. Join the discussion in the [Discussions](https://github.com/yourusername/jekyll-terminal/discussions) section

---

**Happy coding and creating!** 🚀
