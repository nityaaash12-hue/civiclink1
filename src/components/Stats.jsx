import "./Stats.css";
import {
  FileText,
  CheckCircle,
  Brain,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: <FileText size={36} />,
    number: "12,842+",
    title: "Reports Submitted",
  },
  {
    icon: <CheckCircle size={36} />,
    number: "8,521+",
    title: "Issues Resolved",
  },
  {
    icon: <Brain size={36} />,
    number: "97%",
    title: "AI Accuracy",
  },
  {
    icon: <Users size={36} />,
    number: "156+",
    title: "Active Volunteers",
  },
];

function Stats() {
  return (
    <section className="stats">
      <h2>Community Impact</h2>

      <p className="stats-subtitle">
        Together we're building cleaner, safer, and smarter cities.
      </p>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;