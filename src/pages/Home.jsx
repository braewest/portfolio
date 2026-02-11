import { useRef } from "react";
import TechStack from '../components/TechStack';

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="hero">
        <h1>Braeden West</h1>
        <p>Software Engineer</p>
        <button onClick={() => window.open('../assets/Braeden-West-Resume.pdf', '_blank') }>
          Resume
        </button>
        <button onClick={scrollToAbout}>
          View My Work
        </button>
      </section>
      <section ref={aboutRef}>
        <h2>About Me</h2>
        <p className="card">
          I’m a software engineer specializing in full-stack development and systems-level problem solving. My work spans building production-ready web applications, designing secure backend architectures, and developing performance-critical software. I’ve led technical projects in both academic and real-world environments, including developing immersive educational content in collaboration with NASA and architecting a full-stack platform used for collaborative resource management. I focus on writing maintainable, scalable code, understanding systems end-to-end, and building software that is both technically sound and user-focused.
        </p>
        <TechStack />
      </section>
    </div>
  );
}