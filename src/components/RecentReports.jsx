import { PiWallDuotone } from "react-icons/pi";
import "./RecentReports.css";
import {
  Trash2,
  Construction,
  Lamp,
  MapPin,
} from "lucide-react";


const reports = [
  {
    icon: <Trash2 size={26} />,
    title: "Garbage Overflow",
    location: "Sitabuldi, Nagpur",
    time: "12 mins ago",
    status: "In Progress",
    statusClass: "progress",
  },
  {
    icon: <Lamp size={26} />,
    title: "Street Light Not Working",
    location: "Kalwa, Thane",
    time: "1 hour ago",
    status: "Resolved",
    statusClass: "resolved",
  },
  {
    icon: <Construction size={26} />,
    title: "Large Pothole",
    location: "College Road, Nagpur",
    time: "3 hours ago",
    status: "Pending",
    statusClass: "pending",
  },
];

function RecentReports() {
  return (
    <section className="recent-reports">
      <h2>Recent Community Reports</h2>

      <p className="recent-subtitle">
        Stay updated with issues recently reported by citizens.
      </p>

      <div className="reports-grid">
        {reports.map((report, index) => (
          <div className="report-card" key={index}>

            <div className="report-top">
              <div className="report-icon">
                {report.icon}
              </div>

              <span className={`status ${report.statusClass}`}>
                {report.status}
              </span>
            </div>

            <h3>{report.title}</h3>

            <p className="location">
              <MapPin size={15} />
              {report.location}
            </p>

            <p className="time">
              Reported {report.time}
            </p>

          </div>
        ))}
      </div>

      <button className="view-btn">
        View All Reports →
      </button>
    </section>
  );
}

export default RecentReports;