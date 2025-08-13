# Overview

Royal Casino is a full-stack web application that provides an online casino gaming platform. The application features a modern, responsive design with a casino-themed interface including game cards, promotional banners, user profiles, and navigation across different sections (Home, Promo, Agent, Mine). Built with React on the frontend and Express.js on the backend, it uses a PostgreSQL database for data persistence and implements a comprehensive UI component system based on shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Custom component library based on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom casino-themed color palette and 3D effects
- **Component Organization**: Modular structure with reusable UI components in `/components/ui/` and page-specific components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for games and banners
- **Data Layer**: In-memory storage implementation with interface for future database integration
- **Development Setup**: Hot reload with Vite integration for seamless development experience

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Three main entities - users, games, and banners with proper relationships
- **Connection**: Neon Database serverless PostgreSQL setup
- **Migrations**: Drizzle Kit for schema management and migrations

## Development Environment
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Strict TypeScript configuration across frontend, backend, and shared modules
- **Code Organization**: Monorepo structure with shared schema definitions
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## UI/UX Design System
- **Component Library**: Comprehensive set of accessible components using Radix UI
- **Theme**: Casino-inspired design with custom color variables for browns, golds, and reds
- **Typography**: Multiple font families including Playfair Display and Inter
- **Responsive Design**: Mobile-first approach with collapsible navigation
- **Visual Effects**: 3D shadows, gradients, and gold glow effects for casino aesthetics

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend Framework**: Express.js with TypeScript support (tsx)
- **Build Tools**: Vite, esbuild, PostCSS, Autoprefixer

## Database and ORM
- **Database**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema Validation**: Drizzle-Zod integration for type-safe schema definitions

## UI and Styling
- **UI Components**: Extensive Radix UI component collection
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling

## State Management and Data Fetching
- **Server State**: TanStack React Query for caching and synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type validation

## Development and Tooling
- **Replit Integration**: Vite plugins for Replit development environment
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel React for interactive components

## Authentication and Security
- **Session Storage**: PostgreSQL-based session management setup
- **Type Safety**: Comprehensive TypeScript coverage for runtime safety
- **Validation**: Schema validation at API boundaries with Zod