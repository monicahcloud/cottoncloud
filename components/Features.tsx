"use client";

import {
  TrendingUp,
  UserRound,
  Sparkles,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: TrendingUp,
    title: "Maximize Revenue",
    description:
      "Strategic pricing and expert marketing to optimize your rental income.",
  },
  {
    icon: UserRound,
    title: "Hassle-Free Management",
    description: "We handle everything, so you can enjoy peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Impeccable Standards",
    description:
      "Professional cleaning and maintenance for 5-star experiences.",
  },
  {
    icon: MessageSquareText,
    title: "Guest Satisfaction",
    description:
      "Outstanding service that earns 5-star reviews and repeat bookings.",
  },
  {
    icon: ShieldCheck,
    title: "Owner Protection",
    description: "We care for your property like it’s our own.",
  },
];

export default function Features() {
  return (
    <section className="relative z-30 px-5 ">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-8xl rounded-[2.5rem] border border-white/80 bg-white/90 shadow-[0_30px_90px_rgba(13,45,116,0.16)] backdrop-blur-xl">
        <div className="grid divide-y divide-blue-100/80 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group px-7 py-10 text-center transition hover:bg-[#F4FAFF]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#BFD8F5] bg-white shadow-sm transition group-hover:-translate-y-1">
                  <Icon className="h-8 w-8 text-[#1D64B7]" />
                </div>

                <h3 className="mt-6 text-[11px] font-black uppercase tracking-[0.18em] text-[#082A63]">
                  {feature.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[170px] text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
