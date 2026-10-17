import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: '6rem 1.5rem',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        {/* Section Header */}
        <h2
          className="font-display reveal-on-scroll"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
            letterSpacing: '-0.02em',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '3.5rem',
            color: 'var(--text-ink)',
          }}
        >
          <span style={{ color: 'var(--color-primary)', fontSize: '18px' }}>◆</span>
          What I <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>studied</span>
        </h2>

        {/* Education Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {personalData.education.map((edu, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
              className={`md:flex-row md:gap-12 reveal-slide-left delay-${(index + 1) * 150}`}
            >
              {/* Left Column: Period */}
              <div
                style={{
                  minWidth: '200px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <span
                  className="pulse-node"
                  style={{
                    color: 'var(--color-primary)',
                    fontSize: '12px',
                    lineHeight: '1.4',
                    display: 'inline-block',
                  }}
                  aria-hidden="true"
                >
                  ◆
                </span>
                <span
                  className="font-mono-meta"
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {edu.period}
                </span>
              </div>

              {/* Right Column: Degree & Details */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)',
                        color: 'var(--text-ink)',
                        fontWeight: 500,
                        marginBottom: '0.4rem',
                      }}
                    >
                      {edu.degree}
                    </h3>

                    <p
                      className="font-display"
                      style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-primary)',
                        fontStyle: 'italic',
                        marginBottom: '0.8rem',
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>

                  {index === 0 && (
                    <div
                      className="card-interactive"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        border: '1px solid var(--color-border)',
                        flexShrink: 0,
                      }}
                      title="Faculty of ICT Student Identity"
                    >
                      <img
                        src="/images/IMG_4864.JPG"
                        alt="Khao Pun - Faculty of ICT Mahidol University"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </div>

                <p
                  style={{
                    color: 'var(--text-body)',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {edu.highlight}
                </p>

                {/* Relevant Coursework (Only if specified) */}
                {edu.courses && edu.courses.length > 0 && (
                  <div style={{ marginTop: '0.8rem' }}>
                    <p
                      className="font-mono-meta"
                      style={{
                        fontSize: '10px',
                        color: 'var(--text-muted)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      RELEVANT COURSEWORK &amp; CURRICULUM:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '4px 10px',
                            backgroundColor: 'var(--bg-panel)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '2px',
                            fontSize: '12px',
                            color: 'var(--text-body)',
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
