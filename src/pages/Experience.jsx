import TechStack from '../components/TechStack';
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
              <p className="school">
                Arizona State University
              </p>
              <p className="dates">Aug. 2024 - May 2026 | Tempe, AZ</p>
            </div>
          </div>
          <div className="card education-item">
            <div>
              <h3>Associate of Arts in Computer Information Systems</h3>
              <p className="school">
                Grand Rapids Community College
              </p>
              <p className="dates">Aug. 2023 - Aug. 2024 | Grand Rapids, MI</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Professional Experience</h2>
        <div className="card-list">
          <ExperienceCard 
            title="ASU/NASA Marston Exploration Theater"
            role="Technical Lead"
            dates="Sep. 2025 - Present"
            description="I led the technical development of immersive 3D educational theather show for the NASA Psyche mission, translating complex scientific concepts into accurate and engaging visual content. My work involved building and optimizing spacecraft and asteroid models, collaborating closely with researchers, and guiding technical decisions to ensure performance, clarity, and scientific integrity in a public-facing exhibit."
            link=""
          />
          <ExperienceCard 
            title="Packsyncr"
            role="Full Stack Developer"
            dates="Nov. 2025 - Present"
            description="I designed and developed a full-stack web platform focused on simplifying collaborative resource pack management. This project involved building scalable backend services, creating intuitive user interfaces, and architecting systems that support versioning, synchronization, and user collaboration, with an emphasis on performance and maintainability."
            link=""
          />
          <ExperienceCard 
            title="Next Level DFS"
            role="Web Developer"
            dates="Dec. 2025 - Jan. 2026"
            description="I contributed to the development and improvement of a production website by enhancing performance, refining UI behavior, and improving overall code maintainability. My role focused on implementing clean, responsive components and ensuring a smooth user experience while working within an existing workspace."
            link=""
          />
          <TechStack />
        </div>
      </section>
    </div>
  );
}

function ExperienceCard({ title, role, dates, description, link }) {
  return (
    <div className="card experience-item">
      <h3>{title}</h3>
      <p className="role">{role}</p>
      <p className="dates">{dates}</p>
      <p className="description">{description}</p>
      <a className="link" href={link}>
        More Details →
      </a>
    </div>
  );
}