import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-col">
            <span className="footer-col-label">connect</span>
            <div className="footer-links">
              <a href="mailto:hi@rootgin.xyz">email</a>
              <a href="https://github.com/RootGin" target="_blank" rel="noopener noreferrer">
                github
              </a>
            </div>
          </div>
          <div className="footer-col">
            <span className="footer-col-label">explore</span>
            <div className="footer-explore-links">
              <Link href="/build/">build</Link>
              <Link href="/now/">now</Link>
              <Link href="/uses/">uses</Link>
            </div>
          </div>
        </div>
        <div className="footer-credit">
          <span>
            crafted by <span className="c-accent">Gin</span>
          </span>
          <span className="footer-year">2026</span>
        </div>
      </div>
    </footer>
  );
}