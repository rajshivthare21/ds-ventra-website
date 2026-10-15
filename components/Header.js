'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['Home', '/'], ['About Us', '/about'], ['Services', '/services'],
  ['Industries', '/industries'], ['Projects', '/projects'],
  ['Resources', '/resources'], ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span><span className="topbar-dot" /> Environment · Compliance · Sustainability</span>
          <div className="topbar-contact"><a href="tel:+919075881115">+91 90758 81115</a><span className="topbar-separator">/</span><a href="mailto:dsventra@gmail.com">dsventra@gmail.com</a></div>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="" className="site-logo" /><span className="header-brand-copy"><strong>DS VENTRA</strong><small>ENVIRONMENT | COMPLIANCE | SUSTAINABILITY</small></span>
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}><span /><span /><span /></button>
          <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="header-cta" href="/contact" onClick={() => setOpen(false)}>Get a quote <span>↗</span></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
