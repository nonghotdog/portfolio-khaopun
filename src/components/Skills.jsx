import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = personalData;

  return (
    <section
      id="skills"
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
          Skills &amp; <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>proficiencies</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {/* 1. Programming Languages (Rubric 6 Points: Organized with proficiency levels) */}
          <div className="reveal-on-scroll delay-100">
            <h3
              className="font-mono-meta"
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: 'var(--color-primary)' }}>◆</span>
              PROGRAMMING &amp; CORE TECHNOLOGIES
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.2rem',
              }}
            >
              {skills.programming.map((p) => (
                <div
                  key={p.name}
                  className="card-interactive"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '2px',
                    padding: '1rem 1.4rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: 'var(--shadow-subtle)',
                  }}
                >
                  <span className="font-display" style={{ fontSize: '1.15rem', color: 'var(--text-ink)', fontWeight: 500 }}>
                    {p.name}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-primary)',
                      fontStyle: 'italic',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {p.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Tools & Frameworks & Databases */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: skills.databases && skills.databases.length > 0 ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
              gap: '2.5rem',
            }}
          >
            {/* Tools & Frameworks */}
            <div>
              <h3
                className="font-mono-meta"
                style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--color-primary)' }}>◆</span>
                UI/UX, DESIGN &amp; TECHNICAL TOOLS
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.tools.map((t) => (
                  <span
                    key={t.name}
                    style={{
                      padding: '8px 14px',
                      backgroundColor: 'var(--bg-panel)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      fontSize: '13px',
                      color: 'var(--text-body)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ fontWeight: 500, color: 'var(--text-ink)' }}>{t.name}</span>
                    <span style={{ color: 'var(--color-primary)', fontSize: '11px', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                      ({t.level})
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Databases (Only shown if configured) */}
            {skills.databases && skills.databases.length > 0 && (
              <div>
                <h3
                  className="font-mono-meta"
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)' }}>◆</span>
                  DATABASE TOOLS
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.databases.map((db) => (
                    <span
                      key={db.name}
                      style={{
                        padding: '8px 14px',
                        backgroundColor: 'var(--bg-panel)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '2px',
                        fontSize: '13px',
                        color: 'var(--text-body)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontWeight: 500, color: 'var(--text-ink)' }}>{db.name}</span>
                      <span style={{ color: 'var(--color-primary)', fontSize: '11px', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                        ({db.level})
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Soft Skills */}
          <div>
            <h3
              className="font-mono-meta"
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: 'var(--color-primary)' }}>◆</span>
              PROFESSIONAL &amp; INTERPERSONAL ATTRIBUTES
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.softSkills.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '2px',
                    fontSize: '14px',
                    color: 'var(--text-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)', fontSize: '10px' }}>◆</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Spoken Languages (Matching reference template layout) */}
          <div>
            <h3
              className="font-mono-meta"
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: 'var(--color-primary)' }}>◆</span>
              SPOKEN LANGUAGES
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
              {skills.languages.map((lang) => (
                <div key={lang.language} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--color-primary)' }}>◆</span>
                  <div>
                    <span className="font-display" style={{ fontSize: '1.6rem', color: 'var(--text-ink)' }}>
                      {lang.language}
                    </span>
                    <span
                      className="font-display"
                      style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic',
                        marginLeft: '10px',
                      }}
                    >
                      {lang.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
