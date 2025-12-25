import { useRef, useState } from "react";
import HeroWithText from "../components/mestory/HeroWithText.jsx";
import Collage from "../components/mestory/Collage.jsx";
const panels = [
  {
    id: "origin",
    heroType: "image",
    heroSrc: "images/mom/momanddad.png",
    heroAlt: "Me, Mom, and Dad",
    text: "From hot girl to sit down and chill girl. When life threw me at you, you stepped up and became an amazing mother.",
    collage: [
      // swap to your real me+her pics later
      "images/mom/momandme/classic.jpg",
      "images/mom/momandme/olderphoto.jpg",
      "images/mom/momandme/mybday.jpg",
      "images/mom/momandme/unchousemandmom.jpg",
    ],
  },
  {
    id: "sports",
    heroType: "video",
    heroSrc: "images/mom/momandme/sports/basketball.mp4",
    heroPoster: "images/mom/momandme/sports/highlight.jpg",
    heroAlt: "Basketball highlight",
    text: "Sports and school, you were always there. You showed up, pushed me, and made sure I never quit on myself.",
    collage: [
      "images/mom/momandme/sports/highlight.jpg",
      "images/mom/momandme/sports/oldfootballwithkion.jpg",
      "images/mom/momandme/sports/randomfootballphoto.jpg",
      "images/mom/momandme/sports/grandmaandme.png",
      "images/mom/momandme/sports/school.jpg",
    ],
  },
  {
    id: "experiences",
    heroType: "image",
    heroSrc: "images/mom/momandme/experiences/badylimo.jpg",
    heroAlt: "Experiences",
    text: "Random trips, little adventures, and everyday moments that turned into core memories. You made life feel full.",
    collage: [
      "images/mom/momandme/experiences/graduation.jpg",
      "images/mom/momandme/experiences/halloweenmeandd.jpg",
      "images/mom/momandme/experiences/birthdaybike.jpg",
      "images/mom/momandme/experiences/meandnaychrimas.jpg",
      "images/mom/momandme/experiences/christmas.jpg",
      "images/mom/momandme/experiences/mybday.jpg",
    ],
  },
];

export default function MeSlide() {
  const [active, setActive] = useState(0);
  const startX = useRef(null);
  const dragging = useRef(false);

  const onTouchStart = (e) => {
    e.stopPropagation();
    dragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    e.stopPropagation();
    if (!dragging.current || startX.current == null) return;

    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX.current;
    const threshold = 50;

    if (delta <= -threshold)
      setActive((i) => Math.min(i + 1, panels.length - 1));
    if (delta >= threshold) setActive((i) => Math.max(i - 1, 0));

    startX.current = null;
    dragging.current = false;
  };

  const panel = panels[active];

  return (
    <div className="slide slide--mestory">
      <div className="mestory-wrap">
        <h1>Debatably your worst… best decision ❤️</h1>

        {/* Swipe on this zone updates hero + text + collage */}
        <div
          className="mestory-swipeZone"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: "pan-x" }}
        >
          <HeroWithText panel={panel} />
          <Collage images={panel.collage} label={panel.id} />
        </div>

        <div className="mestory-dots" aria-label="MeStory pages">
          {panels.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`mestory-dot ${i === active ? "is-active" : ""}`}
              aria-label={`Go to page ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setActive(i);
              }}
            />
          ))}
        </div>

        <div className="mestory-hint">Swipe </div>
      </div>
    </div>
  );
}
