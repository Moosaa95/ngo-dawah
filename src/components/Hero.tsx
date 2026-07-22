'use client';

export default function Hero() {
  return (
    <section className="hero-section islamic-pattern">
      {/* Background radial glow */}
      <div className="radial-glow glow-1"></div>
      <div className="radial-glow glow-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-tagline">Empowering Communities in Nigeria</span>
          <h1 className="hero-title">
            Empowering <span className="accent-text">Community</span> in Nigeria <br />
            and <span className="accent-text">Global Space</span>
          </h1>
          <p className="hero-desc">
            Founded in 2019, Crescent Impact Foundation (CIF) is a proactive force 
            advancing growth, public health, education, and community security through 
            innovation, data-driven systems, and partnerships.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="btn-primary">
              Our Programs
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#about" className="btn-secondary-white">
              Who We Are
            </a>
          </div>
        </div>

        {/* Floating Stats Board */}
        <div className="hero-stats-grid">
          <div className="stat-card glass-card-dark">
            <div className="stat-num">2019</div>
            <div className="stat-label">Founded in Abuja</div>
          </div>
          <div className="stat-card glass-card-dark">
            <div className="stat-num">6</div>
            <div className="stat-label">Geopolitical Zones</div>
          </div>
          <div className="stat-card glass-card-dark">
            <div className="stat-num">50+</div>
            <div className="stat-label">Active Volunteers</div>
          </div>
          <div className="stat-card glass-card-dark">
            <div className="stat-num">17</div>
            <div className="stat-label">UN SDGs Supported</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator mouse */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>

      <style jsx>{`
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mouse {
          width: 26px;
          height: 42px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 20px;
          position: relative;
        }
        .wheel {
          width: 4px;
          height: 8px;
          background-color: var(--secondary-green);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll-wheel 1.6s ease-out infinite;
        }
        @keyframes scroll-wheel {
          0% { opacity: 0; top: 8px; }
          20% { opacity: 1; }
          80% { opacity: 0; top: 22px; }
          100% { opacity: 0; }
        }

        .hero-section {
          background-color: var(--primary-navy);
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 140px;
          padding-bottom: 80px;
          overflow: hidden;
          color: #FFFFFF;
        }
        .radial-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.15;
          z-index: 1;
        }
        .glow-1 {
          width: 500px;
          height: 500px;
          background: var(--secondary-green);
          top: -100px;
          left: -100px;
        }
        .glow-2 {
          width: 400px;
          height: 400px;
          background: var(--accent-gold);
          bottom: -100px;
          right: -100px;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .hero-content {
          max-width: 680px;
        }
        .hero-tagline {
          color: var(--secondary-green);
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: block;
        }
        .hero-title {
          font-size: 54px;
          line-height: 1.15;
          margin-bottom: 24px;
          color: #FFFFFF;
          font-weight: 800;
        }
        .accent-text {
          color: var(--secondary-green);
          position: relative;
          display: inline-block;
        }
        .hero-desc {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          gap: 20px;
        }
        .btn-secondary-white {
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          background: transparent;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-normal);
        }
        .btn-secondary-white:hover {
          border-color: var(--secondary-green);
          background: rgba(63, 181, 63, 0.1);
          transform: translateY(-2px);
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .glass-card-dark {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: var(--transition-normal);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .glass-card-dark:hover {
          transform: scale(1.05) translateY(-5px) !important;
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(63, 181, 63, 0.3);
          box-shadow: 0 12px 40px rgba(63, 181, 63, 0.2);
        }
        .hero-stats-grid .stat-card:nth-child(1) {
          animation: float-slow 6s ease-in-out infinite;
        }
        .hero-stats-grid .stat-card:nth-child(2) {
          animation: float-medium 5s ease-in-out infinite 0.5s;
        }
        .hero-stats-grid .stat-card:nth-child(3) {
          animation: float-medium 7s ease-in-out infinite 1s;
        }
        .hero-stats-grid .stat-card:nth-child(4) {
          animation: float-slow 8s ease-in-out infinite 1.5s;
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-medium {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }

        .stat-num {
          font-family: 'Outfit', sans-serif;
          font-size: 40px;
          font-weight: 800;
          color: var(--secondary-green);
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
        }


        @media (max-width: 991px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-title {
            font-size: 42px;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-stats-grid {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 34px;
          }
          .hero-desc {
            font-size: 15px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 12px;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .glass-card-dark {
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}
