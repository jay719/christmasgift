export default function ExtraCredit() {
  const photos = [
    "/images/others/domandmomfam.jpg",
    "/images/others/jamieandmom.jpg",
    "/images/others/meandjerm.jpg",
    "/images/others/meandzuzu.jpg",
    "/images/others/momandomkids.jpg",
    "/images/others/momandtianaandtaliyah.jpg",
    "/images/others/momandzuzu.jpg",
    "/images/others/rip.jpg",
    "/images/others/tamir.jpg",
    "/images/others/zuzu.jpg",
  ];

  return (
    <div className="slide slide--extra">
      <div className="extra-wrap">
        <h1>Extra Credit</h1>

        <div className="extra-text-box">
          <p className="extra-text">
            <span className="extra-tight">
              You are <strong>my whole world</strong>, but it never stopped
              there.
              <br />
              <br />
              Your family became <strong>my family</strong>.
            </span>
            <br />
            <br />
            You show up for your friends in a real way, especially by
            <strong> loving their kids like they were your own</strong>.
            <br />
            <br />
            When you are in someone’s life, <strong>things get better</strong>.
            Honestly, it feels like when you leave, things fall apart a little.
            That is how much <strong>your presence matters</strong>.
          </p>
        </div>
        <h2 className="extra-love">WE LOVE YOU!!!</h2>
        <div className="extra-collage" aria-label="Extra credit collage">
          {photos.map((src, i) => (
            <img
              key={src}
              className="extra-thumb"
              src={src}
              alt={`Extra credit photo ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="caption">Swipe down when you are ready</div>
      </div>
    </div>
  );
}
