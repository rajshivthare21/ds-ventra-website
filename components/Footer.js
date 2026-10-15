import Link from 'next/link';

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand">
        <Link href="/" className="brand footer-brand-link">
          <img src="/logo.png" alt="" className="footer-site-logo" />
          <span className="brand-copy"><strong>DS VENTRA</strong><small>ENVIRONMENT | COMPLIANCE | SUSTAINABILITY</small></span>
        </Link>
        <p>Environmental consultancy and engineering solutions that help organizations work responsibly and plan for a more sustainable future.</p>
      </div>
      <div className="footer-column"><h3>Explore</h3><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/industries">Industries</Link><Link href="/projects">Projects</Link><Link href="/resources">Resources</Link></div>
      <div className="footer-column"><h3>Contact</h3><p>Building No. 445, Ganpati Mal Road,<br/>Near Ganpati Temple, Kalambhe,<br/>Satara, Maharashtra – 415514</p><a href="tel:+919075881115">+91 90758 81115</a><a href="tel:+919270281115">+91 92702 81115</a><a href="mailto:dsventra@gmail.com">dsventra@gmail.com</a></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} DS VENTRA. All rights reserved.</p><p>Environment <span>·</span> Compliance <span>·</span> Sustainability</p></div>
  </footer>;
}
