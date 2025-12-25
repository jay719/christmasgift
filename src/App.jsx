import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Snowfall from "react-snowfall";
import bgImage from "./assets/misc/chrimah.jpg";
import SlideRenderer from "./components/SlideRenderer";

export default function App() {
  const [index, setIndex] = useState(0);
  const touchStartY = useRef(null);

  // 🎄 audio
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [audioReady, setAudioReady] = useState(false);

  const next = () => setIndex((i) => (i + 1) % 5);
  const prev = () => setIndex((i) => (i - 1 + 5) % 5);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown") next();
      if (e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // configure audio (don’t force autoplay, browsers block it)
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = 0.35;
    a.loop = true;
    a.muted = muted;
  }, [muted]);

  const onTouchStart = (e) => {
    // don't trigger vertical swipe when interacting with horizontal swipe zones
    if (e.target.closest(".accomp-viewport, .mestory-swipeZone")) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (e.target.closest(".accomp-viewport, .mestory-swipeZone")) return;
    if (touchStartY.current == null) return;

    const endY = e.changedTouches[0].clientY;
    const delta = endY - touchStartY.current;
    const threshold = 50;

    if (delta <= -threshold) next();
    if (delta >= threshold) prev();

    touchStartY.current = null;
  };

  const onAudioButton = async () => {
    const a = audioRef.current;
    if (!a) return;

    // First click must start audio (user gesture)
    if (!audioReady) {
      try {
        a.muted = false;
        setMuted(false);
        await a.play();
        setAudioReady(true);
      } catch (err) {
        console.log("Audio play blocked:", err);
      }
      return;
    }

    // After started: toggle mute
    a.muted = !a.muted;
    setMuted(a.muted);
  };

  return (
    <div
      className="app"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      {/* 🎄 background music (put file at: public/audio/christmas.mp3) */}
      <audio ref={audioRef} src="/audio/chrimahsong.mp4" />

      {/* Under-header audio button */}
      <button
        className="audio-toggle"
        aria-label={
          audioReady ? (muted ? "Unmute music" : "Mute music") : "Start music"
        }
        onClick={onAudioButton}
      >
        {!audioReady ? "▶️🎄" : muted ? "🔇" : "🎄🔊"}
      </button>

      <div className="readability-layer" />

      {index === 0 && (
        <Snowfall
          snowflakeCount={100}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 50,
          }}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="slide-stage"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SlideRenderer index={index} />
        </motion.div>
      </AnimatePresence>

      <Navigation next={next} prev={prev} index={index} total={5} />
    </div>
  );
}
