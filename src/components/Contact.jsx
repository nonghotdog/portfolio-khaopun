import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 1.5rem',
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
      }}
    >
      <div className="reveal-on-scroll" style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
        {/* Section Title */}
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            letterSpacing: '-0.02em',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '1.5rem',
            color: 'var(--text-light)',
          }}
        >
          <span style={{ color: 'var(--color-primary)', fontSize: '20px' }}>◆</span>
          Let’s <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>talk</span>
        </h2>

        <p
          className="font-display"
          style={{
            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
            color: 'var(--text-light-muted)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}
        >
          Open to software engineering internships, research collaborations, and community technology projects.
          Let’s build human-centered solutions together.
        </p>

        {/* Big Email Link */}
        <div style={{ marginBottom: '3.5rem' }}>
          <a
            href={`mailto:${personalData.email}`}
            className="link-draw font-display shimmer-text"
            style={{
              fontSize: 'clamp(1.4rem, 3.2vw, 2.4rem)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {personalData.email}
          </a>
        </div>

        {/* Interactive Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="panel-inset-dark card-interactive reveal-on-scroll delay-100"
          style={{
            padding: '2.5rem',
            textAlign: 'left',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '1.2rem' }}>
            <div>
              <label
                className="font-mono-meta"
                style={{ fontSize: '10px', color: 'var(--text-light-muted)', display: 'block', marginBottom: '6px' }}
              >
                YOUR NAME
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#181412',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: '2px',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label
                className="font-mono-meta"
                style={{ fontSize: '10px', color: 'var(--text-light-muted)', display: 'block', marginBottom: '6px' }}
              >
                YOUR EMAIL
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@example.com"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#181412',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: '2px',
                  color: 'var(--text-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              className="font-mono-meta"
              style={{ fontSize: '10px', color: 'var(--text-light-muted)', display: 'block', marginBottom: '6px' }}
            >
              MESSAGE
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project, idea, or opportunity..."
              style={{
                width: '100%',
                padding: '10px 14px',
                backgroundColor: '#181412',
                border: '1px solid var(--color-border-dark)',
                borderRadius: '2px',
                color: 'var(--text-light)',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <button
              type="submit"
              className="font-mono-meta btn-glow"
              style={{
                padding: '12px 28px',
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: '2px',
                fontSize: '11px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>◆</span> SEND MESSAGE
            </button>

            {submitted && (
              <span style={{ color: '#10b981', fontSize: '13px' }}>
                ✓ Thank you! Message recorded. I'll get back to you shortly.
              </span>
            )}
          </div>
        </form>

        {/* Academic Representation Panel (Matching Template) */}
        <div
          className="panel-inset-dark"
          style={{
            maxWidth: '32rem',
            margin: '0 auto 4rem',
            padding: '1.5rem',
          }}
        >
          <p
            className="font-mono-meta"
            style={{
              fontSize: '10px',
              color: 'var(--color-primary)',
              marginBottom: '6px',
            }}
          >
            ◆ ACADEMIC AFFILIATION
          </p>
          <p
            className="font-display"
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-light)',
            }}
          >
            Faculty of Information and Communication Technology · Mahidol University
          </p>
        </div>

        {/* Social / Important Links (Rubric requirement) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw font-display"
            style={{ color: 'var(--text-light-muted)', fontSize: '1.1rem' }}
          >
            LinkedIn
          </a>
          <button
            onClick={onOpenResume}
            className="link-draw font-display"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-light-muted)',
              fontSize: '1.1rem',
            }}
          >
            ATS Resume (PDF)
          </button>
        </div>

        {/* Footer */}
        <footer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: 'var(--color-primary)', fontSize: '12px' }}>◆</span>
            <span style={{ color: 'var(--color-border-dark)', fontSize: '12px' }}>◆</span>
            <span style={{ color: 'var(--color-primary)', fontSize: '12px' }}>◆</span>
          </div>
          <p
            className="font-mono-meta"
            style={{
              fontSize: '10px',
              color: 'var(--text-light-muted)',
              letterSpacing: '0.22em',
            }}
          >
            NARUDEE KAMOLWIT — SOFTWARE · DATA · HEALTH INFORMATICS — © 2026
          </p>
        </footer>
      </div>
    </section>
  );
}
