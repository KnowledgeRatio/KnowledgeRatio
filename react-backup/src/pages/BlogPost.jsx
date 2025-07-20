import { useParams, Link, Navigate } from 'react-router-dom'
import './BlogPost.css'

// Mock blog posts data - same as in Blog.jsx
const blogPosts = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React: A Terminal Approach',
    excerpt: 'Learn React fundamentals through the lens of command-line interfaces and terminal aesthetics.',
    content: `# Getting Started with React: A Terminal Approach

Welcome to the world of React development! In this guide, we'll explore React fundamentals while building components that embrace the retro terminal aesthetic.

## Setting Up Your Environment

First, let's create a new React application:

\`\`\`bash
npx create-react-app my-terminal-app
cd my-terminal-app
npm start
\`\`\`

## Building Terminal-Style Components

React components are the building blocks of any React application. Let's create a terminal-style component:

\`\`\`javascript
import React from 'react';

const TerminalComponent = ({ children }) => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <span>SYSTEM_TERMINAL_V1.0</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
};

export default TerminalComponent;
\`\`\`

## Styling with CSS

The magic happens in CSS. Here's how to achieve that authentic terminal look:

\`\`\`css
.terminal {
  background: #000000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  border: 2px solid #00ff00;
}

.terminal-header {
  background: rgba(0, 255, 0, 0.1);
  padding: 10px;
  border-bottom: 1px solid #00ff00;
}

.terminal-body {
  padding: 20px;
  min-height: 200px;
}
\`\`\`

## State Management

React's useState hook is perfect for managing terminal-like interactions:

\`\`\`javascript
import React, { useState } from 'react';

const InteractiveTerminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      setOutput([...output, \`> \${command}\`]);
      setCommand('');
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyPress={handleCommand}
        className="command-input"
      />
    </div>
  );
};
\`\`\`

## Conclusion

Building React applications with a terminal aesthetic combines modern web development with retro computing nostalgia. The key is to focus on:

- Monospace fonts
- Green text on black backgrounds
- Minimal, functional design
- Interactive command-line interfaces

Start experimenting with these concepts, and you'll soon be building applications that would make WOPR proud!

---

*Next time, we'll explore advanced React patterns and how to implement them in terminal-style interfaces.*`,
    date: '2025-01-15',
    tags: ['React', 'JavaScript', 'Tutorial'],
    readTime: '5 min'
  },
  {
    id: 2,
    slug: 'building-wargames-ui',
    title: 'Building WarGames-Inspired UI Components',
    excerpt: 'How to recreate the iconic 80s computer terminal aesthetic in modern web applications.',
    content: `# Building WarGames-Inspired UI Components

The 1983 film WarGames introduced us to WOPR and one of the most iconic computer interfaces in cinema history. Today, we'll recreate that aesthetic for modern web applications.

## The WarGames Aesthetic

The key elements of the WarGames visual style include:

- **Monospace Typography**: Courier or similar fonts
- **Green Terminal Text**: Bright green (#00ff00) on black
- **Scanlines**: Subtle horizontal lines for CRT effect
- **Blinking Cursors**: Classic terminal indicators
- **ASCII Art**: Text-based graphics and borders

## CSS Custom Properties

Start by defining your color palette:

\`\`\`css
:root {
  --terminal-green: #00ff00;
  --terminal-dark-green: #00cc00;
  --terminal-bg: #000000;
  --terminal-amber: #ffaa00;
  --font-mono: 'Courier Prime', 'Courier New', monospace;
}
\`\`\`

## Terminal Window Component

\`\`\`jsx
const TerminalWindow = ({ title, children }) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-title">{title}</span>
        <span className="terminal-status">ONLINE</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
};
\`\`\`

## Blinking Cursor Effect

\`\`\`css
.cursor::after {
  content: '█';
  animation: blink 1s infinite;
  color: var(--terminal-green);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
\`\`\`

## Scanlines Effect

For that authentic CRT monitor feel:

\`\`\`css
.scanlines::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: linear-gradient(
    transparent 0%,
    rgba(0, 255, 0, 0.03) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
  animation: scanlines 0.1s linear infinite;
}

@keyframes scanlines {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}
\`\`\`

## Typing Animation

Create realistic typing effects:

\`\`\`jsx
const TypedText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      <span className="cursor"></span>
    </span>
  );
};
\`\`\`

## Interactive Terminal

\`\`\`jsx
const InteractiveTerminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');

  const commands = {
    help: () => 'Available commands: help, clear, date, whoami',
    clear: () => { setHistory([]); return null; },
    date: () => new Date().toISOString(),
    whoami: () => 'GUEST_USER'
  };

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    const output = commands[command] 
      ? commands[command]() 
      : \`Command not found: \${command}\`;
    
    if (output !== null) {
      setHistory(prev => [
        ...prev, 
        \`> \${cmd}\`, 
        output
      ]);
    }
  };

  return (
    <div className="interactive-terminal">
      <div className="terminal-history">
        {history.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
      </div>
      <div className="terminal-input">
        <span>&gt; </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleCommand(input);
              setInput('');
            }
          }}
          autoFocus
        />
      </div>
    </div>
  );
};
\`\`\`

## Responsive Considerations

Remember to make your terminal interface mobile-friendly:

\`\`\`css
@media (max-width: 768px) {
  .terminal-window {
    font-size: 14px;
    padding: 1rem;
  }
  
  .scanlines::before {
    display: none; /* Disable scanlines on mobile */
  }
}
\`\`\`

## Conclusion

Building WarGames-inspired interfaces is about capturing the essence of early computing: simplicity, functionality, and that distinctive green glow. Focus on typography, subtle animations, and authentic terminal behaviors.

The result is a nostalgic yet modern interface that pays homage to one of cinema's most memorable computer systems.

*"The only winning move is not to play." - WOPR*`,
    date: '2025-01-10',
    tags: ['CSS', 'Design', 'Retro'],
    readTime: '8 min'
  },
  {
    id: 3,
    slug: 'github-pages-deployment',
    title: 'Deploying React Apps to GitHub Pages',
    excerpt: 'A comprehensive guide to deploying your React applications using GitHub Pages and Actions.',
    content: `# Deploying React Apps to GitHub Pages

GitHub Pages provides a free and simple way to host your React applications. This guide covers everything from basic setup to automated deployments with GitHub Actions.

## Prerequisites

Before we begin, ensure you have:

- A React application ready for deployment
- A GitHub account
- Git installed on your system
- Node.js and npm

## Step 1: Install gh-pages

First, install the gh-pages package as a development dependency:

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

## Step 2: Update package.json

Add the homepage field and deployment scripts to your package.json:

\`\`\`json
{
  "name": "my-react-app",
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
\`\`\`

## Step 3: Configure Router (if using React Router)

If your app uses React Router, update your Router basename:

\`\`\`jsx
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="/your-repo-name">
      {/* Your app components */}
    </Router>
  );
}
\`\`\`

## Step 4: Deploy

Deploy your application:

\`\`\`bash
npm run deploy
\`\`\`

This command:
1. Builds your React app
2. Creates a gh-pages branch
3. Pushes the build folder contents to that branch

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Select "Deploy from a branch"
4. Choose the gh-pages branch
5. Select "/ (root)" as the folder

## Automated Deployment with GitHub Actions

For a more robust solution, use GitHub Actions:

Create \`.github/workflows/deploy.yml\`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
\`\`\`

## Environment Variables

For applications that need environment variables:

\`\`\`bash
# In your repository secrets, add:
REACT_APP_API_URL=https://api.example.com
\`\`\`

Update your workflow:

\`\`\`yaml
- name: Build
  run: npm run build
  env:
    REACT_APP_API_URL: \${{ secrets.REACT_APP_API_URL }}
\`\`\`

## Custom Domain

To use a custom domain:

1. Add a CNAME file to your public folder:
   \`\`\`
   yourdomain.com
   \`\`\`

2. Configure DNS:
   - Add CNAME record pointing to yourusername.github.io
   - Or add A records for GitHub's IP addresses

## Troubleshooting

### 404 Errors on Refresh

If using client-side routing, add a 404.html file:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/your-repo-name'">
</head>
<body></body>
</html>
\`\`\`

Update your index.html:

\`\`\`html
<script>
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
\`\`\`

### Build Failures

Common issues and solutions:

1. **Memory issues**: Increase Node.js memory
   \`\`\`bash
   export NODE_OPTIONS="--max-old-space-size=4096"
   \`\`\`

2. **ESLint warnings**: Set CI=false or fix warnings
   \`\`\`bash
   CI=false npm run build
   \`\`\`

## Best Practices

1. **Use environment variables** for different configurations
2. **Optimize your build** with code splitting
3. **Enable HTTPS** in repository settings
4. **Monitor your site** with GitHub Actions
5. **Use semantic versioning** for releases

## Conclusion

GitHub Pages offers an excellent platform for hosting React applications. Whether you choose manual deployment with gh-pages or automated deployment with Actions, you'll have a robust hosting solution that scales with your project.

The combination of free hosting, custom domains, and CI/CD makes GitHub Pages perfect for personal projects, portfolios, and documentation sites.

---

*Happy deploying! 🚀*`,
    date: '2025-01-05',
    tags: ['DevOps', 'GitHub', 'Deployment'],
    readTime: '6 min'
  }
]

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  // Simple markdown-to-JSX converter (basic implementation)
  const renderContent = (content) => {
    const lines = content.split('\n')
    const elements = []
    let inCodeBlock = false
    let codeContent = []
    let codeLanguage = ''

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={i} className="code-block">
              <code className={`language-${codeLanguage}`}>
                {codeContent.join('\n')}
              </code>
            </pre>
          )
          codeContent = []
          inCodeBlock = false
        } else {
          codeLanguage = line.replace('```', '')
          inCodeBlock = true
        }
        continue
      }

      if (inCodeBlock) {
        codeContent.push(line)
        continue
      }

      if (line.startsWith('# ')) {
        elements.push(<h1 key={i}>{line.replace('# ', '')}</h1>)
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i}>{line.replace('## ', '')}</h2>)
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i}>{line.replace('### ', '')}</h3>)
      } else if (line.startsWith('- ')) {
        elements.push(<li key={i}>{line.replace('- ', '')}</li>)
      } else if (line.includes('`') && !line.startsWith('```')) {
        const parts = line.split('`')
        const formatted = parts.map((part, index) => 
          index % 2 === 1 ? <code key={index}>{part}</code> : part
        )
        elements.push(<p key={i}>{formatted}</p>)
      } else if (line.trim() === '') {
        elements.push(<br key={i} />)
      } else if (line.trim() === '---') {
        elements.push(<hr key={i} />)
      } else if (line.startsWith('*') && line.endsWith('*')) {
        elements.push(<p key={i} className="italic">{line.slice(1, -1)}</p>)
      } else {
        elements.push(<p key={i}>{line}</p>)
      }
    }

    return elements
  }

  return (
    <div className="blog-post">
      <article className="post-container">
        <header className="post-header">
          <div className="post-navigation">
            <Link to="/blog" className="back-link">
              &lt; BACK_TO_BLOG
            </Link>
          </div>
          
          <div className="post-meta">
            <span className="post-date">[{post.date}]</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
          
          <h1 className="post-title">
            &gt; {post.title}
          </h1>
          
          <div className="post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        </header>

        <div className="post-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <span>ARTICLE_VIEWER_V1.0</span>
              <span className="terminal-status">READING_MODE</span>
            </div>
            <div className="terminal-body">
              <div className="content-wrapper">
                {renderContent(post.content)}
              </div>
            </div>
          </div>
        </div>

        <footer className="post-footer">
          <div className="post-actions">
            <Link to="/blog" className="btn">
              [RETURN_TO_BLOG]
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}

export default BlogPost
