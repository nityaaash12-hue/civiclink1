import "./WhyCivic.css";
import {
  Brain,
  MapPinned,
  Clock3,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={40} />,
    title: "AI-Powered Analysis",
    desc: "Our AI automatically identifies the issue, assigns the correct department, and prioritizes urgent reports.",
  },
  {
    icon: <MapPinned size={40} />,
    title: "Smart Location Detection",
    desc: "Detect your location instantly or choose it manually for accurate reporting.",
  },
  {
    icon: <Clock3 size={40} />,
    title: "Real-Time Tracking",
    desc: "Track every report from submission to resolution with complete transparency.",
  },
  {
    icon: <Trophy size={40} />,
    title: "Community Rewards",
    desc: "Earn points and badges by helping make your city cleaner and safer.",
  },
];

function WhyCivic() {
  return (
    <section className="why-civic">
      <h2>Why Choose CivicLink?</h2>

      <p className="why-subtitle">
        Making civic reporting faster, smarter, and more transparent with the
        power of AI.
      </p>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyCivic;