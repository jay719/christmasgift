import { useEffect, useRef, useState } from "react";

export default function HeroWithText({ panel }) {
  const vidRef = useRef(null);
  const [failed, setFailed] = useState(false);

  // When panel changes to a video, try to start it explicitly
  useEffect(() => {
    setFailed(false);

    if (panel.heroType !== "video") return;
    const v = vidRef.current;
    if (!v) return;

    // force reload when swapping panels
    v.load();

    const tryPlay = async () => {
      try {
        await v.play();
      } catch (err) {
        // autoplay blocked or decode issue
        // we'll show controls as a fallback
        console.log("Video play blocked/failed:", err);
      }
    };

    tryPlay();
  }, [panel.heroType, panel.heroSrc]);

  return (
    <div className="mestory-heroBlock">
      <div className="mestory-heroWrap">
        {panel.heroType === "video" && !failed ? (
          <video
            key={panel.heroSrc} // forces remount on swipe
            className="mestory-hero"
            poster={panel.heroPoster}
            playsInline
            muted
            loop
            preload="auto"
            controls // IMPORTANT: allows tap-to-play fallback
            onCanPlay={(e) => {
              // try autoplay once the browser says it's ready
              e.currentTarget.play().catch(() => {
                // autoplay blocked, controls already visible
              });
            }}
          >
            <source src={panel.heroSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            className="mestory-hero"
            src={panel.heroType === "video" ? panel.heroPoster : panel.heroSrc}
            alt={panel.heroAlt}
            loading="lazy"
          />
        )}
      </div>

      <p className="mestory-lead">{panel.text}</p>
    </div>
  );
}
