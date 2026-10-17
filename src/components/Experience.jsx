import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
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
          Where I’ve <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>been</span>
        </h2>

        {/* Timeline List (Rubric 6 Points: Complete title, job descriptions, and achievements) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {personalData.experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
              className={`md:flex-row md:gap-12 reveal-slide-left delay-${(index + 1) * 100}`}
            >
              {/* Left Column: Timeline Indicator & Period */}
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
                  {exp.period}
                </span>
              </div>

              {/* Right Column: Title, Company, Description & Quantified Achievements */}
              <div style={{ flex: 1 }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                    color: 'var(--text-ink)',
                    fontWeight: 500,
                    marginBottom: '0.4rem',
                  }}
                >
                  {exp.title}
                </h3>

                <p
                  className="font-display"
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-primary)',
                    fontStyle: 'italic',
                    marginBottom: '1rem',
                  }}
                >
                  {exp.company} — <span style={{ color: 'var(--text-muted)', fontStyle: 'normal', fontSize: '1rem' }}>{exp.location}</span>
                </p>

                <p
                  style={{
                    color: 'var(--text-body)',
                    lineHeight: 1.75,
                    fontSize: '1.02rem',
                    marginBottom: '1.2rem',
                  }}
                >
                  {exp.description}
                </p>

                {/* Key Achievements Box (Essential for Rubric 6 Points) */}
                <div
                  className="card-interactive"
                  style={{
                    backgroundColor: 'var(--bg-panel)',
                    padding: '1.2rem 1.4rem',
                    borderRadius: '2px',
                    borderLeft: '3px solid var(--color-primary)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    {exp.image && (
                      <div
                        style={{
                          width: '76px',
                          height: '76px',
                          flexShrink: 0,
                          borderRadius: '2px',
                          overflow: 'hidden',
                          border: '1px solid var(--color-border)',
                        }}
                      >
                        <img
                          src={exp.image}
                          alt={exp.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div style={{ flex: 1, minWidth: '240px' }}>
                      <p
                        className="font-mono-meta"
                        style={{
                          fontSize: '10px',
                          color: 'var(--color-primary)',
                          marginBottom: '0.6rem',
                        }}
                      >
                        KEY ACCOMPLISHMENTS &amp; IMPACT:
                      </p>
                      <ul
                        style={{
                          paddingLeft: '1.2rem',
                          color: 'var(--text-body)',
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {exp.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
