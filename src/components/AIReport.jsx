import "./AIReport.css";
import { useState } from "react";

function AIReport() {
  const [report, setReport] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!report.trim()) {
      alert("Please describe the issue first.");
      return;
    }

    setIsAnalyzing(true);
    setShowResult(false);
    setStep(0);

    setTimeout(() => setStep(1), 800);
    setTimeout(() => setStep(2), 1600);
    setTimeout(() => setStep(3), 2400);
    setTimeout(() => setStep(4), 3200);

    const text = report.toLowerCase();

    let analysis = {
      category: "Other",
      department: "Municipal Office",
      priority: "Medium",
      confidence: "88%",
    };

    if (
      text.includes("pothole") ||
      text.includes("road") ||
      text.includes("crack") ||
      text.includes("bridge")
    ) {
      analysis = {
        category: "Road Damage",
        department: "Public Works Department",
        priority: "High",
        confidence: "97%",
      };
    } else if (
      text.includes("street light") ||
      text.includes("light") ||
      text.includes("lamp") ||
      text.includes("electric")
    ) {
      analysis = {
        category: "Street Lighting",
        department: "Electricity Department",
        priority: "Medium",
        confidence: "96%",
      };
    } else if (
      text.includes("garbage") ||
      text.includes("trash") ||
      text.includes("waste") ||
      text.includes("dustbin")
    ) {
      analysis = {
        category: "Waste Management",
        department: "Sanitation Department",
        priority: "High",
        confidence: "95%",
      };
    } else if (
      text.includes("water") ||
      text.includes("pipe") ||
      text.includes("leak") ||
      text.includes("drain")
    ) {
      analysis = {
        category: "Water Supply",
        department: "Water Department",
        priority: "High",
        confidence: "94%",
      };
    } else if (
      text.includes("tree") ||
      text.includes("park") ||
      text.includes("grass")
    ) {
      analysis = {
        category: "Parks & Environment",
        department: "Parks Department",
        priority: "Medium",
        confidence: "93%",
      };
    } else if (
      text.includes("traffic") ||
      text.includes("signal") ||
      text.includes("crossing")
    ) {
      analysis = {
        category: "Traffic Management",
        department: "Traffic Police",
        priority: "High",
        confidence: "95%",
      };
    } else if (
      text.includes("sewage") ||
      text.includes("manhole") ||
      text.includes("sewer")
    ) {
      analysis = {
        category: "Sewage",
        department: "Sewage Department",
        priority: "High",
        confidence: "94%",
      };
    }

    setTimeout(() => {
      setResult(analysis);
      setIsAnalyzing(false);
      setShowResult(true);
    }, 4000);
  };

  return (
    <section className="ai-report">
      <div className="report-box">
        <h2>Try CivicLink</h2>

        <p>
          Describe an issue and let CivicLink identify the correct
          department automatically.
        </p>

        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder="Example: There is a large pothole near the college entrance causing traffic..."
        />

        <div className="buttons">
          <button>📷 Upload Photo</button>
          <button>📍 Detect Location</button>
        </div>

        <button className="analyze-btn" onClick={handleAnalyze}>
          Analyze with AI
        </button>

        {isAnalyzing && (
          <div className="analyzing">
            <h3>🤖 Analyzing your report...</h3>

            <p>{step >= 1 ? "✅" : "⏳"} Reading description...</p>
            <p>{step >= 2 ? "✅" : "⏳"} Detecting issue...</p>
            <p>{step >= 3 ? "✅" : "⏳"} Finding department...</p>
            <p>{step >= 4 ? "✅" : "⏳"} Calculating priority...</p>
          </div>
        )}

        {showResult && result && (
          <div className="ai-result">
            <h3>AI Analysis</h3>

            <div className="result-row">
              <span>Category</span>
              <strong>{result.category}</strong>
            </div>

            <div className="result-row">
              <span>Department</span>
              <strong>{result.department}</strong>
            </div>

            <div className="result-row">
              <span>Priority</span>
              <strong>{result.priority}</strong>
            </div>

            <div className="result-row">
              <span>Confidence</span>
              <strong>{result.confidence}</strong>
            </div>

            <button className="submit-btn">
              Submit Report
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default AIReport;