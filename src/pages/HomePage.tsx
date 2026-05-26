import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Features } from '../components/Features';
import { BentoFeatures } from '../components/BentoFeatures';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { Integrations } from '../components/Integrations';
import { WorkflowVisual } from '../components/WorkflowVisual';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { BackToTop } from '../components/BackToTop';

export function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-100 origin-left"
        style={{ scaleX }}
      />
      <Header onOpenDemo={handleOpenDemo} />
      <main className="flex-1">
        <Hero onOpenDemo={handleOpenDemo} />
        <Stats />
        <BentoFeatures />
        <FeatureShowcase />
        <WorkflowVisual />
        <Integrations />
        <Features />
        <Pricing onOpenDemo={handleOpenDemo} />
        <Testimonials />
        <FAQ />
        <CTA onOpenDemo={handleOpenDemo} />
      </main>
      <Footer />
      <BackToTop />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
