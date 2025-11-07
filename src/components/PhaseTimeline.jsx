import React from 'react';
import { CheckCircle2, Clock, Target } from 'lucide-react';

const phases = [
  {
    id: 1,
    title: 'Phase 1: MVP – Core Booking & Navigation',
    time: 'Months 1–6',
    points: [
      'User onboarding (Email/SMS/Google)',
      'Home map with stations and detail modal',
      'Booking flow with slots, deposit, confirmation',
      'Payments (Razorpay/UPI)',
      'Reviews and profiles',
      'Push notifications for booking updates'
    ],
    icon: Target,
    color: 'from-emerald-400 to-cyan-400'
  },
  {
    id: 2,
    title: 'Phase 2: Community & Advanced Planning',
    time: 'Months 7–12',
    points: [
      'Community forum with posts and comments',
      'Trip planner with EV model selection',
      'Rewards and loyalty',
      'Data visualizations and stats'
    ],
    icon: Clock,
    color: 'from-cyan-400 to-blue-400'
  },
  {
    id: 3,
    title: 'Phase 3: Telematics & B2B Integrations',
    time: 'Year 2+',
    points: [
      'OBD2/Smartcar vehicle data integration',
      'Partner dashboard and fleet modules',
      'Role-based admin and commercial payments'
    ],
    icon: CheckCircle2,
    color: 'from-blue-400 to-violet-400'
  }
];

export default function PhaseTimeline() {
  return (
    <section id="roadmap" className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Build roadmap</h2>
        <p className="mt-2 text-white/70">A pragmatic, phased path from MVP to enterprise.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {phases.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.color}`} />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="text-sm text-white/60">{p.time}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
