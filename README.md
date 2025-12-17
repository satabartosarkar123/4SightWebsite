# 4Sight Frontend

A modern, data-driven business automation platform frontend built with React and Vite.

## Global Principles

- **Frontend is a presentation + orchestration layer** - Backend owns SEO logic, scoring, automation
- **Frontend never infers business truth** - All dynamic data enters through APIs
- **Every component tolerates empty, loading, and error states**

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Framer Motion** - Animations (Aceternity-style effects)
- **Lucide React** - Icons
- **Vanilla CSS** - Styling with CSS variables

## Project Structure

```
src/
├── assets/           # Static images, videos
├── components/
│   ├── layout/       # Header, Footer, MainLayout
│   ├── home/         # HeroSection, EthosSection, ContactForm
│   ├── knowledge/    # ArticleFeed, ArticleCard, ArticleDetail
│   ├── product/      # FeatureGrid, ProductDemoVideo, Testimonials
│   ├── community/    # PollCard, ToolCard, ResourceCard
│   └── ui/           # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── utils/            # Helper functions
├── config/           # Static configuration
├── styles/           # Global styles and design tokens
├── App.jsx           # Main app with routing
└── main.jsx          # Entry point
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page (Hero, Ethos, Contact) |
| `/product` | Product showcase |
| `/knowledge` | Knowledge base article feed |
| `/knowledge/:slug` | Article detail page |
| `/community` | Community resources, polls, tools |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Backend API Contracts

### Contact Form
```
POST /contact
{
  name: string,
  email: string,
  organization?: string,
  queryType: 'general' | 'sales' | 'support' | 'partnership',
  message: string
}
```

### Articles
```
GET /content/articles
GET /content/articles/:slug
```

## Design System

The design system is defined in `src/styles/index.css` with CSS variables for:
- Color palette (dark theme)
- Typography scale
- Spacing system
- Border radius
- Transitions
- Animations

## Development Guidelines

1. **State Management**: Local state for UI, fetch at page boundary
2. **Aceternity UI**: Use for hero sections, emphasis, transitions - NOT for forms/data feeds
3. **API Integration**: All API calls through custom `useFetch` hook
4. **Form Handling**: Use `useForm` hook with validation

## License

Private - All rights reserved.
