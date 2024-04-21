import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <nav>
    <div className="logo">
      <h2>My Website</h2>
    </div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <div className="content">
    <h1>Welcome to My Website</h1>
    <p>This is the home page content.</p>
  </div>
  </>
  )
}

export default Home
