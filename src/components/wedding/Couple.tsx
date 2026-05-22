import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
import groomImg from "@/assets/groom gen.webp";
import brideImg from "@/assets/bride.webp";

function PortraitDetails({
  name,
  nickname,
  role,
  company,
  align,
  desc,
  tamilRole,
  image,
}: {
  name: string;
  nickname?: string;
  role: string;
  company: string;
  align: "left" | "right";
  desc: string;
  tamilRole: string;
  image: string;
}) {
  return (
    <Reveal y={60} className="w-full">
      <div className="flex flex-col items-center">

        {/* ── Portrait Frame ── */}
        <div className="relative mb-8 sm:mb-10 w-52 sm:w-64 md:w-72">
          {/* Outer gold glow halo */}
          <div
            className="absolute -inset-3 rounded-sm pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.81 0.11 82 / 0.18), transparent 70%)",
              filter: "blur(16px)",
            }}
          />
          {/* Gold gradient border frame */}
          <div
            className="absolute -inset-[1.5px] rounded-sm pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.86 0.08 84 / 0.9), oklch(0.55 0.09 55 / 0.4) 40%, oklch(0.86 0.08 84 / 0.9))",
            }}
          />
          {/* Photo container */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={image}
              alt={name}
              loading="lazy"
              decoding="async"
              className="w-full object-cover object-top"
              style={{ aspectRatio: "3/4", display: "block" }}
            />
            {/* Cinematic bottom vignette */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.07 0.012 25 / 0.75), transparent)",
              }}
            />
            {/* Subtle maroon tint */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.28 0.11 18 / 0.08), transparent 60%)",
              }}
            />
          </div>
          {/* Corner ornaments */}
          <span className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/60 pointer-events-none" />
          <span className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/60 pointer-events-none" />
          <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/60 pointer-events-none" />
          <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/60 pointer-events-none" />
        </div>

        {/* ── Role badge ── */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold-soft">
            {role}
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-gold/50" />
          <span className="text-[11px] font-tamil tracking-wider text-gold/70">
            {tamilRole}
          </span>
        </div>

        {/* ── Main Name ── */}
        <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ivory tracking-wide leading-tight shimmer-text text-center">
          {name}
        </h3>

        {/* ── Nickname (optional) ── */}
        {nickname && (
          <span className="mt-1 sm:mt-1.5 font-serif italic text-lg sm:text-xl lg:text-2xl text-gold/80 tracking-widest text-center block">
            {nickname}
          </span>
        )}

        {/* ── Gold divider ── */}
        <div className="h-[1px] w-16 sm:w-20 bg-gradient-to-r from-gold/50 to-transparent my-3 sm:my-4 mx-auto" />

        {/* ── Profession line 1 ── */}
        <p className="text-xs sm:text-sm font-light text-gold-soft/90 tracking-wide font-sans mb-1 text-center">
          {company.split(" · ")[0]}
        </p>
        {/* ── Profession line 2 (if present) ── */}
        {company.split(" · ")[1] && (
          <p className="text-[11px] sm:text-xs text-ivory/60 tracking-wider font-sans mb-3 sm:mb-4 uppercase text-center">
            {company.split(" · ")[1]}
          </p>
        )}

        {/* ── Bio quote ── */}
        <p className="text-sm italic font-display text-ivory/70 w-full leading-relaxed text-center">
          "{desc}"
        </p>
      </div>
    </Reveal>
  );
}

export function Couple() {
  return (
    <section
      id="couple"
      className="relative py-24 sm:py-48 px-5 sm:px-6 overflow-hidden bg-background"
    >
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-maroon/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16 sm:mb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            The Union
          </p>
          <h2 className="font-display text-4xl sm:text-7xl shimmer-text">
            Two Souls, One Destiny
          </h2>
          <Ornament className="mt-6 sm:mt-8 opacity-70" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-24">
          <div>
            <PortraitDetails
              name="S. Nishok"
              nickname="(Ayyapan)"
              role="The Groom"
              tamilRole="மணமகன்"
              company="DCA., · (VFX Artist)"
              align="left"
              image={groomImg}
              desc="An anchor of strength and brilliant intellect, navigating our future with deep devotion and silent grace."
            />
          </div>

          <div className="md:mt-24">
            <PortraitDetails
              name="R. Hemalatha"
              role="The Bride"
              tamilRole="மணமகள்"
              company="DCA., PGDCA"
              align="right"
              image={brideImg}
              desc="A vision of elegance and gentle warmth, illuminating our path with quiet wisdom, compassion, and love."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
