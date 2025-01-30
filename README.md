# ☕ Brew Haven - Coffee Shop Landing Page

A modern, responsive coffee shop landing page built with React, Vite, and Tailwind CSS.

## 🚀 Features

- Responsive design that works on all devices
- Dark/Light theme toggle
- Smooth animations with Framer Motion
- Reusable components
- Maintainable content structure
- Modern UI with shadcn/ui components

## 🛠️ Tech Stack

- React.js
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide Icons

## 📁 Project Structure

```
src/
├── components/         # Reusable components
│   ├── navbar.tsx     # Responsive navigation bar
│   ├── footer.tsx     # Responsive footer
│   ├── theme-provider.tsx  # Theme context provider
│   └── ui/            # UI components
├── data/              # Content data
│   └── coffee.ts      # Coffee shop content
└── App.tsx            # Main application component
```

## 🎯 Components

### Navbar
- Responsive navigation
- Mobile menu with animations
- Theme toggle button
- Smooth scroll to sections

### Footer
- Responsive grid layout
- Social media links
- Company information
- Copyright notice

### Theme Toggle
- Light/Dark mode switch
- Animated icon transition
- Persistent theme preference

## 📝 Content Management

All content is stored in `src/data/coffee.ts` for easy maintenance:

- Navigation links
- Hero section content
- Featured coffees
- About section
- Footer links

## 🎨 Customization

### Colors
- Customizable through Tailwind CSS configuration
- Dark/Light theme variables in `index.css`

### Content
Update the content by modifying `src/data/coffee.ts`

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📱 Responsive Design

The layout adapts to different screen sizes:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

Animations are implemented using Framer Motion:
- Smooth page transitions
- Hover effects
- Scroll animations
- Menu transitions

## 🌙 Theme Toggle

The theme toggle:
- Switches between light and dark modes
- Persists user preference
- Animates icon changes
- Respects system preferences

## 🔧 Development

### Adding New Sections
1. Create component in `components/`
2. Add content to `data/coffee.ts`
3. Import and use in `App.tsx`

### Modifying Styles
- Use Tailwind CSS classes
- Customize theme in `tailwind.config.js`
- Add custom styles in `index.css`

## 📄 License

MIT License