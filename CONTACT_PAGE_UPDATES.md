# Contact Page Updates - Unified Border System & Google Maps

## ✅ Changes Completed

### Change 1: Unified Animated Border System
**Applied to ALL cards with consistent behavior:**

#### CSS Added:
```css
.contact-card-base {
  border: 2px solid var(--card-border-color);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 4px 20px var(--card-glow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
}

.contact-card-base::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--card-border-color);
  border-radius: 20px 20px 0 0;
  opacity: 0.8;
}

.contact-card-base:hover {
  transform: translateY(-6px);
  border-color: var(--card-border-color);
  box-shadow:
    0 0 0 1px var(--card-border-color),
    0 16px 40px var(--card-glow-color),
    0 4px 12px rgba(0,0,0,0.06);
}
```

#### Premium Color Scheme Applied:
| Card | Border Color | Hover Glow | Rationale |
|------|--------------|------------|-----------|
| Call Us | #16a34a (green) | rgba(22,163,74,0.20) | Phone = green = action |
| WhatsApp Us | #25d366 (WhatsApp green) | rgba(37,211,102,0.20) | Brand color |
| Email Us | #2563eb (blue) | rgba(37,99,235,0.20) | Trust, communication |
| Our Office + Branches | #0891b2 (cyan-blue) | rgba(8,145,178,0.18) | Professional, location |
| Business Hours | #7c3aed (violet) | rgba(124,58,237,0.18) | Time, premium |

#### Components Updated:
- ✅ ContactMethodCards - Added `contact-card-base` class with CSS variables
- ✅ CombinedOfficeAndBranches - Added `contact-card-base` class with cyan-blue theme
- ✅ BusinessHoursCard - Added `contact-card-base` class with violet theme

### Change 2: Branch Rows Border Behavior
**Each branch row now has hover effects:**

#### CSS Added:
```css
.branch-row {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  border-left: 3px solid transparent;
  padding: 0.75rem 1rem;
  transition: border-left-color 0.25s ease, background 0.25s ease, transform 0.2s ease;
  cursor: pointer;
}

.branch-row:hover {
  border-left-color: #0891b2;  /* matches combined card border */
  background: #f0f9ff;          /* light cyan tint */
  transform: translateX(4px);   /* subtle slide right */
}

.branch-row:hover .branch-name {
  color: #0891b2;
  transition: color 0.2s ease;
}

.badge-head-office {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 6px;
  background: #eff6ff;
  color: #2563eb;
  border: 1px solid #bfdbfe;
}

.badge-branch {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 6px;
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
}
```

#### Features:
- ✅ Cyan left-border appears on hover
- ✅ Light cyan background tint on hover
- ✅ Subtle slide-right animation (4px)
- ✅ Branch name changes to cyan color on hover
- ✅ Proper badge styling for HEAD OFFICE vs BRANCH

### Change 3: Google Maps Navigation
**All branches and Get Directions button now open Google Maps:**

#### Code Added:
```typescript
// Google Maps locations
const branchLocations: Record<string, string> = {
  baramati: 'https://www.google.com/maps/search/?api=1&query=Shop+No.+11+Second+Floor+Subhadra+Mall+Front+of+Reliance+Smart+MIDC+Baramati+Dist+Pune+413133',
  pune: 'https://www.google.com/maps/search/?api=1&query=Pune+Maharashtra',
  mumbai: 'https://www.google.com/maps/search/?api=1&query=Mumbai+Maharashtra',
  kolhapur: 'https://www.google.com/maps/search/?api=1&query=Kolhapur+Maharashtra',
  saswad: 'https://www.google.com/maps/search/?api=1&query=Saswad+Maharashtra',
  tembhurni: 'https://www.google.com/maps/search/?api=1&query=Tembhurni+Maharashtra',
};

const openMap = (key: string) => {
  window.open(branchLocations[key], '_blank', 'noopener,noreferrer');
};
```

#### TypeScript Declaration Added:
```typescript
declare module 'react' {
  interface CSSProperties {
    '--card-border-color'?: string;
    '--card-glow-color'?: string;
  }
}
```

