import CosmicLore from './components/CosmicLore.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import QuantumCursor from './components/QuantumCursor.jsx';
import Skills from './components/Skills.jsx';

const App = () => (
  <>
    <div className="star-field" />
    <div className="cosmic-veil" />
    <QuantumCursor />
    <main>
      <Hero />
      <div className="glow-divider" />
      <CosmicLore />
      <div className="glow-divider" />
      <Experience />
      <div className="glow-divider" />
      <Projects />
      <div className="glow-divider" />
      <Skills />
      <div className="glow-divider" />
      <Contact />
    </main>
  </>
);

export default App;
