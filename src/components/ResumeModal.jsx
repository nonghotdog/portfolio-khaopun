import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      const raf = requestAnimationFrame(() => {
        setIsRendered(true);
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    } else {
      const raf = requestAnimationFrame(() => {
        setIsAnimating(false);
      });
      timer = setTimeout(() => {
        setIsRendered(false);
      }, 380);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  if (!isRendered) return null;

  const handleCopyMarkdown = () => {
    const markdownContent = `# NARUDEE KAMOLWIT
${personalData.phone} | ${personalData.email} | ${personalData.location}
Portfolio: ${personalData.website} | GitHub: ${personalData.github} | LinkedIn: ${personalData.linkedin}

PROFESSIONAL SUMMARY
Detail-oriented Software Developer & Health Data Enthusiast with hands-on experience in empirical research, multimedia systems, and academic leadership. Demonstrated track record in delivering accessible digital tools, leading student organizations, and earning 1st Runner-Up academic research honors. Seeking an engineering role to build reliable, human-centered digital solutions.

EXPERIENCE
${personalData.experiences.map((exp) => `${exp.title} | ${exp.company}
${exp.period} — ${exp.location}
${exp.achievements.map((ach) => `- ${ach}`).join('\n')}`).join('\n\n')}

PROJECTS
${personalData.projects.map((proj) => `${proj.title}
Role: ${proj.role} | Tools: ${proj.tools.join(', ')}
${proj.responsibilities.map((resp) => `- ${resp}`).join('\n')}`).join('\n\n')}

EDUCATION
Bachelor of Science in Information and Communication Technology (B.Sc. in ICT)
Faculty of ICT, Mahidol University | 2026 — Present
- Specializing in Software Development & Health Data Informatics

High School Diploma (Business & Mathematics Program - Intensive)
Saint Joseph Thiphawan School | 2024 — 2026
- Cumulative GPAX: 3.58 / 4.00 (Annual Outstanding Academic Student Award)
- Special Focus: Health Information Systems & Academic IS Research

SKILLS
- Programming: Python (Proficient), C# (Intermediate), C (Beginner)
- UI/UX & Tools: Figma (UI/UX - Proficient)
- Soft Skills: Logical Thinking, Stage Presentation & Public Speaking (MC), Teamwork & Coordination, Attention to Detail, Fast Learner
- Languages: Thai (Native), English (Professional Working / CEFR B2 Prep)

HONORS & CERTIFICATIONS
${personalData.awards.map((award) => `- ${award.title} — ${award.issuer} (${award.date})`).join('\n')}`;

    navigator.clipboard.writeText(markdownContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div
      className={`modal-backdrop-anim ${isAnimating ? 'active' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(20, 17, 15, 0.82)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className={`modal-card-spring ${isAnimating ? 'active' : ''}`}
        style={{
          backgroundColor: '#fff',
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div
          style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--bg-paper)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--color-primary)' }}>◆</span>
            <span className="font-mono-meta" style={{ fontSize: '11px', color: 'var(--text-ink)' }}>
              ATS-COMPLIANT RESUME PREVIEW
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <button
              onClick={handleCopyMarkdown}
              className="font-mono-meta"
              style={{
                fontSize: '10px',
                padding: '6px 12px',
                backgroundColor: copied ? '#10b981' : 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
            >
              {copied ? '✓ COPIED TO CLIPBOARD' : 'COPY MARKDOWN'}
            </button>

            <button
              onClick={() => window.print()}
              className="font-mono-meta"
              style={{
                fontSize: '10px',
                padding: '6px 12px',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border)',
                color: 'var(--text-ink)',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              PRINT / PDF
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.4rem',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                marginLeft: '8px',
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(90deg) scale(1.15)';
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.backgroundColor = 'var(--color-primary-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Resume Content Body (Clean ATS Styling with Stagger Cascade) */}
        <div
          style={{
            padding: '2.5rem 3rem',
            overflowY: 'auto',
            fontFamily: 'var(--font-sans)',
            color: '#1a1a1a',
            lineHeight: 1.5,
          }}
        >
          {/* Header */}
          <div className="resume-stagger-item" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
              NARUDEE KAMOLWIT
            </h1>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>
              {personalData.phone} | {personalData.email} | {personalData.location}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '2px' }}>
              Portfolio: {personalData.website} | GitHub: {personalData.github} | LinkedIn: {personalData.linkedin}
            </p>
          </div>

          <hr className="resume-stagger-item delay-100" style={{ border: 'none', borderTop: '1px solid #ddd', margin: '1.2rem 0' }} />

          {/* Professional Summary */}
          <section className="resume-stagger-item delay-100" style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, borderBottom: '1px solid #111', paddingBottom: '3px', marginBottom: '0.6rem' }}>
              PROFESSIONAL SUMMARY
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#333', lineHeight: 1.6 }}>
              Detail-oriented Software Developer &amp; Health Data Enthusiast with hands-on experience in empirical research, multimedia systems, and academic leadership. Demonstrated track record in delivering accessible digital tools, leading student organizations, and earning 1st Runner-Up academic research honors. Seeking an engineering role to build reliable, human-centered digital solutions.
            </p>
          </section>

          {/* Experience */}
          <section className="resume-stagger-item delay-200" style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, borderBottom: '1px solid #111', paddingBottom: '3px', marginBottom: '0.8rem' }}>
              EXPERIENCE
            </h2>

            {personalData.experiences.map((exp, i) => (
              <div key={i} style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '0.96rem' }}>{exp.title}</strong>
                  <span style={{ fontSize: '0.88rem', color: '#666' }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#444', marginBottom: '0.4rem' }}>
                  {exp.company} — {exp.location}
                </div>
                <ul style={{ paddingLeft: '1.4rem', fontSize: '0.88rem', color: '#333', lineHeight: 1.55 }}>
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} style={{ marginBottom: '3px' }}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="resume-stagger-item delay-300" style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, borderBottom: '1px solid #111', paddingBottom: '3px', marginBottom: '0.8rem' }}>
              PROJECTS
            </h2>

            {personalData.projects.map((proj, i) => (
              <div key={i} style={{ marginBottom: '1.1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '0.96rem' }}>{proj.title}</strong>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>{proj.tools.join(', ')}</span>
                </div>
                <div style={{ fontSize: '0.88rem', fontStyle: 'italic', color: '#444' }}>
                  Role: {proj.role}
                </div>
                <ul style={{ paddingLeft: '1.4rem', fontSize: '0.88rem', color: '#333', marginTop: '4px', lineHeight: 1.5 }}>
                  {proj.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="resume-stagger-item delay-400" style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, borderBottom: '1px solid #111', paddingBottom: '3px', marginBottom: '0.8rem' }}>
              EDUCATION
            </h2>

            {personalData.education.map((edu, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '0.96rem' }}>{edu.degree}</strong>
                  <span style={{ fontSize: '0.88rem', color: '#666' }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#444' }}>{edu.institution}</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '2px' }}>{edu.highlight}</div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="resume-stagger-item delay-500" style={{ marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, borderBottom: '1px solid #111', paddingBottom: '3px', marginBottom: '0.6rem' }}>
              SKILLS
            </h2>
            <div style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#333' }}>
              <p><strong>Programming:</strong> Python (Proficient), C# (Intermediate), C (Beginner)</p>
              <p><strong>UI/UX &amp; Design Tools:</strong> Figma (Proficient)</p>
              <p><strong>Professional Attributes:</strong> Logical Thinking, Stage Presentation &amp; Public Speaking (MC), Cross-functional Teamwork, Attention to Detail, Fast Learner</p>
              <p><strong>Languages:</strong> Thai (Native), English (Professional Working / CEFR B2 Prep)</p>
            </div>
          </section>

          {/* Honors */}
          <section className="resume-stagger-item delay-500">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, borderBottom: '1px solid #111', paddingBottom: '3px', marginBottom: '0.6rem' }}>
              HONORS &amp; CERTIFICATIONS
            </h2>
            <ul style={{ paddingLeft: '1.4rem', fontSize: '0.88rem', color: '#333', lineHeight: 1.6 }}>
              {personalData.awards.map((award, i) => (
                <li key={i}>
                  <strong>{award.title}</strong> — {award.issuer} ({award.date})
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
