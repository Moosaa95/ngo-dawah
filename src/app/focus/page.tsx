import FocusClient from '@/components/FocusClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Focus Areas & Structure | Crescent Impact Foundation',
  description: 'Explore the operational pillars of Crescent Impact Foundation (CIF): Strategy Development, Program Implementation, Capacity Building, and Data Research, along with our organizational organogram structure.',
  keywords: ['CIF Focus Areas', 'Organogram', 'Strategy Development', 'Capacity Building Nigeria', 'Research NGO'],
  openGraph: {
    title: 'Our Focus Areas & Structure | Crescent Impact Foundation',
    description: 'Explore the operational pillars of Crescent Impact Foundation (CIF): Strategy Development, Program Implementation, Capacity Building, and Data Research.',
    type: 'website',
    url: 'https://crescentimpactfoundation.org/focus',
  }
};

export default function Page() {
  return <FocusClient />;
}
