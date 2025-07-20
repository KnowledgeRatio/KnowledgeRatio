# KnowledgeRatio - Functional Specification

## Document Information

- **Project**: KnowledgeRatio - WarGames-Inspired Personal Website
- **Version**: 2.0
- **Date**: July 20, 2025
- **Technology Stack**: Jekyll 4.3.2, SCSS, JavaScript, GitHub Pages

## 1. Executive Summary

KnowledgeRatio is a personal blog and portfolio website designed with a distinctive WarGames-inspired terminal aesthetic. The application serves as a minimalist platform for showcasing technical projects, publishing blog articles, and presenting professional information in an engaging retro-computing interface. The site has been migrated from React to Jekyll for better GitHub Pages integration and improved content management.

## 2. Technology Architecture

### 2.1 Static Site Generation
- **Jekyll 4.3.2**: Ruby-based static site generator with GitHub Pages native support
- **Liquid Templating**: Dynamic content rendering with Jekyll's templating engine
- **Markdown Processing**: Kramdown for blog post content with syntax highlighting

### 2.2 Styling Architecture
- **SCSS**: Enhanced CSS with variables, nesting, and mixins
- **CSS3 Custom Properties**: Centralized theming system for colors and spacing
- **CSS Grid & Flexbox**: Responsive layout systems
- **CSS Animations**: Terminal effects including blinking cursors, scanlines, and typing animations
- **Mobile-First Design**: Responsive breakpoints at 768px and 480px

### 2.3 Deployment Infrastructure
- **GitHub Pages**: Static site hosting with Jekyll native support
- **GitHub Actions**: Automated CI/CD pipeline for Jekyll builds
- **Jekyll Build System**: Optimized static site generation with asset processing

### 2.4 Design System

#### Color Palette
```css
--terminal-green: #00ff00     /* Primary text and accents */
--terminal-dark-green: #00cc00 /* Secondary elements */
--terminal-bg: #000000        /* Background */
--terminal-amber: #ffaa00     /* Highlights and active states */
--terminal-red: #ff0000       /* Error states */
--terminal-blue: #0088ff      /* Information states */
```

#### Typography
- **Primary Font**: Courier Prime (Google Fonts)
- **Fallback**: Courier New, monospace
- **Responsive Sizing**: 14px-20px base with scalable headers

## 3. User Stories and Requirements

### 3.1 Primary User Stories

#### US-001: View Homepage Introduction
**As a** visitor to the website  
**I want to** see an engaging introduction with terminal-style animations  
**So that** I can understand who the site owner is and what they do  

**Acceptance Criteria:**
- ✅ Homepage displays animated typing effect for introduction text
- ✅ Terminal window styling with authentic computer interface design
- ✅ Profile information displayed in terminal format
- ✅ Quick access navigation to main sections
- ✅ Responsive design works on all screen sizes

#### US-002: Browse Blog Articles
**As a** reader interested in technical content  
**I want to** browse available blog posts in a clear, organized manner  
**So that** I can find articles that interest me  

**Acceptance Criteria:**
- ✅ Blog listing page with terminal-styled post cards
- ✅ Each post shows title, excerpt, date, tags, and read time
- ✅ Posts are sorted by date (newest first)
- ✅ Terminal loading animation when accessing blog section
- ✅ Mobile-optimized layout for blog browsing

#### US-003: Read Full Blog Articles
**As a** reader  
**I want to** read complete blog articles with proper formatting  
**So that** I can consume the full content in an easy-to-read format  

**Acceptance Criteria:**
- ✅ Individual blog post pages with terminal window styling
- ✅ Markdown content rendering with syntax highlighting
- ✅ Navigation back to blog listing
- ✅ Responsive typography for reading comfort
- ✅ Code blocks styled to match terminal aesthetic

#### US-004: Explore Projects Portfolio
**As a** potential employer or collaborator  
**I want to** view the developer's projects and their details  
**So that** I can assess their skills and experience  

**Acceptance Criteria:**
- ✅ Projects page with grid layout of project cards
- ✅ Each project shows name, description, tech stack, and status
- ✅ Links to GitHub repositories and live demos
- ✅ Project statistics (stars, language)
- ✅ Terminal-style status indicators (ACTIVE, DEVELOPMENT, etc.)

#### US-005: Navigate the Site Intuitively
**As a** any site visitor  
**I want to** easily navigate between different sections  
**So that** I can find the content I'm looking for quickly  

**Acceptance Criteria:**
- ✅ Persistent header navigation with terminal styling
- ✅ Active page indicators in navigation
- ✅ Responsive mobile navigation
- ✅ Footer with additional links and system information
- ✅ Proper URL routing for all sections

#### US-006: Experience Authentic Terminal Aesthetic
**As a** visitor who appreciates retro computing  
**I want to** experience an authentic terminal interface  
**So that** I can enjoy the nostalgic WarGames aesthetic  

