import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='main_container'>
    {/* <img src="/src/assets/images/Rectangle 3.png" alt="logo" /> */}
      <div className='nav_container'></div>
      <img src="/src/assets/images/logo.png" alt="logo" />
      <ul className='nav_list'>
        <li>Top</li>
        <li>For Everyone</li>
        <li>Features</li>
        <li>Preview</li>
        <li>License</li>
        <button>Download</button>
      </ul>
      <div className='main_header'>
        <h1>Beautiful Design For Social Media Content</h1>
        <p>Figma social media content templates for branding, marketing, insights, and more. Free for personal and commercial use!
        <button>Download Now</button>
        </p>
        
      </div>
      
      
      
    </div>
  )
}

export default Banner