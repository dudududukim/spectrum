---
title: "Web Performance: Beyond the Basics"
date: 2024-01-12
categories: ["Performance", "Web Development"]
tags: ["performance", "optimization", "lighthouse", "core-web-vitals"]
description: "Advanced techniques for improving web performance and Core Web Vitals scores."
reading_time: 7
---

Web performance optimization goes beyond just minifying CSS and JavaScript. Here are advanced techniques that can significantly improve your site's performance and user experience.

## Core Web Vitals Deep Dive

### Largest Contentful Paint (LCP)

LCP measures loading performance. Optimize it by:

```html
<!-- Preload critical resources -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/images/hero.jpg" as="image">

<!-- Use responsive images -->
<img src="hero-400.jpg" 
     srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
     alt="Hero image">
```

### First Input Delay (FID)

Reduce JavaScript execution time:

```javascript
// Use requestIdleCallback for non-critical tasks
function scheduleWork() {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(doWork);
  } else {
    setTimeout(doWork, 1);
  }
}

// Defer non-critical JavaScript
<script src="analytics.js" defer></script>
```

### Cumulative Layout Shift (CLS)

Prevent layout shifts:

```css
/* Reserve space for images */
.image-container {
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
}

/* Use font-display for web fonts */
@font-face {
  font-family: 'Custom Font';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

## Advanced Optimization Techniques

### 1. Resource Hints

```html
<!-- DNS prefetch for external domains -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">

<!-- Preconnect for critical third-party resources -->
<link rel="preconnect" href="https://api.example.com" crossorigin>

<!-- Prefetch for likely next page -->
<link rel="prefetch" href="/next-page.html">
```

### 2. Service Worker Caching

```javascript
// sw.js
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

### 3. Code Splitting

```javascript
// Dynamic imports for route-based splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Component-based splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </Suspense>
  );
}
```

### 4. Image Optimization

```javascript
// WebP with fallback
function createOptimizedImage(src, alt) {
  const picture = document.createElement('picture');
  
  const webpSource = document.createElement('source');
  webpSource.srcset = src.replace(/\.(jpg|png)$/, '.webp');
  webpSource.type = 'image/webp';
  
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';
  
  picture.appendChild(webpSource);
  picture.appendChild(img);
  
  return picture;
}
```

## Performance Monitoring

### Real User Monitoring (RUM)

```javascript
// Simple performance observer
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime);
    }
  }
});

observer.observe({ entryTypes: ['largest-contentful-paint'] });
```

### Bundle Analysis

```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/static/js/*.js

# Or with Vite
npm install --save-dev rollup-plugin-visualizer
```

## Performance Budgets

Set and enforce performance budgets:

```javascript
// webpack.config.js
module.exports = {
  performance: {
    maxAssetSize: 250000,
    maxEntrypointSize: 250000,
    hints: 'warning'
  }
};
```

## Testing Performance

### Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push, pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

### Performance Testing

```javascript
// Performance test with Playwright
test('page loads within 3 seconds', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const loadTime = Date.now() - startTime;
  
  expect(loadTime).toBeLessThan(3000);
});
```

## Key Takeaways

1. **Measure first**: Use tools like Lighthouse and WebPageTest
2. **Optimize critical path**: Focus on LCP, FID, and CLS
3. **Implement caching**: Use service workers and HTTP caching
4. **Split your code**: Load only what's needed when it's needed
5. **Monitor continuously**: Set up performance budgets and alerts

Performance optimization is an ongoing process. Regular monitoring and incremental improvements will keep your site fast and your users happy.
