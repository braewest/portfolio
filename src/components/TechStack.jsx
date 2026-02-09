import '../styles/TechStack.css';

// Icons
import azure from '../assets/icons/azure.svg';
import blender from '../assets/icons/blender.svg';
import cloudflare from '../assets/icons/cloudflare.svg';
import cpp from '../assets/icons/cpp.svg';
import csharp from '../assets/icons/csharp.svg';
import css from '../assets/icons/css.svg';
import git from '../assets/icons/git.svg';
import html from '../assets/icons/html.svg';
import java from '../assets/icons/java.svg';
import javascript from '../assets/icons/javascript.svg';
import kotlin from '../assets/icons/kotlin.svg';
import nodejs from '../assets/icons/nodejs.svg';
import oracle from '../assets/icons/oracle.svg';
import react from '../assets/icons/react.svg';
import sql from '../assets/icons/sql.svg';
import swift from '../assets/icons/swift.svg';
import unity from '../assets/icons/unity.svg';

const techStack = [
  { name: "Java", logo: java },
  { name: "Kotlin", logo: kotlin },
  { name: "C#", logo: csharp },
  { name: "C / C++", logo: cpp },
  { name: "Swift", logo: swift },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: javascript },
  { name: "React", logo: react },
  { name: "Node.js", logo: nodejs },
  { name: "Git", logo: git },
  { name: "Oracle", logo: oracle},
  { name: "Azure", logo: azure },
  { name: "Cloudflare", logo: cloudflare },
  { name: "MySQL", logo: sql },
  { name: "Unity", logo: unity },
  { name: "Blender", logo: blender },
];

export default function Home() {
  return (
    <section className="tech-stack">
      <h3>My Tech Stack</h3>

      <div className="tech-grid">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-card">
            <img src={tech.logo} alt={`${tech.name} logo`} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
