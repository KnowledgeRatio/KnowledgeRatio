# KnowledgeRatio

A WarGames-inspired Jekyll website featuring a retro terminal interface with authentic 1980s computer aesthetics.

## 🖥️ Features

- **Authentic Terminal Design**: Green-on-black color scheme with monospace typography
- **Interactive Animations**: Typing effects, blinking cursors, and scanline CRT effects
- **Responsive Layout**: Adapts beautifully to all screen sizes
- **Jekyll-Powered**: Static site generation with GitHub Pages integration
- **Blog System**: Technical writing platform with post categorization
- **Project Portfolio**: Showcase of development work and repositories
- **Performance Optimized**: Fast loading with CSS animations and minimal JavaScript

## 🚀 Quick Start

### Prerequisites

- Ruby 3.1+
- Bundler
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/KnowledgeRatio.git
   cd KnowledgeRatio
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

### GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - the site will build and deploy automatically

## 📁 Project Structure

```
KnowledgeRatio/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page templates
│   ├── default.html         # Main layout with terminal styling
│   └── post.html           # Blog post layout
├── _includes/               # Reusable components
│   ├── header.html          # Navigation header
│   └── footer.html         # Site footer
├── _posts/                  # Blog posts
├── _sass/                   # Sass stylesheets
├── assets/
│   └── css/
│       └── main.scss       # Main stylesheet with terminal effects
├── blog/                   # Blog listing page
├── projects/               # Projects showcase
├── about/                  # About page
├── index.html              # Homepage
└── react-backup/           # Previous React implementation
```

## 🎨 Design Elements

### Color Palette
- **Terminal Green**: `#00ff00` - Primary text and highlights
- **Terminal Amber**: `#ffaa00` - Accents and special elements
- **Terminal Background**: `#000000` - Pure black background
- **Dark Green**: `#00cc00` - Secondary text elements

### Typography
- **Primary Font**: Courier Prime (monospace)
- **Fallbacks**: Courier New, monospace
- **Character Effects**: Text shadows and glow effects

### Animations
- **Typing Effects**: Character-by-character text revelation
- **Blinking Cursor**: CSS animation with opacity transitions
- **Scanlines**: Moving overlay effect simulating CRT monitors
- **Hover Effects**: Smooth transitions and glow effects

## 📝 Creating Content

### Blog Posts

Create new posts in the `_posts/` directory with the naming convention:
```
YYYY-MM-DD-title-with-dashes.md
```

Front matter example:
```yaml
---
layout: default
title: "Your Post Title"
date: 2024-01-15
tags: [web-development, jekyll, terminal]
excerpt: "Brief description of your post"
read_time: 5
---
```

### Pages

Create new pages by adding HTML or Markdown files with appropriate front matter:
```yaml
---
layout: default
title: "Page Title"
description: "Page description for SEO"
permalink: /custom-url/
---
```

## 🛠️ Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Author information
- Social links
- Build settings

### Styling

The main stylesheet is `assets/css/main.scss`. Key sections:
- **CSS Variables**: Color definitions and spacing
- **Terminal Effects**: Animations and visual effects
- **Responsive Design**: Mobile-first approach
- **Component Styles**: Navigation, cards, forms

### Adding New Sections

1. Create new HTML/Markdown files
2. Add navigation links in `_includes/header.html`
3. Style components in `main.scss`
4. Test responsiveness across devices

## 🔧 Technical Details

### Jekyll Plugins
- `jekyll-feed` - RSS feed generation
- `jekyll-sitemap` - XML sitemap
- `jekyll-seo-tag` - Meta tags and SEO optimization

### Browser Support
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Features
- CSS animations optimized for 60fps
- Minimal JavaScript footprint
- Compressed images and assets
- Efficient CSS selectors

## 🎯 Development Roadmap

### Completed ✅
- [x] Terminal-inspired visual design
- [x] Responsive layout system
- [x] Blog functionality with Jekyll
- [x] Project portfolio section
- [x] GitHub Actions deployment
- [x] SEO optimization

### In Progress 🚧
- [ ] Interactive terminal commands
- [ ] Search functionality
- [ ] Dark/light theme toggle
- [ ] Comment system integration

### Planned 📋
- [ ] Sound effects for interactions
- [ ] Advanced CRT monitor effects
- [ ] Terminal-style contact forms
- [ ] Performance analytics dashboard

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Test changes across multiple browsers
- Ensure mobile responsiveness
- Document new features and changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **WarGames (1983)** - Inspiration for the terminal aesthetic
- **Jekyll** - Static site generation framework
- **GitHub Pages** - Free hosting platform
- **Courier Prime** - Monospace font family
- **Classic Computing Community** - Retro design references

