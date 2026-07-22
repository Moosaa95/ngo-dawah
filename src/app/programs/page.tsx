import ProgramsClient from '@/components/ProgramsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs & SDG Impact | Crescent Impact Foundation',
  description: 'Learn about the 14 key programs of Crescent Impact Foundation (CIF) aligning with UN Sustainable Development Goals to empower community life and agriculture in Nigeria.',
  keywords: [
    'CIF Programs', 
    'UN SDGs', 
    'Sustainable Development Goals', 
    'Community empowerment Nigeria', 
    'Agriculture development', 
    'Public health campaigns',
    'Drug abuse campaign'
  ],
  openGraph: {
    title: 'Our Programs & SDG Impact | Crescent Impact Foundation',
    description: 'Learn about the 14 key programs of Crescent Impact Foundation (CIF) aligning with UN Sustainable Development Goals.',
    type: 'website',
    url: 'https://crescentimpactfoundation.org/programs',
  }
};

export default function Page() {
  return <ProgramsClient />;
}
