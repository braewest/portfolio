import cap from '../assets/icons/tech/java.svg';
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
              <p className="dates">Aug. 2024 - May 2026 [Tempe, AZ]</p>
            </div>
          </div>
          <div className="card education-item">
            <div>
              <h3>Associate of Arts in Computer Information Systems</h3>
              <p className="school">
                Grand Rapids Community College
              </p>
              <p className="dates">Aug. 2023 - Aug. 2024 [Grand Rapids, MI]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}