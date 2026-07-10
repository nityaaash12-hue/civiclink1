import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how">
      <div className="how-header">
        <h2>From Report to Resolution</h2>

        <p>
          No need to know the right department. Just report the issue—we'll
          handle the rest.
        </p>
      </div>

      <div className="timeline">

        <div className="timeline-line"></div>

        <div className="timeline-step">
          <div className="dot"></div>

          <h3>Report Issue</h3>

          <p>
            Describe the issue naturally and upload a photo.
          </p>
        </div>

        <div className="timeline-step">
          <div className="dot"></div>

          <h3>AI Analysis</h3>

          <p>
            CivicLink identifies the issue, priority, and responsible department.
          </p>
        </div>

        <div className="timeline-step">
          <div className="dot"></div>

          <h3>Routed to Authority</h3>

          <p>
            The complaint is forwarded automatically and you can track its progress.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;  