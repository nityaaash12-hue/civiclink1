import "./CommunityActivity.css";

const reports = [
  {
    title: "Pothole near XYZ College",
    status: "In Progress",
    time: "2h ago",
    color: "#f59e0b",
  },
  {
    title: "Streetlight Failure",
    status: "Resolved",
    time: "Yesterday",
    color: "#22c55e",
  },
  {
    title: "Overflowing Garbage",
    status: "Assigned",
    time: "5 min ago",
    color: "#38bdf8",
  },
];

function CommunityActivity() {
  return (
    <section className="activity">
      <div className="activity-header">
        <h2>Community Activity</h2>

        <p>
          Watch reports move from submission to resolution as citizens help
          improve their city.
        </p>
      </div>

      <div className="activity-list">
        {reports.map((report, index) => (
          <div className="activity-card" key={index}>
            <div className="activity-left">
              <h3>📍 {report.title}</h3>

              <p>Reported by a citizen</p>
            </div>

            <div className="activity-right">
              <span
                className="status"
                style={{ background: report.color }}
              ></span>

              <span>{report.status}</span>

              <small>{report.time}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityActivity;