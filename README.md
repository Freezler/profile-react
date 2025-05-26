# 🚀 React Shadcn Personal Website

A modern, visually stunning, and highly maintainable personal website built with React, TypeScript, and shadcn/ui. This project showcases advanced CSS techniques (including container queries, glassmorphism, animated backgrounds, and responsive design), interactive UI/UX, and seamless deployment on platforms like Vercel.

## Features

- **Modern UI/UX**: Beautiful hero section, animated scroll indicator, and glassmorphic welcome area.
- **Animated Backgrounds**: Floating/morphing blobs or moving star fields for a dynamic, engaging look.
- **Responsive Design**: Fully responsive layout using semantic CSS, container queries, and mobile-first best practices.
- **Gallery Grid**: Responsive, interactive image gallery with overlays and smooth transitions.
- **Navigation**: Accessible, modern navigation menu with desktop and mobile support.
- **Social & Spotify Integration**: Custom social icons with animated effects and embedded Spotify playlists.
- **Typewriter Animation**: Eye-catching typewriter effect for hero text.
- **Vercel-Ready**: All assets and code are optimized for seamless deployment on Vercel or similar platforms.

## Tech Stack

- **React** (with TypeScript)
- **shadcn/ui** (Radix UI + Tailwind CSS)
- **Custom CSS** (semantic, maintainable, and organized)
- **Vite** (for fast development and builds)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation

```bash
pnpm install
# or
npm install
```

### Development

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site in your browser.

### Build & Deploy

```bash
pnpm build
# or
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or your preferred static hosting provider.

## Project Structure

```text
src/
  App.tsx            # Main layout and section structure
  index.css          # All major layout, typography, and animation styles
  components/
    Header.tsx       # Navigation and mobile menu
    LargeWelcome.tsx # Glassmorphic welcome section
    Codepen.tsx      # Gallery grid
    Social.tsx       # Social icons
    Spotify.tsx      # Spotify embed
    TypingDemo.tsx   # Typewriter animation
    ...
public/
  banner.png         # Rocket image for hero section
images/
  ...                # Optional background assets
```

## Customization

- **Background Animation**: Switch between morphing blobs or star field by editing `.welcome-section` CSS and related markup.
- **Gallery Images**: Update images in the gallery grid via the `Codepen.tsx` component.
- **Navigation**: Edit navigation items in `Header.tsx`.
- **Branding**: Adjust colors, gradients, and fonts in `index.css` and root variables.

## Credits

- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vercel](https://vercel.com/)
- [Spotify](https://developer.spotify.com/)

## License

MIT License. See [LICENSE](LICENSE) for details.

---

> Designed and built by Randy DeVries. Feel free to fork, customize, and use for your own portfolio!
