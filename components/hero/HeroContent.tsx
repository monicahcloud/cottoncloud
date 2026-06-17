"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function HeroContent() {
  return (
    <section className="relative z-10 flex min-h-[100svh] items-center px-8 pt-36 md:px-20 lg:px-40">
      <div className="max-w-3xl">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"></motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="leading-none">
          <span className="block font-serif text-5xl text-[#0D2D74] sm:text-6xl lg:text-8xl">
            Elevated Stays.
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-5xl italic font-light text-[#2B75C9] sm:text-6xl lg:text-8xl">
              Exceptional
            </span>

            <span className="font-serif text-5xl text-[#0D2D74] sm:text-6xl lg:text-8xl">
              Care.
            </span>
          </div>
        </motion.h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl">
          Full-service property management and rental solutions that maximize
          your investment and delight your guests.
        </p>

        <div className="mt-9">
          <Link
            href="#about"
            className="inline-flex items-center gap-3 rounded-full bg-[#082A63] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#0B3B86]">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-10 text-5xl font-light italic text-[#2974DB] md:text-6xl">
          Just Imagine.
        </p>
      </div>
    </section>
  );
}
