# AGENTS.md

## Project: Sky Moon Trading

This project is an existing Next.js website for **Sky Moon Trading**, an international import-export company.

The primary goal is to enhance the existing website with **premium, smooth and professional animations** without redesigning the existing UI.

---

## 1. Core Rule

### DO NOT REDESIGN THE WEBSITE.

The existing visual identity must remain unchanged.

Preserve:

- Theme
- Color palette
- Typography
- Layout
- Spacing
- Sections
- Navbar
- Footer
- Hero structure
- Product cards
- Buttons
- Images
- Responsive design
- Routes
- Existing components
- Existing functionality
- Existing content/data

Only improve the website by adding animations and micro-interactions.

---

## 2. Design Philosophy

Animations should make the website feel:

- Premium
- Professional
- Smooth
- Modern
- Elegant
- Business-oriented
- International
- Reliable

The animation style should match an international import-export company.

Avoid:

- Excessive animations
- Cartoon-style effects
- Large bouncing effects
- Flashing animations
- Excessive rotations
- Neon effects
- Aggressive parallax
- Distracting 3D effects
- Slow transitions

The animation should feel expensive and subtle.

---

## 3. Animation Technology

Preferred:

- `motion`
- `motion/react`
- CSS transitions for simple interactions

Use Motion for:

- Scroll reveal
- Stagger animations
- Layout animations
- Modal animations
- Page transitions
- Advanced hover interactions
- Enter/exit animations

Use CSS for simple:

- Hover
- Focus
- Color transitions
- Shadow transitions
- Small transforms

Do not add multiple animation libraries unnecessarily.

---

## 4. Page Entrance Animation

Every page should have a subtle entrance animation.

Preferred behavior:

- opacity: 0 → 1
- y: 15–25px → 0
- duration: approximately 0.5–0.8s

Avoid:

- Large zoom
- Large movement
- Rotation
- Long delays

---

## 5. Navbar Animation

Keep the existing navbar design.

Add only subtle interactions:

- Smooth link hover
- Animated underline/indicator if appropriate
- Small logo hover scale
- Smooth mobile menu animation if a mobile menu already exists

Do not change:

- Navbar structure
- Navbar colors
- Navbar height
- Navbar positioning
- Navigation items unless explicitly requested

---

## 6. Hero Animation

The hero should have a polished entrance sequence.

Recommended order:

1. Heading
2. Description
3. CTA buttons
4. Hero image/content

Use subtle staggered animation.

Example:

```text
Heading → 0ms
Description → 100ms
CTA → 200ms
Image → 150ms
```

Do not make the hero animation slow.

If an existing hero image supports it, a very subtle floating/parallax effect may be used.

---

## 7. Scroll Reveal

Use viewport-based animations for major sections.

Recommended animation:

```text
opacity: 0 → 1
y: 20px → 0
```

Apply to existing:

- About section
- Services
- Features
- Products
- Export/global section
- Management section
- CTA

Use stagger for groups of cards.

Do not animate every small text element individually.

---

## 8. Product Card Animation

Product cards should have subtle professional hover effects.

Recommended:

```text
translateY: -4px
image scale: 1.03–1.05
shadow: slightly stronger
```

All transitions should be smooth.

Do NOT use:

- Card rotation
- Large scaling
- Excessive 3D
- Flashing borders
- Excessive glow

Preserve the existing card design.

---

## 9. Button Animation

Buttons should have small micro-interactions.

On hover:

- Slight scale
- Smooth background/color transition
- Optional arrow movement

On click:

- Small press effect

Example:

```text
hover: scale(1.02)
tap: scale(0.97)
```

Do not make buttons bounce.

---

## 10. Image Animation

Images can use:

- Fade-in
- Subtle scale
- Small hover zoom
- Gentle floating effect where appropriate

Never:

- Distort images
- Change aspect ratio
- Replace existing images unnecessarily
- Add excessive image movement

---

## 11. Management Section

Existing management information:

- CEO: Liton Sen
- Managing Director / Manager: MD Shafique

Add only subtle animations:

- Scroll reveal
- Card hover
- Image/avatar hover scale

Do not invent:

- Qualifications
- Awards
- Experience
- Companies
- Positions
- Statistics

---

## 12. Product Filtering / Search

If search/filter functionality already exists:

