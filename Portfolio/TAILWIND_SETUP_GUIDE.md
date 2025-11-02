# Tailwind CSS Setup Guide - Avoid Getting Stuck!

## The Problem: Tailwind v3 vs v4

### Tailwind CSS v3 (Old Way)
```bash
npm install -D tailwindcss postcss autoprefixer
```

`postcss.config.js`:
```js
export default {
  plugins: {
    tailwindcss: {},      // ✅ This worked in v3
    autoprefixer: {},
  },
}
```

### Tailwind CSS v4 (New Way - Current)
```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

`postcss.config.js`:
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ Must use this in v4
    autoprefixer: {},
  },
}
```

## Why You Get Stuck Here

1. **Version Mismatch**: You install Tailwind v4 but use v3 configuration
2. **Missing Package**: You forget to install `@tailwindcss/postcss`
3. **Wrong Plugin Name**: Using `tailwindcss: {}` instead of `'@tailwindcss/postcss': {}`

## Quick Checklist

When setting up Tailwind CSS v4, make sure you have:

- [ ] `tailwindcss` in package.json (the main package)
- [ ] `@tailwindcss/postcss` in package.json (the PostCSS plugin)
- [ ] `postcss` in package.json (PostCSS processor)
- [ ] `autoprefixer` in package.json (browser prefixing)
- [ ] `postcss.config.js` file exists
- [ ] `postcss.config.js` uses `'@tailwindcss/postcss': {}` (not `tailwindcss: {}`)
- [ ] `index.css` has `@import "tailwindcss";` at the top
- [ ] `tailwind.config.js` exists with content paths configured

## Common Error Messages

**Error**: "It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin"

**Solution**: Install `@tailwindcss/postcss` and change your PostCSS config to use `'@tailwindcss/postcss': {}`


