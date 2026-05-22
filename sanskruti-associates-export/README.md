# Sanskruti Associates - Loan Brokerage Platform

**Tagline:** Always With You

## 🚀 Project Overview

Complete fintech loan brokerage web application built with React, TypeScript, and Tailwind CSS. This platform connects customers with multiple banks for various loan products.

## 📋 Features

### Customer-Facing Features
- **Homepage** - Hero section with image slideshow, loan types, bank partners, EMI calculator
- **Login/Register** - Secure authentication system
- **Loan Application Form** - Multi-step form (5 steps) with OTP verification
- **User Dashboard** - Track loan applications, EMI dues, documents, notifications
- **EMI Calculator** - Calculate monthly installments with live results
- **Design System** - Complete UI component documentation
- **Site Map** - Full navigation structure and user flows

### Admin Panel Features
- **Leads Management** - View, filter, and manage all loan applications
- **Lead Details** - Detailed view with status updates, document management
- **Agent Assignment** - Assign leads to team members
- **Bank Recommendations** - Compare and recommend best bank offers

## 🛠️ Tech Stack

- **Frontend:** React 18.3.1 with TypeScript
- **Styling:** Tailwind CSS v4.0
- **Icons:** Lucide React
- **Build Tool:** Vite 5.2
- **Navigation:** Custom React Context (no react-router)

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone or extract the project**
```bash
cd sanskruti-associates
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🏗️ Project Structure

```
sanskruti-associates/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── AppRouter.tsx          # Custom navigation context
│   │   │   ├── Header.tsx             # Fixed navbar
│   │   │   ├── Hero.tsx               # Hero section with slideshow
│   │   │   ├── LoanTypes.tsx          # Loan products grid
│   │   │   ├── WhyChooseUs.tsx        # Benefits section
│   │   │   ├── OurBankPartners.tsx    # Bank logos display
│   │   │   ├── EMICalculator.tsx      # EMI calculation tool
│   │   │   ├── HowItWorks.tsx         # Process steps
│   │   │   ├── Testimonials.tsx       # Customer reviews
│   │   │   ├── ContactCTA.tsx         # Contact section
│   │   │   ├── TrustBadges.tsx        # Trust indicators
│   │   │   ├── Footer.tsx             # Footer section
│   │   │   ├── LoginRegister.tsx      # Auth page
│   │   │   ├── LoanApplicationForm.tsx # Multi-step form
│   │   │   ├── UserDashboard.tsx      # Customer dashboard
│   │   │   ├── LeadsManagement.tsx    # Admin CRM
│   │   │   ├── LeadDetails.tsx        # Lead detail view
│   │   │   ├── DesignSystem.tsx       # UI documentation
│   │   │   └── SiteMap.tsx            # Site structure
│   │   └── App.tsx                    # Main app component
│   ├── styles/
│   │   ├── theme.css                  # Global styles + Tailwind
│   │   └── fonts.css                  # Font imports
│   ├── imports/                       # Images and assets
│   └── main.tsx                       # App entry point
├── public/                            # Public assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Blue:** #2563EB - Buttons, links, active states
- **Accent Green:** #16A34A - Success, CTAs
- **Dark Navy:** #0f172a - Sidebar, headers
- **Background:** #EFF6FF - Page backgrounds
- **Text Dark:** #1F2937 - Primary text
- **Text Gray:** #6B7280 - Secondary text

### Typography
- Heading 1: 48px Bold
- Heading 2: 36px Bold
- Heading 3: 24px Bold
- Body: 16px Regular
- Small: 14px Regular
- Caption: 12px Regular

## 📄 Available Pages

1. **Homepage** (`/`) - Main landing page with all sections
2. **Login** (`/login`) - User authentication
3. **Loan Application** (`/loan-application`) - Apply for loans
4. **EMI Calculator** (`/emi-calculator`) - Calculate EMI
5. **User Dashboard** (`/user-dashboard`) - Customer portal
6. **Leads Management** (`/leads-management`) - Admin panel
7. **Lead Details** (`/lead-details`) - Individual lead view
8. **About Us** (`/about`) - Company information
9. **Contact** (`/contact`) - Contact information
10. **Design System** (`/design-system`) - UI documentation
11. **Site Map** (`/site-map`) - Navigation structure

## 🧭 Navigation

This app uses a **custom navigation system** (not react-router-dom):

```tsx
import { useNavigation } from './components/AppRouter';

const { navigateTo, scrollToSection } = useNavigation();

// Navigate to a page
navigateTo('homepage');
navigateTo('loan-application');

// Scroll to a section (on homepage)
scrollToSection('loan-services');
scrollToSection('emi-calculator-section');
```

## 🏦 Loan Types Offered

1. Home Loan
2. Personal Loan
3. Car Loan
4. Business Loan
5. Loan Against Property (LAP)
6. Credit Card / Overdraft
7. Education Loan
8. School Finance
9. Hospital Finance
10. Machinery Loan
11. SME / Industrial Loan

## 📊 Key Statistics

- **1000+** Happy Customers
- **₹500Cr+** Loans Disbursed
- **25+** Bank Partners
- **2-3 Days** Quick Approval
- **8.5%** Interest Rate (starting from)

## 🏢 Bank Partners (20+)

HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra, YES Bank, IndusInd Bank, IDFC First Bank, RBL Bank, Federal Bank, Bank of Baroda, Union Bank, Canara Bank, Punjab National Bank, IDBI Bank, Indian Bank, Central Bank of India, Bank of India, UCO Bank, Indian Overseas Bank

## 🚀 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔐 User Roles

1. **Customer** - Apply for loans, track status, manage documents
2. **Admin** - Manage leads, assign agents, update statuses
3. **Agent** - Handle assigned leads, contact customers

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Responsive grids and layouts

## 🎯 Next Steps for Development

### Backend Integration (To-Do)
- [ ] Set up Node.js + Express server
- [ ] Connect MongoDB database
- [ ] Create REST APIs for loans, users, leads
- [ ] Implement authentication (JWT)
- [ ] File upload functionality for documents
- [ ] OTP service integration
- [ ] Email/SMS notifications
- [ ] Admin dashboard APIs

### Additional Features (To-Do)
- [ ] Real bank API integrations
- [ ] Payment gateway integration
- [ ] Real-time notifications
- [ ] Chat support system
- [ ] Document verification system
- [ ] Credit score check integration
- [ ] WhatsApp business API integration

## 📞 Contact

**Sanskruti Associates**  
**President:** Shekhar Shinde  
**Phone:** 7758 96 9798 / 9921 37 4565  
**Email:** sanskruti.sss1108@gmail.com  
**WhatsApp:** 7758 96 9798  
**Address:** Shop No. 11 Second Floor, Subhadra Mall, Front of Relince Smart MIDC, Baramati Dist-Pune 413133  
**Branches:** Baramati (Head Office), Pune, Mumbai, Kolhapur

---

**Built with ❤️ for Sanskruti Associates**
