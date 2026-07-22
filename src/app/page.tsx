import HomeClient from '@/components/HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crescent Impact Foundation | Human & Capital Development Nigeria',
  description: 'Crescent Impact Foundation (CIF) is a Nigerian NGO advancing public health, primary education, community security, and sustainable agriculture.',
  keywords: ['Crescent Impact Foundation', 'CIF', 'NGO Nigeria', 'Human development', 'Capital development Nigeria', 'Health outreach', 'Imam Badewa'],
  openGraph: {
    title: 'Crescent Impact Foundation | Human & Capital Development Nigeria',
    description: 'Advancing public health, primary education, community security, and sustainable agriculture in Nigeria.',
    type: 'website',
    url: 'https://crescentimpactfoundation.org',
  }
};

export default function Page() {
  return <HomeClient />;
}
