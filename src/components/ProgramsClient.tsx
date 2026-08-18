'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface ProgramImage {
  file: string;
  use: string;
  description: string;
}

interface Program {
  id: string;
  title: string;
  slug: string;
  summary: string;
  context_note: string | null;
  images: ProgramImage[];
  sdgs: number[];
  icon: string;
}

/* ─── CIF Programme Data ─────────────────────────────────────────────────── */
const programmes: Program[] = [
  {
    id: 'health',
    title: 'Health',
    slug: 'health',
    summary:
      "CIF's health programme focuses on closing the gap between communities and basic healthcare services. This includes organizing free or subsidized medical outreaches, health screenings, immunization support, maternal and child health awareness, and preventive care education - often in underserved and rural areas where clinics are scarce or costly. The goal is not just treatment but prevention: teaching hygiene practices, nutrition, and early disease detection so families avoid preventable illness altogether.",
    context_note:
      "These images document CIF's 2024 World AIDS Day community health outreach (HIV Testing Services), run in collaboration with the National Agency for the Control of AIDS (NACA), Heartland Alliance, the Institute of Human Virology Nigeria, and KNCV Nigeria, across outreach sites in Northern and Eastern Nigeria.",
    sdgs: [3, 6],
    icon: '🏥',
    images: [
      { file: 'health-01-banner-tent.jpeg', use: 'hero', description: 'NACA/CIF World AIDS Day banner at outreach tent, team seated at registration table' },
      { file: 'health-02-bp-check-tent.jpeg', use: 'gallery', description: 'Blood pressure check being administered under tent' },
      { file: 'health-03-bp-check-closeup.jpeg', use: 'gallery', description: 'Close-up of blood pressure screening' },
      { file: 'health-04-counseling-table.jpeg', use: 'gallery', description: 'Health worker counseling a community member at a table' },
      { file: 'health-05-team-group-banner.jpeg', use: 'team', description: 'CIF team group photo in front of outreach banner' },
      { file: 'health-06-hiv-finger-prick-test.jpeg', use: 'feature', description: 'HIV testing - finger-prick sample collection' },
      { file: 'health-07-condom-distribution-registration.jpeg', use: 'gallery', description: 'Condom distribution and registration at community outreach' },
      { file: 'health-08-bp-check-family-watching.jpeg', use: 'gallery', description: 'Blood pressure check with family members observing' },
      { file: 'health-09-testing-registration-table.jpeg', use: 'gallery', description: 'Registration and paperwork at HIV testing table' },
      { file: 'health-10-condom-distribution-table.jpeg', use: 'gallery', description: 'One-on-one condom distribution and counseling' },
      { file: 'health-11-partner-handshake-banner.jpeg', use: 'partnerships', description: 'Partner handshake photo in front of NACA/CIF banner' },
      { file: 'health-14-team-group-tent.jpeg', use: 'team', description: 'Team group photo under outreach tent' },
      { file: 'health-16-team-testing-table.jpeg', use: 'gallery', description: 'Multi-person testing table with health workers' },
      { file: 'health-18-banner-worksite.jpeg', use: 'gallery', description: 'Outreach banner mounted at worksite wall, worker at table' },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    slug: 'education',
    summary:
      'Education initiatives under CIF aim at improving both the quality and access to schooling. This can mean scholarship support, provision of learning materials, teacher training partnerships, renovation of classroom infrastructure, and literacy drives for out-of-school children. The long-term aim is breaking the cycle of poverty by ensuring children - especially in low-income households - have a genuine pathway to sustained learning. As part of CIF\'s "Catch Them Young" initiative, education scholarships are awarded to both secondary and tertiary students.',
    context_note:
      "Images depict scholarship cheque presentations to secondary/tertiary students under the 'Catch Them Young' initiative.",
    sdgs: [4],
    icon: '📚',
    images: [
      { file: 'education-03-scholarship-cheque-presentation.jpeg', use: 'hero', description: 'Scholarship cheque presentation to a student recipient' },
      { file: 'education-04-scholarship-cheque-presentation-2.jpeg', use: 'feature', description: 'Second scholarship cheque presentation to a different recipient' },
      { file: 'education-01-group-boardroom.jpeg', use: 'gallery', description: 'Group photo of scholarship recipients and CIF leadership in boardroom' },
      { file: 'education-02-group-boardroom-alt.jpeg', use: 'gallery', description: 'Alternate framing of boardroom group photo' },
      { file: 'education-05-group-photo.jpeg', use: 'gallery', description: 'Group photo, heads bowed, after ceremony' },
    ],
  },
  {
    id: 'youth-women-empowerment',
    title: 'Youth & Women Empowerment',
    slug: 'youth-women-empowerment',
    summary:
      'This programme builds confidence, skills, and platforms for young people and women to participate more fully in economic and civic life. Activities typically include skills-acquisition workshops (tailoring, catering, digital skills), leadership mentorship circles, advocacy against gender-based barriers, and support networks that help women and youth access opportunities historically closed off to them.',
    context_note: null,
    sdgs: [5, 8, 10],
    icon: '👩‍💻',
    images: [
      { file: 'youth-women-01-women-mobilization-cheer.jpeg', use: 'hero', description: 'Large group of women raising fists, cheering - mobilization/advocacy event' },
      { file: 'youth-women-02-skills-training-workshop.jpeg', use: 'gallery', description: 'Skill-training workshop for orphans/youth (baking/catering skills), group photo with trainees' },
      { file: 'youth-women-03-youth-conference-audience.jpeg', use: 'gallery', description: 'Large seated audience at a youth empowerment conference' },
    ],
  },
  {
    id: 'job-creation',
    title: 'Job Creation',
    slug: 'job-creation',
    summary:
      "CIF is focused on job creation rather than only offering handouts - this programme is built around enabling people to build their own livelihoods. It provides business training, mentorship from established entrepreneurs, and - where possible - start-up grants, micro-loans, or equipment support. The focus is on aspiring entrepreneurs who have an idea or trade skill but lack the capital or guidance to formalize and grow it into a sustainable business.",
    context_note:
      'This section currently has thin image coverage - more programme-specific photos (business training, grant/equipment handover, entrepreneur profiles) are being sourced.',
    sdgs: [1, 8, 9],
    icon: '💼',
    images: [
      { file: 'job-creation-01-supplies-distribution-logistics.jpeg', use: 'hero', description: 'Team loading produce and supplies from a supply truck - logistics/distribution support for livelihoods' },
    ],
  },
  {
    id: 'sadaqat-zakat-welfare',
    title: 'Sadaqat, Zakat & Social Welfare',
    slug: 'sadaqat-zakat-welfare',
    summary:
      "This is CIF's charitable-giving arm, rooted in Islamic principles of voluntary and obligatory giving. The foundation collects Sadaqah (voluntary charity) and coordinates its distribution toward humanitarian projects - food relief, emergency assistance for families in crisis, support for orphans and widows, and disaster response. It relies heavily on donor trust, so transparent tracking of how funds are used is central to this initiative.",
    context_note: null,
    sdgs: [1, 2, 10],
    icon: '🤲',
    images: [
      { file: 'welfare-02-child-food-relief.jpeg', use: 'hero', description: 'Child receiving food/drink from an adult\'s outstretched hand in a relief/displacement setting' },
      { file: 'welfare-01-eldercare-supplies-donation.jpeg', use: 'gallery', description: 'Care-home donation of food and supplies to elderly residents, some in wheelchairs' },
    ],
  },
  {
    id: 'capital-human-development',
    title: 'Capital & Human Development',
    slug: 'capital-human-development',
    summary:
      "This is a broader, foundational programme underpinning several others - it's about equipping people with the durable resources needed for growth: financial literacy, vocational skills, access to credit or start-up capital, and personal development training (confidence-building, goal-setting, workplace readiness). It treats people's potential as an asset to be developed, not just a problem to be solved.",
    context_note:
      'Programme photos (financial literacy workshops, vocational training sessions, mentorship pairings) are currently being sourced from the field.',
    sdgs: [8, 9, 17],
    icon: '📈',
    images: [],
  },
  {
    id: 'ecosystem-agriculture',
    title: 'Ecosystem & Functional Agriculture',
    slug: 'ecosystem-agriculture',
    summary:
      "CIF's environmental arm centers on tree-planting campaigns (including castor plants) and other restorative agricultural activities aimed at protecting local ecosystems. Beyond environmental protection, functional agriculture initiatives also support food security and provide livelihood opportunities for community members involved in planting, harvesting, or land restoration work.",
    context_note: null,
    sdgs: [13, 15],
    icon: '🌱',
    images: [
      { file: 'ecosystem-01-woman-tree-seedlings.jpeg', use: 'hero', description: 'Woman smiling, holding two tree seedlings ready for planting' },
      { file: 'ecosystem-02-youth-tree-planting.jpeg', use: 'gallery', description: 'Group of youth (martial arts uniforms) planting tree seedlings in a wooded area' },
      { file: 'ecosystem-03-green-ghana-day-tree-planting.jpeg', use: 'feature', description: "Dignitary planting a tree at a 'Green Ghana Day' event, surrounded by officials" },
      { file: 'ecosystem-04-castor-maize-intercropping-diagram.jpeg', use: 'educational_graphic', description: 'Labeled infographic: 8-week castor plants inter-planted with 3-week maize (intercropping system)' },
      { file: 'ecosystem-05-site-visit-team.jpeg', use: 'gallery', description: 'Team of six men on a site visit near a hill/quarry landscape' },
      { file: 'ecosystem-06-castor-seedling.jpeg', use: 'gallery', description: 'Close-up of a young castor plant seedling' },
      { file: 'ecosystem-07-land-restoration-work.jpeg', use: 'gallery', description: 'Community members working a field near a hill, land restoration/planting activity' },
    ],
  },
  {
    id: 'plwd',
    title: 'People Living with Disabilities (PLWD)',
    slug: 'plwd',
    summary:
      "CIF is developing structured engagement with people living with disabilities within its host communities - moving from occasional charity toward sustained inclusion. This can involve accessibility advocacy, targeted skills training suited to different abilities, assistive resources, and awareness campaigns that challenge stigma and push for more inclusive community spaces.",
    context_note: null,
    sdgs: [10],
    icon: '♿',
    images: [
      { file: 'plwd-02-support-illustration.jpeg', use: 'hero', description: "Illustrated 'SUPPORT' graphic depicting people with disabilities in community/support settings" },
      { file: 'plwd-01-disability-inclusion-domain-table.jpeg', use: 'educational_graphic', description: "'Disability Inclusion Profile – Domain Table' infographic covering learning, general tasks, communication, self-care, interpersonal interactions, and mobility domains" },
    ],
  },
  {
    id: 'campaign-against-drug-abuse',
    title: 'Campaign Against Drug Abuse',
    slug: 'campaign-against-drug-abuse',
    summary:
      "CIF is actively participating in an advocacy and public-awareness programme aimed at communities - especially youth - vulnerable to substance abuse. It typically combines school and community sensitization talks, media campaigns, and partnerships with health or law-enforcement bodies to warn against the dangers of drug misuse and encourage rehabilitation pathways for those already affected.",
    context_note: null,
    sdgs: [3, 16],
    icon: '🚫',
    images: [
      { file: 'drug-abuse-02-campaign-banner-mockup.jpeg', use: 'hero', description: "'Campaign Against Drug Abuse' web banner mockup, tagged SDG 3 and SDG 16" },
      { file: 'drug-abuse-01-say-no-to-drugs-poster.jpeg', use: 'gallery', description: "'Say No to Drugs' awareness poster: 'Be Informed. Take Action. Create Change.'" },
    ],
  },
  {
    id: 'information-technology',
    title: 'Information Technology (IT)',
    slug: 'information-technology',
    summary:
      "CIF runs digital literacy enrolment for students at both secondary and tertiary levels, teaching foundational IT skills - computer literacy, basic software use, and in some cases coding or digital tools relevant to today's job market. This equips young people to compete in an increasingly digital economy and reduces the digital divide between under-resourced schools and better-funded ones.",
    context_note:
      "The NGO Ignition Boot Camp photos show CIF's participation in an external digital-tools/NGO-management training - relevant to IT and digital capacity building, and cross-referenced with Leadership Development.",
    sdgs: [4, 9],
    icon: '💻',
    images: [
      { file: 'it-01-computer-literacy-classroom.jpeg', use: 'hero', description: 'Secondary students in a computer literacy classroom with an instructor' },
      { file: 'it-02-computer-exam-hall.jpeg', use: 'gallery', description: 'Large computer-based testing/exam hall, rows of students at monitors' },
      { file: 'it-03-imac-lab-session.jpeg', use: 'gallery', description: 'iMac computer lab session with students and staff' },
      { file: 'it-07-ngo-bootcamp-group-large.jpeg', use: 'feature', description: 'NGO Ignition Boot Camp large group photo in training room with presentation screen' },
      { file: 'it-04-ngo-bootcamp-group-men.jpeg', use: 'gallery', description: "'NGO Ignition Boot Camp' (Abuja Network of New NGOs) group photo, six men beside event banner" },
      { file: 'it-05-ngo-bootcamp-group-mixed.jpeg', use: 'gallery', description: 'NGO Ignition Boot Camp mixed group photo, seated and standing' },
      { file: 'it-06-ngo-bootcamp-group-women.jpeg', use: 'gallery', description: 'NGO Ignition Boot Camp group photo of women participants beside banner' },
    ],
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    slug: 'leadership-development',
    summary:
      "CIF engages in training its leadership to have firsthand leadership skills as the world evolves, to shape their future. CIF leadership attends both local and international conferences, seminars, and workshops as at when due. This programme is about cultivating the next generation of ethical, capable leaders - through mentorship, workshops on governance and integrity, public-speaking and decision-making training, and exposure to real community-leadership opportunities. It's a deliberate investment in the character and competence of future community and institutional leaders.",
    context_note:
      "CIF leadership's attendance at the NGO Ignition Boot Camp (Abuja Network of New NGOs) is shared context between this programme and the IT programme.",
    sdgs: [4, 16],
    icon: '👑',
    images: [
      { file: 'leadership-03-facilitator-speaking.jpeg', use: 'feature', description: 'Close-up of facilitator mid-presentation, attendees seated with materials' },
      { file: 'leadership-01-training-session-seated.jpeg', use: 'gallery', description: 'CIF leadership seated at a training workshop, facilitator addressing the room' },
      { file: 'leadership-02-training-session-wide.jpeg', use: 'gallery', description: 'Wide shot of the same workshop, facilitator in bright yellow attire presenting' },
      { file: 'it-07-ngo-bootcamp-group-large.jpeg', use: 'gallery', description: 'NGO Ignition Boot Camp - CIF leadership at external digital-tools training (Abuja)' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    slug: 'security',
    summary:
      "CIF's security-focused programme aims to enhance the safety and general well-being of communities - this can take the form of community safety awareness campaigns, collaboration with local security structures, and initiatives that address root causes of insecurity such as youth unemployment and social exclusion (tying back into the Job Creation and Empowerment programmes).",
    context_note:
      "Programme photos from CIF's own security-related activities are being sourced - the current visual is an illustrative graphic.",
    sdgs: [16],
    icon: '🔒',
    images: [
      { file: 'security-01-community-safety-illustration.jpeg', use: 'hero', description: "Illustrated 'Community Development and Public Safety Initiatives' graphic - construction worker, community member, and police officer" },
    ],
  },
  {
    id: 'ramadan-fidya',
    title: 'Ramadan Fidya - Feeding the Poor',
    slug: 'ramadan-fidya',
    summary:
      "Fidya is compensation paid by a Muslim unable to fast during Ramadan due to a valid excuse (chronic illness, old age, pregnancy, breastfeeding, etc.) - traditionally fulfilled by feeding a poor person for each missed fasting day. CIF's Fidya initiative bridges two needs at once: helping community members fulfil this religious obligation, and getting nutritious food to vulnerable households during Ramadan. Distribution is documented so donors can see their obligation was fulfilled and food reached genuine beneficiaries.",
    context_note:
      "Ramadan is typically when food insecurity is felt most acutely by low-income households. A structured Fidya programme meets this seasonal vulnerability with a coordinated, dignified response rather than ad hoc giving.",
    sdgs: [1, 2],
    icon: '🌙',
    images: [
      { file: 'fidya-03-mass-food-distribution-mats.jpeg', use: 'hero', description: "Large-scale Ramadan food distribution - rows of packaged meals laid out on mats, 'Ramazan Programı' event banner in background" },
      { file: 'fidya-01-communal-iftar-meal.jpeg', use: 'gallery', description: 'Large group sharing a communal Iftar meal on the ground' },
      { file: 'fidya-02-group-breaking-fast.jpeg', use: 'gallery', description: 'Men and boys eating together at Iftar (breaking of the fast)' },
    ],
  },
  {
    id: 'qurbani',
    title: 'Qurbani - Eid al-Adha Distribution',
    slug: 'qurbani',
    summary:
      "Qurbani (Udhiyah) is the ritual sacrifice of a livestock animal - commonly a ram, goat, or cow - performed by Muslims who can afford it around Eid al-Adha, commemorating Prophet Ibrahim's willingness to sacrifice his son Ismail in obedience to God. The meat is traditionally divided into three parts: one-third for the household, one-third for relatives and friends, and one-third for the poor and needy. CIF coordinates Qurbani on behalf of donors and distributes the bulk of the meat to widows, orphans, elderly residents, displaced persons, and low-income families - functioning as a direct, seasonal food-security intervention that also strengthens communal bonds.",
    context_note:
      "Field documentation capturing live Qurbani ritual sacrifice, livestock processing, and portioning fresh meat for community distribution.",
    sdgs: [1, 2],
    icon: '🐑',
    images: [
      { file: 'qurbani-01-sacrifice-processing.jpeg', use: 'hero', description: 'Qurbani livestock ritual processing and community coordination during Eid al-Adha' },
      { file: 'qurbani-02-fresh-meat-portioning.jpeg', use: 'gallery', description: 'Fresh Qurbani meat portioning for distribution to vulnerable families and widows' },
    ],
  },
];

/* ─── UN SDGs ─────────────────────────────────────────────────────────────── */
const sdgsList = [
  { num: 1, name: 'No Poverty', color: '#E5243B' },
  { num: 2, name: 'Zero Hunger', color: '#DDA63A' },
  { num: 3, name: 'Good Health & Well-being', color: '#4C9F38' },
  { num: 4, name: 'Quality Education', color: '#C5192D' },
  { num: 5, name: 'Gender Equality', color: '#FF3A21' },
  { num: 6, name: 'Clean Water & Sanitation', color: '#26BDE2' },
  { num: 7, name: 'Affordable & Clean Energy', color: '#FCC30B' },
  { num: 8, name: 'Decent Work & Economic Growth', color: '#A21942' },
  { num: 9, name: 'Industry, Innovation & Infrastructure', color: '#FD6925' },
  { num: 10, name: 'Reduced Inequalities', color: '#DD1367' },
  { num: 11, name: 'Sustainable Cities & Communities', color: '#FD9D24' },
  { num: 12, name: 'Responsible Consumption & Production', color: '#C9932B' },
  { num: 13, name: 'Climate Action', color: '#3F7E44' },
  { num: 14, name: 'Life Below Water', color: '#0A97D9' },
  { num: 15, name: 'Life On Land', color: '#56C02B' },
  { num: 16, name: 'Peace, Justice & Strong Institutions', color: '#00689D' },
  { num: 17, name: 'Partnerships for the Goals', color: '#19486A' },
];

/* ─── Lightbox ───────────────────────────────────────────────────────────── */
/* Uses global CSS classes from globals.css - styled-jsx doesn't reach child  */
/* component boundaries, so lightbox CSS must live in the global stylesheet.  */
interface LightboxProps {
  images: ProgramImage[];
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, idx]);

  const current = images[idx];

  return (
    <div className="lb-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image viewer">
      <div className="lb-shell" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className="lb-x" onClick={onClose} aria-label="Close lightbox">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Left arrow */}
        {images.length > 1 && (
          <button className="lb-arrow lb-arrow-l" onClick={prev} aria-label="Previous image">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Full-quality image */}
        <div className="lb-img-box">
          <Image
            key={current.file}
            src={`/images/programs/${current.file}`}
            alt={current.description}
            fill
            sizes="94vw"
            quality={95}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Right arrow */}
        {images.length > 1 && (
          <button className="lb-arrow lb-arrow-r" onClick={next} aria-label="Next image">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Caption + counter */}
        <div className="lb-info-bar">
          <p className="lb-cap">{current.description}</p>
          {images.length > 1 && (
            <span className="lb-ctr">{idx + 1} / {images.length}</span>
          )}
        </div>

        {/* Dot nav */}
        {images.length > 1 && (
          <div className="lb-dotrow">
            {images.map((_, i) => (
              <button
                key={i}
                className={`lb-d ${i === idx ? 'on' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Image Carousel ─────────────────────────────────────────────────────── */
function ProgramCarousel({ images, onOpen }: { images: ProgramImage[]; onOpen: (i: number) => void }) {
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => { setSlide(0); }, [images]);

  if (images.length === 0) {
    return (
      <div className="prog-no-image">
        <div className="prog-no-image-icon">📷</div>
        <p>Programme photos coming soon</p>
      </div>
    );
  }

  const goTo = (idx: number) => {
    if (animating || idx === slide) return;
    setAnimating(true);
    setTimeout(() => { setSlide(idx); setAnimating(false); }, 200);
  };

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); goTo((slide - 1 + images.length) % images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); goTo((slide + 1) % images.length); };

  const current = images[slide];

  return (
    <div className="prog-carousel">
      {/* Clickable image area opens lightbox */}
      <div
        className={`prog-carousel-image-wrap ${animating ? 'fading' : ''}`}
        onClick={() => onOpen(slide)}
        role="button"
        tabIndex={0}
        aria-label="View full-size image"
        onKeyDown={(e) => e.key === 'Enter' && onOpen(slide)}
      >
        <Image
          src={`/images/programs/${current.file}`}
          alt={current.description}
          width={900}
          height={500}
          quality={92}
          style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px' }}
          priority={slide === 0}
        />
        <span className={`prog-img-badge badge-${current.use}`}>
          {current.use.replace(/_/g, ' ')}
        </span>
        {/* Expand hint overlay */}
        <div className="carousel-expand-hint">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          <span>View full size</span>
        </div>
      </div>

      <p className="prog-carousel-caption">{current.description}</p>

      {images.length > 1 && (
        <div className="prog-carousel-controls">
          <button className="carousel-nav-btn" onClick={prev} aria-label="Previous photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button key={i} className={`carousel-dot ${i === slide ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Photo ${i + 1}`} />
            ))}
          </div>
          <button className="carousel-nav-btn" onClick={next} aria-label="Next photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Gallery Strip ──────────────────────────────────────────────────────── */
function GalleryStrip({ images, onOpen }: { images: ProgramImage[]; onOpen: (i: number) => void }) {
  // Show ALL images (all roles) as thumbnails so nothing is hidden
  if (images.length === 0) return null;

  return (
    <div className="gallery-strip">
      <h4 className="gallery-strip-label">All Photos - click to enlarge</h4>
      <div className="gallery-strip-grid">
        {images.map((img, i) => (
          <button
            key={img.file}
            className="gallery-strip-item"
            onClick={() => onOpen(i)}
            title={img.description}
            aria-label={`View: ${img.description}`}
          >
            <Image
              src={`/images/programs/${img.file}`}
              alt={img.description}
              width={200}
              height={140}
              style={{ width: '100%', height: '100px', objectFit: 'cover', display: 'block' }}
            />
            <div className="gallery-zoom-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}


/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function ProgramsClient() {
  const [selectedId, setSelectedId] = useState<string>('health');
  const currentProg = programmes.find((p) => p.id === selectedId) || programmes[0];
  const [lightbox, setLightbox] = useState<{ images: ProgramImage[]; index: number } | null>(null);

  const openLightbox = (images: ProgramImage[], index: number) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <Navbar />

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}

      {/* ── Page Header ── */}
      <div className="subpage-header islamic-pattern">
        <div className="container">
          <span className="header-subtitle">CIF Key Initiatives</span>
          <h1>Our Programmes &amp; UN SDGs Alignment</h1>
          <p className="header-tagline">
            14 active programme areas aligned with the United Nations Sustainable Development Goals.
          </p>
        </div>
      </div>

      <main className="programmes-page">
        <div className="container programmes-layout">

          {/* ── Left: Programme List ── */}
          <div className="programmes-list">
            {programmes.map((prog, i) => {
              const isActive = prog.id === selectedId;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedId(prog.id)}
                  className={`prog-list-btn ${isActive ? 'active' : ''}`}
                  id={`prog-btn-${prog.slug}`}
                >
                  <span className="prog-order">{String(i + 1).padStart(2, '0')}</span>
                  <span className="prog-icon-emoji">{prog.icon}</span>
                  <div className="prog-list-text">
                    <h3>{prog.title}</h3>
                    <p>{prog.summary.substring(0, 72)}…</p>
                  </div>
                  <span className="prog-list-arrow">→</span>
                </button>
              );
            })}
          </div>

          {/* ── Right: Detail Board ── */}
          <div className="prog-detail-board glass-card" key={currentProg.id}>

            {/* Hero Carousel */}
            <ProgramCarousel
              images={currentProg.images}
              onOpen={(i) => openLightbox(currentProg.images, i)}
            />

            {/* Programme Info */}
            <div className="prog-detail-body">
              <div className="prog-detail-title-row">
                <span className="prog-detail-emoji">{currentProg.icon}</span>
                <h2>{currentProg.title}</h2>
              </div>

              <p className="prog-detail-summary">{currentProg.summary}</p>

              {/* Context note */}
              {currentProg.context_note && (
                <div className="prog-context-note">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{currentProg.context_note}</span>
                </div>
              )}

              {/* Gallery Strip */}
              <GalleryStrip
                images={currentProg.images}
                onOpen={(i) => openLightbox(currentProg.images, i)}
              />

              {/* UN SDGs */}
              <div className="sdg-block">
                <h3 className="sdg-block-title">Aligned UN Sustainable Development Goals</h3>
                <p className="sdg-help-text">Highlighted goals show direct programme impact targets.</p>
                <div className="sdg-grid">
                  {sdgsList.map((sdg) => {
                    const active = currentProg.sdgs.includes(sdg.num);
                    return (
                      <div
                        key={sdg.num}
                        className={`sdg-tile ${active ? 'active' : 'inactive'}`}
                        style={{ '--sdg-color': sdg.color } as React.CSSProperties}
                      >
                        <div className="sdg-num">{sdg.num}</div>
                        <div className="sdg-tooltip">{sdg.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <style jsx>{`
        /* ── Page header ── */
        .subpage-header {
          background-color: var(--primary-navy);
          padding: 160px 0 80px;
          color: #fff;
          position: relative;
        }
        .header-subtitle {
          color: var(--secondary-green);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }
        .subpage-header h1 {
          color: #fff;
          font-size: 46px;
          margin: 0 0 12px;
        }
        .header-tagline {
          color: rgba(255,255,255,0.65);
          font-size: 16px;
          margin: 0;
        }

        /* ── Main layout ── */
        .programmes-page {
          background: #FAFBFD;
          padding: 80px 0 100px;
        }
        .programmes-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 36px;
          align-items: start;
        }

        /* ── Programme list ── */
        .programmes-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: sticky;
          top: 100px;
          max-height: calc(100vh - 140px);
          overflow-y: auto;
          padding-right: 8px;
        }
        .programmes-list::-webkit-scrollbar { width: 5px; }
        .programmes-list::-webkit-scrollbar-track { background: #F1F1F1; border-radius: 4px; }
        .programmes-list::-webkit-scrollbar-thumb { background: #CCC; border-radius: 4px; }

        .prog-list-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.05);
          padding: 14px 18px;
          border-radius: 14px;
          text-align: left;
          width: 100%;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-normal);
          cursor: pointer;
        }
        .prog-list-btn:hover {
          transform: translateX(5px);
          border-color: rgba(63,181,63,0.3);
          box-shadow: var(--shadow-md);
        }
        .prog-list-btn.active {
          border-color: var(--secondary-green);
          background: rgba(63,181,63,0.04);
          box-shadow: var(--shadow-md);
        }
        .prog-order {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          opacity: 0.5;
          min-width: 22px;
          font-family: 'Outfit', monospace;
        }
        .prog-list-btn.active .prog-order { opacity: 1; color: var(--secondary-green); }
        .prog-icon-emoji { font-size: 24px; flex-shrink: 0; }
        .prog-list-text { flex: 1; min-width: 0; }
        .prog-list-text h3 { font-size: 14px; margin: 0 0 3px; color: var(--primary-navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .prog-list-text p { font-size: 12px; color: var(--text-secondary); line-height: 1.35; margin: 0; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; }
        .prog-list-arrow {
          color: var(--text-secondary);
          opacity: 0.4;
          font-size: 18px;
          transition: var(--transition-normal);
        }
        .prog-list-btn.active .prog-list-arrow { color: var(--secondary-green); opacity: 1; transform: translateX(3px); }

        /* ── Detail board ── */
        .prog-detail-board {
          background: #fff;
          border-radius: 20px;
          border: 1px solid rgba(63,181,63,0.15);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }




        /* SDG block */
        .sdg-block { border-top: 1px solid rgba(0,0,0,0.05); padding-top: 24px; }
        .sdg-block-title { font-size: 15px; color: var(--primary-navy); margin: 0 0 4px; }
        .sdg-help-text { font-size: 12.5px; color: var(--text-secondary); margin: 0 0 16px; }
        .sdg-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
        .sdg-tile {
          position: relative;
          aspect-ratio: 1;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          cursor: help;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .sdg-tile.inactive {
          background: rgba(15,30,54,0.03);
          color: rgba(15,30,54,0.15);
          border: 1px dashed rgba(15,30,54,0.1);
        }
        .sdg-tile.inactive:hover { background: #fff; border-color: var(--secondary-green); color: var(--secondary-green); }
        .sdg-tile.active {
          background-color: var(--sdg-color);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          animation: sdgPulse 2.5s infinite ease-in-out;
        }
        @keyframes sdgPulse {
          0%,100% { transform: scale(1.08); box-shadow: 0 4px 12px var(--sdg-color); }
          50% { transform: scale(1.13); box-shadow: 0 8px 22px var(--sdg-color); }
        }
        .sdg-num { font-family: 'Outfit', sans-serif; }
        .sdg-tooltip {
          position: absolute;
          bottom: calc(100% + 7px);
          background: var(--primary-navy);
          color: #fff;
          font-size: 10.5px;
          padding: 5px 9px;
          border-radius: 4px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateY(4px);
          transition: var(--transition-fast);
          z-index: 50;
          box-shadow: var(--shadow-sm);
          font-weight: 500;
        }
        .sdg-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: var(--primary-navy) transparent transparent transparent;
        }
        .sdg-tile:hover .sdg-tooltip { opacity: 1; transform: translateY(0); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .programmes-layout { grid-template-columns: 320px 1fr; }
        }
        @media (max-width: 860px) {
          .programmes-layout { grid-template-columns: 1fr; }
          .programmes-list { position: static; max-height: none; }
          .subpage-header h1 { font-size: 32px; }
        }
        @media (max-width: 576px) {
          .prog-detail-body { padding: 24px 20px 28px; }
          .sdg-grid { grid-template-columns: repeat(4, 1fr); }
          .gallery-strip-grid { grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); }
          .subpage-header { padding: 130px 0 60px; }
        }
      `}</style>
    </>
  );
}
