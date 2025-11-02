# Next.js Game Project

## Overview
This is a Next.js 15 application featuring a game interface with Firebase integration and Google Genkit AI capabilities. The project was migrated from Vercel to Replit on November 2, 2025.

## Project Architecture
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Radix UI components
- **AI Integration**: Google Genkit for AI-powered features
- **External Services**: Firebase, Google Cloud Storage

## Recent Changes (November 2, 2025)
- Migrated from Vercel to Replit
- Updated dev server to bind to `0.0.0.0:5000` for Replit compatibility
- Updated production server to use port 5000
- Added `allowedDevOrigins` configuration for cross-origin requests in Replit
- Configured deployment settings for autoscale deployment
- Installed all npm dependencies

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start Production**: `npm run start` (runs on port 5000)
- **Genkit AI Dev**: `npm run genkit:dev`

## Deployment
- **Type**: Autoscale deployment (stateless web application)
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Project Structure
- `/src/app` - Next.js app router pages
- `/src/components` - React components (UI and game components)
- `/src/contexts` - React contexts (GameContext)
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions and types

## External Resources
The project uses external assets from:
- Google Cloud Storage (images and audio files)
- Unsplash, Picsum Photos, and Placehold.co for placeholder images
- Firebase Studio hosting for game assets

## Known Issues
- Some external images from Google Cloud Storage return 403 errors (authentication required)
- TypeScript and ESLint errors are ignored during builds (configured intentionally)
