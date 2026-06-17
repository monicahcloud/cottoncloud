"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <section className="relative h-[100svh] overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/herobackground.png"
          alt="Luxury Ocean Villa"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/90" />
      </div>
    </section>
  );
}
