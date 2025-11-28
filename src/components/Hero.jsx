import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { hero as heroData } from '../data/resume.js';
import { useNanoBananaAvatar } from '../hooks/useNanoBananaAvatar.js';

const realPhoto = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80';
const relativityTags = ['Gravity hacker', 'Relativity daydreams', 'Time dilation fan', 'Black-hole debugger'];

const Hero = () => {
  const [showAvatar, setShowAvatar] = useState(false);
  const [tagIndex, setTagIndex] = useState(0);
  const { avatarUrl, status } = useNanoBananaAvatar('suraj-cosmic-warp');

  useEffect(() => {
    const flipTimer = setInterval(() => setShowAvatar((prev) => !prev), 6500);
    const tagTimer = setInterval(() => setTagIndex((prev) => (prev + 1) % relativityTags.length), 4200);
    return () => {
      clearInterval(flipTimer);
      clearInterval(tagTimer);
    };
  }, []);

  return (
    <section className="card" style={{ marginBottom: '2.5rem', position: 'relative' }}>
      <div className="avatar-stage">
        <span className="avatar-ring" />
        <span className="avatar-ring" style={{ animationDuration: '18s', borderStyle: 'dotted' }} />
        <motion.div
          className={`avatar-flip ${showAvatar ? 'show-avatar' : ''}`}
          animate={{ boxShadow: showAvatar ? '0 10px 40px rgba(255, 77, 109, 0.6)' : '0 10px 40px rgba(4,3,15,0.9)' }}
          transition={{ duration: 0.8 }}
        >
          <img className="avatar-image real" src={realPhoto} alt="Suraj real" />
          <img
            className="avatar-image avatar"
            src={avatarUrl || 'https://api.dicebear.com/7.x/micah/svg?seed=Relativity'}
            alt="Nanobanana avatar"
          />
        </motion.div>
        <motion.div
          className="relativistic-pill"
          style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)' }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          {status === 'ready' ? 'Avatar in warp' : status === 'loading' ? 'Summoning avatar…' : 'Avatar cached'}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginTop: '3rem' }}>
        <p className="section-label">MARIO X EINSTEIN MODE</p>
        <h1 className="hero-title">{heroData.name}</h1>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem', color: '#d3d1f0' }}>{heroData.summary}</p>
        <motion.p
          style={{ marginTop: '0.9rem', color: '#ff9eca', fontFamily: 'Press Start 2P, cursive', fontSize: '0.75rem' }}
          key={tagIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {relativityTags[tagIndex]}
        </motion.p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <a className="pixel-button" href={`mailto:${heroData.contact.email}`}>
            Launch warp email
          </a>
          <a className="relativistic-pill" href={heroData.contact.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
