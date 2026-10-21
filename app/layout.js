import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';


export const metadata = {
  metadataBase: new URL("https://dsventra.com"),

  title: "DS VENTRA | Environmental Consultancy & Compliance",

  description:
    "DS VENTRA provides environmental consultancy, engineering, regulatory compliance and sustainability solutions in Maharashtra, India.",

  applicationName: "DS VENTRA",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DS VENTRA | Environmental Consultancy & Compliance",
    description:
      "Environmental consultancy, engineering, compliance and sustainability solutions in Maharashtra, India.",
    url: "https://dsventra.com/",
    siteName: "DS VENTRA",
    type: "website",
  },
};

function WebsiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DS VENTRA",
    alternateName: "dsventra",
    url: "https://dsventra.com/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WebsiteStructuredData />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


