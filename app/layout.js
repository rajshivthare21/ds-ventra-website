import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'DS VENTRA | Environment | Compliance | Sustainability',
  description: 'Environmental consultancy and engineering solutions for a compliant and sustainable tomorrow.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
