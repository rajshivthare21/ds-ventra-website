'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
  const [open,setOpen]=useState(false);
  const links=[['Home','/'],['About Us','/about'],['Services','/services'],['Industries','/industries'],['Projects','/projects'],['Resources','/resources'],['Contact Us','/contact']];
  return <>
    <div className="topbar"><div>📍 Plot No. 18, Survey No. 112/1, Near Datta Mandir, Khatav, Satara, Maharashtra – 415505</div><div>☎ +91 90758 81115 &nbsp; | &nbsp; +91 92702 81115 &nbsp; • &nbsp; ✉ dsventra@gmail.com</div></div>
    <header className="header"><Link href="/" className="brand"><img
  src="/logo.png"
  alt="DS VENTRA"
  className="site-logo"
/><span><b><i>DS</i> VENTRA</b><small>ENVIRONMENT&nbsp; | &nbsp;COMPLIANCE&nbsp; | &nbsp;SUSTAINABILITY</small><em>Environment Consultancy & Engineering Solutions</em></span></Link>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button>
      <nav className={open?'nav open':'nav'}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="quote" href="/contact">Get a Quote →</Link></nav>
    </header>
  </>;
}
