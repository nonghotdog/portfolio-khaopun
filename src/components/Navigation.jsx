import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards & Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Fixed Left Navigation (Matching the reference template) */}
      <nav
        aria-label="Sections"
        style={{
          position: 'fixed',
          left: '2.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 40,
        }}
        className="desktop-nav"
      >
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link-hover"
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  <span
                    className="nav-diamond"
                    style={{
                      fontSize: '10px',
                      color: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                      transform: isActive ? 'scale(1.25)' : 'scale(1)',
                    }}
                    aria-hidden="true"
                  >
                    ◆
                  </span>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '1.05rem',
                      fontStyle: isActive ? 'italic' : 'normal',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Quick Resume Button in Left Nav */}
        <div style={{ marginTop: '2rem', paddingLeft: '0.2rem' }}>
          <button
            onClick={onOpenResume}
            className="font-mono-meta btn-glow"
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border)',
              padding: '6px 14px',
              fontSize: '10px',
              color: 'var(--color-primary)',
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>◆</span> ATS Resume
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Header Bar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(250, 248, 245, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
          transition: 'all 0.3s ease',
          padding: '1rem 1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className="mobile-header"
      >
        <a href="#intro" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="font-display" style={{ fontWeight: 600, fontSize: '1.15rem' }}>
            Narudee <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>K.</span>
          </span>
        </a>

        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <button
            onClick={onOpenResume}
            className="font-mono-meta btn-glow"
            style={{
              background: 'var(--color-primary)',
              color: '#fff',
              border: 'none',
              borderRadius: '2px',
              padding: '6px 12px',
              fontSize: '10px',
              cursor: 'pointer',
            }}
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '6px 10px',
              cursor: 'pointer',
              color: 'var(--text-ink)',
              transition: 'transform 0.2s ease',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            background: 'rgba(250, 248, 245, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
          className="lg:hidden mobile-drawer-anim"
        >
          <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display"
                  style={{
                    fontSize: '1.6rem',
                    textDecoration: 'none',
                    color: activeSection === item.id ? 'var(--color-primary)' : 'var(--text-ink)',
                    fontStyle: activeSection === item.id ? 'italic' : 'normal',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
