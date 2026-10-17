import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export default function Projects() {
  const categories = ['All', ...Array.from(new Set(personalData.projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = personalData.projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 1.5rem',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ marginBottom: '3rem' }}>
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
            Selected <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>projects</span>
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', maxWidth: '40rem' }}>
            Academic research, empirical studies, and applied technical projects demonstrating analytical rigor, structured problem-solving, and clear data communication.
          </p>

          {/* Filter Pills (only shown if multiple categories exist) */}
          {categories.length > 2 && (
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {categories.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="font-mono-meta btn-glow"
                  style={{
                    fontSize: '10px',
                    padding: '6px 14px',
                    borderRadius: '2px',
                    border: '1px solid',
                    borderColor: activeFilter === f ? 'var(--color-primary)' : 'var(--color-border)',
                    backgroundColor: activeFilter === f ? 'var(--color-primary)' : 'transparent',
                    color: activeFilter === f ? '#fff' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects List (Rubric 6 Points: Name, Description, Individual Role, Tools, Evidence) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="panel-inset card-interactive reveal-on-scroll delay-100"
              style={{
                padding: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              {/* Meta Tag: Category & Number */}
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
                  <span>◆</span> {project.category}
                </span>
                <span
                  className="font-mono-meta"
                  style={{ fontSize: '10px', color: 'var(--text-muted)' }}
                >
                  PROJECT 0{index + 1}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                  color: 'var(--text-ink)',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                }}
              >
                "{project.tagline}"
              </p>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-body)',
                  lineHeight: 1.75,
                  fontSize: '1rem',
                  marginBottom: '1.8rem',
                }}
              >
                {project.description}
              </p>

              {/* Role & Key Contributions (Rubric requirement) */}
              <div
                style={{
                  backgroundColor: 'var(--bg-paper)',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '2px',
                  borderLeft: '3px solid var(--color-primary)',
                  marginBottom: '1.8rem',
                }}
              >
                <div style={{ marginBottom: '0.6rem' }}>
                  <span
                    className="font-mono-meta"
                    style={{ fontSize: '10px', color: 'var(--text-muted)' }}
                  >
                    INDIVIDUAL ROLE &amp; CONTRIBUTION:
                  </span>{' '}
                  <strong style={{ color: 'var(--text-ink)', marginLeft: '6px' }}>
                    {project.role}
                  </strong>
                </div>

                <ul
                  style={{
                    paddingLeft: '1.2rem',
                    color: 'var(--text-body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                  }}
                >
                  {project.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Tools & Evidence Links Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                {/* Tools Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        padding: '3px 10px',
                        backgroundColor: 'var(--bg-panel)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '2px',
                        fontSize: '12px',
                        color: 'var(--text-body)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Evidence Links (Rubric requirement: screenshots, demos, links, or GitHub / Award) */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {project.evidence?.award && (
                    <span
                      className="font-mono-meta"
                      style={{
                        fontSize: '11px',
                        padding: '6px 12px',
                        backgroundColor: 'rgba(158, 62, 42, 0.08)',
                        border: '1px solid var(--color-primary)',
                        borderRadius: '2px',
                        color: 'var(--color-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: 600,
                      }}
                    >
                      🏆 {project.evidence.award}
                    </span>
                  )}

                  {project.evidence?.image && (
                    <a
                      href={project.evidence.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '6px 14px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        fontSize: '12px',
                        textDecoration: 'none',
                        borderRadius: '2px',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                      }}
                    >
                      📜 View Certificate Evidence ↗
                    </a>
                  )}

                  {project.evidence?.github && (
                    <a
                      href={project.evidence.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw"
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-ink)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>◆</span> GitHub Repository ↗
                    </a>
                  )}

                  {project.evidence?.demo && (
                    <a
                      href={project.evidence.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '6px 14px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        fontSize: '12px',
                        textDecoration: 'none',
                        borderRadius: '2px',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                      }}
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
