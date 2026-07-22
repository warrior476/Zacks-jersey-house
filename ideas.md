# Zacks Jersey House — Design Brainstorm

## Reference
Clean, modern, premium retail look inspired by dental clinic showcase style — light backgrounds, trust-focused, polished.

## Chosen Approach: Clean Premium Retail

### Design Movement
Modern minimalism meets premium sports retail — clean lines, generous whitespace, soft rounded cards, subtle shadows. Think Apple Store meets premium sports merchandise.

### Core Principles
1. **Clarity over clutter** — lots of whitespace, clear hierarchy
2. **Trust-first** — stats, ratings, social proof prominently displayed
3. **Product as hero** — jerseys are the star, presented with cinematic animation
4. **Friendly premium** — approachable but polished, not cold

### Color Philosophy
- **Primary accent: Teal** (#0d9488) — clean, modern, unique, trustworthy
- **Secondary accent: Emerald Green** (#10b981) — WhatsApp, CTAs, success states
- **Background: Off-white** (#f8fafc) — warm, inviting
- **Cards: Pure white** (#ffffff) with soft shadows (0 4px 20px rgba(0,0,0,0.06))
- **Text: Dark navy** (#1e293b) for headings, slate (#64748b) for body
- **Why:** Teal is unexpected for sports — it says "premium" not "generic sports store"

### Layout Paradigm
- Full-width hero with split layout (text left, animated jersey right)
- Card grids with soft shadows and rounded corners (12px+)
- Trust bar below hero with stats and icons
- Asymmetric sections with visual variety
- Generous padding (80-100px sections)

### Signature Elements
1. **Floating spinning jersey** — CSS 3D animation, gentle rotation + bobbing on hero
2. **Trust stats row** — icons with numbers (5,000+ fans, 50+ clubs, 4.9 rating, nationwide delivery)
3. **Teal accent buttons** with soft glow on hover

### Interaction Philosophy
- Smooth hover transitions on cards (lift + shadow deepen)
- Jersey rotates/floats continuously in hero
- Buttons have satisfying press feedback (scale 0.97)
- Scroll reveals content gracefully with fade-up

### Animation
- Hero jersey: continuous slow Y-axis rotation (360deg over 8s) + vertical bob (translateY 20px oscillation, 4s cycle)
- Cards: fade-in on scroll with 60ms stagger
- Buttons: scale(0.97) on press, 160ms ease-out
- Sections: slide-up reveal on scroll, 400ms
- Subtle scale on card hover (1.02)

### Typography System
- **Display/Headings**: "Oswald" (Google Fonts) — bold, condensed, athletic feel
- **Body/Secondary**: "Inter" — clean, readable, modern
- **Hierarchy**:
  - H1: Oswald 700, 3.5rem+, letter-spacing -0.02em, dark navy
  - H2: Oswald 600, 2.5rem
  - Body: Inter 400, 1rem, line-height 1.6, slate gray
  - Accents: Oswald 500, uppercase, tracking-wider, teal

### Brand Essence
**"Wear the badge. Own the moment."** — Zacks Jersey House is for passionate football fans who want premium replicas. It's different because it doesn't just sell jerseys — it sells the feeling of wearing your team's colors with pride.

**Personality**: Clean · Premium · Trustworthy

### Brand Voice
- Headlines are declarative and confident: "Your Team. Your Colors. Your Pride."
- CTAs are direct: "Shop Now", "View Collection", "Find Your Kit"
- Microcopy is minimal and punchy: "Authentic quality. Unbeatable prices."
- Example lines:
  1. "Every jersey tells a story. Yours starts here."
  2. "From the pitch to your closet — wear it loud."

### Wordmark & Logo
- A bold, condensed wordmark in Oswald with a subtle shield/crest icon
- Icon: A minimal football shield outline with "ZJH" monogram inside
- Color: Teal on light background

### Signature Brand Color
**Teal (#0d9488)** — unmistakably Zacks, clean and modern. Paired with off-white for maximum clarity and elegance.

## Style Decisions
- Light mode is the default — clean white/off-white backgrounds with soft shadows
- Teal is the primary accent — used for buttons, highlights, links, active states
- Emerald green is used for WhatsApp/ordering CTAs
- Every card has rounded corners (12px+) and soft shadow
- Trust elements (stats, ratings) are always visible and prominent
- The hero jersey floats and spins — it's the centerpiece
- Typography hierarchy is clear: bold Oswald headings, clean Inter body
