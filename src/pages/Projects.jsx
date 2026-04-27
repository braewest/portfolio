import { Link } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="card-list">
        {projects.map((project) => (
          <div key={project.id} className="card project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <p className="project-summary">{project.summary}</p>
            <div className="project-card-footer">
              <a className="link" href={project.github} target="_blank" rel="noreferrer">
                GitHub →
              </a>
              <Link className="link" to={`/projects/${project.id}`}>
                More Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
