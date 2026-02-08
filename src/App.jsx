import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css'

import ConstellationBackground from "./components/ConstellationBackground.jsx";

function App() {
  return (
    <>
      <main>
        <ConstellationBackground />
      </main>
    </>
  );
}

export default App
