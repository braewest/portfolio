import '../styles/TechStack.css';

// Icons
import azure from '../assets/icons/tech/azure.svg';
import blender from '../assets/icons/tech/blender.svg';
import cloudflare from '../assets/icons/tech/cloudflare.svg';
import cpp from '../assets/icons/tech/cpp.svg';
import csharp from '../assets/icons/tech/csharp.svg';
import css from '../assets/icons/tech/css.svg';
import git from '../assets/icons/tech/git.svg';
import html from '../assets/icons/tech/html.svg';
import java from '../assets/icons/tech/java.svg';
import javascript from '../assets/icons/tech/javascript.svg';
import kotlin from '../assets/icons/tech/kotlin.svg';
import nodejs from '../assets/icons/tech/nodejs.svg';
import oracle from '../assets/icons/tech/oracle.svg';
import react from '../assets/icons/tech/react.svg';
import sql from '../assets/icons/tech/sql.svg';
import swift from '../assets/icons/tech/swift.svg';
import unity from '../assets/icons/tech/unity.svg';

const techStack = [
  { name: "Java", logo: java },
  { name: "Kotlin", logo: kotlin },
  { name: "C#", logo: csharp },
  { name: "C / C++", logo: cpp },
  { name: "Swift", logo: swift },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: javascript },
  { name: "Git", logo: git },
  { name: "React", logo: react },
  { name: "Node.js", logo: nodejs },
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
