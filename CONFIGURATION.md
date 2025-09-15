# Spectrum Jekyll Theme - Configuration Guide

## Overview

The Spectrum Jekyll theme has been refactored for maximum customization and configuration management. All settings are now consolidated into a single `_config.yml` file with logical grouping and comprehensive fallback support.

## Configuration Structure

### Site Identity
```yaml
site:
  title: "Your Name"
  description: "Your site description"
  url: "https://yoursite.com"
  baseurl: ""
  author: "Your Name"
  email: "your@email.com"
```

### Personal Information
```yaml
personal:
  name: "Your Name"
  tagline: "Your tagline or subtitle"
  bio: "Your bio description"
  location: "Your Location"
```

### Social Media Links
```yaml
social:
  enabled: true
  platforms:
    email:
      enabled: true
      url: "mailto:your@email.com"
      label: "Email"
      icon: "fa-solid fa-envelope"
    github:
      enabled: true
      url: "https://github.com/yourusername"
      label: "GitHub"
      icon: "fa-brands fa-github"
    linkedin:
      enabled: true
      url: "https://linkedin.com/in/yourusername"
      label: "LinkedIn"
      icon: "fa-brands fa-linkedin"
    twitter:
      enabled: false
      url: "https://twitter.com/yourusername"
      label: "Twitter"
      icon: "fa-brands fa-twitter"
    instagram:
      enabled: false
      url: "https://instagram.com/yourusername"
      label: "Instagram"
      icon: "fa-brands fa-instagram"
```

### Theme Configuration
```yaml
theme:
  colors:
    primary: "#3498db"
    secondary: "#2c3e50"
    accent: "#e74c3c"
    background: "#ffffff"
    text: "#2c3e50"
    light_text: "#7f8c8d"
  
  typography:
    font_family: "Lato"
  
  layout:
    max_width: "1125px"
    content_width: "875px"
  
  animations:
    enabled: true
    duration: "0.3s"
  
  dark_mode:
    enabled: true
```

### Navigation Configuration
```yaml
navigation:
  home_text: "Home"
  show_social: true
  social_position: "right"
```

### Footer Configuration
```yaml
footer:
  copyright_text: "All rights reserved."
  show_theme_credit: true
  theme_name: "Spectrum"
  theme_url: "https://github.com/yourusername/spectrum"
```

### Content Configuration
```yaml
content:
  pages:
    about:
      title: "About"
      welcome_message: "Welcome to my personal corner of the web!"
      intro_text: "I'm passionate about technology, design, and continuous learning."
      main_description: "Your main description..."
      sections:
        - title: "Section Title"
          content: "Section content..."
      closing_text: "Closing message..."
    
    tech_bites:
      title: "Tech Bites"
      description: "Daily tech insights and discoveries"
      list_page:
        welcome_message: "Welcome to my collection of tech insights!"
        intro_text: "Introduction text..."
        description: "Description text..."
        categories_title: "Categories"
        categories:
          - name: "JavaScript"
            description: "Modern ES6+ features, frameworks, and best practices"
        closing_text: "Closing text..."
      card:
        read_more_text: "Read More"
        min_read_text: "min read"
      navigation:
        previous_text: "← Previous"
        next_text: "Next →"
  
  ui:
    buttons:
      view_all_tech_bites: "View All Tech Bites"
      read_more: "Read More"
    
    pagination:
      showing_text: "Showing"
      of_text: "of"
      tech_bites_text: "tech bites"
      page_text: "Page"
      previous_text: "Previous"
      next_text: "Next"
    
    error:
      404:
        title: "Page Not Found"
        message: "Sorry, the page you're looking for doesn't exist."
        suggestion: "You might want to go back to the homepage."
        back_home_text: "Back to Home"
```

## Key Features

### 1. **Single Source of Truth**
- All configuration consolidated into `_config.yml`
- No more duplicate settings across multiple files
- Clear separation of concerns

### 2. **Comprehensive Fallbacks**
- Every configurable element has sensible defaults
- Graceful degradation when settings are missing
- Template continues to work with minimal configuration

### 3. **Flexible Social Media**
- Individual platform control with `enabled` flag
- Easy to add/remove social platforms
- Configurable URLs, labels, and icons
- Support for any Font Awesome icon

### 4. **Dynamic Navigation**
- Social icons automatically appear based on configuration
- Configurable navigation text and behavior
- Responsive design maintained

### 5. **Customizable Content**
- All text content configurable through YAML
- Structured content sections for complex layouts
- Easy to modify without touching templates

## Migration from Old Structure

### Before (Multiple Files)
- `_config.yml` - Basic Jekyll settings
- `_data/content.yml` - Content configuration
- `_data/theme.yml` - Theme settings

### After (Single File)
- `_config.yml` - Everything consolidated

### Template Variable Changes
- `site.data.content.*` → `site.content.*`
- `site.data.theme.*` → `site.theme.*`
- `site.personal.social_links.*` → `site.social.platforms.*`

## Customization Examples

### Adding a New Social Platform
```yaml
social:
  platforms:
    # ... existing platforms ...
    discord:
      enabled: true
      url: "https://discord.gg/yourinvite"
      label: "Discord"
      icon: "fa-brands fa-discord"
```

### Controlling Individual Platforms
```yaml
social:
  platforms:
    email:
      enabled: true    # Will show in navigation
    github:
      enabled: true    # Will show in navigation
    twitter:
      enabled: false   # Will NOT show in navigation
    instagram:
      enabled: false   # Will NOT show in navigation
```

### Changing Theme Colors
```yaml
theme:
  colors:
    primary: "#e74c3c"  # Red theme
    secondary: "#2c3e50"
    accent: "#f39c12"
```

### Customizing Page Content
```yaml
content:
  pages:
    about:
      title: "About Me"
      welcome_message: "Hello! Welcome to my space."
      intro_text: "I'm a passionate developer..."
```

## Benefits

1. **Easier Maintenance** - Single file to manage all settings
2. **Better Organization** - Logical grouping of related settings
3. **Enhanced Flexibility** - Easy to add new features and platforms
4. **Improved Performance** - Reduced file I/O and processing
5. **Better Documentation** - Clear structure with inline comments
6. **Backward Compatibility** - Fallbacks ensure existing sites continue to work

## Best Practices

1. **Use Descriptive Names** - Choose clear, semantic variable names
2. **Provide Fallbacks** - Always include default values in templates
3. **Group Related Settings** - Keep related configurations together
4. **Document Changes** - Update this guide when adding new features
5. **Test Thoroughly** - Verify all configurations work as expected

## Support

For questions or issues with the configuration system, please refer to the theme documentation or create an issue in the repository.
