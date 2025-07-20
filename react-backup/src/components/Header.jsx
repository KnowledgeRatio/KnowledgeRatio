import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header scanlines">
      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="terminal-text">&gt; KnowledgeRatio_</span>
            <span className="cursor"></span>
          </Link>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                [HOME]
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
              >
                [BLOG]
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                [PROJECTS]
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="header-divider">
        {'='.repeat(80)}
      </div>
    </header>
  )
}

export default Header
