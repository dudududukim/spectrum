---
title: "Understanding JavaScript Modules: ES6 vs CommonJS"
date: 2024-01-15
categories: ["JavaScript", "Web Development"]
tags: ["modules", "es6", "commonjs", "import", "export"]
description: "A deep dive into JavaScript module systems and when to use each approach."
reading_time: 5
---

JavaScript modules have evolved significantly over the years. Today, we have two main systems: ES6 modules (ESM) and CommonJS. Understanding the differences and when to use each is crucial for modern web development.

## ES6 Modules (ESM)

ES6 modules are the modern standard for JavaScript modules. They use `import` and `export` statements and are statically analyzable.

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';
console.log(add(2, 3)); // 5
```

### Key Features:
- **Static analysis**: Imports and exports are determined at compile time
- **Tree shaking**: Unused exports can be eliminated during bundling
- **Top-level await**: Can use await at the module level
- **Better performance**: More efficient loading and parsing

## CommonJS

CommonJS is the module system used in Node.js (though Node.js now supports ESM too). It uses `require()` and `module.exports`.

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// main.js
const { add, subtract } = require('./math');
console.log(add(2, 3)); // 5
```

### Key Features:
- **Dynamic loading**: Modules can be loaded conditionally
- **Runtime resolution**: Module paths are resolved at runtime
- **Synchronous**: Loading is synchronous by default
- **Node.js native**: Built into Node.js from the beginning

## When to Use Each

**Use ES6 modules when:**
- Building for browsers (with bundlers like Webpack, Vite, or Rollup)
- You want better tree shaking and optimization
- Working with modern JavaScript tooling
- Building applications that benefit from static analysis

**Use CommonJS when:**
- Working with older Node.js applications
- You need dynamic module loading
- Working with libraries that haven't migrated to ESM
- Building Node.js-only applications that don't need bundling

## Migration Tips

If you're migrating from CommonJS to ESM:

1. Change file extensions to `.mjs` or add `"type": "module"` to package.json
2. Replace `require()` with `import`
3. Replace `module.exports` with `export`
4. Update dynamic imports to use `import()` function
5. Be aware of the differences in `__dirname` and `__filename` (they don't exist in ESM)

The JavaScript ecosystem is moving toward ES6 modules as the standard, but understanding both systems will help you work with any codebase you encounter.
