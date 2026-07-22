import TeamClient from '@/components/TeamClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Leadership Team | Crescent Impact Foundation',
  description: 'Meet the Board of Trustees, Management, and Technical leads of Crescent Impact Foundation (CIF) driving human and capital development in Nigeria.',
  keywords: ['CIF Board of Trustees', 'Mustapha K. Adisa', 'Imam Shakirullah Badewa', 'NGO leadership Nigeria', 'Abiola Asamu'],
  openGraph: {
    title: 'Our Leadership Team | Crescent Impact Foundation',
    description: 'Meet the Board of Trustees, Management, and Technical leads of Crescent Impact Foundation (CIF).',
    type: 'website',
    url: 'https://crescentimpactfoundation.org/team',
  }
};

export default function Page() {
  return <TeamClient />;
}
