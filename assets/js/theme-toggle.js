/**
 * Clean Theme Toggle
 * Simple, minimal theme switching with data attributes
 * Includes error handling and accessibility features
 */

class ThemeToggle {
    constructor() {
        this.storageKey = 'jekyll-terminal-theme';
        this.theme = null;
        this.isInitialized = false;
        this.mediaQuery = null;
        
        this.init();
    }
    
    init() {
        try {
            this.loadTheme();
            this.setupEventListeners();
            this.applyTheme();
            this.isInitialized = true;
        } catch (error) {
            console.error('ThemeToggle initialization failed:', error);
            // Fallback to system theme
            this.theme = this.getSystemTheme();
            this.applyTheme();
        }
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
        try {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        } catch (error) {
            console.warn('Failed to detect system theme:', error);
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
        
        // Direct, synchronous DOM manipulation
        document.documentElement.removeAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update theme color meta tag
        this.updateThemeColorMeta();
        
        // Update ARIA attributes
        this.updateAriaAttributes();
        
        // Dispatch custom event
        this.dispatchThemeChangeEvent();
        
        // Store in localStorage with error handling
        try {
            localStorage.setItem(this.storageKey, theme);
        } catch (e) {
            console.warn('Failed to save theme to localStorage:', e);
            // Handle quota exceeded or private browsing
            if (e.name === 'QuotaExceededError') {
                console.warn('localStorage quota exceeded, clearing old data');
                try {
                    localStorage.clear();
                    localStorage.setItem(this.storageKey, theme);
                } catch (clearError) {
                    console.error('Failed to clear localStorage:', clearError);
                }
            }
        }
    }
    
    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
    
    applyTheme() {
        // Direct, synchronous theme application
        document.documentElement.removeAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', this.theme);
        
        // Update theme color meta tag
        this.updateThemeColorMeta();
        
        // Update ARIA attributes
        this.updateAriaAttributes();
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
    
    updateAriaAttributes() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const nextTheme = this.theme === 'dark' ? 'light' : 'dark';
            themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
            themeToggle.setAttribute('aria-pressed', this.theme === 'dark' ? 'true' : 'false');
            themeToggle.setAttribute('title', `Current: ${this.theme} mode. Click to switch to ${nextTheme} mode`);
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
            // Click event with error handling
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                try {
                    this.toggleTheme();
                } catch (error) {
                    console.error('Theme toggle failed:', error);
                }
            });
            
            // Keyboard accessibility
            themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    try {
                        this.toggleTheme();
                    } catch (error) {
                        console.error('Theme toggle failed:', error);
                    }
                }
            });
            
            // Focus management for accessibility
            themeToggle.addEventListener('focus', () => {
                themeToggle.setAttribute('aria-describedby', 'theme-toggle-description');
            });
        }
        
        // Listen for system theme changes
        if (window.matchMedia) {
            try {
                this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                this.mediaQuery.addEventListener('change', (e) => {
                    // Only update if no manual theme is stored
                    const storedTheme = this.getStoredTheme();
                    if (!storedTheme) {
                        const newTheme = e.matches ? 'dark' : 'light';
                        this.setTheme(newTheme);
                    }
                });
            } catch (error) {
                console.warn('Failed to setup system theme listener:', error);
            }
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
