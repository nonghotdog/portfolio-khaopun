import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export default function Awards() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="awards"
      style={{
        padding: '6rem 1.5rem',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ marginBottom: '3.5rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              letterSpacing: '-0.02em',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem',
              color: 'var(--text-ink)',
            }}
          >
            <span style={{ color: 'var(--color-primary)', fontSize: '18px' }}>◆</span>
            Honors &amp; <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>certificates</span>
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', maxWidth: '42rem' }}>
            Academic competitions, certifications, workshops, and recognition awards earned through leadership and
            analytical excellence.
          </p>
        </div>

        {/* Awards & Certificates Grid (Rubric 4 Points) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {personalData.awards.map((award, index) => (
            <div
              key={index}
              className={`card-interactive reveal-scale delay-${Math.min(500, (index + 1) * 100)}`}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Preview Container or Credential Badge */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--bg-panel)',
                  padding: award.image ? '1.2rem' : '2rem 1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: award.image ? 'pointer' : 'default',
                  borderBottom: '1px solid var(--color-border)',
                  minHeight: '170px',
                }}
                onClick={() => award.image && setSelectedCert(award)}
              >
                {award.image ? (
                  <>
                    <img
                      src={award.image}
                      alt={award.title}
                      style={{
                        maxHeight: '180px',
                        width: 'auto',
                        objectFit: 'contain',
                        borderRadius: '2px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      }}
                    />
                    <span
                      className="font-mono-meta"
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '12px',
                        fontSize: '9px',
                        backgroundColor: 'rgba(255,255,255,0.92)',
                        padding: '3px 8px',
                        borderRadius: '2px',
                        color: 'var(--color-primary)',
                      }}
                    >
                      CLICK TO EXPAND ↗
                    </span>
                  </>
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        border: '1.5px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.8rem',
                        fontSize: '24px',
                        color: 'var(--color-primary)',
                        boxShadow: 'var(--shadow-subtle)',
                      }}
                    >
                      🎓
                    </div>
                    <span
                      className="font-mono-meta"
                      style={{
                        fontSize: '10px',
                        color: 'var(--color-primary)',
                        letterSpacing: '0.12em',
                      }}
                    >
                      ACADEMIC &amp; DIGITAL TRAINING
                    </span>
                  </div>
                )}
              </div>

              {/* Award Details */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span
                    className="font-mono-meta"
                    style={{ fontSize: '10px', color: 'var(--color-primary)' }}
                  >
                    HONOR 0{index + 1}
                  </span>
                  <span
                    className="font-mono-meta"
                    style={{ fontSize: '10px', color: 'var(--text-muted)' }}
                  >
                    {award.date}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-ink)',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    lineHeight: 1.35,
                  }}
                >
                  {award.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-primary)',
                    fontStyle: 'italic',
                    marginBottom: '0.8rem',
                  }}
                >
                  {award.issuer}
                </p>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(20, 17, 15, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backdropFilter: 'blur(5px)',
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            style={{
              backgroundColor: '#fff',
              maxWidth: '800px',
              width: '100%',
              borderRadius: '4px',
              padding: '1.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 className="font-display" style={{ fontSize: '1.3rem', color: 'var(--text-ink)' }}>
                {selectedCert.title}
              </h4>
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                }}
              >
                ✕
              </button>
            </div>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              style={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '2px',
                border: '1px solid var(--color-border)',
              }}
            />

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-mono-meta" style={{ fontSize: '11px', color: 'var(--color-primary)' }}>
                {selectedCert.issuer} — {selectedCert.date}
              </span>
              <a
                href={selectedCert.image}
                download
                className="font-mono-meta"
                style={{
                  fontSize: '11px',
                  color: 'var(--text-ink)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-primary)',
                }}
              >
                DOWNLOAD CERTIFICATE ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
