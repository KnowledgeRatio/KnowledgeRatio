import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

// blog data - in other apps, this could come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React: A Terminal Approach',
    excerpt: 'Learn React fundamentals through the lens of command-line interfaces and terminal aesthetics.',
    date: '2025-01-15',
    tags: ['React', 'JavaScript', 'Tutorial'],
    readTime: '5 min'
  },
  {
    id: 2,
    slug: 'building-wargames-ui',
    title: 'Building WarGames-Inspired UI Components',
    excerpt: 'How to recreate the iconic 80s computer terminal aesthetic in modern web applications.',
    date: '2025-01-10',
    tags: ['CSS', 'Design', 'Retro'],
    readTime: '8 min'
  },
  {
    id: 3,
    slug: 'github-pages-deployment',
    title: 'Deploying React Apps to GitHub Pages',
    excerpt: 'A comprehensive guide to deploying your React applications using GitHub Pages and Actions.',
    date: '2025-01-05',
    tags: ['DevOps', 'GitHub', 'Deployment'],
    readTime: '6 min'
  }
]

const Blog = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showPosts, setShowPosts] = useState(false)
  
  const headerText = 'ACCESSING BLOG DATABASE...'
  
  useEffect(() => {
    if (currentIndex < headerText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + headerText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setTimeout(() => setShowPosts(true), 250)
    }
  }, [currentIndex, headerText])

  return (
    <div className="blog">
      <section className="blog-header">
        <div className="terminal-window">
          <div className="terminal-header">
            <span>BLOG_SYSTEM_V1.0</span>
            <span className="terminal-status">ENTRIES: {blogPosts.length}</span>
          </div>
          <div className="terminal-body">
            <p className="typing-text">
              {displayText}
              <span className="cursor"></span>
            </p>
            
            {showPosts && (
              <div className="blog-info">
                <p>&gt; DATABASE_STATUS: ONLINE</p>
                <p>&gt; TOTAL_ENTRIES: {blogPosts.length}</p>
                <p>&gt; ACCESS_LEVEL: PUBLIC</p>
                <p>&gt; LISTING ALL AVAILABLE ENTRIES...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {showPosts && (
        <section className="blog-posts">
          <div className="posts-grid">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="post-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="post-header">
                  <div className="post-meta">
                    <span className="post-date">[{post.date}]</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="post-content">
                  <h2 className="post-title">
                    <Link to={`/blog/${post.slug}`}>
                      &gt; {post.title}
                    </Link>
                  </h2>
                  
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <div className="post-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  
                  <div className="post-actions">
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      [READ_ARTICLE] &gt;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="blog-footer">
            <div className="system-info">
              <p>&gt; END_OF_ENTRIES</p>
              <p>&gt; SYSTEM_STATUS: ONLINE</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Blog
