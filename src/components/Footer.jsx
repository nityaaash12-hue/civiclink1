import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">

        <div className="Footer-brand">
          <h2>CivicLink</h2>
          <p>
            Making communities smarter, one report at a time.
          </p>
        </div>

        <div className="Footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/report">Report Issue</a>
          <a href="/ai">AI Assistant</a>
          <a href="/about">About</a>
        </div>

        <div className="Footer-contact">
          <h3>Connect</h3>
          <p>Email: civiclink@example.com</p>
          <p>© 2026 CivicLink</p>
        </div>

      </div>

      <div className="Footer-bottom">
        <p>Built with ❤️ for better communities</p>
      </div>
    </footer>
  );
}

export default Footer;