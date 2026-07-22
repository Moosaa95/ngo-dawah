import ContactClient from '@/components/ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Zonal Offices | Crescent Impact Foundation',
  description: 'Get in touch with Crescent Impact Foundation (CIF). Locate our National Headquarters and new Branch Office in Kubwa, Abuja, or find our zonal coverage offices across Nigeria.',
  keywords: ['Contact CIF', 'Branch Office Kubwa', 'NGO Headquarters Abuja', 'Zonal offices Nigeria', 'Email CIF'],
  openGraph: {
    title: 'Contact Us & Zonal Offices | Crescent Impact Foundation',
    description: 'Get in touch with Crescent Impact Foundation (CIF). Locate our National Headquarters and new Branch Office in Kubwa, Abuja.',
    type: 'website',
    url: 'https://crescentimpactfoundation.org/contact',
  }
};

export default function Page() {
  return <ContactClient />;
}
