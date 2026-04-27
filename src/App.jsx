import ConstellationBackground from "./components/ConstellationBackground.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from "react-router-dom";
import './styles/App.css'

// Pages
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Personal from './pages/Personal.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import ExperienceDetail from './pages/ExperienceDetail.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <>
      <ConstellationBackground />
      <ScrollToTop />
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
