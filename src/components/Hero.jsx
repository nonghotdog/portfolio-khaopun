import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="intro"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
      }}
    >
      {/* Vertical Metadata Label on Right (Desktop only) */}
      <div
        className="hidden xl:block font-mono-meta"
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          writingMode: 'vertical-rl',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '0.28em',
        }}
      >
        EST. 2008 — BANGKOK, THAILAND — SOFTWARE · DATA · ICT
      </div>

      <div style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center' }}>
        {/* Sub-tag header */}
        <div
          className="font-mono-meta"
          style={{
            fontSize: '11px',
            color: 'var(--color-primary)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span>◆</span>
          <span>FACULTY OF ICT · MAHIDOL UNIVERSITY</span>
          <span>◆</span>
        </div>

        {/* Giant Editorial Headline with Floating Image Capsules */}
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 6.2vw, 5.2rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            color: 'var(--text-ink)',
            marginBottom: '3rem',
          }}
        >
          <span style={{ opacity: 0.35, marginRight: '4px' }}>“</span>
          I’m
          {/* Capsule 1: Profile photo */}
          <span
            className="animate-float-slow capsule-interactive"
            style={{
              display: 'inline-block',
              width: 'clamp(46px, 6vw, 76px)',
              height: 'clamp(46px, 6vw, 76px)',
              borderRadius: '20px',
              overflow: 'hidden',
              verticalAlign: 'middle',
              margin: '0 12px',
              border: '1.5px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              cursor: 'pointer',
            }}
          >
            <img
              src="/images/IMG_4864.JPG"
              alt="Narudee Kamolwit portrait"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </span>
          <span style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontWeight: 500 }}>
            Narudee
          </span>
          ,
          <br />
          a
          {/* Capsule 2: Styled portrait photo */}
          <span
            className="animate-float-delay capsule-interactive"
            style={{
              display: 'inline-block',
              width: 'clamp(42px, 5.5vw, 68px)',
              height: 'clamp(42px, 5.5vw, 68px)',
              borderRadius: '16px',
              overflow: 'hidden',
              verticalAlign: 'middle',
              margin: '0 10px',
              border: '1.5px solid var(--color-border)',
              cursor: 'pointer',
            }}
          >
            <img
              src="/images/IMG_5637.JPG"
              alt="Creative and analytical perspective"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </span>
          <span style={{ color: 'var(--color-primary)' }}>software developer</span> &amp;{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>data enthusiast</span>
          <br />
          who builds
          {/* Capsule 3: Teamwork & Friends photo */}
          <span
            className="animate-float-slow capsule-interactive"
            style={{
              display: 'inline-block',
              width: 'clamp(42px, 5.5vw, 68px)',
              height: 'clamp(42px, 5.5vw, 68px)',
              borderRadius: '16px',
              overflow: 'hidden',
              verticalAlign: 'middle',
              margin: '0 10px',
              border: '1.5px solid var(--color-border)',
              cursor: 'pointer',
            }}
          >
            <img
              src="/images/IMG_5622.JPG"
              alt="Collaborative teamwork and community"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </span>
          human-centered{' '}
          <span style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontWeight: 500 }}>
            solutions
          </span>
          <span style={{ opacity: 0.35, marginLeft: '4px' }}>”</span>
        </h1>

        {/* Subtitle Links with Draw Effect */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 2.8rem)',
            marginBottom: '3rem',
          }}
        >
          <a
            href="https://maps.google.com/?q=Bangkok+Thailand"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw font-display"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)', color: 'var(--text-body)' }}
          >
            <span style={{ fontStyle: 'italic' }}>Bangkok, Thailand</span>
          </a>

          <span style={{ color: 'var(--color-border)' }}>/</span>

          <a
            href={`mailto:${personalData.email}`}
            className="link-draw font-display"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)', color: 'var(--text-body)' }}
          >
            {personalData.email}
          </a>

          <span style={{ color: 'var(--color-border)' }}>/</span>

          <a
            href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`}
            className="link-draw font-display"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)', color: 'var(--text-body)' }}
          >
            <span style={{ fontStyle: 'italic' }}>{personalData.phone}</span>
          </a>
        </div>

        {/* Quick Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            className="btn-glow font-display"
            style={{
              padding: '12px 28px',
              backgroundColor: 'var(--text-ink)',
              color: 'var(--bg-paper)',
              textDecoration: 'none',
              borderRadius: '2px',
              fontSize: '0.95rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-ink)';
            }}
          >
            <span>◆</span> Explore Projects
          </a>

          <button
            onClick={onOpenResume}
            className="btn-glow font-display"
            style={{
              padding: '12px 28px',
              backgroundColor: 'transparent',
              color: 'var(--text-ink)',
              border: '1.5px solid var(--color-border)',
              borderRadius: '2px',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-primary)';
              e.currentTarget.style.backgroundColor = 'var(--color-primary-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--text-ink)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ color: 'var(--color-primary)' }}>◆</span> View ATS Résumé
          </button>
        </div>
      </div>
    </section>
  );
}
