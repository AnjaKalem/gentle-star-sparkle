
## AI Sparkle Animation Component

Create a reusable `AiSparkle` component that renders the three-star SVG with a premium, calm ping-pong looping animation.

### Implementation

1. **Copy the uploaded SVG** into `src/assets/stars_ellis.svg`

2. **Create `src/components/AiSparkle.tsx`** — a React component that:
   - Renders the 3 star paths as separate animated elements
   - Uses CSS `@keyframes` with `animation-direction: alternate` for seamless ping-pong looping
   - Each star has its own keyframe animation:
     - **Large star**: 0ms delay, 600ms duration — scales 1.05→1.02→1.0, opacity 0→1→1
     - **Small star**: 180ms delay, 700ms duration
     - **Yellow star**: 320ms delay, 700ms duration
   - Easing: `ease-out` for appear phase, `ease-in-out` for settle
   - Slight offset between scale and opacity keyframe percentages for organic feel
   - `animation-iteration-count: infinite` + `animation-direction: alternate` for continuous breathing

3. **Update `src/routes/index.tsx`** — replace placeholder with a centered demo showing the sparkle animation on a clean background

### Visual Details
- Ultra-subtle motion — max scale difference is 5% (1.05→1.0)
- No flickering, no hard resets — pure CSS alternate looping
- Preserves the original SVG gradients (blue-purple) and yellow stroke on the middle star
