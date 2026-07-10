import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Making Cities
          <span> Smarter.</span>
          <br />
          One Report at a Time.
        </h1>

        <p>
          Report potholes, garbage, streetlight failures and more.
          Track progress and help build a better city together.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Report an Issue
          </button>

          <button className="secondary-btn">
            Explore Reports
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;