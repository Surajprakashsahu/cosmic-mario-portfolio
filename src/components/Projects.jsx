import { motion } from 'framer-motion';
import { projects } from '../data/resume.js';

const Projects = () => (
  <section style={{ marginTop: '2.5rem' }}>
    <p className="section-label">Quest Log</p>
    <div className="project-grid">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          className="card pipe-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.05 }}
        >
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{project.name}</h3>
          <p style={{ color: '#d4f8d6', marginBottom: '0.4rem' }}>{project.blurb}</p>
          <p style={{ color: '#9ff0ff', fontSize: '0.95rem' }}>{project.impact}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.8rem' }}>
            {project.stack.map((item) => (
              <span key={item} className="relativistic-pill">
                {item}
              </span>
            ))}
          </div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="pixel-button"
              style={{ marginTop: '1rem', fontSize: '0.7rem', padding: '0.7rem 1rem' }}
            >
              Visit quest ↗
            </a>
          ) : null}
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
