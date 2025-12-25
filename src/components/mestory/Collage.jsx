export default function Collage({ images, label }) {
  return (
    <div className="mestory-collageWrap" aria-label={`Collage ${label}`}>
      <div className="mestory-collage">
        {images.map((src, idx) => (
          <img
            key={`${label}-${idx}`}
            className="mestory-thumb"
            src={src}
            alt="Memory"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
