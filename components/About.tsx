"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F4FAFF]">
      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/70 to-transparent" />

      <div className="relative grid min-h-[650px] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex items-center px-8 py-25 sm:px-12 lg:px-25">
          <div className="max-w-lg">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#2B75C9]">
              About Us
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] text-[#082A63] sm:text-6xl">
              Hospitality is
              <br />
              in <span className="font-light italic text-[#2B75C9]">
                our
              </span>{" "}
              nature.
            </h2>

            <div className="mt-6 h-px w-24 bg-[#2B75C9]" />

            <p className="mt-8 text-base leading-8 text-slate-600">
              At Cotton Cloud Hospitality, we believe exceptional experiences
              begin with exceptional care. We provide full-service property
              management designed to maximize your investment while creating
              memorable stays for every guest.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              From guest communication and reservations to cleaning,
              maintenance, and revenue optimization, we handle every detail with
              professionalism and purpose.
            </p>

            <Link
              href="#services"
              className="
                mt-10 inline-flex items-center gap-3 rounded-full
                border border-[#1D64B7]
                px-7 py-4
                text-xs font-bold uppercase tracking-[0.18em]
                text-[#082A63]
                transition
                hover:bg-[#082A63]
                hover:text-white
              ">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="relative min-h-[500px] overflow-hidden">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 scale-110">
            <Image
              src="/aboutbackground.png"
              alt="Luxury property interior"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAFF]/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
