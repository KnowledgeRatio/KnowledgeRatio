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
            &gt; SYSTEM_STATUS: ONLINE | USER_LEVEL: ADMIN | YEAR: {currentYear}
          </span>
        </div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            [GITHUB]
          </a>
          <a href="mailto:contact@example.com">
            [CONTACT]
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
