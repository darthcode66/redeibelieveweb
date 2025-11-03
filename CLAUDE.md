# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Rede I Believe** is a promotional website for a mobile app that connects buyers, merchants, and suppliers through exclusive discounts and offers. This is a React-based marketing site built with Create React App.

## Commands

### Development
```bash
npm start          # Run dev server at http://localhost:3000
npm test           # Run tests in watch mode
npm run build      # Build for production
```

### Testing
```bash
npm test                    # Interactive test runner
npm test -- --coverage      # Run tests with coverage
```

## Architecture

### Routing Structure
The app uses React Router v7 with the following routes:
- `/` - Home page (landing page with features, benefits)
- `/suporte` - Support page (ticket system, FAQ, contact)
- `/changelog` - Changelog page (app version history)

### Core Components

**App.js** (`src/App.js:7-19`)
- Root component with Router setup
- Defines all application routes

**Home.js** (`src/Home.js`)
- Main landing page with hero section, features, and footer
- Bootstrap-based responsive navbar
- Three user personas: Buyers (🛒), Merchants (🏪), Suppliers (🚚)
- Navigation links to all pages

**Support.js** (`src/Support.js`)
- Tabbed interface for support features
- Tab sections: Ticket submission, My Tickets, FAQ, Contact
- Uses useState for tab management and form state
- Mock ticket data for demonstration

**Changelog.js** (`src/Changelog.js`)
- Version history display
- Organized sections: Highlights, Features, Improvements, Technical Details, Statistics
- Hard-coded version data structure

### Styling System

- **Bootstrap 5.3.8** for grid and components
- **Custom CSS** files per component (App.css, Support.css, Changelog.css)
- **Brand colors**:
  - Primary Blue: #2C5F7D
  - Secondary Green: #24B36B
- **Global styles** in index.css

### Assets
All assets located in `src/assets/`:
- `logo_redeibelieve.png` - Main logo
- `google-play-badge.png` - Google Play store badge
- `app-store-badge.svg` - Apple App Store badge

## Key Technical Details

### State Management
- Uses React hooks (useState) for local component state
- No global state management library (Redux, Context, etc.)

### Navigation
- React Router DOM for client-side routing
- Mix of `<Link>` components and `<a>` tags:
  - Use `<Link>` for internal routes
  - Use `<a>` with `href="#section"` for same-page anchors

### Form Handling
Support page includes a ticket submission form with:
- Controlled inputs using useState
- File upload support (jpg, png, pdf, doc, docx)
- Form validation (required fields marked with *)

### Mock Data
Support page contains hardcoded mock tickets for UI demonstration - not connected to a backend.

## Common Development Patterns

### Adding a New Page
1. Create component in `src/NewPage.js`
2. Create styles in `src/NewPage.css`
3. Add route in `src/App.js`
4. Add navigation link in navbar (typically in `Home.js`)

### Component Structure
All page components follow this pattern:
```jsx
import React, { useState } from 'react';
import './ComponentName.css';
import logo from './assets/logo_redeibelieve.png';
import { Link } from 'react-router-dom';

function ComponentName() {
  // Component logic
  return (
    <div className="ComponentName">
      {/* Navbar */}
      {/* Content */}
    </div>
  );
}

export default ComponentName;
```

### Navbar Pattern
Each page has its own navbar that includes:
- Logo linked to home
- Navigation links with active state styling
- Responsive toggle for mobile

## Important Notes

- This is a **frontend-only** project - no backend integration
- **Mobile app context**: The website promotes a Flutter mobile app (Rede I Believe)
- **Language**: All content is in Brazilian Portuguese
- **Design**: Uses emojis extensively for visual appeal
- The changelog reflects mobile app development, not this website
