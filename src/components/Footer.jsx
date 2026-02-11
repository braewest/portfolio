import '../styles/Footer.css';

// Icons
import github from '../assets/icons/tech/github.svg';
import linkedin from '../assets/icons/tech/linkedin.svg';
import email from '../assets/icons/tech/email.svg';

export default function Footer() {
    return (
        <footer>
            <div className="social-icons">
                <a href="https://github.com/braewest" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/braeden-west/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="mailto:braedenwest1@gmail.com">
                    <img src={email} alt="Email" />
                </a>
            </div>
            <p>Braeden West ©{new Date().getFullYear()}</p>
        </footer>
    );
}