**Acceptance Criteria:**
- ✅ Consistent monospace typography throughout
- ✅ Green text on black background color scheme
- ✅ Blinking cursor animations
- ✅ Terminal window borders and headers
- ✅ Scanlines effect for CRT monitor simulation
- ✅ Typing animations and terminal-style interactions

### 3.2 Technical Requirements

#### TR-001: Performance
- Fast loading times (< 3 seconds on average connection)
- Lightweight bundle size
- Optimized images and assets
- Efficient CSS animations

#### TR-002: Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion preferences respected

#### TR-003: SEO
- Proper meta tags and descriptions
- Semantic heading hierarchy
- Clean URL structure
- Mobile-friendly design

#### TR-004: Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 4. Component Architecture

### 4.1 Core Components

#### App.jsx
- **Purpose**: Main application container with routing
- **State**: None (routing handled by React Router)
- **Children**: Header, Router, Footer

#### Header.jsx
- **Purpose**: Navigation component with terminal styling
- **State**: Current route for active navigation highlighting
- **Features**: Responsive navigation, terminal-style logo

#### Footer.jsx
- **Purpose**: Site footer with system information and links
- **State**: None
- **Features**: Terminal status display, external links

### 4.2 Page Components

#### Home.jsx
- **Purpose**: Landing page with animated introduction
- **State**: Typing animation state, current character index
- **Features**: Terminal window, boot sequence, profile display

#### Blog.jsx
- **Purpose**: Blog listing page
- **State**: Typing animation for header, posts visibility
- **Features**: Post cards, terminal loading sequence

#### BlogPost.jsx
- **Purpose**: Individual blog post display
- **State**: None (content from URL parameters)
- **Features**: Markdown rendering, navigation, terminal styling

#### Projects.jsx
- **Purpose**: Projects portfolio page
- **State**: Typing animation, projects visibility
- **Features**: Project cards, GitHub integration, status indicators

## 5. Data Management

### 5.1 Blog Posts
- **Storage**: Static arrays in component files
- **Structure**: ID, slug, title, excerpt, content, date, tags, readTime
- **Rendering**: Custom markdown parser for content display

### 5.2 Projects
- **Storage**: Static array in Projects component
- **Structure**: ID, name, description, tech, status, URLs, stats
- **Integration**: GitHub repository links and statistics

## 6. Animation and Interaction Design

### 6.1 Terminal Effects
- **Blinking Cursor**: CSS keyframe animation at 1-second intervals
- **Typing Animation**: Character-by-character reveal with configurable speed
- **Scanlines**: Subtle overlay animation for CRT effect
- **Glow Effects**: Text shadows for terminal authenticity

### 6.2 User Interactions
- **Hover States**: Enhanced glow and color changes
- **Button Presses**: Scale transform feedback
- **Navigation**: Smooth transitions between sections
- **Loading States**: Terminal-style progress indicators

## 7. Responsive Design Strategy

### 7.1 Breakpoint System
- **Desktop**: > 768px (full layout with all effects)
- **Tablet**: 481px - 768px (simplified layout, maintained effects)
- **Mobile**: ≤ 480px (stacked layout, reduced animations)

### 7.2 Mobile Optimizations
- Larger touch targets for navigation
- Simplified typography hierarchy
- Disabled resource-intensive animations
- Optimized image sizing

## 8. Deployment and DevOps

### 8.1 Build Process
1. **Development**: Vite dev server with hot reloading
2. **Build**: Production build with minification and optimization
3. **Test**: ESLint for code quality
4. **Deploy**: GitHub Actions automated deployment

### 8.2 GitHub Actions Workflow
```yaml
trigger: push to main branch
environment: Ubuntu latest, Node.js 18
steps: checkout → install → build → deploy to gh-pages
```

## 9. Future Enhancement Opportunities

### 9.1 Content Management
- Integration with headless CMS (Strapi, Contentful)
- Dynamic blog post creation interface
- Comment system integration

### 9.2 Interactive Features
- Terminal command interface for navigation
- Easter eggs and hidden commands
- Interactive project demonstrations

### 9.3 Performance Enhancements
- Image optimization and lazy loading
- Service worker for offline functionality
- Progressive Web App features

## 10. Success Metrics

### 10.1 User Experience
- Low bounce rate (< 50%)
- High page view duration (> 2 minutes average)
- Mobile traffic engagement

### 10.2 Technical Performance
- Page load speed < 3 seconds
- 100% accessibility score
- Cross-browser compatibility

### 10.3 Content Engagement
- Blog post read completion rate
- Project link click-through rate
- Return visitor percentage

---

**Document Status**: ✅ Complete  
**Last Updated**: July 20, 2025  
**Review Date**: Next major release
