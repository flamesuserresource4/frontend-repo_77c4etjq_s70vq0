import React from 'react';
import { Github, MessageSquare, Layers } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-semibold">Ready to bring EVPlug to life?</h3>
            <p className="mt-3 text-white/70">
              This plan outlines a robust path from MVP to enterprise. Let’s start with the
              booking core and grow into community, planning, and telematics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
              >
                <Layers className="h-5 w-5" />
                View phases
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
                Repo setup
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-lg bg-emerald-500/20 p-2">
                <MessageSquare className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <h4 className="text-lg font-medium">What we’ll build first</h4>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  <li>• Authentication and onboarding</li>
                  <li>• Map + station directory</li>
                  <li>• Booking flow with payments</li>
                  <li>• Reviews and profiles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
