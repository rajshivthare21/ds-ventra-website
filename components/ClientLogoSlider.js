'use client';

const clients = [
  { name: 'Club Mahindra', file: 'club-mahindra.png', style: 'mahindra' },
  { name: 'ibis', file: 'ibis.png', style: 'ibis' },
  { name: 'Radisson', file: 'radisson.png', style: 'radisson' },
  { name: 'Malas', file: 'malas.png', style: 'malas' },
  { name: 'Satara Hospital', file: 'satara-hospital.png', style: 'hospital' },
  { name: 'Chaitanya Hospital · Baramati', file: 'chaitanya-hospital.png', style: 'hospital' },
  { name: 'Outpost Resort · Alibag', file: 'outpost-resort.png', style: 'resort' },
  { name: 'Synergy Hospital · Baramati', file: 'synergy-hospital.png', style: 'hospital' },
  { name: 'Karma Resort · Tapola', file: 'karma-resort.png', style: 'resort' },
  { name: 'Saj Resort · Mahabaleshwar', file: 'saj-resort.png', style: 'resort' },
  { name: 'Tropicana Resort · Alibag', file: 'tropicana-resort.png', style: 'resort' },
  { name: 'Rasino Herbs · Miraj', file: 'rasino-herbs.png', style: 'herbs' },
];

function LogoCard({ client }) {
  return (
    <div className="client-logo-card" title={client.name}>
      <img
        src={`/clients/${client.file}`}
        alt={client.name}
        onError={(event) => { event.currentTarget.style.display = 'none'; }}
      />
      <span className={`client-logo-fallback ${client.style}`}>{client.name}</span>
    </div>
  );
}

export default function ClientLogoSlider() {
  const columns = [
    { items: clients.slice(0, 6), direction: 'scroll-up', duration: '34s' },
    { items: clients.slice(6, 12), direction: 'scroll-down', duration: '38s' },
    { items: [...clients.slice(3, 9)], direction: 'scroll-up', duration: '36s' },
    { items: [...clients.slice(6, 12)], direction: 'scroll-down', duration: '32s' },
  ];

  return (
    <section className="client-section section-pad" aria-labelledby="clients-title">
      <div className="client-slider-layout">
        <div className="client-intro">
          <span className="eyebrow">TRUST BUILT THROUGH SERVICE</span>
          <h2 id="clients-title">Relationships that move us <span>forward.</span></h2>
          <p>We value every opportunity to support businesses and organizations with practical environmental, compliance and sustainability solutions.</p>
          <p className="client-note">A selection of organizations and sectors represented in our client network.</p>
          <a className="button button-dark" href="/contact">Work with us <span>↗</span></a>
        </div>
        <div className="client-logo-grid" aria-label="Client logo slider">
          {columns.map((column, index) => (
            <div className="client-logo-column" key={index}>
              <div className={`client-logo-track ${column.direction}`} style={{ '--scroll-duration': column.duration }}>
                {[0, 1].map((copy) => (
                  <div className="client-logo-set" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                    {column.items.map((client, clientIndex) => (
                      <LogoCard key={`${copy}-${client.name}-${clientIndex}`} client={client} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