## 📞 Contact

- **Website**: [https://yourusername.github.io/KnowledgeRatio](https://yourusername.github.io/KnowledgeRatio)
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: contact@example.com

---

*"The only winning move is not to play... unless you're building awesome websites."* 🚀

A WarGames-inspired personal website built with React, featuring a terminal aesthetic reminiscent of the 1983 film. This minimalist blog and portfolio site showcases projects and articles with authentic retro computer styling.

## 🎮 Features

- **WarGames Terminal Aesthetic**: Authentic 80s computer terminal design
- **Responsive Design**: Mobile and tablet friendly
- **Blog System**: Article publishing with markdown-style content
- **Projects Showcase**: Portfolio section for GitHub projects
- **Terminal Effects**: Blinking cursors, scanlines, and typing animations
- **GitHub Pages Ready**: Automated deployment workflow

## 🚀 Live Demo

Visit the live site: [https://knowledgeratio.github.io/KnowledgeRatio/](https://knowledgeratio.github.io/KnowledgeRatio/)

## 🛠️ Tech Stack

- **React 19**: Modern React with hooks
- **React Router**: Client-side routing
- **CSS3**: Custom properties and animations
- **Vite**: Fast build tool and development server
- **GitHub Pages**: Free hosting
- **GitHub Actions**: Automated deployment

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KnowledgeRatio/KnowledgeRatio.git
   cd KnowledgeRatio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173/KnowledgeRatio/](http://localhost:5173/KnowledgeRatio/) in your browser

## 🎨 Design Inspiration

The design is heavily inspired by the WOPR computer interface from the 1983 film WarGames:

- **Color Palette**: Bright green (#00ff00) text on black background
- **Typography**: Monospace fonts (Courier Prime)
- **Effects**: CRT scanlines, terminal glow, blinking cursors
- **Layout**: Minimalist, function-over-form approach
- **Animations**: Typing effects and smooth transitions

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Header.css
│   ├── Footer.jsx      # Site footer
│   └── Footer.css
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Home.css
│   ├── Blog.jsx        # Blog listing
│   ├── Blog.css
│   ├── BlogPost.jsx    # Individual blog post
│   ├── BlogPost.css
│   ├── Projects.jsx    # Projects showcase
│   └── Projects.css
├── App.jsx             # Main app component
├── App.css             # Global styles
├── main.jsx           # Entry point
└── index.css          # Base styles
```

## 🚀 Deployment

### Setting Up GitHub Pages

If you're starting fresh with your own repository, follow these steps to set up GitHub Pages:

#### 1. Create GitHub Repository

1. Follow the instructions on https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site


#### 2. Configure for Your Repository

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repository-name"
   ```

2. Update the `base` path in `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repository-name/',
     build: {
       outDir: 'dist'
     }
   })
   ```

3. Update the Router basename in `src/App.jsx`:
   ```jsx
   <Router basename="/your-repository-name">
   ```

#### 3. Push to GitHub

1. Add all files to git:
   ```bash
   git add .
   git commit -m "Initial commit: WarGames-inspired website"
   ```

2. Add your GitHub repository as origin:
   ```bash
   git remote add origin https://github.com/yourusername/your-repository-name.git
   ```

3. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

#### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select "**GitHub Actions**"
5. The GitHub Actions workflow will automatically trigger and deploy your site

#### 5. Access Your Site

- Your site will be available at: `https://yourusername.github.io/your-repository-name`
- It may take a few minutes for the first deployment to complete
- Check the **Actions** tab to monitor the deployment progress

### Automatic Deployment (Recommended)

Once set up, the site automatically deploys to GitHub Pages when you push to the main branch, thanks to the GitHub Actions workflow.

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## ✨ Customization

### Writing and Publishing Blog Posts

Follow this step-by-step guide to add new blog posts to your site:

#### Step 1: Create Your Blog Content

1. **Plan your post**: Decide on a title, topic, and target audience
2. **Choose a slug**: Create a URL-friendly version of your title (e.g., "my-first-post")
3. **Write your content**: Use markdown syntax for formatting

#### Step 2: Add to Blog Data

1. **Open** `src/pages/Blog.jsx`
2. **Find** the `blogPosts` array at the top of the file
3. **Add** your new post object:

```javascript
const blogPosts = [
  // ... existing posts
  {
    id: 4, // Increment from the last post
    slug: 'my-new-post', // URL-friendly version
    title: 'My Amazing New Blog Post',
    excerpt: 'A brief 1-2 sentence description that appears on the blog listing page.',
    date: '2025-07-20', // YYYY-MM-DD format
    tags: ['React', 'Tutorial', 'JavaScript'], // Array of relevant tags
    readTime: '7 min' // Estimated reading time
  }
]
```

#### Step 3: Add Full Content

1. **Open** `src/pages/BlogPost.jsx`
2. **Find** the `blogPosts` array (should match the one in Blog.jsx)
3. **Add** the same post object with full content:

```javascript
{
  id: 4,
  slug: 'my-new-post',
  title: 'My Amazing New Blog Post',
  excerpt: 'A brief 1-2 sentence description...',
  content: `# My Amazing New Blog Post

Welcome to my new blog post! Here's the full content.

## Introduction

Write your introduction here...

## Main Content

### Subheading

Write your content using markdown syntax:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- \`inline code\`

### Code Blocks

\`\`\`javascript
const example = () => {
  console.log('Hello, World!');
};
\`\`\`

### Lists

1. Numbered lists
2. Work great
3. For step-by-step guides

## Conclusion

Wrap up your post here...

---

*Thanks for reading!*`,
  date: '2025-07-20',
  tags: ['React', 'Tutorial', 'JavaScript'],
  readTime: '7 min'
}
```

#### Step 4: Preview Your Post

1. **Save** both files
2. **Start** the development server if not already running:
   ```bash
   npm run dev
   ```
3. **Navigate** to http://localhost:5173/KnowledgeRatio/blog
4. **Click** on your new post to view it

#### Step 5: Deploy Your Changes

1. **Commit** your changes:
   ```bash
   git add .
   git commit -m "Add new blog post: My Amazing New Blog Post"
   ```

2. **Push** to GitHub:
   ```bash
   git push origin main
   ```

3. **Wait** for GitHub Actions to deploy (check the Actions tab)
4. **View** your live post at your GitHub Pages URL

#### Markdown Formatting Tips

The blog supports these markdown features:

- **Headers**: Use `#`, `##`, `###` for different heading levels
- **Bold**: Wrap text with `**bold text**`
- **Italic**: Wrap text with `*italic text*`
- **Links**: Use `[link text](URL)`
- **Code**: Use backticks for `inline code`
- **Code blocks**: Use triple backticks with language
- **Lists**: Use `-` for bullets or `1.` for numbers
- **Horizontal rules**: Use `---`
- **Line breaks**: Leave empty lines between paragraphs

#### Best Practices

1. **Keep excerpts concise**: 1-2 sentences that entice readers
2. **Use relevant tags**: Help categorize and organize content
3. **Estimate read time**: Roughly 200 words per minute
4. **Test locally**: Always preview before deploying
5. **Consistent dating**: Use YYYY-MM-DD format for proper sorting

### Adding Blog Posts

Edit the `blogPosts` array in `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx`:

```javascript
const blogPosts = [
  {
    id: 1,
    slug: 'your-post-slug',
    title: 'Your Post Title',
    excerpt: 'A brief description...',
    content: 'Full markdown content...',
    date: '2025-01-20',
    tags: ['Tag1', 'Tag2'],
    readTime: '5 min'
  }
]
```

### Adding Projects

Update the `projects` array in `src/pages/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    name: 'Project Name',
    description: 'Project description...',
    tech: ['React', 'CSS3'],
    status: 'ACTIVE',
    githubUrl: 'https://github.com/user/repo',
    liveUrl: 'https://project-demo.com',
    stars: 42,
    language: 'JavaScript'
  }
]
```

### Customizing Colors

Modify CSS custom properties in `src/App.css`:

```css
:root {
  --terminal-green: #00ff00;
  --terminal-dark-green: #00cc00;
  --terminal-bg: #000000;
  --terminal-amber: #ffaa00;
}
```

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **768px**: Tablet layout adjustments
- **480px**: Mobile-first optimizations

Key responsive features:
- Flexible grid layouts
- Scalable typography
- Touch-friendly navigation
- Optimized animations for mobile

## 🎯 Performance

- **Lightweight**: Minimal dependencies
- **Fast Loading**: Vite-optimized builds
- **Code Splitting**: Automatic with React Router
- **SEO Friendly**: Semantic HTML structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎬 Credits

- Inspired by the 1983 film "WarGames"
- WOPR computer interface design
- Retro computing aesthetics

## 🔗 Links

- [Live Demo](https://knowledgeratio.github.io/KnowledgeRatio/)
- [GitHub Repository](https://github.com/KnowledgeRatio/KnowledgeRatio)
- [WarGames (1983) on IMDb](https://www.imdb.com/title/tt0086567/)

---

> "The only winning move is not to play." - WOPR

**[SYSTEM_STATUS: ONLINE] | [ACCESS_LEVEL: PUBLIC] | [ENJOY_THE_EXPERIENCE]**
