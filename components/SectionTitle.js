export default function SectionTitle({eyebrow,title,text}){return <div className="sectiontitle">{eyebrow&&<span>{eyebrow}</span>}<h2>{title}</h2>{text&&<p>{text}</p>}</div>}
