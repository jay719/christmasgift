import { useEffect, useState } from "react";

export default function FloatingHearts({ count = 26, duration = 3500 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = 14 + Math.random() * 18;
        const drift = (Math.random() - 0.5) * 120;

        return (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              fontSize: `${size}px`,
              animationDelay: `${Math.random() * 1.2}s`,
              "--drift": `${drift}px`,
            }}
          >
            ❤️
          </span>
        );
      })}
    </div>
  );
}
