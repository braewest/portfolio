import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!project) {
    return (
      <section className="project-detail-not-found">
        <h2>Project not found</h2>
        <Link className="link" to="/projects">← Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <Link className="link back-link" to="/projects">← Back to Projects</Link>

      <div className="project-detail-header">
        <h2>{project.title}</h2>
        <div className="tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <a className="link" href={project.github} target="_blank" rel="noreferrer">
          View on GitHub →
        </a>
      </div>

      <p className="project-detail-description">{project.description}</p>

      <div className="project-detail-highlights">
        <ul>
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      {project.images.length > 0 && (
        <div className="project-gallery">
          {project.images.map((image, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => setLightboxSrc(image.src)}
            >
              <img src={image.src} alt={image.caption ?? `${project.title} screenshot ${i + 1}`} />
              {image.caption && <span className="gallery-caption">{image.caption}</span>}
            </button>
          ))}
        </div>
      )}

      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>✕</button>
          <img src={lightboxSrc} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