- Preserve all functionality.
- Animate product changes smoothly.
- Avoid sudden layout jumps.
- Use layout animation where appropriate.
- Keep filtering logic unchanged.

Do not rewrite working search/filter logic just to add animation.

---

## 13. Modal / Drawer Animation

If the project already contains product details, modals, or drawers:

Opening:

```text
opacity: 0 → 1
scale: 0.96 → 1
```

Closing:

```text
opacity: 1 → 0
scale: 1 → 0.96
```

Overlay should fade smoothly.

Do not redesign the modal.

---

## 14. Page Transitions

If multiple pages already exist, use subtle page transitions.

Preferred:

- Fade
- Small vertical movement

Avoid:

- Long transitions
- Full-screen animation
- Complex page wipes
- Excessive motion

Navigation must remain fast.

---

## 15. Footer

Do not redesign the footer.

Only add:

- Subtle entrance animation
- Link hover transitions
- Small underline/opacity effects where appropriate

---

## 16. Responsive Animation

Animations must work correctly on:

- 320px
- 375px
- 425px
- 768px
- 1024px
- 1280px
- 1440px+

Mobile animations should be lighter.

Never introduce:

- Horizontal overflow
- Layout shifting
- Broken grids
- Hidden content
- Slow mobile interactions

---

## 17. Accessibility

Respect `prefers-reduced-motion`.

Users who have reduced motion enabled should receive:

- Minimal movement
- Shorter transitions
- Or no non-essential animation

Never make animation necessary for understanding or using the website.

---

## 18. Performance Rules

Prefer GPU-friendly properties:

- `transform`
- `opacity`

Avoid unnecessary continuous animations.

Do not create:

- Infinite JavaScript loops
- Heavy scroll listeners
- Expensive calculations
- Unnecessary re-renders

Animations must remain smooth on lower-end devices.

---

## 19. Next.js Rules

This is a Next.js project.

Before modifying anything:

1. Inspect the existing project.
2. Understand the App Router structure.
3. Identify existing components.
4. Identify existing animation setup.
5. Reuse existing components.

If `motion/react` requires a Client Component:

- Add `"use client"` only to the component that needs it.
- Do NOT convert the entire application to Client Components unnecessarily.

---

## 20. Component Reuse

Never duplicate existing components.

Especially:

- Navbar
- Footer
- Product Card
- Product data
- Buttons
- Search
- Filters
- Modal
- Layout

If an existing component can be enhanced, enhance it instead of creating another version.

---

## 21. Data Preservation

Animation work must NOT modify business data.

Preserve existing company information and product data.

Sky Moon Trading is an international import-export company.

Existing management:

```text
CEO: Liton Sen
Managing Director / Manager: MD Shafique
```

Do not invent company statistics, certifications, countries, awards, addresses, phone numbers, emails, or other business claims.

---

## 22. Code Quality

Keep code:

- Clean
- Readable
- Maintainable
- Reusable
- Production-ready

Use reusable animation variants when they reduce duplication.

Example pattern:

```jsx
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
```

Do not create unnecessary abstraction for simple animations.

---

## 23. Final Verification

Before finishing, verify:

### UI

- Existing design is unchanged.
- Colors are unchanged.
- Typography is unchanged.
- Layout is unchanged.
- Sections are unchanged.

### Animations

- Hero animation works.
- Scroll reveal works.
- Product hover works.
- Button interactions work.
- Navbar interactions work.
- Modal animation works if applicable.
- Page transitions work if applicable.
- Animations are smooth.

### Responsive

Test:

- Desktop
- Tablet
- Mobile

Make sure there is no horizontal overflow.

### Functionality

Verify:

- Navigation
- Search
- Filters
- Product interactions
- Buttons
- Forms
- Existing API functionality
- Existing database functionality

Nothing should break.

### Console

There must be:

- No React errors
- No hydration errors
- No animation-related errors
- No unnecessary warnings

---

## 24. Golden Rule

Follow this workflow:

```text
INSPECT
↓
PRESERVE
↓
ENHANCE
↓
ANIMATE
↓
POLISH
↓
VERIFY
```

The final result should feel like:

> "The same Sky Moon Trading website, but much smoother, more modern and premium."

It should NOT feel like:

> "A completely redesigned website."

The existing UI is the source of truth.

**Animation is the enhancement — not the redesign.**
