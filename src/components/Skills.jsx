import { skills } from '../data/resume.js';

const skillGroups = [
  { label: 'Core Power-Ups', key: 'core' },
  { label: 'Cloud Pipes', key: 'cloud' },
  { label: 'Data Orbs', key: 'data' },
  { label: 'CI/CD Cannons', key: 'delivery' },
  { label: 'Secondary Hacks', key: 'secondary' },
  { label: 'Languages', key: 'languages' }
];

const Skills = () => (
  <section style={{ marginTop: '2.5rem' }}>
    <p className="section-label">Toolkit</p>
    <div className="card">
      <div className="skill-columns">
        {skillGroups.map((group) => (
          <article key={group.key}>
            <h4 style={{ fontSize: '0.95rem', color: '#ffde89', marginBottom: '0.4rem' }}>{group.label}</h4>
            <div className="skill-item">
              {skills[group.key].join(' · ')}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
