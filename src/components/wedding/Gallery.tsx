import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
import couple1 from "@/assets/couple_1.webp";
import couple2 from "@/assets/couple_2.webp";

const galleryImages = [
  {
    src: couple1,
    alt: "S. Nishok & R. Hemalatha - Couple Moment I",
    caption: "Moment I",
  },
  {
    src: couple2,
    alt: "S. Nishok & R. Hemalatha - Couple Moment II",
    caption: "Moment II",
  },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-36 px-5 sm:px-6 overflow-hidden bg-background border-t border-gold/15"
    >
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-maroon/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <Reveal className="text-center mb-16 sm:mb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            Our Moments
          </p>
          <h2 className="font-display text-4xl sm:text-7xl shimmer-text">
            Couple Gallery
          </h2>
          <Ornament className="mt-6 sm:mt-8 opacity-70" />
        </Reveal>

        {/* Responsive Grid Structure */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 0.1} className="w-full">
              <motion.button
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-full overflow-hidden rounded-sm bg-black/40 shadow-cinematic cursor-pointer border border-gold/15"
                style={{ display: "block" }}
              >
                {/* Photo container with fixed aspect ratio */}
                <div className="relative aspect-[3/2] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark ambient gradient overlay to keep it sleek */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                  {/* Corner aesthetic highlights */}
                  <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] max-w-[95vw] md:max-w-[80vw]"
            >
              <img
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                className="max-h-[70vh] max-w-full object-contain rounded-sm border border-gold/30 shadow-2xl"
              />
              <div className="absolute inset-x-0 -bottom-10 text-center">
                <p className="font-display italic text-lg sm:text-2xl text-ivory">
                  {galleryImages[active].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
