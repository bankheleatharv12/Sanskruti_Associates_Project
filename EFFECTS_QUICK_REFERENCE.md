# Contact Page Effects - Quick Reference

## 🎯 Effect Checklist

| Effect | Description | Status | Cards Applied |
|--------|-------------|--------|---------------|
| **1. Continuous Float** | Cards float up/down automatically | ✅ | All 6 cards |
| **2. Idle Glow Pulse** | Breathing glow effect (no interaction) | ✅ | All 6 cards |
| **3. Shimmer Sweep** | Diagonal light sweep (automatic) | ✅ | All 6 cards |
| **4. 3D Tilt + Lift** | Card tilts following cursor on hover | ✅ | All 6 cards |
| **5. Glow Explosion** | Intense glow on hover | ✅ | All 6 cards |
| **6. Content Reactions** | Logo/title/button animate on hover | ✅ | All 6 cards |
| **7. Spotlight Follow** | Radial light follows cursor | ✅ | All 6 cards |
| **8. Click Ripple** | Ripple expands from click point | ✅ | All 6 cards |

---

## 🎨 Color Themes

### Top Cards
- **Call Us** → Green (`#16A34A`)
- **WhatsApp Us** → Green (`#25D366`)
- **Email Us** → Blue (`#2563EB`)

### Sidebar Cards
- **Our Office** → Indigo (`#6366f1`)
- **Branches** → Indigo (`#6366f1`)
- **Business Hours** → Indigo (`#6366f1`)

---

## ⏱️ Animation Timings

### Float Animation
- Duration: 4 seconds
- Delays: 0s, 0.5s, 1s, 1.5s, 2s, 2.5s

### Glow Pulse
- Duration: 3 seconds
- Continuous loop

### Shimmer Sweep
- Duration: 4 seconds
- Delays: 0s, 0.7s, 1.4s, 2.1s, 2.8s, 3.5s

### Hover Transitions
- 3D Tilt: 0.25s
- Content reactions: 0.25s - 0.35s
- Glow explosion: 0.3s

### Click Ripple
- Duration: 0.6s
- Auto-cleanup

---

## 🎭 Interactive Behaviors

### On Hover
1. Float animation **pauses**
2. Card tilts in 3D (±10°)
3. Card lifts up 8px
4. Card scales to 1.05
5. Glow intensifies dramatically
6. Logo scales to 1.12 and lifts
7. Title lifts 2px and changes color
8. Button lifts 2px and scales
9. Spotlight follows cursor

### On Click
- Ripple expands from click point
- Fades out as it grows
- Removes itself after animation

### Always Active (No Interaction)
- Continuous floating motion
- Breathing glow pulse
- Diagonal shimmer sweeps

---

## 🔧 Technical Details

### CSS Classes
```css
.premium-card        /* Top 3 cards base */
.card-green          /* Green theme */
.card-blue           /* Blue theme */
.sidebar-card        /* Sidebar 3 cards */
.logo-circle         /* Logo containers */
.card-title          /* Card headings */
.card-button         /* CTA buttons */
```

### React Handlers
```typescript
handleMouseMove()    // 3D tilt + spotlight
handleMouseLeave()   // Reset transforms
handleRipple()       // Click ripple effect
```

### Animation Keyframes
```css
@keyframes cardFloat
@keyframes cardGlowPulseGreen
@keyframes cardGlowPulseBlue
@keyframes cardGlowPulseIndigo
@keyframes cardShimmerSweep
@keyframes rippleExpand
```

---

## 📱 Responsive Behavior

All effects work seamlessly across:
- Desktop (full 3D tilt)
- Tablet (touch-optimized)
- Mobile (performance-optimized)

---

## ♿ Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigation preserved
- Screen reader compatible
- Focus states maintained

---

## 🚀 Performance

- GPU-accelerated transforms
- Efficient event handlers
- Auto-cleanup of temporary elements
- Optimized animation loops

---

## 📝 Notes

- All content preserved (no data changes)
- Layout unchanged
- Routing unaffected
- Other components untouched
- Zero breaking changes
