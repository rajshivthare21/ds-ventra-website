'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
  const [open,setOpen]=useState(false);
  const links=[['Home','/'],['About Us','/about'],['Services','/services'],['Industries','/industries'],['Projects','/projects'],['Resources','/resources'],['Contact Us','/contact']];
  return <>
    <div className="topbar"><div>📍 Plot No. 18, Survey No. 112/1, Near Datta Mandir, Khatav, Satara, Maharashtra – 415505</div><div>☎ +91 70385 95900 &nbsp; | &nbsp; +91 98508 95900 &nbsp; • &nbsp; ✉ dsventra@gmail.com</div></div>
    <header className="header"><Link href="/" className="brand"><span className="brandmark">◒</span><span><b><i>DS</i> VENTRA</b><small>ENVIRONMENT&nbsp; | &nbsp;COMPLIANCE&nbsp; | &nbsp;SUSTAINABILITY</small><em>Environment Consultancy & Engineering Solutions</em></span></Link>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button>
      <nav className={open?'nav open':'nav'}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="quote" href="/contact">Get a Quote →</Link></nav>
    </header>
  </>;
}
