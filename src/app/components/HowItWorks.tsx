import { FileText, Upload, CheckCircle2, Banknote, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: FileText,
    title: 'Apply Online',
    description: 'Fill our simple online form in just 5 minutes',
  },
  {
    icon: Upload,
    title: 'Upload Documents',
    description: 'Submit required documents digitally through our secure portal',
  },
  {
    icon: CheckCircle2,
    title: 'Get Approval',
    description: 'Receive loan approval within 2-3 working days',
  },
  {
    icon: Banknote,
    title: 'Receive Loan',
    description: 'Get funds disbursed directly to your bank account',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleInView, setTitleInView] = useState(false);
  const [stepsInView, setStepsInView] = useState(false);
  const [buttonInView, setButtonInView] = useState(false);
  const [trackFillProgress, setTrackFillProgress] = useState(0);
  const [trackTop, setTrackTop] = useState(128);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [showArrow, setShowArrow] = useState(false);

  // Title intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTitleInView(true);
        }
      },
      { threshold: 0.4 }
    );

    const titleElement = document.getElementById('how-it-works-title');
    if (titleElement) observer.observe(titleElement);

    return () => observer.disconnect();
  }, []);

  // Calculate track position based on actual node dot position
  useEffect(() => {
    if (nodeRefs.current[0]) {
      const nodeRect = nodeRefs.current[0].getBoundingClientRect();
      const containerRect = nodeRefs.current[0].closest('.steps-container')?.getBoundingClientRect();
      if (containerRect) {
        const relativeTop = nodeRect.top - containerRect.top + nodeRect.height / 2;
        setTrackTop(relativeTop);
      }
    }
  }, [stepsInView]);

  // Steps intersection observer with track fill
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStepsInView(true);
            // Animate track fill progressively
            setTimeout(() => setTrackFillProgress(25), 300);
            setTimeout(() => setTrackFillProgress(50), 800);
            setTimeout(() => setTrackFillProgress(75), 1300);
            setTimeout(() => setTrackFillProgress(100), 1800);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Button intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setButtonInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  // Mouse spotlight effect - removed
  // Ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  const titleWords = "How It Works".split(' ');
  const descriptionWords = "Get your loan in 4 simple steps".split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      <style>{`
        /* Breathing gradient background */
        @keyframes breathingBg {
          0%, 100% {
            background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%);
          }
          50% {
            background: linear-gradient(135deg, #e8f0fe 0%, #f0f4ff 100%);
          }
        }

        .breathing-bg {
          animation: breathingBg 6s ease-in-out infinite;
        }

        /* Floating orbs */
        @keyframes floatOrbA {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(40px, -50px); }
          66% { transform: translate(-30px, 40px); }
        }

        @keyframes floatOrbB {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-50px, 35px); }
          66% { transform: translate(35px, -45px); }
        }

        @keyframes floatOrbC {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, 40px); }
          66% { transform: translate(-40px, -30px); }
        }

        @keyframes floatOrbD {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-35px, -40px); }
          66% { transform: translate(45px, 30px); }
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.3;
        }

        .bg-orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(59, 130, 246, 0.4);
          top: 10%;
          left: 5%;
          animation: floatOrbA 15s ease-in-out infinite;
        }

        .bg-orb-2 {
          width: 350px;
          height: 350px;
          background: rgba(99, 102, 241, 0.35);
          top: 50%;
          right: 10%;
          animation: floatOrbB 18s ease-in-out infinite;
          animation-delay: 3s;
        }

        .bg-orb-3 {
          width: 300px;
          height: 300px;
          background: rgba(59, 130, 246, 0.3);
          bottom: 15%;
          left: 15%;
          animation: floatOrbC 12s ease-in-out infinite;
          animation-delay: 6s;
        }

        .bg-orb-4 {
          width: 380px;
          height: 380px;
          background: rgba(99, 102, 241, 0.3);
          top: 30%;
          right: 20%;
          animation: floatOrbD 20s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Diagonal light sweep */
        @keyframes diagonalLightSweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(45deg);
          }
        }

        .diagonal-light {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent);
          animation: diagonalLightSweep 10s ease-in-out infinite;
          pointer-events: none;
        }

        /* Title word reveal */
        @keyframes titleWordReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-word {
          display: inline-block;
          opacity: 0;
          animation: titleWordReveal 0.6s ease-out forwards;
          will-change: transform, opacity;
        }

        /* Subtitle fade in */
        @keyframes subtitleFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .subtitle-fade {
          animation: subtitleFade 0.6s ease-out 0.5s forwards;
        }

        /* Subtitle glow pulse */
        @keyframes subtitleGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
          }
          50% {
            text-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
          }
        }

        .subtitle-glow {
          animation: subtitleGlow 4s ease-in-out infinite;
        }

        /* Underline grow */
        @keyframes underlineGrowth {
          from {
            width: 0;
          }
          to {
            width: 60px;
          }
        }

        .underline-grow {
          animation: underlineGrowth 0.5s ease-out 0.8s forwards;
          width: 0;
        }

        /* 4-column grid layout */
        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: start;
          position: relative;
          gap: 0;
          margin-top: 40px;
        }

        .step-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 12px;
          position: relative;
        }

        /* Icon wrapper - fixed height for alignment */
        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          width: 100%;
          margin-bottom: 16px;
        }

        /* Step number label above node */
        .step-number-label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 4px;
          text-align: center;
        }

        /* Node dot - centered in column */
        .node-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #2563eb;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          opacity: 0.4;
          transition: opacity 0.3s, filter 0.3s;
        }

        .node-dot.active {
          opacity: 1;
        }

        .node-dot.active .node-inner {
          background: #22c55e;
          filter: brightness(1.5);
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
        }

        .node-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: transparent;
          transition: all 0.3s;
        }

        @keyframes nodeFlashEffect {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(2);
          }
        }

        .node-dot.flash {
          animation: nodeFlashEffect 0.3s ease-out;
        }

        @keyframes nodeRippleEffect {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.8);
            opacity: 0;
          }
        }

        .node-dot.ripple::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #2563eb;
          border-radius: 50%;
          animation: nodeRippleEffect 0.6s ease-out;
        }

        /* START/END badges */
        .badge-marker {
          font-size: 9px;
          padding: 2px 8px;
          border-radius: 999px;
          margin-top: 4px;
          font-weight: bold;
          color: white;
          white-space: nowrap;
        }

        @keyframes badgePulseGreen {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
        }

        @keyframes badgePulseBlue {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.5);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
          }
        }

        .badge-start {
          background: #22c55e;
          animation: badgePulseGreen 2s ease-out infinite;
        }

        .badge-end {
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          animation: badgePulseBlue 2s ease-out infinite;
        }

        /* Step title and description */
        .step-title {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
          margin-top: 16px;
          max-width: 160px;
          margin-left: auto;
          margin-right: auto;
        }

        .step-description {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          text-align: center;
          margin-top: 8px;
          max-width: 160px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Horizontal track line */
        .horizontal-track {
          position: absolute;
          left: 12.5%;
          right: 12.5%;
          height: 5px;
          background: rgba(37, 99, 235, 0.12);
          border-radius: 999px;
          z-index: 1;
        }

        /* Dashed secondary track */
        .horizontal-track::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 0;
          right: 0;
          border-top: 2px dashed rgba(37, 99, 235, 0.1);
        }

        .track-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #22c55e 0%, #2563eb 33%, #f59e0b 66%, #06b6d4 100%);
          border-radius: 999px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 12px rgba(37, 99, 235, 0.9);
          will-change: width;
        }

        /* Traveling orb - recalculated */
        @keyframes orbTravelGrid {
          0% {
            left: 12.5%;
            opacity: 1;
          }
          23% {
            left: 37.5%;
            opacity: 1;
          }
          25% {
            left: 37.5%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.4);
          }
          27% {
            left: 37.5%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          48% {
            left: 62.5%;
            opacity: 1;
          }
          50% {
            left: 62.5%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.4);
          }
          52% {
            left: 62.5%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          73% {
            left: 87.5%;
            opacity: 1;
          }
          75% {
            left: 87.5%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.4);
          }
          77% {
            left: 87.5%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          85% {
            left: 87.5%;
            opacity: 0;
          }
          86% {
            left: 12.5%;
            opacity: 0;
          }
          90% {
            left: 12.5%;
            opacity: 1;
          }
          100% {
            left: 12.5%;
            opacity: 1;
          }
        }

        .traveling-orb-grid {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, #2563eb);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.3), 0 0 20px rgba(37, 99, 235, 0.8);
          left: 12.5%;
          transform: translate(-50%, -50%);
          animation: orbTravelGrid 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, left, opacity;
          z-index: 15;
        }

        .traveling-orb-grid::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 6px;
          background: linear-gradient(90deg, rgba(37, 99, 235, 0.6), transparent);
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 999px;
          opacity: 0.6;
        }

        /* Marching arrows */
        @keyframes arrowMarchGrid {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) translateX(0px);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) translateX(5px);
          }
        }

        .marching-arrow-grid {
          position: absolute;
          color: rgba(37, 99, 235, 0.6);
          font-size: 14px;
          font-weight: bold;
          animation: arrowMarchGrid 1.5s ease-in-out infinite;
          will-change: opacity, transform;
          transform: translate(-50%, -50%);
          z-index: 5;
        }

        .marching-arrow-grid-1 {
          left: 25%;
          animation-delay: 0s;
        }

        .marching-arrow-grid-2 {
          left: 50%;
          animation-delay: 0.5s;
        }

        .marching-arrow-grid-3 {
          left: 75%;
          animation-delay: 1s;
        }

        /* Step icon effects */
        .step-icon-circle {
          filter: drop-shadow(0 8px 16px rgba(37, 99, 235, 0.3));
        }

        /* Responsive - 2 columns on tablet */
        @media (max-width: 767px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 0;
          }

          .horizontal-track {
            display: none;
          }
        }

        /* Responsive - 1 column on mobile */
        @media (max-width: 479px) {
          .steps-container {
            grid-template-columns: 1fr;
            gap: 32px 0;
          }
        }

        /* Icon circle floating */
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 768px) {
          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }
        }

        .icon-float-1 {
          animation: iconFloat 4s ease-in-out infinite;
          animation-delay: 0s;
          will-change: transform;
        }

        .icon-float-2 {
          animation: iconFloat 4s ease-in-out infinite;
          animation-delay: 1s;
          will-change: transform;
        }

        .icon-float-3 {
          animation: iconFloat 4s ease-in-out infinite;
          animation-delay: 2s;
          will-change: transform;
        }

        .icon-float-4 {
          animation: iconFloat 4s ease-in-out infinite;
          animation-delay: 3s;
          will-change: transform;
        }

        /* Breathing ring glow */
        @keyframes ringGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
          }
          50% {
            box-shadow: 0 0 0 14px rgba(37, 99, 235, 0);
          }
        }

        .ring-glow {
          animation: ringGlow 2.5s ease-out infinite;
        }

        /* Number badge pulse */
        @keyframes badgePulse {
          0%, 100% {
            transform: scale(1.0);
            box-shadow: 0 0 0 rgba(34, 197, 94, 0);
          }
          50% {
            transform: scale(1.12);
            box-shadow: 0 0 16px rgba(34, 197, 94, 0.6);
          }
        }

        .badge-pulse-1 {
          animation: badgePulse 3s ease-in-out infinite;
          animation-delay: 0s;
        }

        .badge-pulse-2 {
          animation: badgePulse 3s ease-in-out infinite;
          animation-delay: 0.7s;
        }

        .badge-pulse-3 {
          animation: badgePulse 3s ease-in-out infinite;
          animation-delay: 1.4s;
        }

        .badge-pulse-4 {
          animation: badgePulse 3s ease-in-out infinite;
          animation-delay: 2.1s;
        }

        /* Icon oscillation */
        @keyframes iconOscillate {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }

        .icon-oscillate {
          animation: iconOscillate 4s ease-in-out infinite;
        }

        /* Step entrance */
        @keyframes stepEntrance {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .step-entrance {
          animation: stepEntrance 0.6s ease-out forwards;
        }

        /* Icon pop entrance */
        @keyframes iconPopEntrance {
          0% {
            transform: scale(0);
            box-shadow: 0 0 0 rgba(37, 99, 235, 0);
          }
          50% {
            transform: scale(1.25);
            box-shadow: 0 0 40px rgba(37, 99, 235, 0.9);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
          }
        }

        .icon-pop {
          animation: iconPopEntrance 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        /* Badge flip */
        @keyframes badgeFlip {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        .badge-flip {
          animation: badgeFlip 0.6s ease-out forwards;
        }

        /* Step title slide */
        @keyframes titleSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-slide {
          animation: titleSlide 0.5s ease-out forwards;
        }

        /* Step hover */
        .step-column {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          will-change: transform;
        }

        .step-column::before {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 1rem;
          background: radial-gradient(
            400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(37, 99, 235, 0.06),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .step-column:hover::before {
          opacity: 1;
        }

        .step-column:hover {
          transform: translateY(-10px);
        }

        .step-column:hover .step-title {
          color: #2563eb;
          letter-spacing: 0.4px;
        }

        .step-column:hover .step-description {
          opacity: 1;
          transform: translateY(-2px);
        }

        .step-title {
          transition: all 0.3s ease;
        }

        .step-description {
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        /* Sequential highlight */
        @keyframes sequentialHighlight1 {
          0%, 25%, 100% {
            box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
          }
          6.25% {
            box-shadow: 0 12px 40px rgba(37, 99, 235, 0.9);
          }
        }

        @keyframes sequentialHighlight2 {
          0%, 25%, 100% {
            box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
          }
          31.25% {
            box-shadow: 0 12px 40px rgba(37, 99, 235, 0.9);
          }
        }

        @keyframes sequentialHighlight3 {
          0%, 25%, 100% {
            box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
          }
          56.25% {
            box-shadow: 0 12px 40px rgba(37, 99, 235, 0.9);
          }
        }

        @keyframes sequentialHighlight4 {
          0%, 25%, 100% {
            box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
          }
          81.25% {
            box-shadow: 0 12px 40px rgba(37, 99, 235, 0.9);
          }
        }

        .seq-highlight-1 {
          animation: sequentialHighlight1 6s ease-in-out infinite;
        }

        .seq-highlight-2 {
          animation: sequentialHighlight2 6s ease-in-out infinite;
        }

        .seq-highlight-3 {
          animation: sequentialHighlight3 6s ease-in-out infinite;
        }

        .seq-highlight-4 {
          animation: sequentialHighlight4 6s ease-in-out infinite;
        }

        /* Button animations */
        @keyframes buttonSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .button-slide-up {
          animation: buttonSlideUp 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }

        @keyframes buttonShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .button-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: buttonShimmer 3s ease-in-out infinite;
        }

        @keyframes buttonRingGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5), 0 8px 24px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(34, 197, 94, 0), 0 8px 24px rgba(0, 0, 0, 0.2);
          }
        }

        .button-ring-glow {
          animation: buttonRingGlow 2.5s ease-out infinite;
        }

        .cta-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: scale(1.06);
          box-shadow: 0 12px 40px rgba(34, 197, 94, 0.5);
          background: #15803d;
          letter-spacing: 1px;
        }

        .cta-button:active {
          transform: scale(0.96);
        }

        @keyframes arrowSlide {
          from {
            opacity: 0;
            transform: translateX(-6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .arrow-slide {
          animation: arrowSlide 0.3s ease-out forwards;
        }

        /* Ripple effect */
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          width: 20px;
          height: 20px;
          pointer-events: none;
          animation: ripple 0.6s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-orb,
          .diagonal-light,
          .traveling-orb,
          .icon-float-1,
          .icon-float-2,
          .icon-float-3,
          .icon-float-4,
          .ring-glow,
          .badge-pulse-1,
          .badge-pulse-2,
          .badge-pulse-3,
          .badge-pulse-4,
          .icon-oscillate,
          .seq-highlight-1,
          .seq-highlight-2,
          .seq-highlight-3,
          .seq-highlight-4,
          .button-shimmer::after,
          .button-ring-glow,
          .subtitle-glow,
          .start-marker,
          .marching-arrow,
          .end-marker {
            animation: none !important;
          }

          .step-column::before {
            display: none;
          }

          .progress-fill {
            width: 100% !important;
          }

          .traveling-orb {
            display: none;
          }
        }
      `}</style>

      {/* Breathing gradient background */}
      <div className="breathing-bg absolute inset-0"></div>

      {/* Floating orbs */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>
      <div className="bg-orb bg-orb-4"></div>

      {/* Diagonal light sweep */}
      <div className="diagonal-light"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" id="how-it-works-title">
          {/* Title with word reveal */}
          <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4 font-bold">
            {titleWords.map((word, index) => (
              <span key={index}>
                <span
                  className="title-word"
                  style={{
                    animationDelay: titleInView ? `${index * 0.09}s` : '0s',
                  }}
                >
                  {word}
                </span>
                {index < titleWords.length - 1 && ' '}
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto ${
              titleInView ? 'subtitle-fade' : ''
            }`}
            style={{
              opacity: titleInView ? undefined : 0,
            }}
          >
            Get your loan in 4 simple steps
          </p>

          {/* Animated underline */}
          <div className="flex justify-center mt-4">
            <div
              className={`h-0.5 bg-[#16A34A] ${titleInView ? 'underline-grow' : ''}`}
            ></div>
          </div>
        </div>

        <div className="relative">
          {/* 4-column grid container */}
          <div className="steps-container hidden lg:grid">
            {/* Horizontal track line */}
            <div className="horizontal-track" style={{ top: `${trackTop}px` }}>
              <div className="track-fill" style={{ width: `${trackFillProgress}%` }}></div>
            </div>

            {/* Traveling orb */}
            <div className="traveling-orb-grid" style={{ top: `${trackTop}px` }}></div>

            {/* Marching arrows */}
            <div className="marching-arrow-grid marching-arrow-grid-1" style={{ top: `${trackTop}px` }}>›</div>
            <div className="marching-arrow-grid marching-arrow-grid-2" style={{ top: `${trackTop}px` }}>›</div>
            <div className="marching-arrow-grid marching-arrow-grid-3" style={{ top: `${trackTop}px` }}>›</div>

            {/* Step columns */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              const floatClass = `icon-float-${index + 1}`;
              const badgeClass = `badge-pulse-${index + 1}`;
              const seqClass = `seq-highlight-${index + 1}`;

              return (
                <div key={index} className="step-column">
                  {/* Icon wrapper - fixed height */}
                  <div className="icon-wrapper">
                    <div
                      className={`step-icon-circle relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full shadow-lg ${floatClass} ring-glow ${seqClass} ${
                        stepsInView ? 'icon-pop' : ''
                      }`}
                      style={{
                        animationDelay: stepsInView ? `${index * 0.18 + 0.2}s` : '0s',
                      }}
                    >
                      <Icon className="w-12 h-12 text-white icon-oscillate" />
                      <div
                        className={`absolute -top-2 -right-2 w-10 h-10 bg-[#16A34A] rounded-full flex items-center justify-center text-white shadow-lg font-bold ${badgeClass} ${
                          stepsInView ? 'badge-flip' : ''
                        }`}
                        style={{
                          animationDelay: stepsInView ? `${index * 0.18 + 0.5}s` : '0s',
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Step number label */}
                  <div className="step-number-label">0{index + 1}</div>

                  {/* Node dot */}
                  <div
                    ref={(el) => (nodeRefs.current[index] = el)}
                    className={`node-dot ${trackFillProgress >= (index + 1) * 25 ? 'active' : ''}`}
                  >
                    <div className="node-inner"></div>
                  </div>

                  {/* START/END badges */}
                  {index === 0 && <div className="badge-marker badge-start">START</div>}
                  {index === 3 && <div className="badge-marker badge-end">END</div>}

                  {/* Step title */}
                  <h3
                    className={`step-title ${stepsInView ? 'title-slide' : 'opacity-0'}`}
                    style={{
                      animationDelay: stepsInView ? `${index * 0.18 + 0.4}s` : '0s',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="step-description">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet - stacked layout */}
          <div className="grid sm:grid-cols-2 lg:hidden gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-full mb-6 shadow-lg">
                    <Icon className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#16A34A] rounded-full flex items-center justify-center text-white shadow-lg font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl text-[#1F2937] mb-3 font-semibold">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            ref={buttonRef}
            className={`cta-button button-shimmer button-ring-glow bg-[#16A34A] text-white px-10 py-4 rounded-lg ${
              buttonInView ? 'button-slide-up' : 'opacity-0'
            }`}
            onClick={handleRipple}
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Start Your Application
              {showArrow && <ArrowRight className="w-5 h-5 arrow-slide" />}
            </span>
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="ripple-effect"
                style={{
                  left: ripple.x - 10,
                  top: ripple.y - 10,
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </section>
  );
}
