import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import experience from '../data/experience';
import '../styles/ExperienceDetail.css';

export default function ExperienceDetail() {
  const { id } = useParams();
  const item = experience.find((e) => e.id === id);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!item) {
    return (
      <section className="experience-detail-not-found">
        <h2>Experience not found</h2>
        <Link className="link" to="/experience">← Back to Experience</Link>
      </section>
    );
  }

  return (
    <section className="experience-detail">
      <Link className="link back-link" to="/experience">← Back to Experience</Link>

      <div className="experience-detail-header">
        <h2>{item.title}</h2>
        <p className="experience-detail-role">{item.role}</p>
        <p className="experience-detail-meta">{item.dates} &mdash; {item.location}</p>
        <div className="detail-links">
          {item.website && (
            <a className="link" href={item.website} target="_blank" rel="noreferrer">
              Visit Website →
            </a>
          )}
          {item.github && (
            <a className="link" href={item.github} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          )}
        </div>
      </div>

      <p className="experience-detail-description">{item.description}</p>

      <div className="experience-detail-highlights">
        <ul>
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      {item.images.length > 0 && (
        <div className="experience-gallery">
          {item.images.map((image, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => setLightboxSrc(image.src)}
            >
              <img src={image.src} alt={image.caption ?? `${item.title} screenshot ${i + 1}`} />
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
