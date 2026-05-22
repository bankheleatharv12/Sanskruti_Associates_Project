# Premium Contact Page - Implementation Guide

## 📁 File Location
`contact-premium.html` - Single standalone HTML file

## ✨ Features Implemented

### 🎨 Design System
- **Premium Color Palette**:
  - Deep Navy: `#0A1628` (primary text)
  - Electric Teal: `#00D4AA` (accent)
  - Rich Gold: `#FFD700` (accent)
  - Purple: `#8B5CF6` (accent)
- **Background**: Soft off-white `#F4F6FA`
- **Font**: Inter (Google Fonts)
- **Border Radius**: 16px on all cards
- **Transitions**: 0.3s ease

### 📐 Section 1 - Contact Cards
✅ **3 Cards in a Row**:
- Call Us (Green gradient)
- WhatsApp Us (Teal gradient)
- Email Us (Blue gradient)

✅ **Animated Gradient Border**:
- 2px border with gradient animation
- Glows on hover using `@keyframes borderGlow`
- Smooth opacity transitions

✅ **Hover Effects**:
- `transform: translateY(-6px)` lift
- Enhanced shadow depth
- Icon rotation and scale
- Border glow animation

✅ **CTA Buttons**:
- Color-matched to card theme
- Gradient backgrounds
- Hover lift effect

### 🏢 Section 2 - Office & Branches
✅ **Split Layout**:
- Left: Our Office (with map placeholder)
- Right: Our Branches (6 branches)

✅ **All Branches Clickable**:
- ✅ Baramati (Head Office) → Google Maps
- ✅ Pune → Google Maps
- ✅ Mumbai → Google Maps
- ✅ Kolhapur → Google Maps
- ✅ Saswad → Google Maps
- ✅ Tembhurni → Google Maps
- All open in new tab (`target="_blank"`)

✅ **Branch Card Styling**:
- Same animated border as Section 1
- Unique accent color per branch (rotates through palette)
- Hover lift + glow effect
- HEAD OFFICE / BRANCH badges

### ⏰ Section 3 - Business Hours
✅ **Premium Card Style**:
- Same animated border
- Hover glow effect

✅ **Status Indicators**:
- Green dot for open days (Mon-Fri, Saturday)
- Red dot for closed (Sunday)
- Red text for "Closed"

✅ **Hours Display**:
- Mon-Fri: 9:00 AM - 7:00 PM
- Saturday: 9:00 AM - 5:00 PM
- Sunday: Closed

### 📨 Section 4 - Contact Form
✅ **Form Fields**:
- Full Name* (required)
- Phone Number* (required)
- Email Address
- Loan Type (dropdown with 7 options)
- Loan Amount (dropdown with 4 ranges)
- Message (textarea)

✅ **Premium Styling**:
- Same card border animation
- Subtle hover glow
- Focus states with blue border + shadow
- Background transitions on focus

✅ **Submit Button**:
- Green gradient background
- Paper plane icon (✈️)
- Hover lift effect
- Full width

✅ **Success Message**:
- Shows after form submission
- Green checkmark icon
- Auto-hides after 3 seconds
- Form resets automatically

## 🎭 Animations & Effects

### Border Glow Animation
```css
@keyframes borderGlow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}
```
- Applied to all premium cards
- 2s duration, infinite loop
- Smooth ease-in-out timing

### Hover Physics
- **Lift**: `translateY(-6px)`
- **Shadow**: `0 20px 40px rgba(0, 0, 0, 0.12)`
- **Icon Transform**: `scale(1.1) rotate(5deg)`
- **Duration**: 0.3s ease

### Gradient Borders
- Uses `::before` pseudo-element
- Linear gradient with multiple colors
- Mask composite technique
- Opacity transition on hover

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 3-column grid for contact cards
- **Tablet**: 2-column grid
- **Mobile** (< 768px):
  - Single column layout
  - Stacked office/branches sections
  - Full-width form fields
  - Reduced padding

### Grid System
- CSS Grid for main layouts
- Flexbox for internal alignment
- `auto-fit` with `minmax()` for flexibility

## 🎨 Color Variations

### Contact Cards
- **Call**: Green gradient `#16a34a → #15803d`
- **WhatsApp**: Teal gradient `#25d366 → #128c7e`
- **Email**: Blue gradient `#2563eb → #1e40af`

### Branch Cards (Rotating Accents)
1. Baramati: Blue `#2563eb → #1e40af`
2. Pune: Teal `#00D4AA → #059669`
3. Mumbai: Gold `#FFD700 → #f59e0b`
4. Kolhapur: Purple `#8B5CF6 → #7c3aed`
5. Saswad: Pink `#ec4899 → #db2777`
6. Tembhurni: Cyan `#06b6d4 → #0891b2`

## 🚀 How to Use

### 1. Open the File
Simply open `contact-premium.html` in any modern browser:
- Chrome
- Firefox
- Safari
- Edge

### 2. Test Features
- ✅ Hover over cards to see border glow
- ✅ Click branch cards to open Google Maps
- ✅ Fill and submit the form
- ✅ Test on mobile (resize browser)

### 3. Customize
All styles are in the `<style>` section:
- Change colors in CSS variables
- Modify gradient combinations
- Adjust animation timings
- Update content in HTML

## 📋 Technical Details

### No Dependencies
- ✅ Pure HTML5
- ✅ Pure CSS3
- ✅ Vanilla JavaScript
- ✅ No frameworks or libraries (except Google Fonts)

### Browser Support
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS Grid & Flexbox
- ✅ CSS Animations
- ✅ Gradient borders with mask-composite

### Performance
- Lightweight (~15KB HTML)
- Optimized animations (GPU-accelerated)
- Minimal JavaScript
- Fast load time

## 🎯 Key Features Summary

| Feature | Status |
|---------|--------|
| Animated gradient borders | ✅ |
| Premium color palette | ✅ |
| Hover lift effects | ✅ |
| Clickable branch cards | ✅ |
| Google Maps integration | ✅ |
| Responsive design | ✅ |
| Form validation | ✅ |
| Success message | ✅ |
| No frameworks | ✅ |
| Single HTML file | ✅ |

## 🔧 Customization Tips

### Change Colors
Find and replace color codes:
- `#0A1628` - Primary dark
- `#00D4AA` - Teal accent
- `#FFD700` - Gold accent
- `#F4F6FA` - Background

### Modify Animations
Adjust in CSS:
```css
transition: all 0.3s ease; /* Change duration */
@keyframes borderGlow { /* Modify keyframes */
```

### Update Content
Edit HTML directly:
- Phone numbers
- Email addresses
- Branch locations
- Form options

## 📞 Contact Information

All contact details are easily editable in the HTML:
- **Phone**: 7758 96 9798 / 9921 37 4565
- **Email**: sanskruti.sss1108@gmail.com
- **Office**: Baramati, Pune 413133

## 🎉 Ready to Deploy!

The file is production-ready and can be:
- Uploaded to any web server
- Integrated into existing websites
- Used as a standalone page
- Embedded in iframes

---

*Created with premium design principles and modern web standards*
