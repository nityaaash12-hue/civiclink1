import "./AIReport.css";
import { useState } from "react";

function AIReport() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [step, setStep] = useState(0);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowResult(false);
    setStep(0); 

    setTimeout(() => setStep(1), 800);
    setTimeout(() => setStep(2), 1600);
    setTimeout(() => setStep(3), 2400);
    setTimeout(() => setStep(4), 3200);

    setTimeout(() => {
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
          placeholder="Example: There is a large pothole near the college entrance causing traffic..."
        ></textarea>

        <div className="buttons">
          <button>📷 Upload Photo</button>

          <button>📍 Detect Location</button>
        </div>

        <button
          className="analyze-btn"
          onClick={handleAnalyze}
        >
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

        {showResult && (
          <div className="ai-result">
            <h3>AI Analysis</h3>

            <div className="result-row">
              <span>Category</span>
              <strong>Road Damage</strong>
            </div>

            <div className="result-row">
              <span>Department</span>
              <strong>Public Works Department</strong>
            </div>

            <div className="result-row">
              <span>Priority</span>
              <strong>High</strong>
            </div>

            <div className="result-row">
              <span>Confidence</span>
              <strong>96%</strong>
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