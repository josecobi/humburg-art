# Hero Component

This is the Hero component for the artist portfolio website with the following features:

## Features Implemented

1. **Full viewport height background video**
   - Uses HTML5 video tag with proper attributes
   - Muted, autoplay, loop, playsInline, preload="metadata" (as requested)
   - Dark gradient overlay (40% opacity) for text readability

2. **Centered Content**
   - Artist name (large elegant serif font)
   - Tagline
   - Subtle CTA button with hover effect

3. **Animations**
   - Smooth fade-in animation on load using framer-motion
   - Scroll indicator animation

4. **Responsive Design**
   - Works on all screen sizes
   - Properly centered content

## Video Setup Instructions

For the video background, you'll need to:

1. Download a free 1080p MP4 from Pexels or Pixabay
   - Search terms: "artist painting timelapse", "brush strokes abstract", "abstract paint", or "artist studio"
2. Compress the video to ~5MB using Handbrake or similar
3. Place the video file in `/public/hero-video-placeholder.mp4`
4. The component is already configured to use this placeholder path

## Component Structure

The component includes:
- Video background with dark overlay
- Centered artist name with elegant serif font
- Tagline
- CTA button with hover animation
- Scroll indicator

## Usage

The component is already integrated into the main page layout. It will automatically:
- Take full viewport height
- Show the video background
- Display centered content with smooth animations