# Nuno Gouveia Portfolio Website

## Overview

This is a professional portfolio website for Nuno Gouveia, a Lead Product Owner with expertise in AI Platform, Analytics & Insights, and Product Management. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a contact form functionality and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: REST API with JSON responses
- **Request Handling**: Express middleware for JSON parsing and logging
- **Error Handling**: Centralized error handling middleware

### Data Storage Solutions
- **Development**: In-memory storage using Map data structures
- **Production Ready**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Main landing area with call-to-action buttons
- **About Section**: Professional background and experience summary
- **Experience Section**: Timeline-based work history display
- **Skills Section**: Categorized skill sets with visual organization
- **Education Section**: Academic background and certifications
- **Contact Section**: Interactive contact form with validation
- **Footer**: Simple footer with navigation links

### Backend Components
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted storage interface with memory implementation
- **Request Logging**: Middleware for API request/response logging
- **Development Server**: Vite integration for hot module replacement

### UI System
- **Design System**: Shadcn/ui with "new-york" style variant
- **Component Library**: Comprehensive set of Radix UI-based components
- **Theming**: CSS custom properties for light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, subject, and message
2. Form validation occurs client-side using Zod schemas
3. React Query mutation sends POST request to `/api/contact`
4. Server validates data using shared Zod schema
5. Contact record is stored in memory (or database in production)
6. Success/error response is sent back to client
7. UI updates with toast notification

### Page Navigation
1. User clicks navigation links or buttons
2. JavaScript smooth scrolling navigates to page sections
3. No server requests needed for navigation (single-page application)

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: Wouter for lightweight routing
- **HTTP Client**: Fetch API with TanStack React Query
- **UI Components**: Radix UI primitives (@radix-ui/react-*)
- **Form Handling**: React Hook Form with resolvers
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS with class-variance-authority
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Server Framework**: Express.js
- **Database**: Drizzle ORM with PostgreSQL support
- **Validation**: Zod for request validation
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development Server**: Vite dev server with HMR
- **Linting**: TypeScript compiler for type checking

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` directory using Vite
2. Backend bundles to `dist/index.js` using esbuild
3. Shared schemas are accessible to both frontend and backend
4. Static assets are served by Express in production

### Environment Configuration
- **Development**: Uses tsx for running TypeScript directly
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: DATABASE_URL environment variable for PostgreSQL connection
- **Port**: Configurable server port (defaults to process.env.PORT)

### Database Management
- **Schema**: Defined in `shared/schema.ts` for type safety
- **Migrations**: Generated in `./migrations` directory
- **Deployment**: `db:push` command updates database schema
- **Connection**: Serverless PostgreSQL via Neon Database

The application is designed to be deployed on platforms like Replit, Vercel, or similar services that support Node.js applications with PostgreSQL databases.