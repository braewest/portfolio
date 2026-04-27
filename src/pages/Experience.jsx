import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack';
import experience from '../data/experience';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <div>
      <section>
        <h2>Education</h2>
        <div className="card-list">
          <div className="card education-item">
            <div>
              <h3>Bachelor of Science in Computer Science (Software Engineering)</h3>
              <p className="school">Arizona State University</p>
              <p className="dates">Aug. 2024 - May 2026 | Tempe, AZ</p>
            </div>
          </div>
          <div className="card education-item">
            <div>
              <h3>Associate of Arts in Computer Information Systems</h3>
              <p className="school">Grand Rapids Community College</p>
              <p className="dates">Aug. 2023 - Aug. 2024 | Grand Rapids, MI</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Professional Experience</h2>
        <div className="card-list">
          {experience.map((item) => (
            <ExperienceCard key={item.id} {...item} />
          ))}
          <TechStack />
        </div>
      </section>
    </div>
  );
}

function ExperienceCard({ id, title, role, dates, summary, github, website }) {
  return (
    <div className="card experience-item">
      <h3>{title}</h3>
      <p className="role">{role}</p>
      <p className="dates">{dates}</p>
      <p className="description">{summary}</p>
      <div className="experience-card-footer">
        {website && (
          <a className="link" href={website} target="_blank" rel="noreferrer">Website →</a>
        )}
        {github && (
          <a className="link" href={github} target="_blank" rel="noreferrer">GitHub →</a>
        )}
        <Link className="link learn-more" to={`/experience/${id}`}>More Details →</Link>
      </div>
    </div>
  );
}
