import Link from 'next/link';
export default function Footer(){return <footer><div className="footergrid"><div><div className="footerbrand"><img
  src="/logo.png"
  alt="DS VENTRA"
  className="site-logo"
/><b><i>DS</i> VENTRA</b></div><p>Environment | Compliance | Sustainability</p><p className="muted">Practical environmental consultancy and engineering solutions for responsible growth.</p></div><div><h4>Quick Links</h4><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div><div><h4>Contact Us</h4><p>Plot No. 18, Survey No. 112/1,<br/>Near Datta Mandir, Khatav,<br/>Satara, Maharashtra – 415505</p><p>+91 90758 81115<br/>+91 92702 81115<br/>dsventra@gmail.com</p></div></div><div className="copyright">© 2026 DS VENTRA. All rights reserved. <span>Environment &nbsp;|&nbsp; Compliance &nbsp;|&nbsp; Sustainability</span></div></footer>}
