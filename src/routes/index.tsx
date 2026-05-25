import { createFileRoute } from "@tanstack/react-router";
import {
  Suspense,
  lazy,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { Intro } from "@/components/wedding/Intro";
import { Hero } from "@/components/wedding/Hero";
import { Divider } from "@/components/wedding/Divider";
import { motion } from "framer-motion";

const LazyCountdown = lazy(() =>
  import("@/components/wedding/Countdown").then((m) => ({
    default: m.Countdown,
  })),
);
const LazyCouple = lazy(() =>
  import("@/components/wedding/Couple").then((m) => ({ default: m.Couple })),
);
const LazyGallery = lazy(() =>
  import("@/components/wedding/Gallery").then((m) => ({ default: m.Gallery })),
);
const LazyStory = lazy(() =>
  import("@/components/wedding/Story").then((m) => ({ default: m.Story })),
);
const LazyEvents = lazy(() =>
  import("@/components/wedding/Events").then((m) => ({ default: m.Events })),
);
const LazyFamily = lazy(() =>
  import("@/components/wedding/Family").then((m) => ({ default: m.Family })),
);
const LazyRSVP = lazy(() =>
  import("@/components/wedding/RSVP").then((m) => ({ default: m.RSVP })),
);
const LazyEnding = lazy(() =>
  import("@/components/wedding/Ending").then((m) => ({ default: m.Ending })),
);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initAudio = useCallback(async () => {
    if (audioRef.current) return;
    const { default: url } = await import("@/assets/music.mp3");
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;
  }, []);

  const handlePlayMusic = useCallback(async () => {
    await initAudio();
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) =>
          console.log(
            "Audio playback failed or was blocked by browser policies:",
            err,
          ),
        );
    }
  }, [initAudio]);

  const handleTogglePlay = useCallback(async () => {
    await initAudio();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio playback failed:", err));
    }
  }, [initAudio, isPlaying]);

  return (
    <div className="relative bg-background text-foreground overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-floral opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(ellipse_at_top,transparent_55%,oklch(0.88_0.08_84/0.12)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-25 sm:opacity-30"
      />
      <Intro
        open={open}
        onOpen={() => setOpen(true)}
        onCelebrate={handlePlayMusic}
      />
      <main className="relative z-10">
        <Hero />
        <Divider />
        <Suspense fallback={null}>
          <LazyCountdown />
        </Suspense>
        <Divider />
        <Suspense fallback={null}>
          <LazyCouple />
        </Suspense>
        <Divider />
        <Suspense fallback={null}>
          <LazyGallery />
        </Suspense>
        <Divider />
        <Suspense fallback={null}>
          <LazyStory />
        </Suspense>
        <Divider />
        <Suspense fallback={null}>
          <LazyEvents />
        </Suspense>
        <Divider />
        <Suspense fallback={null}>
          <LazyFamily />
        </Suspense>
        <Divider />
        <Suspense fallback={null}>
          <LazyRSVP />
        </Suspense>
        <Divider />
        <Suspense fallback={null}>
          <LazyEnding />
        </Suspense>
      </main>

      {open && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleTogglePlay}
          className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold/40 bg-maroon-deep/80 backdrop-blur-md text-gold shadow-cinematic transition-colors hover:bg-maroon-deep cursor-pointer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <div className="flex items-end gap-[3px] justify-center h-4 w-5">
              <span
                className="w-[3px] h-3 bg-gold rounded-full soundwave-bar"
                style={{ animationDelay: "0.1s" }}
              />
              <span
                className="w-[3px] h-4.5 bg-gold rounded-full soundwave-bar"
                style={{ animationDelay: "0.3s" }}
              />
              <span
                className="w-[3px] h-4 bg-gold rounded-full soundwave-bar"
                style={{ animationDelay: "0.5s" }}
              />
              <span
                className="w-[3px] h-2.5 bg-gold rounded-full soundwave-bar"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          ) : (
            <svg
              className="w-4 sm:w-4.5 h-4 sm:h-4.5 fill-current ml-0.5"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>
      )}
    </div>
  );
}
