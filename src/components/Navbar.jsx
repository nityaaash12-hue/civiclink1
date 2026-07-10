import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        📍 <span>CivicLink</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Reports</li>
        <li>Leaderboard</li>
        <li>About</li>
      </ul>

      <button className="report-btn">
        Report Issue
      </button>
    </nav>
  );
}

export default Navbar;