#### Clickable Elements:
- ✅ Get Directions button → `onClick={() => openMap('baramati')}`
- ✅ Baramati branch row → `onClick={() => openMap('baramati')}`
- ✅ Pune branch row → `onClick={() => openMap('pune')}`
- ✅ Mumbai branch row → `onClick={() => openMap('mumbai')}`
- ✅ Kolhapur branch row → `onClick={() => openMap('kolhapur')}`
- ✅ Saswad branch row → `onClick={() => openMap('saswad')}`
- ✅ Tembhurni branch row → `onClick={() => openMap('tembhurni')}`

#### External Link Indicator:
- ✅ Added `↗` icon next to each branch name
- ✅ Styled with `fontSize: '0.7rem', color: '#94a3b8', marginLeft: '4px'`

## 🎯 What Was NOT Changed
- ✅ Card layout, dimensions, padding, grid structure preserved
- ✅ Logo images unchanged
- ✅ Form logic and validation intact
- ✅ All existing animations and float effects preserved
- ✅ FAQ section untouched
- ✅ Need Instant Help banner untouched
- ✅ Footer untouched
- ✅ No other components or files modified
- ✅ All navigation uses `window.open`, not react-router

## 🚀 Testing Instructions

### 1. Start Development Server
```bash
cd SHEKHAR-SHINDE-PROJECT/sanskruti_associates_fintech_solution
npm run dev
# or
pnpm dev
```

### 2. Navigate to Contact Page
Open: `http://localhost:5173/contact`

### 3. Verify Changes

#### Test 1: Unified Border System
- [ ] Hover over **Call Us** card → Green border glows, card lifts
- [ ] Hover over **WhatsApp Us** card → Teal border glows, card lifts
- [ ] Hover over **Email Us** card → Blue border glows, card lifts
- [ ] Hover over **Office + Branches** card → Cyan-blue border glows, card lifts
- [ ] Hover over **Business Hours** card → Violet border glows, card lifts
- [ ] All cards have 3px colored top bar
- [ ] All cards lift by 6px on hover
- [ ] Transitions are smooth (0.3s ease)

#### Test 2: Branch Row Hover
- [ ] Hover over Baramati row → Cyan left-border appears, slides right 4px
- [ ] Hover over Pune row → Cyan left-border appears, slides right 4px
- [ ] Hover over Mumbai row → Cyan left-border appears, slides right 4px
- [ ] Hover over Kolhapur row → Cyan left-border appears, slides right 4px
- [ ] Hover over Saswad row → Cyan left-border appears, slides right 4px
- [ ] Hover over Tembhurni row → Cyan left-border appears, slides right 4px
- [ ] Branch name changes to cyan color on hover
- [ ] Light cyan background appears on hover
- [ ] HEAD OFFICE badge has blue styling
- [ ] BRANCH badges have gray styling

#### Test 3: Google Maps Navigation
- [ ] Click **Get Directions** button → Opens Baramati location in new tab
- [ ] Click **Baramati** row → Opens Baramati location in new tab
- [ ] Click **Pune** row → Opens Pune location in new tab
- [ ] Click **Mumbai** row → Opens Mumbai location in new tab
- [ ] Click **Kolhapur** row → Opens Kolhapur location in new tab
- [ ] Click **Saswad** row → Opens Saswad location in new tab
- [ ] Click **Tembhurni** row → Opens Tembhurni location in new tab
- [ ] All links open in new tab (don't navigate away from site)
- [ ] Each branch name shows `↗` icon
- [ ] Cursor changes to pointer on branch rows

## 📊 Summary

### Files Modified
- ✅ `src/app/components/ContactUs.tsx` (only file changed)

### Lines Added
- TypeScript declaration: ~7 lines
- Google Maps URLs: ~10 lines
- CSS styles: ~80 lines
- Component updates: ~30 lines
- **Total**: ~127 lines added/modified

### Features Added
- ✅ Unified border system across 5 card types
- ✅ Premium color scheme with intentional rationale
- ✅ Branch row hover effects with cyan theme
- ✅ Google Maps integration for all 6 branches + office
- ✅ External link indicators (↗ icons)
- ✅ Proper badge styling

### Zero Breaking Changes
- ✅ All existing functionality preserved
- ✅ No layout changes
- ✅ No animation disruptions
- ✅ No routing changes
- ✅ TypeScript compilation successful

---

**Status**: ✅ Complete and ready for testing

**Next Step**: Run `pnpm dev` and verify all three changes work as expected.
