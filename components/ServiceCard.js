import Link from 'next/link';
export default function ServiceCard({icon,title,text}){return <article className="servicecard"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p><Link href="/contact">Discuss this service →</Link></article>}
