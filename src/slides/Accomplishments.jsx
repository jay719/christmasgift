import { useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
const cards = [
  {
    id: "us",
    title: "Your Biggest Achievement",
    desc: "Let’s be real… your biggest accomplishment is raising me and Devin. You made the hard parts feel survivable and the good parts feel unforgettable.",
    img: "/images/fam/trio.jpg",
    alt: "Mom with me and Devin",
  },
  {
    id: "marriage",
    title: "Marriage",
    desc: "I'm glad you were able to find someone like Markel to take care of you in this crazy world! If you're reading this Markel thank you for stepping up and helping us out through the years.",
    img: "/images/mom/momandhub.jpg",
    alt: "Mom and her husband",
  },

  // ✅ NEW: biggest accomplishment card (you + devin)

  {
    id: "guard",
    title: "National Guard Service",
    desc: "Serving this country while juggling life couldn't have been easy. I missed you a ton during this time, but I know it was harder for you!",
    img: "/images/mom/armyselfie.jpg",
    alt: "National Guard service",
  },
  {
    id: "work",
    title: "Nearly a Decade of YN's",
    desc: "You have dealt with the worst kids ever for over half a decade JUST to pay for your own kids' bills. Thank you so much!",
    img: "/images/misc/sc.jpg",
    alt: "Nearly a decade at work",
  },
  {
    id: "degree",
    title: "Bachelor’s Degree",
    desc: "Not one...not two... BUT THREE OF THEM THANGS. Seeing you obtain multiple degrees while raising two kids still inspires me to this day.",
    img: "/images/mom/graduate.jpg",
    alt: "Bachelor’s degree graduation",
  },
];

export default function Accomplishments() {
  const [active, setActive] = useState(0);
  const startX = useRef(null);
  const dragging = useRef(false);
  const { width, height } = useWindowSize();

  const onTouchStart = (e) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (!dragging.current || startX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX.current;

    const threshold = 50; // swipe sensitivity
    if (delta <= -threshold)
      setActive((i) => Math.min(i + 1, cards.length - 1)); // left
    if (delta >= threshold) setActive((i) => Math.max(i - 1, 0)); // right

    startX.current = null;
    dragging.current = false;
  };

  return (
    <div className="slide slide--accomp">
      <div className="accomp-wrap">
        {active === cards.length - 1 && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={220}
            recycle={false}
          />
        )}
        <h1>Accomplishments</h1>
        <p className="accomp-text">
          Your strength shows in everything you’ve done, and everything you’ve
          built.
        </p>

        {/* Carousel viewport */}
        <div
          className="accomp-viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: "pan-x" }}
        >
          <div
            className="accomp-track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {cards.map((c) => (
              <div className="accomp-slide" key={c.id}>
                <div className="accomp-card">
                  <img
                    className="accomp-img"
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                  />
                  <h2 className="accomp-title">{c.title}</h2>
                  <p className="accomp-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="accomp-dots" aria-label="Accomplishments pages">
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`accomp-dot ${i === active ? "is-active" : ""}`}
              aria-label={`Go to accomplishment ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className="accomp-hint">Swipe left</div>
      </div>
    </div>
  );
}
