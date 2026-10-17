import React from 'react';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 1.5rem',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Personal Brand Story & Narrative */}
        <div className="reveal-slide-left">
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              letterSpacing: '-0.02em',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '2.5rem',
              color: 'var(--text-ink)',
            }}
          >
            <span style={{ color: 'var(--color-primary)', fontSize: '18px' }}>◆</span>
            About <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>me</span>
          </h2>

          {/* Core Personal Brand Story (Rubric 6 Points: Clear statement of who they are focusing on strengths) */}
          <div style={{ marginBottom: '2rem' }}>
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                color: 'var(--text-ink)',
                lineHeight: 1.6,
                fontWeight: 400,
                marginBottom: '1.5rem',
              }}
            >
              {personalData.brandStory.lead}
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-body)',
                lineHeight: 1.8,
              }}
            >
              {personalData.brandStory.extended}
            </p>
          </div>

          {/* At a Glance Inset Panel (Matching Template) */}
          <div className="panel-inset card-interactive" style={{ padding: '1.8rem', marginTop: '2.5rem' }}>
            <p
              className="font-mono-meta"
              style={{
                fontSize: '11px',
                color: 'var(--color-primary)',
                marginBottom: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>◆</span> At a Glance
            </p>
            <p
              className="font-display"
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.5,
                color: 'var(--text-ink)',
              }}
            >
              {personalData.brandStory.atAGlance}
            </p>
          </div>

          {/* Interests & Creative Talents (from Selected Profile Items) */}
          {personalData.hobbies && personalData.hobbies.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <p
                className="font-mono-meta"
                style={{
                  fontSize: '11px',
                  color: 'var(--color-primary)',
                  marginBottom: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>◆</span> Interests &amp; Creative Pursuits
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {personalData.hobbies.map((h, i) => (
                  <span
                    key={i}
                    className="card-interactive"
                    style={{
                      padding: '5px 12px',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--color-border)',
                      borderRadius: '20px',
                      fontSize: '12px',
                      color: 'var(--text-ink)',
                      boxShadow: 'var(--shadow-subtle)',
                      fontFamily: 'var(--font-display)',
                      cursor: 'default',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Editorial Photo Gallery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {/* Photo 01 (Editorial 3-frame strip) */}
          <div className="reveal-scale delay-100" style={{ transform: 'translateY(1rem)' }}>
            <div className="frame-window" style={{ borderRadius: '2px', overflow: 'hidden' }}>
              <img
                src="/images/IMG_5643.JPG"
                alt="Narudee Kamolwit - Editorial & Creative Identity"
                style={{
                  width: '100%',
                  aspectRatio: '2/3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          </div>

          {/* Photo 02 (Mahidol ICT Identity) */}
          <div className="reveal-scale delay-200" style={{ transform: 'translateY(-0.5rem)' }}>
            <div className="frame-window frame-window-tilted" style={{ borderRadius: '2px', overflow: 'hidden' }}>
              <img
                src="/images/IMG_4864.JPG"
                alt="Narudee Kamolwit - Faculty of ICT, Mahidol University"
                style={{
                  width: '100%',
                  aspectRatio: '2/3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          </div>

          {/* Photo 03 (Teal Portrait / Analytical Focus) */}
          <div className="reveal-scale delay-300">
            <div className="frame-window" style={{ borderRadius: '2px', overflow: 'hidden' }}>
              <img
                src="/images/IMG_5640.JPG"
                alt="Narudee Kamolwit - Software & Analytical Focus"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          </div>

          {/* Photo 04 (Friends & Student Collaboration) */}
          <div className="reveal-scale delay-400">
            <div className="frame-window" style={{ borderRadius: '2px', overflow: 'hidden' }}>
              <img
                src="/images/IMG_5622.JPG"
                alt="Narudee with friends - Community & Collaboration"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          </div>

          {/* FIG. 05 & 06 (Photobooth Strips Feature) */}
          <div
            className="reveal-scale delay-500"
            style={{
              gridColumn: 'span 2',
              marginTop: '1rem',
              padding: '1.2rem',
              backgroundColor: 'var(--bg-panel)',
              borderRadius: '2px',
              border: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <span
                className="font-mono-meta"
                style={{
                  fontSize: '10px',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>◆</span> ARCHIVE — PHOTOBOOTHS &amp; SNAPSHOTS
              </span>
              <span className="font-mono-meta" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>
                BANGKOK · FLASHBACK
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="card-interactive" style={{ borderRadius: '2px', overflow: 'hidden', backgroundColor: '#fff', padding: '6px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/IMG_4542.JPG"
                  alt="Photobooth Memories - Polka & Stars"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="card-interactive" style={{ borderRadius: '2px', overflow: 'hidden', backgroundColor: '#fff', padding: '6px', border: '1px solid var(--color-border)' }}>
                <img
                  src="/images/IMG_5641.JPG"
                  alt="Photobooth Memories - Rollriroo Gate"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
