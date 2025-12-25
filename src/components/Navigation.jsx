export default function Navigation({ next, prev, index, total }) {
  return (
    <div className="nav" aria-label="Slide navigation">
      <button className="nav-btn" onClick={prev} aria-label="Previous slide">
        ↑
      </button>

      <div className="nav-dots" aria-label={`Slide ${index + 1} of ${total}`}>
        {index + 1}/{total}
      </div>

      <button className="nav-btn" onClick={next} aria-label="Next slide">
        ↓
      </button>
    </div>
  );
}
