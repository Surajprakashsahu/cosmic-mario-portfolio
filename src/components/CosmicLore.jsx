import { motion } from 'framer-motion';

const lore = [
  {
    title: 'Gravity Wells',
    description: 'Pricing engines stay orbital by treating constraints like gravity equations.',
    highlight: 'Stable Orbits'
  },
  {
    title: 'Relativity HUD',
    description: 'A/B testing timelines show how long features take in different frames of reference.',
    highlight: 'Time Dilation'
  },
  {
    title: 'Singularity Mode',
    description: 'Complex incidents compress into actionable runbooks — zero entropy handoffs.',
    highlight: 'Black + White Holes'
  },
  {
    title: 'Chrono Pipes',
    description: 'CI/CD pipelines behave like warp pipes, propelling artifacts safely through spacetime.',
    highlight: 'Warp Speed'
  }
];

const CosmicLore = () => (
  <section style={{ marginTop: '2.5rem' }}>
    <p className="section-label">Gravity Codex</p>
    <div className="cosmic-loop">
      {lore.map((item, index) => (
        <motion.article
          key={item.title}
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.08 }}
        >
          <p style={{ fontFamily: 'Press Start 2P, cursive', fontSize: '0.65rem', color: '#ff9eca' }}>{item.highlight}</p>
          <h3 style={{ margin: '0.6rem 0' }}>{item.title}</h3>
          <p style={{ color: '#cfcfe7' }}>{item.description}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default CosmicLore;
