import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const introText = 'INITIALIZING KNOWLEDGE_RATIO SYSTEM...'
  
  useEffect(() => {
    if (currentIndex < introText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + introText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, introText])

  return (
    <div className="home">
      <section className="hero">
        <div className="terminal-window">
          <div className="terminal-header">
            <span>WOPR_TERMINAL_V2.0</span>
            <span className="terminal-status">STATUS: ONLINE</span>
          </div>
          <div className="terminal-body">
            <p className="typing-text">
              {displayText}
              <span className="cursor"></span>
            </p>
            
            {currentIndex >= introText.length && (
              <div className="intro-content">
                <div className="boot-sequence">
                  <p>&gt; LOADING USER PROFILE...</p>
                  <p>&gt; ACCESS LEVEL: ADMIN</p>
                  <p>&gt; SECURITY CLEARANCE: VERIFIED</p>
                  <p>&gt; WELCOME TO THE KNOWLEDGE RATIO NETWORK</p>
                </div>
                
                <div className="profile-section">
                  <h1 className="name-display">
                    &gt; USER: JOSHUA_
                    <span className="cursor"></span>
                  </h1>
                  
                  <div className="bio">
                    <p>SOFTWARE ENGINEER | TECH ENTHUSIAST | OPEN SOURCE CONTRIBUTOR</p>
                    <p>SPECIALIZING IN: JAVASCRIPT, REACT, NODE.JS, PYTHON</p>
                    <p>MISSION: BUILDING SOLUTIONS THAT MATTER</p>
                  </div>
                  
                  <div className="stats">
                    <div className="stat-item">
                      <span className="stat-label">PROJECTS_DEPLOYED:</span>
                      <span className="stat-value">∞</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">COFFEE_CONSUMED:</span>
                      <span className="stat-value">OVERFLOW_ERROR</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">BUGS_FIXED:</span>
                      <span className="stat-value">CLASSIFIED</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {currentIndex >= introText.length && (
        <section className="quick-access">
          <h2>&gt; QUICK_ACCESS_MENU</h2>
          <div className="access-grid">
            <Link to="/blog" className="access-card">
              <div className="card-header">[BLOG_ENTRIES]</div>
              <div className="card-content">
                <p>ACCESS TECHNICAL ARTICLES</p>
                <p>TUTORIALS AND INSIGHTS</p>
                <p className="card-action">&gt; ENTER_BLOG_SYSTEM</p>
              </div>
            </Link>
            
            <Link to="/projects" className="access-card">
              <div className="card-header">[PROJECT_DATABASE]</div>
              <div className="card-content">
                <p>VIEW ACTIVE PROJECTS</p>
                <p>OPEN SOURCE CONTRIBUTIONS</p>
                <p className="card-action">&gt; ACCESS_PROJECTS</p>
              </div>
            </Link>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="access-card"
            >
              <div className="card-header">[EXTERNAL_LINK]</div>
              <div className="card-content">
                <p>GITHUB REPOSITORY</p>
                <p>SOURCE CODE ACCESS</p>
                <p className="card-action">&gt; CONNECT_GITHUB</p>
              </div>
            </a>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home
