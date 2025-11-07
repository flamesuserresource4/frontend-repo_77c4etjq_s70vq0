import React from 'react';
import { MapPin, CalendarClock, CreditCard, Star, Shield, Bell } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Smart Station Discovery',
    desc: 'Search and filter stations, see live availability, and view rich station details.'
  },
  {
    icon: CalendarClock,
    title: 'Reliable Booking Slots',
    desc: 'Conflict-free slot selection with real-time updates and reminders.'
  },
  {
    icon: CreditCard,
    title: 'Seamless Payments',
    desc: 'Integrated Razorpay/UPI with deposits, refunds, and webhooks for status.'
  },
  {
    icon: Star,
    title: 'Reviews & Ratings',
    desc: 'Capture user feedback after sessions to build trust and quality.'
  },
  {
    icon: Bell,
    title: 'Proactive Notifications',
    desc: 'Confirmation, reminders, and no‑show alerts delivered via FCM.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade Security',
    desc: 'Role-based access and secure storage for sensitive data.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-neutral-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">MVP Capabilities</h2>
        <p className="mt-2 text-white/70">The essential building blocks to launch fast and scale safely.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
