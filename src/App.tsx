import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutPage from './pages/About'
import ProjectPage from './pages/Project'
import ProjectContent from './components/ProjectContent'

function App() {

  return (
    <>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:projectId" element={<ProjectContent />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
