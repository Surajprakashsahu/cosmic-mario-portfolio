import { hero } from '../data/resume.js';

const Contact = () => (
  <section style={{ marginTop: '2.5rem' }}>
    <p className="section-label">Open Wormhole</p>
    <div className="card contact-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.4rem' }}>Signal Suraj</h3>
        <p style={{ color: '#cbd2ff' }}>Ready for backend quests, voice adventures, and physics-fueled ideation.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <a href={`mailto:${hero.contact.email}`}>✉️ {hero.contact.email}</a>
        <a href={`tel:${hero.contact.phone}`}>📞 {hero.contact.phoneDisplay}</a>
        <a href={hero.contact.linkedin} target="_blank" rel="noreferrer">
          💼 LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
