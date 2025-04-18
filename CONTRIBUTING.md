# FriendZone Project Contributing Guidelines

## Development Standards (Based on SSCS V2.0)

### 🔄 Workflow Process

1. **Branch Naming Convention**
   - Features: `feature/FRZ-{id}` (e.g., feature/FRZ-001)
   - Bugs: `bug/FRZ-{id}`
   - Chores: `chore/FRZ-{id}`

2. **TDD Workflow**
   ```
   1. Create branch
   2. Write failing tests (WIP: Red Tests)
   3. Implement code (WIP: Green Tests)
   4. Refactor
   5. Create PR
   ```

3. **Commit Standards**
   - WIP commits required for test-first development
   - End-of-day commits mandatory
   - Format: `[FRZ-{id}] {type}: {description}`
   - Example: `[FRZ-001] feat: Add React Native setup`

### 🧪 Testing Requirements

1. **Unit Tests (Required)**
   - BDD style using Jest
   - Coverage requirement: 80%
   - Test file naming: `{component}.test.js`

2. **Integration Tests**
   - Required for API integrations
   - Focus on OpenAI interaction
   - Real-time chat functionality

### 📱 Mobile Development Standards

1. **React Native/Flutter Guidelines**
   - Functional components preferred
   - Custom hooks for shared logic
   - Component file structure:
     ```
     /components
       /{ComponentName}
         - index.js
         - styles.js
         - tests/
     ```

2. **State Management**
   - Use React Context for global state
   - Local state for component-specific data
   - Optimize re-renders

### 🔒 Security Standards

1. **API Security**
   - Never commit API keys
   - Use .env for local development
   - Implement rate limiting
   - Sanitize user inputs

2. **Data Privacy**
   - No PII storage
   - Session-only data retention
   - GDPR/CCPA compliance

### 🎨 UI/UX Standards

1. **Design System**
   - Follow Friends TV show color palette
   - Consistent spacing (8px grid)
   - Accessible tap targets (min 44x44px)
   - Dark mode support

2. **Performance**
   - < 2s initial load time
   - < 100ms response time
   - Optimize images and assets

### 📋 Code Review Checklist

1. **General**
   - [ ] Follows naming conventions
   - [ ] Includes tests
   - [ ] Has documentation
   - [ ] Passes linting

2. **Security**
   - [ ] No sensitive data exposed
   - [ ] Input validation
   - [ ] Error handling

3. **Mobile**
   - [ ] Responsive layout
   - [ ] Platform-specific considerations
   - [ ] Performance optimized

### 🚀 Definition of Done

1. Code complete with tests
2. PR reviewed and approved
3. Documentation updated
4. Passes CI/CD pipeline
5. Meets accessibility standards
6. Performance metrics met

### 📊 Quality Metrics

1. **Code Quality**
   - Test coverage > 80%
   - No critical security issues
   - Lint-free code

2. **Performance**
   - Load time < 2s
   - Memory usage < 100MB
   - Smooth animations (60fps)

### 🔧 Tools & Setup

1. **Required Tools**
   - Node.js (latest LTS)
   - React Native CLI or Flutter SDK
   - VS Code with recommended extensions
   - Git

2. **Environment Setup**
   ```bash
   # Clone repository
   git clone {repo-url}
   
   # Install dependencies
   npm install
   
   # Setup environment
   cp .env.example .env
   
   # Run tests
   npm test
   ```

Remember: Always start with tests, commit daily, and prioritize user privacy.