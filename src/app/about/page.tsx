import AboutClient from '@/components/AboutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Crescent Impact Foundation',
  description: 'Learn about the mission, vision, core values, and journey of Crescent Impact Foundation (CIF) in Nigeria, dedicated to human and capital development.',
  keywords: [
    'About CIF', 
    'Crescent Impact Foundation', 
    'NGO Nigeria', 
    'Human development Nigeria', 
    'Capital development', 
    'NGO Abuja', 
    'Imam Shakirullah Badewa'
  ],
  openGraph: {
    title: 'About Us | Crescent Impact Foundation',
    description: 'Learn about the mission, vision, core values, and journey of Crescent Impact Foundation (CIF) in Nigeria.',
    type: 'website',
    url: 'https://crescentimpactfoundation.org/about',
  }
};

export default function Page() {
  return <AboutClient />;
}
