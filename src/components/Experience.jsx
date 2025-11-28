import { motion } from 'framer-motion';
import { experience } from '../data/resume.js';

const Experience = () => (
  <section style={{ marginTop: '2.5rem' }}>
    <p className="section-label">Warped Timeline</p>
    <div className="card" style={{ position: 'relative' }}>
      <div className="timeline-line" />
      <div className="timeline">
        {experience.map((role, index) => (
          <motion.article
            key={role.company}
            className="timeline-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="timeline-node" style={{ top: '20px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{role.role}</h3>
            <p style={{ fontWeight: 600, color: '#ffde89' }}>
              {role.company} {role.client ? `· ${role.client}` : ''}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#a7a6c5' }}>{role.period}</p>
            <ul style={{ marginTop: '0.9rem', color: '#d6d4f6' }}>
              {role.highlights.map((point) => (
                <li key={point} style={{ marginBottom: '0.65rem' }}>
                  {point}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {role.tech.map((tool) => (
                <span key={tool} className="relativistic-pill">
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
