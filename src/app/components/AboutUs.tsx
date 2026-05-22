import { motion, useInView, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import {
  Home as HomeIcon, Users, TrendingUp, TrendingDown, Award, Building2, Zap, DollarSign, Headphones, Phone, MessageCircle, Star, ChevronRight, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, IndianRupee,
  Home, User, Briefcase, GraduationCap, Heart, Car, CreditCard, Settings, Factory, School, Truck, HardHat, ArrowRight, Sparkles,
  Shield, Clock, CheckCircle2, HeartHandshake, Globe, BadgeCheck, Navigation, ExternalLink, Quote
} from 'lucide-react';
import { Footer } from './Footer';

const services = [
  { icon: 'SA', name: 'Home Loan', desc: 'Affordable housing loans with best rates' },
  { icon: 'SA', name: 'Loan Against Property', desc: 'Unlock your property value' },
  { icon: 'SA', name: 'Personal & Personal & Business Loan', desc: 'Funding support for personal and business needs' },
  { icon: 'SA', name: 'Car Loan', desc: 'Drive your dream car with easy EMIs' },
  { icon: 'SA', name: 'CC / OD', desc: 'Working capital support through CC and OD facilities' },
  { icon: 'SA', name: 'Machinery Loan', desc: 'Finance industrial equipment' },
];

const whyChooseUs = [
  { icon: Building2, title: 'Multiple Banks', desc: 'Access to 200+ banks and NBFCs', color: '#2563EB' },
  { icon: Zap, title: 'Fast Approval', desc: 'Loan approval in 48 hours', color: '#16A34A' },
  { icon: DollarSign, title: 'Best Rates', desc: 'Lowest interest rates guaranteed', color: '#2563EB' },
  { icon: Headphones, title: 'Expert Team', desc: 'Dedicated loan experts', color: '#16A34A' },
];

const team = [
  { name: 'Shekhar Shinde', designation: 'President', phone: '7758 96 9798', email: 'sanskruti.sss1108@gmail.com' },
];

const branches = [
  {
    name: 'Baramati',
    tag: 'HEAD OFFICE',
    address: 'Shop No. 11 Second Floor, Subhadra Mall, Front of Relince Smart MIDC, Baramati Dist-Pune 413133',
  },
  { name: 'Pune', tag: 'BRANCH', address: 'Pune, Maharashtra' },
  { name: 'Mumbai', tag: 'BRANCH', address: 'Mumbai, Maharashtra' },
  { name: 'Kolhapur', tag: 'BRANCH', address: 'Kolhapur, Maharashtra' },
];



const LOANS = [
  {
    id: "home-loan",
    emoji: "🏠",
    icon: Home,
    title: "Home Loan",
    subtitle: "Ghar Ka Sapna Poora Karo",
    desc: "Get your dream home with attractive interest rates starting from 8.5% p.a.",
    rate: "8.5% p.a.",
    rateLabel: "Starting Rate",
    color: "blue",
    gradient: "from-blue-500 to-blue-700",
    lightBg: "from-blue-50 to-blue-100/50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    glowColor: "rgba(37,99,235,0.15)",
    route: "/home-loan",
    applyRoute: "/home-loan/apply",
  },
  {
    id: "lap",
    emoji: "🏢",
    icon: Building2,
    title: "Loan Against Property",
    subtitle: "Property Ki Takat",
    desc: "Use your property as collateral. Get up to ₹10 Crore at competitive rates.",
    rate: "9% p.a.",
    rateLabel: "Starting Rate",
    color: "purple",
    gradient: "from-purple-500 to-purple-700",
    lightBg: "from-purple-50 to-purple-100/50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    glowColor: "rgba(124,58,237,0.15)",
    route: "/loan-against-property",
    applyRoute: "/loan-against-property/apply",
  },
  {
    id: "personal-loan",
    emoji: "👤",
    icon: User,
    title: "Personal Loan",
    subtitle: "Instant Cash No Collateral",
    desc: "Quick funds for your personal needs. No collateral required. Fast approval.",
    rate: "10.5% p.a.",
    rateLabel: "Starting Rate",
    color: "green",
    gradient: "from-green-500 to-emerald-600",
    lightBg: "from-green-50 to-emerald-100/50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    glowColor: "rgba(22,163,74,0.15)",
    route: "/personal-loan",
    applyRoute: "/personal-loan/apply",
  },
  {
    id: "business-loan",
    emoji: "💼",
    icon: Briefcase,
    title: "Business Loan",
    subtitle: "Vyapar Ko Denge Raftaar",
    desc: "Grow your business with flexible repayment options and quick approval.",
    rate: "11% p.a.",
    rateLabel: "Starting Rate",
    color: "orange",
    gradient: "from-orange-500 to-orange-700",
    lightBg: "from-orange-50 to-orange-100/50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-700",
    glowColor: "rgba(234,88,12,0.15)",
    route: "/business-loan",
    applyRoute: "/business-loan/apply",
  },
  {
    id: "education-loan",
    emoji: "🎓",
    icon: GraduationCap,
    title: "Education Loan",
    subtitle: "Padho Aage Badho",
    desc: "Finance your dream education in India or abroad. Starts from 8.4% p.a.",
    rate: "8.4% p.a.",
    rateLabel: "Starting Rate",
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-700",
    lightBg: "from-indigo-50 to-indigo-100/50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-700",
    glowColor: "rgba(99,102,241,0.15)",
    route: "/education-loan",
    applyRoute: "/education-loan/apply",
  },
  {
    id: "hospital-finance",
    emoji: "🏥",
    icon: Heart,
    title: "Hospital Finance",
    subtitle: "Healthcare Growth Partner",
    desc: "Finance hospital expansion, medical equipment, or health facility upgrades.",
    rate: "11% p.a.",
    rateLabel: "Starting Rate",
    color: "rose",
    gradient: "from-rose-500 to-rose-700",
    lightBg: "from-rose-50 to-rose-100/50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    glowColor: "rgba(244,63,94,0.15)",
    route: "/hospital-finance",
    applyRoute: "/hospital-finance/apply",
  },
  {
    id: "car-loan",
    emoji: "🚗",
    icon: Car,
    title: "Car Loan",
    subtitle: "Drive Your Dream",
    desc: "New or used car loan for salaried and self-employed. Fast approval.",
    rate: "8.7% p.a.",
    rateLabel: "Starting Rate",
    color: "cyan",
    gradient: "from-cyan-500 to-cyan-700",
    lightBg: "from-cyan-50 to-cyan-100/50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-700",
    badgeBg: "bg-cyan-100",
    badgeText: "text-cyan-700",
    glowColor: "rgba(6,182,212,0.15)",
    route: "/car-loan",
    applyRoute: "/car-loan/apply",
  },
  {
    id: "cc-od",
    emoji: "💳",
    icon: CreditCard,
    title: "CC / OD Facility",
    subtitle: "Working Capital Solutions",
    desc: "Flexible working capital finance. Pay interest only on amount utilized.",
    rate: "₹1L – ₹10Cr",
    rateLabel: "Limit Range",
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-700",
    lightBg: "from-emerald-50 to-emerald-100/50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    glowColor: "rgba(5,150,105,0.15)",
    route: "/cc-od-finance",
    applyRoute: "/cc-od-finance/apply",
  },
  {
    id: "machinery-loan",
    emoji: "⚙️",
    icon: Settings,
    title: "Machinery Loan",
    subtitle: "Power Your Production",
    desc: "Finance new or used machinery for business growth. Quick approval.",
    rate: "11% p.a.",
    rateLabel: "Starting Rate",
    color: "slate",
    gradient: "from-slate-600 to-slate-800",
    lightBg: "from-slate-50 to-slate-100/50",
    borderColor: "border-slate-200",
    textColor: "text-slate-700",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-700",
    glowColor: "rgba(71,85,105,0.15)",
    route: "/machinery-loan",
    applyRoute: "/machinery-loan/apply",
  },
  {
    id: "industry-finance",
    emoji: "🏭",
    icon: Factory,
    title: "Industry Finance",
    subtitle: "MSME Growth Partner",
    desc: "Smart financing solutions for MSMEs and industrial businesses.",
    rate: "11% p.a.",
    rateLabel: "Starting Rate",
    color: "yellow",
    gradient: "from-yellow-500 to-amber-600",
    lightBg: "from-yellow-50 to-amber-100/50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-700",
    badgeBg: "bg-yellow-100",
    badgeText: "text-yellow-700",
    glowColor: "rgba(234,179,8,0.15)",
    route: "/industry-finance",
    applyRoute: "/industry-finance/apply",
  },
  {
    id: "school-finance",
    emoji: "🏫",
    icon: School,
    title: "School Finance",
    subtitle: "Education Mein Nivesh",
    desc: "Pay school fees, admission, books, hostel and transport. From 6.85% p.a.",
    rate: "6.85% p.a.",
    rateLabel: "Starting Rate",
    color: "teal",
    gradient: "from-teal-500 to-teal-700",
    lightBg: "from-teal-50 to-teal-100/50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700",
    badgeBg: "bg-teal-100",
    badgeText: "text-teal-700",
    glowColor: "rgba(20,184,166,0.15)",
    route: "/school-finance",
    applyRoute: "/school-finance/apply",
  },
  {
    id: "vehicle-finance",
    emoji: "🚛",
    icon: Truck,
    title: "Vehicle Finance",
    subtitle: "Sab Gadiyon Par Loan",
    desc: "Commercial, agricultural & construction vehicles. Fast approval & low rates.",
    rate: "7.5% p.a.",
    rateLabel: "Starting Rate",
    color: "blue",
    gradient: "from-blue-600 to-indigo-700",
    lightBg: "from-blue-50 to-indigo-100/50",
    borderColor: "border-blue-300",
    textColor: "text-blue-800",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
    glowColor: "rgba(37,99,235,0.12)",
    route: "/vehicle-finance",
    applyRoute: "/vehicle-finance/apply",
  },
  {
    id: "construction-loan",
    emoji: "🏗️",
    icon: HardHat,
    title: "Construction Loan",
    subtitle: "Build Your Vision",
    desc: "Finance construction projects, equipment & infrastructure. Flexible terms.",
    rate: "12% p.a.",
    rateLabel: "Starting Rate",
    color: "purple",
    gradient: "from-violet-600 to-purple-800",
    lightBg: "from-violet-50 to-purple-100/50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
    badgeBg: "bg-violet-100",
    badgeText: "text-violet-700",
    glowColor: "rgba(124,58,237,0.15)",
    route: "/construction-finance",
    applyRoute: "/construction-finance/apply",
  },
];

const WHY_FEATURES = [
  {
    icon: Building2,
    emoji: "🏦",
    title: "200+ Bank Partners",
    subtitle: "Widest Network",
    desc: "",
    stat: "200+",
    statLabel: "Partners",
    color: "blue",
    gradient: "from-blue-500 to-blue-700",
    lightBg: "from-blue-50 to-blue-100/40",
    borderColor: "rgba(37,99,235,0.15)",
    iconBg: "rgba(37,99,235,0.10)",
    iconColor: "#2563eb",
    glowColor: "rgba(37,99,235,0.12)",
    accentLine: "linear-gradient(90deg, #2563eb, #60a5fa)",
    tag: "Widest Network",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "48-Hour Approval",
    subtitle: "Super Fast",
    desc: "",
    stat: "48 Hrs",
    statLabel: "Approval",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
    lightBg: "from-amber-50 to-orange-100/40",
    borderColor: "rgba(234,88,12,0.15)",
    iconBg: "rgba(234,88,12,0.10)",
    iconColor: "#ea580c",
    glowColor: "rgba(234,88,12,0.10)",
    accentLine: "linear-gradient(90deg, #f59e0b, #ea580c)",
    tag: "Super Fast",
  },
  {
    icon: TrendingDown,
    emoji: "💰",
    title: "Lowest Interest Rates",
    subtitle: "Best Rates",
    desc: "",
    stat: "8.5%",
    statLabel: "Home Loan Rate",
    color: "green",
    gradient: "from-green-500 to-emerald-600",
    lightBg: "from-green-50 to-emerald-100/40",
    borderColor: "rgba(22,163,74,0.15)",
    iconBg: "rgba(22,163,74,0.10)",
    iconColor: "#16a34a",
    glowColor: "rgba(22,163,74,0.10)",
    accentLine: "linear-gradient(90deg, #16a34a, #22c55e)",
    tag: "Best Rates",
  },
  {
    icon: Users,
    emoji: "🧑‍💼",
    title: "Dedicated Expert",
    subtitle: "Personal Support",
    desc: "",
    stat: "1:1",
    statLabel: "Expert Support",
    color: "purple",
    gradient: "from-purple-500 to-violet-700",
    lightBg: "from-purple-50 to-violet-100/40",
    borderColor: "rgba(124,58,237,0.15)",
    iconBg: "rgba(124,58,237,0.10)",
    iconColor: "#7c3aed",
    glowColor: "rgba(124,58,237,0.10)",
    accentLine: "linear-gradient(90deg, #7c3aed, #a78bfa)",
    tag: "Personal Expert",
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "100% Secure",
    subtitle: "RBI Compliant",
    desc: "",
    stat: "10K+",
    statLabel: "Customers",
    color: "teal",
    gradient: "from-teal-500 to-cyan-600",
    lightBg: "from-teal-50 to-cyan-100/40",
    borderColor: "rgba(20,184,166,0.15)",
    iconBg: "rgba(20,184,166,0.10)",
    iconColor: "#0d9488",
    glowColor: "rgba(20,184,166,0.10)",
    accentLine: "linear-gradient(90deg, #0d9488, #22d3ee)",
    tag: "RBI Compliant",
  },
  {
    icon: HeartHandshake,
    emoji: "🤝",
    title: "Free Consultation",
    subtitle: "Zero Charges",
    desc: "",
    stat: "₹0",
    statLabel: "Consultation Fee",
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    lightBg: "from-rose-50 to-pink-100/40",
    borderColor: "rgba(244,63,94,0.15)",
    iconBg: "rgba(244,63,94,0.10)",
    iconColor: "#f43f5e",
    glowColor: "rgba(244,63,94,0.10)",
    accentLine: "linear-gradient(90deg, #f43f5e, #fb7185)",
    tag: "100% Free",
  },
  {
    icon: Globe,
    emoji: "📍",
    title: "4 Branch Locations",
    subtitle: "Pan Maharashtra",
    desc: "",
    stat: "4",
    statLabel: "Branches",
    color: "indigo",
    gradient: "from-indigo-500 to-blue-700",
    lightBg: "from-indigo-50 to-blue-100/40",
    borderColor: "rgba(99,102,241,0.15)",
    iconBg: "rgba(99,102,241,0.10)",
    iconColor: "#6366f1",
    glowColor: "rgba(99,102,241,0.10)",
    accentLine: "linear-gradient(90deg, #6366f1, #818cf8)",
    tag: "Pan Maharashtra",
  },
  {
    icon: Award,
    emoji: "🏆",
    title: "15+ Years Experience",
    subtitle: "Most Trusted",
    desc: "",
    stat: "15+",
    statLabel: "Years",
    color: "orange",
    gradient: "from-orange-500 to-amber-600",
    lightBg: "from-orange-50 to-amber-100/40",
    borderColor: "rgba(249,115,22,0.15)",
    iconBg: "rgba(249,115,22,0.10)",
    iconColor: "#f97316",
    glowColor: "rgba(249,115,22,0.10)",
    accentLine: "linear-gradient(90deg, #f97316, #fbbf24)",
    tag: "Most Trusted",
  },
];

const BRANCHES = [
  {
    id: "baramati",
    city: "Baramati",
    tag: "HEAD OFFICE",
    tagColor: "blue",
    emoji: "🏛️",
    address: "Shop No. 11, Second Floor,\nSubhadra Mall, Front of\nRelince Smart MIDC,\nBaramati Dist-Pune 413133",
    phone1: "7758969798",
    phone2: "9921374565",
    email: "sanskruti.sss1108@gmail.com",
    timing: "Mon–Sat: 9AM – 7PM",
    mapLink: "https://maps.google.com/?q=Subhadra+Mall+Baramati",
    highlight: true,
    borderColor: "rgba(37,99,235,0.25)",
    glowColor: "rgba(37,99,235,0.10)",
    tagBg: "rgba(37,99,235,0.10)",
    tagText: "#2563eb",
    iconBg: "rgba(37,99,235,0.08)",
    accentLine: "linear-gradient(90deg, #2563eb, #60a5fa)",
  },
  {
    id: "pune",
    city: "Pune",
    tag: "BRANCH",
    tagColor: "green",
    emoji: "🏢",
    address: "Pune, Maharashtra",
    phone1: "7758969798",
    phone2: "",
    email: "sanskruti.sss1108@gmail.com",
    timing: "Mon–Sat: 9AM – 7PM",
    mapLink: "https://maps.google.com/?q=Pune+Maharashtra",
    highlight: false,
    borderColor: "rgba(22,163,74,0.20)",
    glowColor: "rgba(22,163,74,0.08)",
    tagBg: "rgba(22,163,74,0.10)",
    tagText: "#16a34a",
    iconBg: "rgba(22,163,74,0.08)",
    accentLine: "linear-gradient(90deg, #16a34a, #22c55e)",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    tag: "BRANCH",
    tagColor: "green",
    emoji: "🌆",
    address: "Mumbai, Maharashtra",
    phone1: "7758969798",
    phone2: "",
    email: "sanskruti.sss1108@gmail.com",
    timing: "Mon–Sat: 9AM – 7PM",
    mapLink: "https://maps.google.com/?q=Mumbai+Maharashtra",
    highlight: false,
    borderColor: "rgba(22,163,74,0.20)",
    glowColor: "rgba(22,163,74,0.08)",
    tagBg: "rgba(22,163,74,0.10)",
    tagText: "#16a34a",
    iconBg: "rgba(22,163,74,0.08)",
    accentLine: "linear-gradient(90deg, #16a34a, #22c55e)",
  },
  {
    id: "kolhapur",
    city: "Kolhapur",
    tag: "BRANCH",
    tagColor: "green",
    emoji: "🏰",
    address: "Kolhapur, Maharashtra",
    phone1: "7758969798",
    phone2: "",
    email: "sanskruti.sss1108@gmail.com",
    timing: "Mon–Sat: 9AM – 7PM",
    mapLink: "https://maps.google.com/?q=Kolhapur+Maharashtra",
    highlight: false,
    borderColor: "rgba(22,163,74,0.20)",
    glowColor: "rgba(22,163,74,0.08)",
    tagBg: "rgba(22,163,74,0.10)",
    tagText: "#16a34a",
    iconBg: "rgba(22,163,74,0.08)",
    accentLine: "linear-gradient(90deg, #16a34a, #22c55e)",
  },
  {
    id: "saswad",
    city: "Saswad",
    tag: "BRANCH",
    tagColor: "green",
    emoji: "🌿",
    address: "Saswad, Dist-Pune,\nMaharashtra",
    phone1: "7758969798",
    phone2: "",
    email: "sanskruti.sss1108@gmail.com",
    timing: "Mon–Sat: 9AM – 7PM",
    mapLink: "https://maps.google.com/?q=Saswad+Pune+Maharashtra",
    highlight: false,
    borderColor: "rgba(22,163,74,0.20)",
    glowColor: "rgba(22,163,74,0.08)",
    tagBg: "rgba(22,163,74,0.10)",
    tagText: "#16a34a",
    iconBg: "rgba(22,163,74,0.08)",
    accentLine: "linear-gradient(90deg, #16a34a, #22c55e)",
  },
  {
    id: "temburni",
    city: "Temburni",
    tag: "BRANCH",
    tagColor: "green",
    emoji: "🌾",
    address: "Temburni, Dist-Solapur,\nMaharashtra",
    phone1: "7758969798",
    phone2: "",
    email: "sanskruti.sss1108@gmail.com",
    timing: "Mon–Sat: 9AM – 7PM",
    mapLink: "https://maps.google.com/?q=Temburni+Solapur+Maharashtra",
    highlight: false,
    borderColor: "rgba(22,163,74,0.20)",
    glowColor: "rgba(22,163,74,0.08)",
    tagBg: "rgba(22,163,74,0.10)",
    tagText: "#16a34a",
    iconBg: "rgba(22,163,74,0.08)",
    accentLine: "linear-gradient(90deg, #16a34a, #22c55e)",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Atharv Bhosale",
    loanType: "Business Loan",
    emoji: "💼",
    initials: "AB",
    avatarBg: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    rating: 5,
    review:
      "Sanskruti Associates helped me scale my business faster than I imagined. The team understood my working capital needs perfectly, processed everything in just 3 days, and got me the best rate from HDFC. Truly a game-changer for my business!",
    highlight: "Approved in 3 days",
    highlightColor: "#2563eb",
    highlightBg: "rgba(37,99,235,0.08)",
    accentLine: "linear-gradient(90deg, #2563eb, #60a5fa)",
    borderColor: "rgba(37,99,235,0.15)",
    glowColor: "rgba(37,99,235,0.07)",
    location: "Baramati, Pune",
    loanAmount: "₹45 Lakh",
  },
  {
    id: 2,
    name: "Reshma Mane",
    loanType: "Personal Loan",
    emoji: "👤",
    initials: "RM",
    avatarBg: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    rating: 5,
    review:
      "I needed funds urgently for a family emergency. Sanskruti Associates handled everything with full transparency — no hidden charges, no stress. The dedicated loan expert guided me at every step. Got disbursement in 48 hours. Highly recommend!",
    highlight: "Disbursed in 48 hours",
    highlightColor: "#7c3aed",
    highlightBg: "rgba(124,58,237,0.08)",
    accentLine: "linear-gradient(90deg, #7c3aed, #a78bfa)",
    borderColor: "rgba(124,58,237,0.15)",
    glowColor: "rgba(124,58,237,0.07)",
    location: "Kolhapur",
    loanAmount: "₹8 Lakh",
  },
  {
    id: 3,
    name: "Hanumant Kale",
    loanType: "Home Loan",
    emoji: "🏠",
    initials: "HK",
    avatarBg: "linear-gradient(135deg, #16a34a, #15803d)",
    rating: 5,
    review:
      "Getting a home loan felt overwhelming until I found Sanskruti Associates. They compared 15+ banks, negotiated the best interest rate, and handled all the paperwork. My dream home became reality because of their expert guidance. Thank you team!",
    highlight: "Compared 15+ banks",
    highlightColor: "#16a34a",
    highlightBg: "rgba(22,163,74,0.08)",
    accentLine: "linear-gradient(90deg, #16a34a, #22c55e)",
    borderColor: "rgba(22,163,74,0.15)",
    glowColor: "rgba(22,163,74,0.07)",
    location: "Saswad, Pune",
    loanAmount: "₹72 Lakh",
  },
];

// TestimonialCard component to avoid hooks in map
function TestimonialCard({
  t,
  index,
  isActive,
}: {
  t: typeof TESTIMONIALS[0];
  index: number;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative rounded-2xl overflow-hidden flex flex-col group"
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        border: `1.5px solid ${t.borderColor}`,
        boxShadow: `0 4px 24px ${t.glowColor}, 0 1px 4px rgba(0,0,0,0.04)`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${t.glowColor.replace("0.07", "0.15")}, transparent 60%)`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="h-1 w-full flex-shrink-0 relative z-10"
        style={{ background: t.accentLine }}
      />

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">

        {/* Quote icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
          style={{
            background: t.highlightBg,
            border: `1px solid ${t.borderColor}`,
          }}
        >
          <Quote
            className="w-5 h-5"
            style={{ color: t.highlightColor }}
          />
        </div>

        {/* Star rating */}
        <div className="flex items-center gap-0.5 mb-4">
          {Array.from({ length: t.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + i * 0.08 }}
            >
              <Star
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            </motion.div>
          ))}
          <span className="ml-2 text-xs font-semibold text-gray-400">
            5.0
          </span>
        </div>

        {/* Review text */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
          "{t.review}"
        </p>

        {/* Highlight badge */}
        <div className="mb-5">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: t.highlightBg,
              color: t.highlightColor,
              border: `1px solid ${t.borderColor}`,
            }}
          >
            <BadgeCheck className="w-3.5 h-3.5" />
            {t.highlight}
          </span>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-4"
          style={{
            background: `linear-gradient(90deg, ${t.borderColor}, transparent)`,
          }}
        />

        {/* Author row */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ background: t.avatarBg }}
          >
            {t.initials}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm leading-tight">
              {t.name}
            </p>
            <p
              className="text-xs font-medium mt-0.5"
              style={{ color: t.highlightColor }}
            >
              {t.emoji} {t.loanType} · {t.loanAmount}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
            <MapPin className="w-3 h-3" />
            {t.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// BranchCard component to avoid hooks in map
function BranchCard({
  branch,
  index,
}: {
  branch: typeof BRANCHES[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      animate={inView
        ? { opacity: 1, y: 0, scale: 1 }
        : {}}
      transition={{
        delay: (index % 3) * 0.15,
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      className="relative rounded-2xl overflow-hidden flex flex-col group cursor-default"
      style={{
        background: branch.highlight
          ? "linear-gradient(145deg, #eff6ff 0%, #dbeafe 60%, #eff6ff 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        border: `1.5px solid ${branch.borderColor}`,
        boxShadow: branch.highlight
          ? `0 8px 40px ${branch.glowColor}, 0 2px 8px rgba(0,0,0,0.04)`
          : `0 4px 24px ${branch.glowColor}, 0 1px 3px rgba(0,0,0,0.03)`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${branch.glowColor.replace('0.08', '0.15')}, transparent 60%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="h-1.5 w-full flex-shrink-0 relative z-10"
        style={{ background: branch.accentLine }}
      />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 relative z-10">

        {/* Top row: emoji + tag */}
        <div className="flex items-start justify-between mb-4">

          {/* Emoji icon */}
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: branch.iconBg,
              border: `1px solid ${branch.borderColor}`,
            }}
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          >
            {branch.emoji}
          </motion.div>

          {/* Tag pill */}
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full tracking-wide"
            style={{
              background: branch.tagBg,
              color: branch.tagText,
              border: `1px solid ${branch.borderColor}`,
            }}
          >
            {branch.tag}
          </span>
        </div>

        {/* City name */}
        <h3 className="text-gray-900 font-black text-2xl mb-1 leading-tight">
          {branch.city}
        </h3>

        {/* State */}
        <p className="text-sm font-medium mb-4" style={{ color: branch.tagText }}>
          Maharashtra, India
        </p>

        {/* Address */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin
            className="w-4 h-4 mt-0.5 flex-shrink-0"
            style={{ color: branch.tagText }}
          />
          <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
            {branch.address}
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 mb-2">
          <Phone
            className="w-4 h-4 flex-shrink-0"
            style={{ color: branch.tagText }}
          />
          <a
            href={`tel:+91${branch.phone1}`}
            className="text-sm font-semibold text-gray-700 hover:underline"
          >
            +91 {branch.phone1}
          </a>
          {branch.phone2 && (
            <>
              <span className="text-gray-300">·</span>
              <a
                href={`tel:+91${branch.phone2}`}
                className="text-sm font-semibold text-gray-700 hover:underline"
              >
                {branch.phone2}
              </a>
            </>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 mb-2">
          <Mail
            className="w-4 h-4 flex-shrink-0"
            style={{ color: branch.tagText }}
          />
          <a
            href={`mailto:${branch.email}`}
            className="text-sm text-gray-500 hover:underline truncate"
          >
            {branch.email}
          </a>
        </div>

        {/* Timing */}
        <div className="flex items-center gap-2 mb-5">
          <Clock
            className="w-4 h-4 flex-shrink-0"
            style={{ color: branch.tagText }}
          />
          <span className="text-sm text-gray-500">
            {branch.timing}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={`tel:+91${branch.phone1}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-300 hover:brightness-110 active:scale-95 text-white"
            style={{
              background: branch.accentLine,
              boxShadow: `0 4px 12px ${branch.glowColor}`,
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
          <a
            href={branch.mapLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-300 hover:bg-gray-100 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: `1px solid ${branch.borderColor}`,
              color: branch.tagText,
            }}
          >
            <Navigation className="w-3.5 h-3.5" />
            Direction
          </a>
        </div>
      </div>

      {/* Shimmer bottom line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: branch.accentLine }}
      />
    </motion.div>
  );
}

// WhyCard component to avoid hooks in map
function WhyCard({
  feature,
  index,
}: {
  feature: typeof WHY_FEATURES[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      animate={inView
        ? { opacity: 1, y: 0, scale: 1 }
        : {}}
      transition={{
        delay: (index % 4) * 0.12,
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      className="relative rounded-2xl overflow-hidden flex flex-col group cursor-default"
      style={{
        background: `linear-gradient(145deg, white 0%, white 70%, rgba(248,250,252,0.8) 100%)`,
        border: `1.5px solid ${feature.borderColor}`,
        boxShadow: `0 4px 24px ${feature.glowColor}, 0 1px 3px rgba(0,0,0,0.04)`,
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${feature.glowColor.replace('0.10', '0.18')}, transparent 60%)`,
        }}
      />

      {/* Top gradient accent bar */}
      <div
        className="h-1.5 w-full flex-shrink-0 relative z-10"
        style={{
          background: feature.accentLine,
        }}
      />

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        {/* Top row: icon + stat */}
        <div className="flex items-start justify-between mb-5">
          {/* Animated icon box */}
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 relative"
            style={{
              background: feature.iconBg,
              border: `1px solid ${feature.borderColor}`,
            }}
            animate={{
              scale: [1, 1.06, 1],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl">{feature.emoji}</span>
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  `0 0 0 0px ${feature.glowColor}`,
                  `0 0 0 6px ${feature.glowColor.replace('0.10', '0')}`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </motion.div>

          {/* Stat badge */}
          <div className="text-right">
            <div
              className="text-2xl font-black"
              style={{ color: feature.iconColor }}
            >
              {feature.stat}
            </div>
            <div className="text-xs text-gray-400 font-medium">
              {feature.statLabel}
            </div>
          </div>
        </div>

        {/* Tag pill */}
        <div className="mb-3">
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: feature.iconBg,
              color: feature.iconColor,
              border: `1px solid ${feature.borderColor}`,
            }}
          >
            <BadgeCheck className="w-3 h-3" />
            {feature.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-bold text-lg leading-tight mb-1">
          {feature.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm font-medium mb-3" style={{ color: feature.iconColor }}>
          {feature.subtitle}
        </p>

        {/* Desc */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {feature.desc}
        </p>

        {/* Bottom checkmark row */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <CheckCircle2
              className="w-3.5 h-3.5"
              style={{ color: feature.iconColor }}
            />
            Verified & Trusted
          </div>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            <ArrowRight
              className="w-4 h-4"
              style={{ color: feature.iconColor }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// LoanCard component to avoid hooks in map
function LoanCard({
  loan,
  index,
  navigate
}: {
  loan: typeof LOANS[0],
  index: number,
  navigate: (path: string) => void
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true, margin: "-50px"
  });

  const Icon = loan.icon;

  return (
    <motion.div
      key={loan.id}
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={inView
        ? { opacity: 1, y: 0, scale: 1 }
        : {}}
      transition={{
        delay: (index % 4) * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative rounded-2xl
        overflow-hidden cursor-pointer
        flex flex-col group"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(20px)',
        boxShadow: `0 8px 32px ${loan.glowColor}`
      }}
    >
      {/* Card glow on hover */}
      <div className="absolute inset-0
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(circle
            at 50% 0%, ${loan.glowColor}, transparent 70%)`
        }}
      />

      {/* Gradient top bar */}
      <div className={`h-1.5 w-full
        bg-gradient-to-r ${loan.gradient}
        flex-shrink-0 relative z-10`}
      />

      {/* Card body */}
      <div className="p-5 flex flex-col
        flex-1 relative z-10">

        {/* Icon + Badge row */}
        <div className="flex items-start
          justify-between mb-4">

          {/* Animated icon */}
          <motion.div
            className={`w-14 h-14 rounded-2xl
              flex items-center justify-center
              text-2xl flex-shrink-0`}
            style={{
              background: `linear-gradient(135deg,
                ${loan.glowColor},
                rgba(255,255,255,0.05))`,
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          >
            {loan.emoji}
          </motion.div>

          {/* Rate badge */}
          <div className="text-right">
            <div className="text-xs
              text-gray-600 mb-0.5">
              {loan.rateLabel}
            </div>
            <span className={`text-sm
              font-bold px-2.5 py-1
              rounded-lg ${loan.badgeBg}
              ${loan.badgeText}`}>
              {loan.rate}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-bold
          text-lg mb-1 leading-tight">
          {loan.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-medium
          mb-3"
          style={{
            color: loan.glowColor
              .replace('0.15', '0.8')
              .replace('rgba(', 'rgba(')
          }}>
          ✨ {loan.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm
          leading-relaxed mb-5 flex-1">
          {loan.desc}
        </p>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">

          {/* View More button */}
          <button
            onClick={() => navigate(loan.route)}
            className="flex-1 flex items-center
              justify-center gap-1.5 py-2.5 px-3
              rounded-xl text-xs font-semibold
              text-gray-700 transition-all
              duration-300 hover:text-gray-900
              group/btn"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            View More
            <ArrowRight className="w-3 h-3
              group-hover/btn:translate-x-0.5
              transition-transform duration-200" />
          </button>

          {/* Apply Now button */}
          <button
            onClick={() => {
              // Navigate to home page
              // then scroll to loan services section
              navigate('/');
              setTimeout(() => {
                const el = document.getElementById(
                  'loan-services'
                );
                if (el) {
                  el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }, 300);
            }}
            className={`flex-1 flex items-center
              justify-center gap-1.5 py-2.5 px-3
              rounded-xl text-xs font-bold
              text-white transition-all duration-300
              hover:brightness-110 active:scale-95
              bg-gradient-to-r ${loan.gradient}
              shadow-lg`}
            style={{
              boxShadow: `0 4px 15px
                ${loan.glowColor}`
            }}
          >
            <Zap className="w-3 h-3" />
            Apply Now
          </button>
        </div>
      </div>

      {/* Hover shimmer line */}
      <motion.div
        className="absolute bottom-0 left-0
          h-px w-0 group-hover:w-full
          transition-all duration-700"
        style={{
          background: `linear-gradient(90deg,
            transparent,
            ${loan.glowColor
              .replace('0.15', '0.6')},
            transparent)`
        }}
      />
    </motion.div>
  );
}

// useCountUp hook for animated counters
function useCountUp(end: number, duration: number = 2000, start: boolean = false): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(end * ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

// Premium StatsGrid Component with advanced animations
function PremiumStatsGrid() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  const customers = useCountUp(25000, 2500, started);
  const loans = useCountUp(1000, 2800, started);
  const partners = useCountUp(200, 2200, started);
  const years = useCountUp(15, 1800, started);

  return (
    <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 - Happy Customers (Blue Theme) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.8, rotateY: -15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          y: -12,
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0 25px 50px rgba(59,130,246,0.25)"
        }}
        className="relative rounded-3xl p-8 overflow-hidden cursor-default stats-shine-effect group"
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
          border: '2px solid rgba(59,130,246,0.2)',
          boxShadow: '0 8px 32px rgba(59,130,246,0.12)'
        }}
      >
        {/* Floating icon with animation */}
        <motion.div
          className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-blue-600/15 flex items-center justify-center"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Users className="w-7 h-7 text-blue-600" />
        </motion.div>

        {/* Animated counter */}
        <div className="flex items-baseline gap-2 mb-3">
          <motion.span
            className="text-5xl lg:text-6xl font-bold text-blue-700"
            animate={{
              textShadow: [
                "0 0 0px rgba(59,130,246,0)",
                "0 0 20px rgba(59,130,246,0.3)",
                "0 0 0px rgba(59,130,246,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {started ? customers.toLocaleString('en-IN') : '0'}
          </motion.span>
          <span className="text-3xl font-bold text-blue-500">+</span>
        </div>

        {/* Label with emoji */}
        <p className="text-gray-700 text-lg font-semibold mb-2">😊 Happy Customers</p>
        {/* Subtext */}
        <p className="text-gray-500 text-sm mb-4">Across Maharashtra & Beyond</p>

        {/* 5-star rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-yellow-400 text-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              ⭐
            </motion.span>
          ))}
        </div>

        {/* Bottom accent with gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)'
          }}
        />

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)'
          }} />
      </motion.div>

      {/* Card 2 - Loans Disbursed (Green Theme) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.8, rotateY: -15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          y: -12,
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0 25px 50px rgba(34,197,94,0.25)"
        }}
        className="relative rounded-3xl p-8 overflow-hidden cursor-default stats-shine-effect group"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
          border: '2px solid rgba(34,197,94,0.2)',
          boxShadow: '0 8px 32px rgba(34,197,94,0.12)'
        }}
      >
        {/* Floating icon */}
        <motion.div
          className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-green-600/15 flex items-center justify-center"
          animate={{
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <IndianRupee className="w-7 h-7 text-green-600" />
        </motion.div>

        {/* Counter */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-3xl font-bold text-green-600">₹</span>
          <motion.span
            className="text-5xl lg:text-6xl font-bold text-green-700"
            animate={{
              textShadow: [
                "0 0 0px rgba(34,197,94,0)",
                "0 0 20px rgba(34,197,94,0.3)",
                "0 0 0px rgba(34,197,94,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {started ? loans : '0'}
          </motion.span>
          <span className="text-3xl font-bold text-green-500">Cr+</span>
        </div>

        <p className="text-gray-700 text-lg font-semibold mb-2">💰 Loans Disbursed</p>
        <p className="text-gray-500 text-sm mb-4">Across all loan categories</p>

        {/* Progress indicators */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-xs text-gray-600">
            <span>Home Loans</span>
            <span>60%</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-1.5">
            <motion.div
              className="bg-green-500 h-1.5 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ delay: 1, duration: 1.5 }}
            />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl"
          style={{
            background: 'linear-gradient(90deg, #22c55e, #4ade80, #86efac)'
          }}
        />

        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(34,197,94,0.1) 0%, transparent 70%)'
          }} />
      </motion.div>

      {/* Card 3 - Bank Partners (Purple Theme) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.8, rotateY: -15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          y: -12,
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0 25px 50px rgba(168,85,247,0.25)"
        }}
        className="relative rounded-3xl p-8 overflow-hidden cursor-default stats-shine-effect group"
        style={{
          background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)',
          border: '2px solid rgba(168,85,247,0.2)',
          boxShadow: '0 8px 32px rgba(168,85,247,0.12)'
        }}
      >
        <motion.div
          className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-purple-600/15 flex items-center justify-center"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Building2 className="w-7 h-7 text-purple-600" />
        </motion.div>

        <div className="flex items-baseline gap-2 mb-3">
          <motion.span
            className="text-5xl lg:text-6xl font-bold text-purple-700"
            animate={{
              textShadow: [
                "0 0 0px rgba(168,85,247,0)",
                "0 0 20px rgba(168,85,247,0.3)",
                "0 0 0px rgba(168,85,247,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {started ? partners : '0'}
          </motion.span>
          <span className="text-3xl font-bold text-purple-500">+</span>
        </div>

        <p className="text-gray-700 text-lg font-semibold mb-2">🏦 Bank Partners</p>
        <p className="text-gray-500 text-sm mb-4">HDFC · SBI · ICICI · Axis & more</p>

        {/* Bank logos simulation */}
        <div className="flex gap-2 mb-4">
          {['🏛️', '🏦', '🏢', '🏪'].map((emoji, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-sm"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 4
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl"
          style={{
            background: 'linear-gradient(90deg, #a855f7, #c084fc, #d8b4fe)'
          }}
        />

        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(168,85,247,0.1) 0%, transparent 70%)'
          }} />
      </motion.div>

      {/* Card 4 - Years Experience (Orange Theme) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.8, rotateY: -15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          y: -12,
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0 25px 50px rgba(249,115,22,0.25)"
        }}
        className="relative rounded-3xl p-8 overflow-hidden cursor-default stats-shine-effect group"
        style={{
          background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)',
          border: '2px solid rgba(249,115,22,0.2)',
          boxShadow: '0 8px 32px rgba(249,115,22,0.12)'
        }}
      >
        <motion.div
          className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-orange-600/15 flex items-center justify-center"
          animate={{
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Award className="w-7 h-7 text-orange-600" />
        </motion.div>

        <div className="flex items-baseline gap-2 mb-3">
          <motion.span
            className="text-5xl lg:text-6xl font-bold text-orange-700"
            animate={{
              textShadow: [
                "0 0 0px rgba(249,115,22,0)",
                "0 0 20px rgba(249,115,22,0.3)",
                "0 0 0px rgba(249,115,22,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {started ? years : '0'}
          </motion.span>
          <span className="text-3xl font-bold text-orange-500">+</span>
        </div>

        <p className="text-gray-700 text-lg font-semibold mb-2">🏆 Years Experience</p>
        <p className="text-gray-500 text-sm mb-4">Trusted since 2010</p>

        {/* Achievement badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {['🥇', '🎖️', '🏅'].map((badge, i) => (
            <motion.span
              key={i}
              className="text-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              {badge}
            </motion.span>
          ))}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-2 rounded-b-3xl"
          style={{
            background: 'linear-gradient(90deg, #f97316, #fb923c, #fdba74)'
          }}
        />

        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(249,115,22,0.1) 0%, transparent 70%)'
          }} />
      </motion.div>
    </div>
  );
}

// StatsGridComponent with animated counters (keeping for compatibility)
function StatsGridComponent() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  const customers = useCountUp(25000, 2000, started);
  const loans = useCountUp(1000, 2200, started);
  const partners = useCountUp(200, 2400, started);
  const years = useCountUp(15, 1500, started);

  return (
    <div ref={statsRef} className="grid grid-cols-2 gap-4">
      {/* Card 1 - Happy Customers */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="relative rounded-2xl p-6 overflow-hidden cursor-default"
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          border: '1px solid rgba(37,99,235,0.15)',
          boxShadow: '0 4px 24px rgba(37,99,235,0.08)'
        }}
      >
        {/* Icon top right */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
          <Users className="w-5 h-5 text-blue-600" />
        </div>

        {/* Counter */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-blue-700">
            {started ? customers.toLocaleString('en-IN') : '0'}
          </span>
          <span className="text-2xl font-bold text-blue-500">+</span>
        </div>

        {/* Label */}
        <p className="text-gray-600 text-sm font-medium mt-1">Happy Customers</p>

        {/* 5 stars */}
        <div className="flex gap-0.5 mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xs">★</span>
          ))}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: 'linear-gradient(90deg, #2563eb, #60a5fa)'
          }}
        />
      </motion.div>

      {/* Card 2 - Loans Disbursed */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.6 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="relative rounded-2xl p-6 overflow-hidden cursor-default"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          border: '1px solid rgba(22,163,74,0.15)',
          boxShadow: '0 4px 24px rgba(22,163,74,0.08)'
        }}
      >
        {/* Icon top right */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
          <IndianRupee className="w-5 h-5 text-green-600" />
        </div>

        {/* Counter */}
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-green-600">₹</span>
          <span className="text-4xl font-bold text-green-700">
            {started ? loans : '0'}
          </span>
          <span className="text-2xl font-bold text-green-500">Cr+</span>
        </div>

        {/* Label */}
        <p className="text-gray-600 text-sm font-medium mt-1">Loans Disbursed</p>

        {/* Subtext */}
        <p className="text-gray-500 text-xs mt-1">Across all loan categories</p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: 'linear-gradient(90deg, #16a34a, #4ade80)'
          }}
        />
      </motion.div>

      {/* Card 3 - Bank & NBFC Partners */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="relative rounded-2xl p-6 overflow-hidden cursor-default"
        style={{
          background: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)',
          border: '1px solid rgba(124,58,237,0.15)',
          boxShadow: '0 4px 24px rgba(124,58,237,0.08)'
        }}
      >
        {/* Icon top right */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-purple-600" />
        </div>

        {/* Counter */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-purple-700">
            {started ? partners : '0'}
          </span>
          <span className="text-2xl font-bold text-purple-500">+</span>
        </div>

        {/* Label */}
        <p className="text-gray-600 text-sm font-medium mt-1">Bank & NBFC Partners</p>

        {/* Subtext */}
        <p className="text-gray-500 text-xs mt-1">HDFC · SBI · ICICI & more</p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: 'linear-gradient(90deg, #7c3aed, #a855f7)'
          }}
        />
      </motion.div>

      {/* Card 4 - Years Experience */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.6 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="relative rounded-2xl p-6 overflow-hidden cursor-default"
        style={{
          background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fff7ed 100%)',
          border: '1px solid rgba(234,88,12,0.15)',
          boxShadow: '0 4px 24px rgba(234,88,12,0.08)'
        }}
      >
        {/* Icon top right */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center">
          <Award className="w-5 h-5 text-orange-600" />
        </div>

        {/* Counter */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-orange-700">
            {started ? years : '0'}
          </span>
          <span className="text-2xl font-bold text-orange-500">+</span>
        </div>

        {/* Label */}
        <p className="text-gray-600 text-sm font-medium mt-1">Years Experience</p>

        {/* Subtext */}
        <p className="text-gray-500 text-xs mt-1">Trusted since 2010</p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: 'linear-gradient(90deg, #ea580c, #fb923c)'
          }}
        />
      </motion.div>
    </div>
  );
}

export function AboutUs() {
  const navigate = useNavigate();

  const shimmerStyle = `
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    
    @keyframes shine {
      0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
      100% { transform: translateX(100vw) translateY(100vh) rotate(30deg); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }
    
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
      50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4); }
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0); }
      50% { opacity: 1; transform: scale(1); }
    }
    
    .shine-effect {
      position: relative;
      overflow: hidden;
    }
    
    .shine-effect::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
      animation: shine 3s infinite;
      pointer-events: none;
    }
    
    .floating-card {
      animation: float 6s ease-in-out infinite;
    }
    
    .glow-card {
      animation: glow 2s ease-in-out infinite alternate;
    }
    
    .sparkle {
      animation: sparkle 2s ease-in-out infinite;
    }
  `;

  return (
    <div className="min-h-screen" style={{ background: '#EFF6FF' }}>
      <style>{shimmerStyle}</style>

      {/* Floating Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Premium Hero Banner */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        {/* Layer 1 - Background with Sanskruti Associates Logo Pattern */}
        <div className="absolute inset-0 z-0">
          {/* Simple logo pattern background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #22c55e 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #22c55e 2px, transparent 2px)`,
              backgroundSize: '100px 100px',
              backgroundPosition: '0 0, 50px 50px'
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #0f172a 70%, #16a34a 100%)'
            }}
          />
        </div>

        {/* Layer 2 - Dark Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,58,138,0.75) 50%, rgba(15,23,42,0.88) 100%)'
          }}
        />

        {/* Layer 3 - Animated Particles/Glow */}
        <div
          className="absolute top-20 left-20 w-96 h-96 rounded-full z-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
            animationDuration: '4s'
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full z-10"
          style={{
            background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)',
            animation: 'pulse 5s ease-in-out infinite alternate'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-10"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)'
          }}
        />

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-20 w-full">

          {/* Step 1 - Animated Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.2
            }}
            className="mb-8 relative"
          >
            <div className="relative" style={{ width: '300px', height: '300px' }}>
              {/* Rotating ring around logo */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  borderTopColor: '#16a34a',
                  borderRightColor: 'transparent',
                  borderBottomColor: '#2563eb',
                  borderLeftColor: 'transparent'
                }}
              />

              {/* Second ring (opposite direction) */}
              <motion.div
                className="absolute rounded-full border border-blue-400/30"
                style={{
                  inset: '18px',
                  borderTopColor: 'transparent',
                  borderRightColor: '#2563eb',
                  borderBottomColor: 'transparent',
                  borderLeftColor: '#16a34a'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Logo image center */}
              <div 
                className="absolute rounded-full overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                style={{ inset: '36px' }}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center rounded-full relative"
                  style={{
                    background: '#1a6b2f',
                    overflow: 'hidden'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Official Sanskruti Associates Logo */}
                  <img
                    src="/bank logos/Main_logo.jpeg"
                    alt="Sanskruti Associates Logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center center',
                      display: 'block',
                      transform: 'scale(0.85)',
                    }}
                  />

                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-yellow-300/50"
                    animate={{
                      borderColor: [
                        "rgba(253, 224, 71, 0.5)",
                        "rgba(253, 224, 71, 1)",
                        "rgba(253, 224, 71, 0.5)"
                      ],
                      boxShadow: [
                        "0 0 10px rgba(253, 224, 71, 0.3)",
                        "0 0 25px rgba(253, 224, 71, 0.6)",
                        "0 0 10px rgba(253, 224, 71, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>

              {/* Pulsing glow behind logo */}
              <motion.div
                className="absolute inset-0 rounded-full -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(22,163,74,0.4) 0%, transparent 70%)'
                }}
              />
            </div>
          </motion.div>

          {/* Step 2 - Shimmer Badge above title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white/90"
              style={{
                background: 'rgba(22,163,74,0.15)',
                border: '1px solid rgba(22,163,74,0.35)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Est. Since 2014 · Baramati, Maharashtra
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </span>
          </motion.div>

          {/* Step 3 - Main Brand Name (Letter by letter) */}
          <div className="flex flex-wrap justify-center mb-4">
            {"Sanskruti Associates".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 1.0 + i * 0.04,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${letter === ' ' ? 'mx-2' : ''
                  }`}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Step 5 - Tagline with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="mt-4 mb-8"
          >
            <p
              className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest text-white/70"
              style={{ letterSpacing: '0.15em' }}
            >
              Always With You
            </p>

            {/* Animated underline below tagline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 2.4, duration: 1.0 }}
              className="h-px mt-3 mx-auto max-w-xs"
              style={{
                background: 'linear-gradient(90deg, transparent, #16a34a, #2563eb, transparent)'
              }}
            />
          </motion.div>

          {/* Step 6 - 3 trust badges animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            {/* Badge 1 */}
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="text-green-400">✓</span>
              <span className="text-white/80 text-sm">10+ Years Experience</span>
            </div>

            {/* Badge 2 */}
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="text-blue-400">✓</span>
              <span className="text-white/80 text-sm">500+ Happy Customers</span>
            </div>

            {/* Badge 3 */}
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="text-green-400">✓</span>
              <span className="text-white/80 text-sm">20+ Bank Partners</span>
            </div>
          </motion.div>

          {/* Step 7 - Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Premium Who We Are Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24">
          <style>
            {`
              @keyframes float1 {
                0% { transform: translate(-50%, -50%) scale(1); }
                100% { transform: translate(-40%, -40%) scale(1.1); }
              }
              @keyframes float2 {
                0% { transform: translate(25%, 25%) scale(1); }
                100% { transform: translate(20%, 20%) scale(1.15); }
              }
              @keyframes countUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}
          </style>

          {/* Background Layers */}
          {/* Layer 1 - Base gradient */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #eff6ff 30%, #f0fdf4 60%, #eff6ff 100%)'
            }}
          />

          {/* Layer 2 - Floating orbs */}
          {/* Top left blue orb */}
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
              animation: 'float1 8s ease-in-out infinite alternate'
            }}
          />

          {/* Bottom right green orb */}
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-25 translate-x-1/4 translate-y-1/4 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(22,163,74,0.2) 0%, transparent 70%)',
              animation: 'float2 10s ease-in-out infinite alternate'
            }}
          />

          {/* Layer 3 - Grid pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Column - Text Content (55%) */}
              <div className="lg:col-span-7">

                {/* Section Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700"
                    style={{
                      background: 'rgba(37,99,235,0.08)',
                      border: '1px solid rgba(37,99,235,0.2)'
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    About Us
                  </span>
                </motion.div>

                {/* Heading - word by word animation */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Who", "We", "Are"].map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                      style={{
                        display: 'inline-block',
                        fontFamily: 'system-ui, sans-serif'
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>

                {/* Animated blue underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-1 rounded-full mb-8"
                  style={{
                    background: 'linear-gradient(90deg, #2563eb, #16a34a)'
                  }}
                />

                {/* Paragraph 1 */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                >
                  Sanskruti Associates is a leading loan brokerage firm based in Maharashtra, helping individuals and businesses get the best loan deals from 20+ top banks and NBFCs. We specialize in providing personalized financial solutions tailored to your unique needs.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                >
                  Our mission is to simplify the loan process and ensure every client gets the most competitive interest rates, fastest approvals, and exceptional customer service. With over 15 years of experience, we have helped thousands achieve their financial goals.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex gap-4 flex-wrap"
                >
                  <button
                    onClick={() => navigate('/loan-services')}
                    className="px-6 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg shadow-green-500/25 hover:scale-105 transform"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-6 py-3 rounded-xl font-semibold text-sm text-blue-700 border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:scale-105 transform"
                  >
                    Contact Us
                  </button>
                </motion.div>
              </div>

              {/* Right Column - Stats Grid (45%) */}
              <div className="lg:col-span-5">
                <StatsGridComponent />
              </div>
            </div>
          </div>
        </section>
        {/* Premium Stats Counter Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24">
          <style>
            {`
              @keyframes statsFloat1 {
                0% { transform: translate(-30%, -30%) scale(1) rotate(0deg); }
                100% { transform: translate(-20%, -20%) scale(1.1) rotate(5deg); }
              }
              @keyframes statsFloat2 {
                0% { transform: translate(30%, 30%) scale(1) rotate(0deg); }
                100% { transform: translate(20%, 20%) scale(1.15) rotate(-5deg); }
              }
              @keyframes statsFloat3 {
                0% { transform: translate(-40%, 40%) scale(1); }
                100% { transform: translate(-30%, 30%) scale(1.05); }
              }
              @keyframes statsPulse {
                0%, 100% { opacity: 0.4; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.1); }
              }
              @keyframes statsShine {
                0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
                100% { transform: translateX(100vw) translateY(100vh) rotate(30deg); }
              }
              .stats-shine-effect {
                position: relative;
                overflow: hidden;
              }
              .stats-shine-effect::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent);
                animation: statsShine 4s infinite;
                pointer-events: none;
              }
            `}
          </style>
          {/* Background Layers */}
          {/* Layer 1 - Base gradient */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f0f9ff 50%, #ecfdf5 75%, #f8fafc 100%)'
            }}
          />
          {/* Layer 2 - Floating orbs */}
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 -translate-x-1/3 -translate-y-1/3 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
              animation: 'statsFloat1 12s ease-in-out infinite alternate'
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-25 translate-x-1/4 translate-y-1/4 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)',
              animation: 'statsFloat2 15s ease-in-out infinite alternate'
            }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full opacity-15 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
              animation: 'statsFloat3 10s ease-in-out infinite alternate'
            }}
          />
          {/* Layer 3 - Animated grid pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px),
                linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px',
              backgroundPosition: '0 0, 0 0, 20px 20px, 20px 20px'
            }}
          />
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none z-5">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `statsPulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-blue-700"
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  📊 Our Achievements
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              >
                Numbers That
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Speak</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Our track record of excellence in financial services across Maharashtra
              </motion.p>
            </div>
            {/* Premium Stats Grid */}
            <PremiumStatsGrid />
          </div>
        </section>

        {/* Premium Loan Services Section */}
        <section className="relative w-full min-h-screen flex flex-col justify-center py-12 overflow-hidden">
          {/* ── BACKGROUND ────────────────────────── */}
          <div className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(160deg, #eff6ff 0%, #f0fdf4 35%, #eff6ff 70%, #f0f9ff 100%)'
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />

          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-20 z-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)',
              animationDuration: '6s'
            }}
          />
          <div className="absolute bottom-20 right-10 w-[350px] h-[350px] rounded-full opacity-20 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(22,163,74,0.4) 0%, transparent 70%)',
              animation: 'pulse 8s ease-in-out infinite alternate'
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)'
            }}
          />

          {/* Floating particles (12 dots) */}
          {[
            { top: '10%', left: '5%', size: 4, dur: 3, del: 0 },
            { top: '20%', left: '90%', size: 6, dur: 4, del: 0.5 },
            { top: '40%', left: '3%', size: 3, dur: 5, del: 1 },
            { top: '60%', left: '95%', size: 5, dur: 3, del: 1.5 },
            { top: '80%', left: '8%', size: 4, dur: 6, del: 0.8 },
            { top: '90%', left: '85%', size: 3, dur: 4, del: 0.3 },
            { top: '15%', left: '50%', size: 5, dur: 5, del: 0.7 },
            { top: '70%', left: '45%', size: 3, dur: 3, del: 1.2 },
            { top: '35%', left: '75%', size: 6, dur: 4, del: 0.4 },
            { top: '55%', left: '20%', size: 4, dur: 6, del: 0.9 },
            { top: '5%', left: '30%', size: 3, dur: 5, del: 0.2 },
            { top: '85%', left: '60%', size: 5, dur: 4, del: 1.1 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full z-0"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: i % 3 === 0
                  ? 'rgba(37,99,235,0.5)'
                  : i % 3 === 1
                    ? 'rgba(22,163,74,0.5)'
                    : 'rgba(124,58,237,0.5)',
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                delay: p.del,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* ── MAIN CONTENT ─────────────────────── */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12">

            {/* Section header */}
            <div className="text-center mb-12 lg:mb-16">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: 'rgba(22,163,74,0.15)',
                    border: '1px solid rgba(22,163,74,0.3)',
                    color: '#15803d'
                  }}>
                  <Sparkles className="w-4 h-4" />
                  13 Premium Loan Products
                  <Sparkles className="w-4 h-4" />
                </span>
              </motion.div>

              {/* Heading — word by word */}
              <div className="mb-6">
                {["Loan", "Solutions", "for", "Every", "Need"].map(
                  (word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 + i * 0.1,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="inline-block mr-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900"
                    >
                      {word}
                    </motion.span>
                  )
                )}
              </div>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="h-1 rounded-full mx-auto mb-6"
                style={{
                  background: 'linear-gradient(90deg, #2563eb, #16a34a)'
                }}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto"
              >
                Choose from our wide range of loan products designed to meet your financial goals
              </motion.p>
            </div>

            {/* ── CARDS GRID ───────────────────────── */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-7xl mx-auto">
                <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                  {LOANS.map((loan, index) => (
                    <LoanCard
                      key={loan.id}
                      loan={loan}
                      index={index}
                      navigate={navigate}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-center mt-8 lg:mt-12"
            >
              <p className="text-gray-500 text-sm mb-6">
                Not sure which loan is right for you?
              </p>
              <button
                onClick={() => navigate('/contact-us')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #16a34a)',
                  boxShadow: '0 8px 32px rgba(37,99,235,0.25)'
                }}
              >
                <Sparkles className="w-4 h-4" />
                Talk to Our Expert — Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Premium Why Choose Us Section */}
        <section className="relative w-full py-28 overflow-hidden">
          {/* ── BACKGROUND — same light blue as page */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(160deg, #f0f9ff 0%, #eff6ff 35%, #f0fdf4 65%, #eff6ff 100%)`,
            }}
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 z-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(37,99,235,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.6) 1px, transparent 1px)`,
              backgroundSize: "55px 55px",
            }}
          />

          {/* Floating orbs */}
          <motion.div
            className="absolute top-16 left-12 w-[420px] h-[420px] rounded-full opacity-25 z-0"
            style={{
              background: `radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-16 right-12 w-[380px] h-[380px] rounded-full opacity-20 z-0"
            style={{
              background: `radial-gradient(circle, rgba(22,163,74,0.25) 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 z-0"
            style={{
              background: `radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)`,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating particles */}
          {[
            { top: "8%", left: "4%", size: 5, dur: 3, del: 0 },
            { top: "15%", left: "92%", size: 4, dur: 4, del: 0.6 },
            { top: "45%", left: "2%", size: 3, dur: 5, del: 1 },
            { top: "65%", left: "96%", size: 6, dur: 3, del: 0.4 },
            { top: "85%", left: "6%", size: 4, dur: 4, del: 0.9 },
            { top: "92%", left: "88%", size: 3, dur: 5, del: 0.2 },
            { top: "30%", left: "48%", size: 4, dur: 6, del: 1.3 },
            { top: "72%", left: "52%", size: 3, dur: 4, del: 0.7 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full z-0"
              style={{
                top: p.top, left: p.left,
                width: p.size, height: p.size,
                background: i % 3 === 0
                  ? "rgba(37,99,235,0.35)"
                  : i % 3 === 1
                    ? "rgba(22,163,74,0.35)"
                    : "rgba(124,58,237,0.35)",
              }}
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                delay: p.del,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ── CONTENT ──────────────────────────── */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-5"
              >
                <span
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-blue-700"
                  style={{
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.20)",
                  }}
                >
                  <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                  8 Reasons to Choose Us
                  <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                </span>
              </motion.div>

              {/* Heading — word by word */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
                {["Why", "Choose", "Sanskruti", "Associates"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 + i * 0.12,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="h-1.5 rounded-full mx-auto mb-6"
                style={{
                  background: "linear-gradient(90deg, #2563eb, #16a34a)",
                }}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
              >
                We don't just process loans — we build relationships. Here's what makes us Maharashtra's most trusted loan partner.
              </motion.p>

              {/* 3 quick trust badges row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3 mt-6"
              >
                {[
                  { icon: "✅", text: "RBI Compliant" },
                  { icon: "🔒", text: "100% Secure" },
                  { icon: "⭐", text: "4.9 Rating" },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-gray-600"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {b.icon} {b.text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── CARDS GRID 4 columns ─────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {WHY_FEATURES.map((feature, index) => (
                <WhyCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-center mt-16"
            >
              <p className="text-gray-400 text-sm mb-5">
                Join 25,000+ satisfied customers across Maharashtra
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #16a34a)",
                    boxShadow: "0 8px 32px rgba(37,99,235,0.20)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Apply for Loan Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+917758969798"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-50 active:scale-95"
                  style={{
                    border: "2px solid rgba(37,99,235,0.25)",
                    background: "rgba(255,255,255,0.7)",
                  }}
                >
                  📞 Call Expert Free
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Branches Section */}
        <section className="relative w-full py-28 overflow-hidden">
          {/* ── BACKGROUND — light blue same as page */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(160deg, #eff6ff 0%, #f0fdf4 40%, #eff6ff 70%, #f0f9ff 100%)`,
            }}
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 z-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`,
              backgroundSize: "55px 55px",
            }}
          />

          {/* Floating orbs */}
          <motion.div
            className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full opacity-20 z-0"
            style={{
              background: `radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full opacity-20 z-0"
            style={{
              background: `radial-gradient(circle, rgba(22,163,74,0.3) 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Floating particles */}
          {[
            { top: "5%", left: "3%", s: 4, d: 3, dl: 0 },
            { top: "12%", left: "93%", s: 5, d: 4, dl: 0.5 },
            { top: "50%", left: "1%", s: 3, d: 5, dl: 1.0 },
            { top: "70%", left: "97%", s: 4, d: 3, dl: 0.3 },
            { top: "88%", left: "5%", s: 5, d: 4, dl: 0.8 },
            { top: "93%", left: "90%", s: 3, d: 5, dl: 0.2 },
            { top: "30%", left: "50%", s: 4, d: 6, dl: 1.2 },
            { top: "75%", left: "55%", s: 3, d: 3, dl: 0.6 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full z-0"
              style={{
                top: p.top, left: p.left,
                width: p.s, height: p.s,
                background: i % 2 === 0
                  ? "rgba(37,99,235,0.30)"
                  : "rgba(22,163,74,0.30)",
              }}
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: p.d,
                repeat: Infinity,
                delay: p.dl,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ── CONTENT ─────────────────────────── */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-5"
              >
                <span
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-green-700"
                  style={{
                    background: "rgba(22,163,74,0.08)",
                    border: "1px solid rgba(22,163,74,0.20)",
                  }}
                >
                  <MapPin className="w-4 h-4" />
                  6 Locations Across Maharashtra
                  <MapPin className="w-4 h-4" />
                </span>
              </motion.div>

              {/* Heading word by word */}
              <div className="flex flex-wrap justify-center gap-x-4 mb-4">
                {["Our", "Branch", "Network"].map(
                  (word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 + i * 0.12,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
                    >
                      {word}
                    </motion.span>
                  )
                )}
              </div>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.9 }}
                className="h-1.5 rounded-full mx-auto mb-6"
                style={{
                  background: "linear-gradient(90deg, #2563eb, #16a34a)",
                }}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gray-500 text-lg max-w-2xl mx-auto"
              >
                Visit us at any of our 6 locations or connect online. We bring loan services closer to your doorstep.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mt-6"
              >
                {[
                  { emoji: "📍", text: "6 Branches" },
                  { emoji: "🕘", text: "Mon–Sat Open" },
                  { emoji: "📞", text: "Call Anytime" },
                  { emoji: "🚗", text: "Home Visit Available" },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(0,0,0,0.07)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {b.emoji} {b.text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── BRANCHES GRID ─────────────────── */}
            {/* Head Office — full width top */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <BranchCard
                branch={BRANCHES[0]}
                index={0}
              />
            </motion.div>

            {/* 5 branches — responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {BRANCHES.slice(1).map((branch, i) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  index={i + 1}
                />
              ))}
            </div>

            {/* Bottom info bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-12 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(22,163,74,0.06) 100%)",
                border: "1px solid rgba(37,99,235,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold text-gray-800">
                    Can't visit? We come to you!
                  </p>
                  <p className="text-gray-500 text-sm">
                    Home visit available for document collection
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="tel:+917758969798"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:brightness-110 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #16a34a)",
                    boxShadow: "0 4px 16px rgba(37,99,235,0.20)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call: 7758 96 9798
                </a>
                <a
                  href="https://wa.me/917758969798"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-700 text-sm transition-all hover:bg-green-50 active:scale-95"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(22,163,74,0.25)",
                  }}
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>


      </div>

      {/* Premium Testimonials Section */}
      <section className="relative w-full py-28 overflow-hidden">
        {/* Background — same as page */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(160deg, #eff6ff 0%, #f0fdf4 35%, #eff6ff 70%, #f0f9ff 100%)`,
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />
        {/* Floating orbs */}
        <motion.div
          className="absolute top-16 left-12 w-[350px] h-[350px] rounded-full opacity-20 z-0"
          style={{
            background: `radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-12 w-[300px] h-[300px] rounded-full opacity-15 z-0"
          style={{
            background: `radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Floating particles */}
        {[
          { top: "6%", left: "4%", s: 4, d: 3, dl: 0 },
          { top: "14%", left: "93%", s: 5, d: 4, dl: 0.5 },
          { top: "50%", left: "2%", s: 3, d: 5, dl: 1.0 },
          { top: "70%", left: "96%", s: 4, d: 3, dl: 0.3 },
          { top: "88%", left: "6%", s: 5, d: 4, dl: 0.8 },
          { top: "92%", left: "88%", s: 3, d: 5, dl: 0.2 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full z-0"
            style={{
              top: p.top, left: p.left,
              width: p.s, height: p.s,
              background: i % 3 === 0
                ? "rgba(37,99,235,0.30)"
                : i % 3 === 1
                  ? "rgba(124,58,237,0.30)"
                  : "rgba(22,163,74,0.30)",
            }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: p.d, repeat: Infinity, delay: p.dl, ease: "easeInOut" }}
          />
        ))}
        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-amber-700"
                style={{
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.20)",
                }}
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                Real Stories · Real Results
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </span>
            </motion.div>
            {/* Heading word by word */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
              {["What", "Our", "Clients", "Say"].map(
                (word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 + i * 0.12,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
                  >
                    {word}
                  </motion.span>
                )
              )}
            </div>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="h-1.5 rounded-full mx-auto mb-6"
              style={{
                background: "linear-gradient(90deg, #f59e0b, #2563eb)",
              }}
            />
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              25,000+ happy customers across Maharashtra trust Sanskruti Associates for their financial needs.
            </motion.p>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              {[
                { icon: "⭐", text: "4.9 Average Rating" },
                { icon: "✅", text: "Verified Reviews" },
                { icon: "🏆", text: "Most Trusted 2024" },
              ].map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-gray-600"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(0,0,0,0.07)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {b.icon} {b.text}
                </span>
              ))}
            </motion.div>
          </div>
          {/* TESTIMONIAL CARDS — 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard
                key={t.id}
                t={t}
                index={i}
                isActive={true}
              />
            ))}
          </div>
          {/* AUTO-SCROLL LOOP TICKER */}
          {/* Duplicate reviews for seamless loop */}
          <div className="relative overflow-hidden mb-16">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, #eff6ff, transparent)`,
              }}
            />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(-90deg, #eff6ff, transparent)`,
              }}
            />
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map(
                (t, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-80 rounded-2xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: `1px solid ${t.borderColor}`,
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map(
                        (_, si) => (
                          <Star
                            key={si}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        )
                      )}
                    </div>
                    {/* Mini review */}
                    <p className="text-gray-600 text-xs leading-relaxed mb-3 italic line-clamp-3">
                      "{t.review}"
                    </p>
                    {/* Author mini */}
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                        style={{ background: t.avatarBg }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-800">{t.name}</p>
                        <p className="text-xs font-medium"
                          style={{ color: t.highlightColor }}>
                          {t.loanType}
                        </p>
                      </div>
                      <span
                        className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          background: t.highlightBg,
                          color: t.highlightColor,
                        }}
                      >
                        {t.loanAmount}
                      </span>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm mb-5">
              Join thousands of happy customers — your success story starts here
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #16a34a)",
                  boxShadow: "0 8px 32px rgba(37,99,235,0.20)",
                }}
              >
                <Star className="w-4 h-4 fill-white" />
                Apply Now — Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="relative w-full py-28 overflow-hidden">
        {/* ── BACKGROUND — deep navy-blue gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, #0f172a 0%, #1e3a8a 35%, #1d4ed8 60%, #0f172a 100%)`,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 z-0"
          style={{
            background: `radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 65%)`,
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 z-0"
          style={{
            background: `radial-gradient(circle, rgba(22,163,74,0.5) 0%, transparent 65%)`,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 z-0"
          style={{
            background: `radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 65%)`,
          }}
        />
        {/* Floating particles */}
        {[
          { top:"10%", left:"6%",  s:5, d:3, dl:0   },
          { top:"20%", left:"88%", s:4, d:4, dl:0.6 },
          { top:"55%", left:"3%",  s:3, d:5, dl:1.0 },
          { top:"70%", left:"94%", s:6, d:3, dl:0.4 },
          { top:"85%", left:"8%",  s:4, d:4, dl:0.9 },
          { top:"90%", left:"86%", s:3, d:5, dl:0.2 },
          { top:"35%", left:"50%", s:4, d:6, dl:1.3 },
          { top:"15%", left:"40%", s:3, d:4, dl:0.7 },
          { top:"75%", left:"60%", s:5, d:3, dl:0.5 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full z-0"
            style={{
              top: p.top, left: p.left,
              width: p.s, height: p.s,
              background: i % 3 === 0
                ? "rgba(255,255,255,0.25)"
                : i % 3 === 1
                ? "rgba(96,165,250,0.35)"
                : "rgba(134,239,172,0.30)",
            }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: p.d, repeat: Infinity, delay: p.dl, ease: "easeInOut" }}
          />
        ))}
        {/* ── CONTENT ─────────────────────────── */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-green-300"
              style={{
                background: "rgba(22,163,74,0.15)",
                border: "1px solid rgba(22,163,74,0.30)",
              }}
            >
              <Sparkles className="w-4 h-4" />
              Free Consultation · Zero Hidden Charges
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>
          {/* Heading — word by word */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
            {["Ready", "to", "Get", "Your", "Loan?"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.65,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
                style={word === "Loan?" ? {
                  background: `linear-gradient(135deg, #60a5fa 0%, #86efac 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } : {}}
              >
                {word}
              </motion.span>
            ))}
          </div>
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="h-1 rounded-full mx-auto mb-6"
            style={{
              background: `linear-gradient(90deg, #2563eb, #16a34a)`,
            }}
          />
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed mb-4"
          >
            Talk to our expert today and get approved in as fast as 48 hours. 200+ bank partners. Best rates guaranteed.
          </motion.p>
          {/* Trust micro-pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { icon: "⚡", text: "48-Hr Approval" },
              { icon: "🏦", text: "200+ Banks" },
              { icon: "₹0", text: "No Consultation Fee" },
              { icon: "🛡️", text: "RBI Compliant" },
            ].map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-white/80"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {b.icon} {b.text}
              </span>
            ))}
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {/* Apply Now */}
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, #2563eb, #1d4ed8)`,
                boxShadow: `0 8px 40px rgba(37,99,235,0.45)`,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Zap className="w-5 h-5" />
              Apply Now — It's Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            {/* Call Us */}
            <motion.a
              href="tel:+917758969798"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white text-base transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, #16a34a, #15803d)`,
                boxShadow: `0 8px 40px rgba(22,163,74,0.40)`,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </motion.a>
          </motion.div>
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { stat: "25,000+", label: "Happy Customers" },
              { stat: "₹500Cr+", label: "Loans Disbursed" },
              { stat: "200+",    label: "Bank Partners" },
              { stat: "15+",     label: "Years Experience" },
            ].map((s) => (
              <div key={s.stat} className="text-center">
                <div className="text-2xl font-black text-white">{s.stat}</div>
                <div className="text-xs text-blue-300 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}