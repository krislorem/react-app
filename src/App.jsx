import React from 'react'

const App = () => {
  return (
    <div className="profile-card">
      <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="头像" className="avatar" />
      <h1>张三</h1>
      <h2>全栈开发工程师</h2>

      <div className="contact-info">
        <p>📧 zhangsan@example.com</p>
        <p>📱 +86 123 4567 8900</p>
        <p>📍 北京市朝阳区</p>
      </div>

      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <div className="skill-tags">
        <span>React</span>
        <span>Node.js</span>
        <span>TypeScript</span>
        <span>Python</span>
        <span>Docker</span>
      </div>
    </div>
  )
}

export default App
