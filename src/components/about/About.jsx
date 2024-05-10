import React from 'react'
import './Style.scss'
import aboutimg from '../../assets/about.jpg'

const About = () => {
  return (
    <div className="about">
        <img src={aboutimg} alt="" />
        <div className="content">
          <span className='text-blue-700 font-semibold'>About</span>
          <h3>A dedicated front-end developer based in sasarm,Bihar</h3>
          <p>As a Fresher Frontend Developer, I excel in HTML, CSS, and JavaScript, building the foundation for captivating web experiences. Proficient in React and Redux, I specialize in crafting dynamic interfaces and managing state efficiently. Leveraging Firebase, I integrate real-time database capabilities, authentication, and hosting solutions. My expertise extends to frontend frameworks like Tailwind CSS and Bootstrap, enabling rapid prototyping and responsive design. Additionally, I enhance styling capabilities using Sass, ensuring maintainable and modular code. Passionate about creating intuitive user interfaces, I am committed to continuous learning and innovation in frontend development.</p>
        </div>
    </div>
  )
}

export default About