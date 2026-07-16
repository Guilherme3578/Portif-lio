import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import { projects } from './data/content'
import './App.css'

function App() {
  const [activeSlug, setActiveSlug] = useState(null)
  const activeProject = projects.find((project) => project.slug === activeSlug)

  const goToSection = (id) => {
    if (activeSlug) {
      setActiveSlug(null)
    }
    requestAnimationFrame(() => {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const openProject = (slug) => {
    setActiveSlug(slug)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }

  const closeProject = () => {
    setActiveSlug(null)
    requestAnimationFrame(() => {
      document.getElementById('projetos')?.scrollIntoView()
    })
  }

  return (
    <>
      <Nav onNavigate={goToSection} />

      <main>
        {activeProject ? (
          <ProjectDetail
            key={activeProject.slug}
            project={activeProject}
            onBack={closeProject}
          />
        ) : (
          <>
            <Hero onNavigate={goToSection} />
            <About />
            <Education />
            <Projects onOpenProject={openProject} />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}

export default App
