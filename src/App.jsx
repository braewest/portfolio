import ConstellationBackground from "./components/ConstellationBackground.jsx";
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import './styles/App.css'

// Pages
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Personal from './pages/Personal.jsx';

function App() {
  return (
    <>
      <ConstellationBackground />
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </main>
    </>
  );
}

export default App
