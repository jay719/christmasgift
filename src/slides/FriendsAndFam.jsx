import { useState } from "react";

export default function FriendsAndFam() {
  const [flipped, setFlipped] = useState(false);

  const onFlip = () => setFlipped((v) => !v);

  return (
    <div className="slide slide--friends">
      <div className="faf-wrap">
        <h1>Your People</h1>

        <div
          className={`faf-flip ${flipped ? "is-flipped" : ""}`}
          onClick={onFlip}
          role="button"
          tabIndex={0}
          aria-label="Flip card"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onFlip();
          }}
        >
          <div className="faf-flip-inner">
            {/* FRONT: Family */}
            <div className="faf-face faf-front">
              <div className="faf-face-top">
                <h2 className="faf-subtitle">Family</h2>
                <div className="faf-hint">
                  <span className="faf-hint-icon">↻</span>
                  Tap to flip
                </div>
              </div>

              <p className="faf-text">
                You were born into a big family that looks up to you and loves
                you hard.
              </p>

              <div className="faf-grid faf-grid--family">
                {/* 6–8 images, swap as you like */}
                <img
                  className="faf-img"
                  src="/images/fam/greatgrandpayoung.jpg"
                  alt="Family"
                  loading="lazy"
                />
                <img
                  className="faf-img"
                  src="/images/mom/momandbro.jpg"
                  alt="Family"
                  loading="lazy"
                />
                <img
                  className="faf-img"
                  src="/images/fam/momandbrea.jpg"
                  alt="Family"
                  loading="lazy"
                />
                <img
                  className="faf-img"
                  src="/images/fam/brandiandmom.jpg"
                  alt="Family"
                  loading="lazy"
                />
                <img
                  className="faf-img"
                  src="/images/mom/therandmom.jpg"
                  alt="Family"
                  loading="lazy"
                />
                <img
                  className="faf-img"
                  src="/images/fam/erybody.jpg"
                  alt="Family"
                  loading="lazy"
                />
                {/* Optional extras */}
                {/* <img className="faf-img" src="/images/mom/portrait.png" alt="Family" loading="lazy" /> */}
                {/* <img className="faf-img" src="/images/mom/portrait.png" alt="Family" loading="lazy" /> */}
              </div>
            </div>

            {/* BACK: Friends */}
            <div className="faf-face faf-back">
              <div className="faf-face-top">
                <h2 className="faf-subtitle">Friends</h2>
                <div className="faf-hint">
                  <span className="faf-hint-icon">↻</span>
                  Tap to flip
                </div>
              </div>

              <p className="faf-text">
                And you met some amazing friends along the way. Some came, some
                went, but the real ones stayed.
              </p>

              <div className="faf-grid faf-grid--friends">
                <img
                  src="/images/friends/momandshanni.jpg"
                  alt="Mom and Shanni"
                  className="faf-img"
                  loading="lazy"
                />
                <img
                  src="/images/friends/momandfriends.jpg"
                  alt="Mom with friends"
                  className="faf-img"
                  loading="lazy"
                />
                <img
                  src="/images/friends/momandfriend.jpg"
                  alt="Mom with a friend"
                  className="faf-img"
                  loading="lazy"
                />
                <img
                  src="/images/mom/momandom.jpg"
                  alt="Mom with friends"
                  className="faf-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="faf-footer-hint" aria-hidden="true">
          Tap the card to flip between Family and Friends
        </div>
      </div>
    </div>
  );
}
