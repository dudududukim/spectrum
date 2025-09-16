/**
 * Enhanced Theme Toggle
 * Fixes double-click issue and provides smooth transitions
 * Uses data attributes for better CSS specificity
 */

class ThemeToggle {
    constructor() {
        this.storageKey = 'jekyll-terminal-theme';
        this.theme = null;
        
        // Prevent flash of unstyled content
        document.documentElement.classList.add('theme-loading');
        
        this.init();
    }
    
    init() {
        this.loadTheme();
        this.setupEventListeners();
        this.applyTheme();
        
        // Remove loading class after initialization
        requestAnimationFrame(() => {
            document.documentElement.classList.remove('theme-loading');
        });
    }
    
    getStoredTheme() {
        try {
            return localStorage.getItem(this.storageKey);
        } catch (e) {
            console.warn('Failed to read theme from localStorage:', e);
            return null;
        }
    }
    
    getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    loadTheme() {
        // Priority: stored theme > system preference
        const storedTheme = this.getStoredTheme();
        
        if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
            this.theme = storedTheme;
        } else {
            this.theme = this.getSystemTheme();
        }
    }
    
    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            console.warn('Invalid theme:', theme);
            return;
        }
        
        this.theme = theme;
        
        // Remove any existing theme attributes
        document.documentElement.removeAttribute('data-theme');
        
        // Set new theme attribute
        document.documentElement.setAttribute('data-theme', theme);
        
        // Store in localStorage
        try {
            localStorage.setItem(this.storageKey, theme);
        } catch (e) {
            console.warn('Failed to save theme to localStorage:', e);
        }
        
        // Update theme color meta tag
        this.updateThemeColorMeta();
        
        // Dispatch custom event
        this.dispatchThemeChangeEvent();
    }
    
    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
    
    applyTheme() {
        // Remove any existing theme attributes
        document.documentElement.removeAttribute('data-theme');
        
        // Apply the current theme
        document.documentElement.setAttribute('data-theme', this.theme);
        
        // Update theme color meta tag
        this.updateThemeColorMeta();
    }
    
    updateThemeColorMeta() {
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            // Get the primary color from CSS custom property
            const primaryColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary-color')
                .trim();
            
            if (primaryColor) {
                themeColorMeta.setAttribute('content', primaryColor);
            }
        }
    }
    
    dispatchThemeChangeEvent() {
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: {
                theme: this.theme,
                isDark: this.theme === 'dark',
                isLight: this.theme === 'light'
            }
        }));
    }
    
    setupEventListeners() {
        // Theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
            
            // Keyboard accessibility
            themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleTheme();
                }
            });
        }
        
        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                // Only update if no manual theme is stored
                const storedTheme = this.getStoredTheme();
                if (!storedTheme) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    this.setTheme(newTheme);
                }
            });
        }
    }
    
    // Public API methods
    getCurrentTheme() {
        return this.theme;
    }
    
    isDarkMode() {
        return this.theme === 'dark';
    }
    
    isLightMode() {
        return this.theme === 'light';
    }
    
    resetToSystem() {
        try {
            localStorage.removeItem(this.storageKey);
        } catch (e) {
            console.warn('Failed to remove theme from localStorage:', e);
        }
        
        this.theme = this.getSystemTheme();
        this.applyTheme();
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeToggle = new ThemeToggle();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeToggle;
}
