export default function IntroSlide() {
  return (
    <div className="slide">
      <div className="slide-text-wrap">
        <h1>A Tribute To The Best Mom Ever</h1>

        <div className="intro-image-stack">
          {/* Crown */}
          <img
            className="intro-crown"
            src="images/misc/crown.png"
            alt="Crown"
          />

          {/* Mom */}
          <img
            className="intro-mom"
            src="images/mom/momchristmasportrait.jpg"
            alt="Mom portrait"
          />
        </div>

        <p>This is just a small way to say thank you for everything.</p>
      </div>
    </div>
  );
}
