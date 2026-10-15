
const message = encodeURIComponent(
  "Hello DS VENTRA, I would like to enquire about your environmental consultancy services."
);

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-float">
      <details className="whatsapp-menu">
        <summary aria-label="Contact DS VENTRA on WhatsApp">
          <svg
            viewBox="0 0 32 32"
            width="29"
            height="29"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 .8A15 15 0 0 0 3.1 23.5L1 31l7.7-2A15.1 15.1 0 1 0 16 .8Zm0 27.4a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.3 12.3 0 1 1 16 28.2Zm6.8-9.2c-.4-.2-2.2-1.1-2.6-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.1s1.4 3.6 1.6 3.9c.2.2 2.8 4.3 6.8 6 .9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
          </svg>
        </summary>

        <div className="whatsapp-options">
          <p>Chat with DS VENTRA</p>

          <a
            href={`https://wa.me/919075881115?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 1
            <span>+91 90758 81115</span>
          </a>

          <a
            href={`https://wa.me/919270281115?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 2
            <span>+91 92702 81115</span>
          </a>
        </div>
      </details>
    </div>
  );
}
