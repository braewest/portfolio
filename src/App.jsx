import './styles/App.css'

import ConstellationBackground from "./components/ConstellationBackground.jsx";
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <main>
        <ConstellationBackground />
        <div className="content">
          <Navbar />

          <section className="hero">
            <h1>Braeden West</h1>
            <p>Software Engineer</p>
            <button>
              View My Work
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

export default App
