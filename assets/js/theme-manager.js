/**
 * Theme Manager
 * Handles theme switching, color customization, and user preferences
 */

class ThemeManager {
    constructor() {
        this.storageKey = 'jekyll-terminal-theme';
        this.colorPickerKey = 'jekyll-terminal-colors';
        this.defaultTheme = {
            primary: '#3498db',
            secondary: '#2c3e50',
            accent: '#e74c3c',
            background: '#ffffff',
            text: '#2c3e50',
            lightText: '#7f8c8d',
            darkMode: false
        };
        
        this.init();
    }
    
    init() {
        this.loadTheme();
        this.setupEventListeners();
        this.applyTheme();
    }
    
    setupEventListeners() {
        // Dark mode toggle
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                this.toggleDarkMode();
            });
        }
        
        
        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!this.hasCustomTheme()) {
                    this.setSystemTheme(e.matches);
                }
            });
        }
    }
    
    loadTheme() {
        const savedTheme = localStorage.getItem(this.storageKey);
        const savedColors = localStorage.getItem(this.colorPickerKey);
        
        if (savedTheme) {
            this.currentTheme = { ...this.defaultTheme, ...JSON.parse(savedTheme) };
        } else {
            this.currentTheme = { ...this.defaultTheme };
        }
        
        if (savedColors) {
            const colors = JSON.parse(savedColors);
            this.currentTheme = { ...this.currentTheme, ...colors };
        }
        
        // Check for system preference if no custom theme
        if (!this.hasCustomTheme() && window.matchMedia) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.currentTheme.darkMode = prefersDark;
        }
    }
    
    saveTheme() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.currentTheme));
    }
    
    saveColors(colors) {
        localStorage.setItem(this.colorPickerKey, JSON.stringify(colors));
    }
    
    hasCustomTheme() {
        return localStorage.getItem(this.storageKey) !== null;
    }
    
    applyTheme() {
        const root = document.documentElement;
        
        // Apply color variables
        root.style.setProperty('--primary-color', this.currentTheme.primary);
        root.style.setProperty('--secondary-color', this.currentTheme.secondary);
        root.style.setProperty('--accent-color', this.currentTheme.accent);
        root.style.setProperty('--bg-color', this.currentTheme.background);
        root.style.setProperty('--text-color', this.currentTheme.text);
        root.style.setProperty('--light-text-color', this.currentTheme.lightText);
        
        // Apply dark mode
        if (this.currentTheme.darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        // Update theme color meta tag
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', this.currentTheme.primary);
        }
        
        // Update dark mode toggle state
        this.updateDarkModeToggle();
    }
    
    updateTheme(newColors) {
        this.currentTheme = { ...this.currentTheme, ...newColors };
        this.saveTheme();
        this.saveColors(newColors);
        this.applyTheme();
    }
    
    toggleDarkMode() {
        this.currentTheme.darkMode = !this.currentTheme.darkMode;
        this.saveTheme();
        this.applyTheme();
    }
    
    setSystemTheme(isDark) {
        this.currentTheme.darkMode = isDark;
        this.saveTheme();
        this.applyTheme();
    }
    
    updateDarkModeToggle() {
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        if (darkModeToggle) {
            const sunIcon = darkModeToggle.querySelector('.icon-sun');
            const moonIcon = darkModeToggle.querySelector('.icon-moon');
            
            if (this.currentTheme.darkMode) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
            } else {
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
            }
        }
    }
    
    
    resetTheme() {
        this.currentTheme = { ...this.defaultTheme };
        this.saveTheme();
        localStorage.removeItem(this.colorPickerKey);
        this.applyTheme();
    }
    
    // Public API methods
    getCurrentTheme() {
        return { ...this.currentTheme };
    }
    
    setPrimaryColor(color) {
        this.updateTheme({ primary: color });
    }
    
    setDarkMode(enabled) {
        this.updateTheme({ darkMode: enabled });
    }
    
    // Animation utilities
    animateColorChange(element, property, newValue, duration = 300) {
        const startValue = getComputedStyle(element).getPropertyValue(property);
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Simple linear interpolation (could be improved with easing)
            const currentValue = this.interpolateColor(startValue, newValue, progress);
            element.style.setProperty(property, currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    interpolateColor(color1, color2, factor) {
        // Simple color interpolation (works for hex colors)
        // This is a basic implementation - for production, consider using a proper color library
        const hex1 = color1.replace('#', '');
        const hex2 = color2.replace('#', '');
        
        const r1 = parseInt(hex1.substr(0, 2), 16);
        const g1 = parseInt(hex1.substr(2, 2), 16);
        const b1 = parseInt(hex1.substr(4, 2), 16);
        
        const r2 = parseInt(hex2.substr(0, 2), 16);
        const g2 = parseInt(hex2.substr(2, 2), 16);
        const b2 = parseInt(hex2.substr(4, 2), 16);
        
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
}

// Utility functions
const ColorUtils = {
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },
    
    rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    
    isValidHex(hex) {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    },
    
    getContrastColor(hex) {
        const rgb = this.hexToRgb(hex);
        if (!rgb) return '#000000';
        
        const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        return brightness > 128 ? '#000000' : '#ffffff';
    },
    
    lightenColor(hex, percent) {
        const rgb = this.hexToRgb(hex);
        if (!rgb) return hex;
        
        const factor = percent / 100;
        const r = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * factor));
        const g = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * factor));
        const b = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * factor));
        
        return this.rgbToHex(r, g, b);
    },
    
    darkenColor(hex, percent) {
        const rgb = this.hexToRgb(hex);
        if (!rgb) return hex;
        
        const factor = percent / 100;
        const r = Math.max(0, Math.round(rgb.r * (1 - factor)));
        const g = Math.max(0, Math.round(rgb.g * (1 - factor)));
        const b = Math.max(0, Math.round(rgb.b * (1 - factor)));
        
        return this.rgbToHex(r, g, b);
    }
};

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeManager, ColorUtils };
}
