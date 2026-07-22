'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      const progressEl = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressEl) {
        progressEl.style.width = `${scrollPercentage}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isHome = pathname === '/';
  const showScrolledNavbar = !isHome || isScrolled;

  return (
    <nav className={`navbar ${showScrolledNavbar ? 'scrolled' : ''}`}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress"></div>
      
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          {/* Recreating CIF Logo with Inline SVG */}
          <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            <circle cx="100" cy="100" r="80" fill="white" stroke="#3FB53F" strokeWidth="6" />
            <path d="M100 135C125 135 145 115 145 90C145 65 125 45 100 45C75 45 55 65 55 90C55 115 75 135 100 135Z" fill="#FAFBFD" />
            {/* Figures in logo */}
            <circle cx="100" cy="80" r="12" fill="#0F1E36" />
            <path d="M75 120C75 105 85 95 100 95C115 95 125 105 125 120" stroke="#0F1E36" strokeWidth="8" strokeLinecap="round" />
            <circle cx="75" cy="98" r="10" fill="#3FB53F" />
            <path d="M55 130C55 118 63 110 75 110" stroke="#3FB53F" strokeWidth="6" strokeLinecap="round" />
            <circle cx="125" cy="98" r="10" fill="#3FB53F" />
            <path d="M125 110C137 110 145 118 145 130" stroke="#3FB53F" strokeWidth="6" strokeLinecap="round" />
            {/* Stars */}
            <path d="M45 100L48 106L55 107L50 112L51 119L45 115L39 119L40 112L35 107L42 106Z" fill="#0F1E36" />
            <path d="M155 100L158 106L165 107L160 112L161 119L155 115L149 119L150 112L145 107L152 106Z" fill="#3FB53F" />
          </svg>
          <div className="logo-text">
            <span className="cif-abbr">C I F</span>
            <span className="cif-full">CRESCENT IMPACT</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active-route' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active-route' : ''}`}>About Us</Link>
          <Link href="/focus" className={`nav-link ${pathname === '/focus' ? 'active-route' : ''}`}>Our Focus</Link>
          <Link href="/programs" className={`nav-link ${pathname === '/programs' ? 'active-route' : ''}`}>Key Programs</Link>
          <Link href="/team" className={`nav-link ${pathname === '/team' ? 'active-route' : ''}`}>Leadership</Link>
          <Link href="/contact" className="btn-primary-sm">Get Involved</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <Link href="/" onClick={toggleMenu} className="mobile-link">Home</Link>
        <Link href="/about" onClick={toggleMenu} className="mobile-link">About Us</Link>
        <Link href="/focus" onClick={toggleMenu} className="mobile-link">Our Focus</Link>
        <Link href="/programs" onClick={toggleMenu} className="mobile-link">Key Programs</Link>
        <Link href="/team" onClick={toggleMenu} className="mobile-link">Leadership</Link>
        <Link href="/contact" onClick={toggleMenu} className="btn-primary mobile-btn">Get Involved</Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 24px 0;
          transition: var(--transition-normal);
          background: linear-gradient(180deg, rgba(15, 30, 54, 0.6) 0%, rgba(15, 30, 54, 0) 100%);
        }
        .scroll-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--secondary-green), var(--accent-gold));
          width: 0%;
          transition: width 0.1s ease;
        }
        .navbar.scrolled {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(63, 181, 63, 0.15);
          box-shadow: var(--shadow-sm);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-svg {
          transition: var(--transition-normal);
        }
        .navbar.scrolled .logo-svg {
          transform: scale(0.9);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .navbar:not(.scrolled) .cif-abbr {
          color: #FFFFFF;
        }
        .navbar.scrolled .cif-abbr {
          color: var(--primary-navy);
        }
        .cif-abbr {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 2px;
          line-height: 1;
          transition: var(--transition-normal);
        }
        .cif-full {
          font-size: 10px;
          font-weight: 800;
          color: var(--secondary-green);
          letter-spacing: 1px;
          margin-top: 2px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .navbar:not(.scrolled) .nav-link {
          color: rgba(255, 255, 255, 0.85);
        }
        .navbar.scrolled .nav-link {
          color: var(--text-primary);
        }
        .nav-link {
          font-size: 15px;
          font-weight: 600;
          position: relative;
          padding: 6px 0;
          transition: var(--transition-fast);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondary-green);
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: #FFFFFF;
        }
        .navbar.scrolled .nav-link:hover {
          color: var(--secondary-green);
        }
        .navbar:not(.scrolled) .nav-link.active-route {
          color: #FFFFFF;
        }
        .navbar.scrolled .nav-link.active-route {
          color: var(--secondary-green);
        }
        .nav-link.active-route::after {
          width: 100%;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .btn-primary-sm {
          background-color: var(--secondary-green);
          color: #FFFFFF;
          padding: 10px 22px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          box-shadow: 0 4px 10px rgba(63, 181, 63, 0.3);
          transition: var(--transition-normal);
        }
        .btn-primary-sm:hover {
          background-color: #35A335;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(63, 181, 63, 0.5);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          width: 30px;
          background: none;
          border: none;
        }
        .navbar:not(.scrolled) .bar {
          background-color: #FFFFFF;
        }
        .navbar.scrolled .bar {
          background-color: var(--primary-navy);
        }
        .bar {
          height: 3px;
          width: 100%;
          border-radius: 2px;
          transition: var(--transition-normal);
        }
        .mobile-nav {
          display: none;
        }

        @media (max-width: 991px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .hamburger.active .bar:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
            background-color: var(--secondary-green);
          }
          .hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }
          .hamburger.active .bar:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
            background-color: var(--secondary-green);
          }
          .mobile-nav {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(63, 181, 63, 0.1);
            padding: 24px;
            gap: 20px;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: var(--transition-normal);
            box-shadow: var(--shadow-md);
          }
          .mobile-nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .mobile-link {
            font-size: 18px;
            font-weight: 600;
            color: var(--primary-navy);
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding-bottom: 10px;
          }
          .mobile-btn {
            text-align: center;
            justify-content: center;
            margin-top: 10px;
          }
        }
      `}</style>
    </nav>
  );
}
