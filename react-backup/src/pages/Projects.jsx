import { useState, useEffect } from 'react'
import './Projects.css'

// Mock projects data - in a real app, this could come from GitHub API
const projects = [
  {
    id: 1,
    name: 'KnowledgeRatio',
    description: 'A WarGames-inspired personal website built with React. Features terminal aesthetics and responsive design.',
    tech: ['React', 'CSS3', 'GitHub Pages'],
    status: 'ACTIVE',
    githubUrl: 'https://github.com/username/knowledgeratio',
    liveUrl: 'https://username.github.io/knowledgeratio',
    stars: 42,
    language: 'JavaScript'
  },
  {
    id: 2,
    name: 'Terminal-UI-Kit',
    description: 'A collection of React components styled to look like retro computer terminals. Perfect for creating nostalgic interfaces.',
    tech: ['React', 'TypeScript', 'Storybook'],
    status: 'DEVELOPMENT',
    githubUrl: 'https://github.com/username/terminal-ui-kit',
    liveUrl: null,
    stars: 156,
    language: 'TypeScript'
  },
  {
    id: 3,
    name: 'ASCII-Art-Generator',
    description: 'Convert images to ASCII art using various algorithms. CLI tool and web interface available.',
    tech: ['Python', 'PIL', 'Flask'],
    status: 'COMPLETED',
    githubUrl: 'https://github.com/username/ascii-art-generator',
    liveUrl: 'https://ascii-gen.herokuapp.com',
    stars: 89,
    language: 'Python'
  },
  {
    id: 4,
    name: 'Retro-Game-Engine',
    description: 'A lightweight 2D game engine inspired by 80s arcade games. Built for learning and experimentation.',
    tech: ['C++', 'SDL2', 'OpenGL'],
    status: 'ARCHIVED',
    githubUrl: 'https://github.com/username/retro-game-engine',
    liveUrl: null,
    stars: 23,
    language: 'C++'
  }
]

const Projects = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showProjects, setShowProjects] = useState(false)
  
  const headerText = 'SCANNING PROJECT REPOSITORY...'
  
  useEffect(() => {
    if (currentIndex < headerText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + headerText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 80)
      return () => clearTimeout(timer)
    } else {
      setTimeout(() => setShowProjects(true), 500)
    }
  }, [currentIndex, headerText])

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'var(--terminal-green)'
      case 'DEVELOPMENT': return 'var(--terminal-amber)'
      case 'COMPLETED': return 'var(--terminal-blue)'
      case 'ARCHIVED': return 'var(--terminal-dark-green)'
      default: return 'var(--terminal-green)'
    }
  }

  return (
    <div className="projects">
      <section className="projects-header">
        <div className="terminal-window">
          <div className="terminal-header">
            <span>PROJECT_DATABASE_V2.1</span>
            <span className="terminal-status">REPOSITORIES: {projects.length}</span>
          </div>
          <div className="terminal-body">
            <p className="typing-text">
              {displayText}
              <span className="cursor"></span>
            </p>
            
            {showProjects && (
              <div className="scan-info">
                <p>&gt; GITHUB_API: CONNECTED</p>
                <p>&gt; REPOSITORIES_FOUND: {projects.length}</p>
                <p>&gt; LANGUAGES_DETECTED: JavaScript, TypeScript, Python, C++</p>
                <p>&gt; TOTAL_STARS: {projects.reduce((sum, p) => sum + p.stars, 0)}</p>
                <p>&gt; GENERATING_PROJECT_MANIFEST...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {showProjects && (
        <section className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="project-header">
                <div className="project-title">
                  <h2>&gt; {project.name}</h2>
                  <div className="project-meta">
                    <span 
                      className="project-status" 
                      style={{ color: getStatusColor(project.status) }}
                    >
                      [{project.status}]
                    </span>
                    <span className="project-language">{project.language}</span>
                  </div>
                </div>
                <div className="project-stats">
                  <span className="stars">★ {project.stars}</span>
                </div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <span className="tech-label">TECH_STACK:</span>
                  <div className="tech-list">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-actions">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    [VIEW_SOURCE]
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      [LIVE_DEMO]
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {showProjects && (
        <section className="projects-footer">
          <div className="system-info">
            <p>&gt; SCAN_COMPLETE</p>
            <p>&gt; ALL_REPOSITORIES_LOADED</p>
            <p>&gt; FOR_MORE_PROJECTS_VISIT: github.com/username</p>
          </div>
        </section>
      )}
    </div>
  )
}

export default Projects
