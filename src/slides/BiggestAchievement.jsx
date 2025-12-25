export default function BiggestAchievement() {
  return (
    <div className="slide slide--achievement">
      <div className="ach-wrap">
        <h1>Biggest achievement?</h1>

        <p className="ach-text">
          Okay… National Guard, Bachelor’s, almost a decade at work… cool cool.
          But your biggest achievement by far is below.
        </p>

        <div className="ach-two">
          <div className="ach-card">
            <img
              className="ach-img"
              src="/images/kids/me.jpg"
              alt="Me"
              loading="lazy"
            />
            <div className="ach-cap">Me</div>
          </div>

          <div className="ach-plus">+</div>

          <div className="ach-card">
            <img
              className="ach-img"
              src="/images/kids/devin.jpg"
              alt="Devin"
              loading="lazy"
            />
            <div className="ach-cap">Devin</div>
          </div>
        </div>

        <p className="ach-foot">
          Raising us deserves its own medal. Probably two.
        </p>
      </div>
    </div>
  );
}
