import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutPage from './pages/About'
import ProjectPage from './pages/Project'
import DarkModePage from './pages/DarkMode'

function App() {

  return (
    <>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/dark-mode" element={<DarkModePage />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
