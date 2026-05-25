import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";
import { Ornament } from "./Ornament";

function FloralCorner({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`absolute w-24 sm:w-36 opacity-40 sm:opacity-50 text-gold/60 ${className}`}
      fill="none"
    >
      <path
        d="M0 0 L100 0 M0 0 L0 100"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.2" />
      <circle cx="20" cy="6" r="3" fill="currentColor" opacity="0.15" />
      <circle cx="6" cy="20" r="3" fill="currentColor" opacity="0.15" />
      <path
        d="M15 5 Q20 0 25 5 Q20 10 15 5Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M5 15 Q0 20 5 25 Q10 20 5 15Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          loading="eager"
          fetchpriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/70 via-maroon-deep/25 to-background" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,oklch(0.22_0.08_24/0.45)_100%)] pointer-events-none" />
      </div>

      <FloralCorner className="top-4 sm:top-8 left-4 sm:left-8 rotate-0" />
      <FloralCorner className="top-4 sm:top-8 right-4 sm:right-8 rotate-90" />
      <FloralCorner className="bottom-4 sm:bottom-8 left-4 sm:left-8 -rotate-90" />
      <FloralCorner className="bottom-4 sm:bottom-8 right-4 sm:right-8 rotate-180" />

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 sm:px-6">
        <div className="text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[0.6em] uppercase text-gold/80 mb-6 sm:mb-8"
          >
            — Wedding Reception —
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-8xl md:text-[10rem] leading-[1.15] sm:leading-[1.2] pb-[0.15em] sm:pb-[0.18em] tracking-tight shimmer-text"
            style={{ filter: "drop-shadow(0 4px 12px oklch(0 0 0 / 0.55))" }}
          >
            <span className="text-gold/60 text-[0.3em] sm:text-[0.35em] align-super font-sans tracking-[0.2em] sm:tracking-[0.3em]">
              S.
            </span>
            Nishok
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.0 }}
            className="font-serif italic text-lg sm:text-2xl text-gold/70 tracking-widest mb-2"
          >
            (Ayyapan)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1.0 }}
            className="text-xs sm:text-sm text-gold-soft/60 tracking-[0.3em] uppercase font-sans mb-6 sm:mb-8"
          >
            DCA., (VFX Artist)
          </motion.p>

          <div className="my-4 sm:my-6 flex items-center justify-center gap-3 sm:gap-5">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1.5,
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px w-10 sm:w-28 origin-right bg-gradient-to-l from-gold/80 to-transparent"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, duration: 1.2 }}
              className="font-display italic text-xl sm:text-3xl text-gold/90"
            >
              &
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1.5,
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px w-10 sm:w-28 origin-left bg-gradient-to-r from-gold/80 to-transparent"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-4xl sm:text-8xl md:text-[10rem] leading-[1.15] sm:leading-[1.2] pb-[0.15em] sm:pb-[0.18em] tracking-tight shimmer-text"
            style={{ filter: "drop-shadow(0 4px 12px oklch(0 0 0 / 0.55))" }}
          >
            <span className="text-gold/60 text-[0.3em] sm:text-[0.35em] align-super font-sans tracking-[0.2em] sm:tracking-[0.3em]">
              R.
            </span>
            Hemalatha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.0 }}
            className="text-xs sm:text-sm text-gold-soft/60 tracking-[0.3em] uppercase font-sans mb-6 sm:mb-8"
          >
            DCA., PGDCA
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 1.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg text-gold-soft/80 font-light max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            With immense joy, we invite you and your family to celebrate the
            beginning of our forever.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 1.2 }}
            className="mt-6 sm:mt-8 text-[10px] sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase text-gold/80"
          >
            May 31, 2026 · Chennai
          </motion.p>
        </div>
      </div>
    </section>
  );
}
