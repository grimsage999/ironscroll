# **App Name**: Hamelin's Echo

## Core Features:

- Narrative Flow: Text-based CYOA driven by button clicks, using a structured JavaScript object for content and branching logic.
- State Tracking: Tracking of Town Favor, Piper Insight, and Inventory (Clues).
- Reputation Checks: Choices are conditionally enabled/disabled based on minimum required values for Town Favor or Piper Insight.
- Multiple Endings: At least four distinct endings determined by accumulated clues and reputation values.
- Consult Arcane Texts: A choice triggers a call to the Gemini API to generate a unique, cryptic prophecy about the Iron Scroll, using Google Search Grounding to ensure the lore feels deep and semi-rooted. Uses loading indicator.
- Turn-Based Combat: A turn-based combat engine with movement/dodging using canvas/SVG rendering. Inventory items can be used in battles. Uses pixel art/retro visual styling.
- Dynamic Inventory: Expand inventory to usable items in battles and scenes.
- Overworld Exploration: Implement overworld/NPC movement and sprite interactions. Focus on the emotional/character writing style (quirky, memorable NPCs). Uses pixel art/retro visual styling.

## Style Guidelines:

- Dark background (#1e1e1e) for atmosphere and readability.
- Text color: Light gray (#e0e0e0) for high contrast and readability.
- Accent color: Gold (#c99700) for a medieval theme. Accent color: Dark red (#a04040) for borders and important CTAs.
- Headline font: 'Playfair', a serif for titles, to add a medieval feel.
- Body font: 'Merriweather', a serif for readability in longer texts.
- Minimal iconography to maintain the text-focused experience. Use subtle, themed icons.
- Single-column layout for easy readability. Use a container to focus the user's attention.
- Subtle loading indicator during LLM API calls.
- Pixel art/retro visual styling for combat engine and overworld.