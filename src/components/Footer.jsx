import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-divider">
        {'='.repeat(80)}
      </div>
      <div className="footer-content">
        <div className="footer-text">
          <span className="terminal-text">
            &gt; SYSTEM_STATUS: AVAILABLE | USER_LEVEL: LEAST_PRIVILEGE | YEAR: {currentYear}
          </span>
        </div>
        <div className="footer-links">
          <a href="https://https://github.com/KnowledgeRatio" target="_blank" rel="noopener noreferrer">
            [GITHUB]
          </a>
          <a href="https://www.linkedin.com/in/joshmcdonalduk/">
            [CONTACT]
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
