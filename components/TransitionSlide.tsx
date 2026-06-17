"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ToneName = "cloud" | "ocean" | "silver" | "deepBlue" | "glass";

type TransitionSlideProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string | string[];
  align?: "left" | "center";
  tone?: ToneName;
  className?: string;
};

const toneStyles: Record<
  ToneName,
  {
    section: string;
    line: string;
    highlight: string;
    panel: string;
    desc: string;
    eyebrow: string;
    bullet: string;
    glow: string;
  }
> = {
  cloud: {
    section:
      "bg-gradient-to-r from-white via-[#F4FAFF] to-[#DCEBFA] text-[#082A63]",
    line: "bg-[#2B75C9]/30",
    highlight: "text-[#2B75C9]",
    panel: "bg-white/65 border-white/80 shadow-xl shadow-blue-100/40",
    desc: "text-slate-600",
    eyebrow: "text-[#2B75C9]",
    bullet: "bg-[#082A63] text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(141,184,232,0.35),transparent_30%)]",
  },

  ocean: {
    section:
      "bg-gradient-to-r from-[#DCEBFA] via-[#F4FAFF] to-white text-[#082A63]",
    line: "bg-[#1D64B7]/25",
    highlight: "text-[#1D64B7]",
    panel: "bg-white/70 border-blue-100/80 shadow-xl shadow-blue-100/30",
    desc: "text-slate-600",
    eyebrow: "text-[#1D64B7]",
    bullet: "bg-[#1D64B7] text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(43,117,201,0.18),transparent_30%)]",
  },

  silver: {
    section:
      "bg-gradient-to-r from-[#F7F8FA] via-white to-[#E7ECF3] text-[#082A63]",
    line: "bg-slate-300",
    highlight: "text-[#6D89A8]",
    panel: "bg-white/70 border-slate-200 shadow-xl shadow-slate-200/50",
    desc: "text-slate-600",
    eyebrow: "text-[#6D89A8]",
    bullet: "bg-[#6D89A8] text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.22),transparent_30%)]",
  },

  deepBlue: {
    section:
      "bg-gradient-to-r from-[#061B3F] via-[#082A63] to-[#0B3B86] text-white",
    line: "bg-white/25",
    highlight: "text-[#DCEBFA]",
    panel: "bg-white/10 border-white/15 shadow-xl shadow-black/20",
    desc: "text-white/78",
    eyebrow: "text-[#BFD8F5]",
    bullet: "bg-white text-[#082A63]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%)]",
  },

  glass: {
    section: "bg-white/10 text-[#082A63] backdrop-blur-xl",
    line: "bg-[#2B75C9]/30",
    highlight: "text-[#2B75C9]",
    panel: "bg-white/60 border-white/70 shadow-xl shadow-blue-100/40",
    desc: "text-slate-600",
    eyebrow: "text-[#2B75C9]",
    bullet: "bg-[#082A63] text-white",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(141,184,232,0.28),transparent_30%)]",
  },
};

const splitTitle = (title: string, highlight?: string) => {
  if (!highlight || !title.includes(highlight)) {
    return <>{title}</>;
  }

  const [before, after] = title.split(highlight);

  return (
    <>
      {before}
      <span className="font-light italic">{highlight}</span>
      {after}
    </>
  );
};

export default function TransitionSlide({
  eyebrow = "Cotton Cloud Hospitality",
  title,
  highlight,
  description,
  align = "center",
  tone = "cloud",
  className,
}: TransitionSlideProps) {
  const styles = toneStyles[tone] ?? toneStyles.cloud;
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "relative z-20 overflow-hidden  px-6 sm:px-8 lg:px-12",
        styles.section,
        className,
      )}>
      <div className="absolute inset-0 opacity-80">
        <div className={cn("absolute inset-0", styles.glow)} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.25),transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={cn(
          "relative mx-auto flex min-h-[30vh] w-full max-w-6xl flex-col justify-center gap-5",
          isCenter ? "items-center text-center" : "items-start text-left",
        )}>
        <p
          className={cn(
            "text-xs font-black uppercase tracking-[0.35em] sm:text-sm md:text-base",
            styles.eyebrow,
          )}>
          {eyebrow}
        </p>

        <div
          className={cn(
            "h-px w-full max-w-xs",
            styles.line,
            isCenter ? "mx-auto" : "",
          )}
        />

        <h2 className="max-w-6xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className={styles.highlight}>
            {splitTitle(title, highlight)}
          </span>
        </h2>

        {description ? (
          <div
            className={cn(
              "max-w-3xl rounded-[2rem] border px-6 py-5 backdrop-blur-sm",
              styles.panel,
            )}>
            {Array.isArray(description) ? (
              <ul className="space-y-4">
                {description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-left">
                    <span
                      className={cn(
                        "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        styles.bullet,
                      )}>
                      ✓
                    </span>
                    <span className={cn("text-base leading-7", styles.desc)}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={cn("text-base leading-7 md:text-lg", styles.desc)}>
                {description}
              </p>
            )}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
