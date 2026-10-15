import Link from 'next/link';
import ClientLogoSlider from '../components/ClientLogoSlider';

const services = [
  ['01', 'Environmental Consultancy', 'Clear, practical guidance to help plan and manage environmental responsibilities.'],
  ['02', 'Environmental Compliance', 'Support for statutory requirements, documentation, reviews and compliance planning.'],
  ['03', 'MPCB Consent (CTE / CTO)', 'Assistance with Consent to Establish and Consent to Operate processes.'],
  ['04', 'CGWA & Groundwater', 'Guidance for groundwater permission, NOC requirements and related compliance.'],
  ['05', 'STP / ETP / WTP / ZLD', 'Consultancy for water and wastewater treatment requirements and solutions.'],
  ['06', 'EIA / EMP & Environment Audit', 'Assessment, management planning, audits and improvement recommendations.'],
];
const industries = [
  ['Manufacturing', 'Environmental approvals, audits and ongoing compliance support.'],
  ['Chemical & Pharma', 'Documentation and environmental management for complex operations.'],
  ['Hospitality & Resorts', 'Support for environmental requirements across hotels and resorts.'],
  ['Healthcare', 'Practical assistance with facility-related environmental compliance.'],
  ['Infrastructure & Real Estate', 'Environmental planning and approval-related support.'],
  ['Food, Beverage & Commercial', 'Compliance guidance for day-to-day business operations.'],
];

function LeafIllustration() {
  return <div className="hero-art" aria-label="Abstract green leaf illustration" role="img">
    <div className="art-ring ring-a"/><div className="art-ring ring-b"/>
    <div className="art-glow" />
    <svg className="hero-leaf-svg" viewBox="0 0 300 300" fill="none" aria-hidden="true">
      <path d="M65 221C70 131 128 59 235 46C244 145 202 231 111 246C91 249 76 240 65 221Z" fill="url(#leafFill)" stroke="#c8e49a" strokeWidth="2"/>
      <path d="M77 236C116 173 161 127 220 73" stroke="#e5f4c6" strokeWidth="3" strokeLinecap="round"/>
      <path d="M122 171L119 124M151 141L149 102M157 139L203 143M133 159L91 157M177 117L174 87M176 118L216 112M105 199L76 186M105 199L148 205" stroke="#d4e9ad" strokeWidth="2" strokeLinecap="round"/>
      <defs><linearGradient id="leafFill" x1="70" y1="230" x2="230" y2="45" gradientUnits="userSpaceOnUse"><stop stopColor="#507e4c"/><stop offset="1" stopColor="#b6d77c"/></linearGradient></defs>
    </svg>
    <div className="art-label label-top"><span className="art-label-icon">↗</span><div><b>Compliance-first</b><small>Responsible decisions</small></div></div>
    <div className="art-label label-bottom"><span className="art-label-icon">✳</span><div><b>Sustainability-led</b><small>Long-term thinking</small></div></div>
    <span className="art-caption">BETTER SYSTEMS. HEALTHIER TOMORROWS.</span>
  </div>;
}

export default function Home() {
  return <main>
    <section className="hero-section">
      <div className="hero-glow hero-glow-one"/><div className="hero-glow hero-glow-two"/>
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="status-dot"/> ENVIRONMENTAL CONSULTANCY & ENGINEERING</div>
          <h1>Helping business grow.<br/><span>Keeping nature in mind.</span></h1>
          <p className="hero-description">Practical environmental, compliance and engineering solutions to help your organization move forward with confidence and responsibility.</p>
          <div className="hero-actions"><Link className="button button-lime" href="/services">Explore our services <span>↗</span></Link><Link className="button button-outline-light" href="/contact">Talk to our team</Link></div>
          <div className="hero-note"><span className="hero-note-line"/> SUPPORTING RESPONSIBLE OPERATIONS ACROSS INDUSTRIES</div>
        </div>
        <LeafIllustration />
      </div>
      <div className="hero-bottom"><span>ENVIRONMENT</span><i/><span>COMPLIANCE</span><i/><span>SUSTAINABILITY</span><i/><span>ENGINEERING SOLUTIONS</span></div>
    </section>

    <section className="intro-section section-pad">
      <div className="intro-label"><span className="eyebrow">WHO WE ARE</span><span className="intro-rule"/></div>
      <div className="intro-content"><h2>Environmental expertise for a <span>changing world.</span></h2><div className="intro-description"><p>DS VENTRA is an environmental consultancy and engineering solutions company focused on helping organizations navigate environmental responsibilities with clarity and practical support.</p><p>From compliance and approvals to water and wastewater solutions, we work to make complex requirements easier to understand and manage.</p><Link className="text-link" href="/about">Get to know DS VENTRA <span>↗</span></Link></div></div>
    </section>

    <section className="services-section section-pad">
      <div className="section-heading section-heading-row"><div><span className="eyebrow">HOW WE CAN HELP</span><h2>Solutions for your environmental priorities.</h2></div><Link className="text-link" href="/services">View all services <span>↗</span></Link></div>
      <div className="services-grid">{services.map(([number, title, text]) => <Link href="/services" className="service-card" key={number}><div className="service-card-top"><span className="service-number">{number}</span><span className="service-icon">↗</span></div><h3>{title}</h3><p>{text}</p><span className="service-arrow">Explore service&nbsp; →</span></Link>)}</div>
    </section>

    <section className="approach-section section-pad">
      <div className="approach-copy"><span className="eyebrow eyebrow-light">THE DS VENTRA APPROACH</span><h2>Good compliance starts with <span>clear thinking.</span></h2><p>Environmental requirements can be complex. Our focus is to help you understand the path ahead, organize the right information and make practical decisions for your site or project.</p><Link className="button button-lime" href="/contact">Discuss your requirement <span>↗</span></Link></div>
      <div className="benefit-list"><div className="benefit-item"><span className="benefit-number">01</span><div><h3>Understand the requirement</h3><p>Clarify the scope, process and documentation relevant to your need.</p></div><span className="benefit-check">↗</span></div><div className="benefit-item"><span className="benefit-number">02</span><div><h3>Plan practical next steps</h3><p>Build a clear approach around approvals, compliance or engineering support.</p></div><span className="benefit-check">↗</span></div><div className="benefit-item"><span className="benefit-number">03</span><div><h3>Support responsible progress</h3><p>Keep environmental considerations part of your business decisions.</p></div><span className="benefit-check">↗</span></div></div>
    </section>

    <section className="industries-section section-pad"><div className="section-heading"><span className="eyebrow">INDUSTRIES WE SERVE</span><h2>Different sectors. Shared responsibility.</h2><p>Our services can be adapted to the needs, scale and environmental requirements of different types of organizations.</p></div><div className="industries-grid">{industries.map(([title, text], i) => <Link className="industry-card" href="/industries" key={title}><span className="industry-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><span className="industry-arrow">↗</span></Link>)}</div><p className="industry-note">Have a different requirement? <Link href="/contact">Tell us about it →</Link></p></section>

    <ClientLogoSlider />

    <section className="cta-section"><div className="cta-inner"><div><span className="eyebrow eyebrow-light">LET'S START A CONVERSATION</span><h2>Let’s make your next step <span>more sustainable.</span></h2><p>Share your environmental or compliance requirement with DS VENTRA.</p></div><Link className="button button-lime" href="/contact">Contact DS VENTRA <span>↗</span></Link></div></section>
  </main>;
}
