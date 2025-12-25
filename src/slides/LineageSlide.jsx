import FloatingHearts from "../components/FloatingHearts";

export default function LineageSlide() {
  return (
    <div className="slide">
      {/* hearts trigger ONCE when slide mounts */}
      <FloatingHearts />

      <h1>How did we get here?</h1>
      <p style={{ marginTop: "14px" }}>
        Well luckily Nana and buddy who shall not be named met and made you!
      </p>

      <div className="lineage">
        <div className="lineage-card">
          <img
            className="lineage-img"
            src="/images/fam/granp.jpg"
            alt="Grandparents"
          />
          <div className="caption">Nana & Grandpa</div>
        </div>

        <div className="lineage-arrow">=</div>

        <div className="lineage-card">
          <div className="lin-images-row">
            <img
              className="lineage-img"
              src="/images/mom/mombaby.jpg"
              alt="Mom as a baby"
            />
            <img
              className="lineage-img"
              src="/images/mom/momteen.jpg"
              alt="Mom as a teen"
            />
            <img
              className="lineage-img"
              src="/images/mom/momandnana.jpg"
              alt="Mom and nana"
            />
            <img
              className="lineage-img"
              src="/images/mom/momandnanacolloge.jpg"
              alt="Mom and nana collage"
            />
          </div>
          <div className="caption">You</div>
        </div>
      </div>
    </div>
  );
}
