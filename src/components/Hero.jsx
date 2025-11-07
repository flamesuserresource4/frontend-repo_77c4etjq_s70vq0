import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Map, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-300" />
          <span className="text-white/90">Enterprise-grade EV charging platform</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          EVPlug
          <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Plan. Book. Charge. Grow.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
          A scalable, modern stack for EV charging — bookings, payments, community, and telematics
          built for consumer apps and B2B partners.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            <Map className="h-5 w-5" />
            Explore Roadmap
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <CreditCard className="h-5 w-5" />
            MVP Features
          </a>
        </div>
      </div>
    </section>
  );
}
