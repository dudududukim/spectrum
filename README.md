# Spectrum - Jekyll Personal Website Theme

A clean, minimal Jekyll template for personal websites with a focus on tech content and photography. Built for developers, designers, and content creators who want a professional, responsive site without the complexity.

## ✨ Features

- **🎨 Minimal Design**: Clean, academic-style layout with excellent typography
- **📱 Fully Responsive**: Mobile-first design that looks great on all devices
- **⚡ Fast & Optimized**: Lightweight CSS and optimized for performance
- **🎯 Tech-Focused**: Dedicated section for tech insights and blog posts
- **📸 Photography Support**: Built-in gallery and films section
- **🔧 Easy to Customize**: Well-structured SCSS and modular components
- **🌐 SEO Ready**: Built-in SEO optimization and structured data
- **📄 Multiple Layouts**: About, blog list, individual posts, and gallery pages

## 🚀 Quick Start

### Prerequisites
- Ruby 2.7+ and Bundler
- Git

### Installation

**1. Clone the repository**
```
git clone https://github.com/dudududukim/spectrum.git
cd spectrum
```

**2. Install dependencies**
```
bundle install
```

**3. Configure your site**
Edit `_config.yml` with your information:
```
title: "Your Name"
description: "Your website description"
author: "Your Name"

personal:
  name: "Your Display Name"
  bio: "Your bio here"
  location: "Your Location"

social:
  enabled: true
  platforms:
    github:
      enabled: true
      url: "https://github.com/yourusername"
    email:
      enabled: true
      url: "your@email.com"
    linkedin:
      enabled: true
      url: "https://linkedin.com/in/yourusername"
```

**4. Run locally**
```
bundle exec jekyll serve
```

**5. Open your browser**
Navigate to `http://localhost:4000`

🎉 **That's it! Your site is ready!**

## 📝 Adding Content

### Tech Bites (Blog Posts)
Create files in `_tech-bites/` directory:

```
# Create a new post
touch _tech-bites/2025-09-16-my-first-post.md
```

**Post format:**
```
***
title: "Your Post Title"
date: 2025-09-16
categories: ["JavaScript", "Web Development"]
description: "Brief description of your post"
***

# Your Post Content

Write your content here using Markdown.

## Code Examples

```javascript
const hello = () => {
  console.log("Hello, World!");
};
```

Your post content continues...
```

### Photography (Films)
Add images to `assets/images/films/` directory:
```
mkdir -p assets/images/films
# Add your photos: photo1.jpg, photo2.jpg, etc.
```

The theme automatically displays them in the Films section.

## 🎨 Customization

### Colors & Theme
Edit variables in `_sass/color-variables.scss`:
```
:root {
  --primary-color: #3498db;    // Change to your brand color
  --secondary-color: #2c3e50;  // Dark color for text
  --accent-color: #e74c3c;     // Accent/highlight color
}
```

### Typography
Modify `_sass/base.scss` for fonts and spacing:
```
body {
  font-family: 'Your-Font', Verdana, Helvetica, sans-serif;
}
```

### Layout & Components
- **Navigation**: Edit `_includes/site-navigation.html`
- **Footer**: Modify `_includes/` components
- **Cards**: Customize in `_sass/components.scss`

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to **Settings** → **Pages**
3. Select **"Deploy from a branch"**
4. Choose **"main branch"**
5. Your site will be live at `https://yourusername.github.io/spectrum`

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. **Build command**: `bundle exec jekyll build`
3. **Publish directory**: `_site`
4. Deploy automatically on every push

### Vercel
1. Import your GitHub repository
2. **Build command**: `bundle exec jekyll build`
3. **Output directory**: `_site`
4. Deploy with zero configuration

## 📁 Project Structure

```
spectrum/
├── _includes/          # Reusable components
│   ├── site-navigation.html
│   ├── tech-bite-card.html
│   └── ...
├── _layouts/           # Page templates
│   ├── default.html
│   ├── about.html
│   ├── tech-bite-list.html
│   └── tech-bite.html
├── _sass/             # Stylesheets
│   ├── base.scss
│   ├── components.scss
│   ├── layouts.scss
│   └── ...
├── _tech-bites/       # Blog posts
├── assets/
│   ├── css/main.scss  # Main stylesheet
│   └── images/films/  # Photography
├── _config.yml        # Site configuration
├── index.md           # Homepage
├── tech-bites.md      # Blog listing page
├── films.md           # Photography page
└── README.md
```

## 🛠️ Development

### Local Development
```
# Serve with live reload
bundle exec jekyll serve --livereload

# Serve with drafts
bundle exec jekyll serve --drafts

# Build for production
bundle exec jekyll build
```

### Adding New Features
1. **New page**: Create `.md` file in root
2. **New layout**: Add to `_layouts/`
3. **New component**: Add to `_includes/`
4. **New styles**: Add to `_sass/`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

- **Issues**: [GitHub Issues](https://github.com/dudududukim/spectrum/issues)
- **Documentation**: This README and code comments
- **Examples**: Check the demo content in `_tech-bites/`

## 🌟 Credits

Built with ❤️ using:
- [Jekyll](https://jekyllrb.com/) - Static site generator
- [SCSS](https://sass-lang.com/) - CSS preprocessor
- Modern CSS Grid & Flexbox for layouts

---

**⭐ If you found this theme helpful, please consider giving it a star on GitHub!**

---

**Built with Jekyll 🚀**