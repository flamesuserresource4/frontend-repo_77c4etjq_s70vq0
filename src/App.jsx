import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import PhaseTimeline from './components/PhaseTimeline';
import CTASection from './components/CTASection';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="text-lg font-semibold">EVPlug</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a href="#cta" className="hover:text-white">Get started</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-8 text-white">
      <div className="mx-auto max-w-7xl px-6 text-sm text-white/60">
        <p>© {new Date().getFullYear()} EVPlug. Built for scale.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <PhaseTimeline />
        <div id="cta">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
