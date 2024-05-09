import React from 'react'
import './Style.scss'
import ecom from '../../assets/ecom.png'
import chat from '../../assets/chat.png'
import movie from '../../assets/movie.png'

const Projects = () => {
  return (
    <div className="projects">
      <p className='title font-semibold text-blue-500'>Projects</p>
      <p className='title font-semibold'>Each project is a unique piece of development🧑‍💻</p>
      <section>
        <div className="project project1">
          <img src={movie} alt="" />
          <div className="content"></div>
          {/* 999999999999999999999999 */}
        </div>
      </section>
    </div>
  )
}

export default Projects