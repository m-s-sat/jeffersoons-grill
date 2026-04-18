# Jefferson's Grill — Restaurant Website

## Original Problem Statement
Create a restaurant webpage for Jefferson's Grill, a Barbecue restaurant at 2430 Bailey Ave, Jackson, MS 39213 (rating 4.7, 12 reviews, $10–20, dine-in & takeaway). Use demo data where info is missing; include real Google reviews.

## User Choices
- Single-page layout: Home, Menu, Reviews, About, Contact
- Both reservation form + contact form
- Rustic/smoky BBQ vibe (warm woods, charred textures, amber/red)
- Include photo gallery with demo BBQ images

## Architecture
- **Backend** (FastAPI + MongoDB): `/api/reservations` POST/GET, `/api/contact` POST/GET, `/api/` root
- **Frontend** (React + Tailwind + shadcn/ui): single-page app with smooth scroll
- Design: Bebas Neue headings, Work Sans body, #14110F charred bg, #D84B20 smoky amber/red primary

## Implemented (2026-04-18)
- Sticky glassmorphism navbar (desktop + mobile)
- Hero with parallax BG image, rating stars, address, CTAs
- Menu section with 8 shadcn Tabs (Ribs, Brisket, Pulled Pork, Chicken, Sandwiches, Sides, Desserts, Drinks)
- Reviews section (4 cards including real Google reviews + rating summary)
- Tetris-grid photo gallery (6 images)
- About section with story + 3 feature cards
- Visit section: hours, contact info, reservation form (Calendar, Select), contact form
- Toast notifications via sonner
- Full data-testid coverage

## Backlog (P1/P2)
- P1: Real Google Maps embed in Visit section
- P1: Menu item images on hover
- P2: Admin dashboard to view reservations/messages
- P2: SMS/email confirmation for reservations (Twilio/SendGrid)
- P2: Loyalty program / gift cards
