import React from 'react'
import './Style.scss'
import ecom from '../../assets/ecom.png'
import chat from '../../assets/chat.png'
import movie from '../../assets/movie.png'
import {FaGithub, FaShare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="projects">
      <p className='title font-semibold text-blue-500'>Projects</p>
      <p className='title font-semibold'>Each project is a unique piece of development🧑‍💻</p>
      <section>
        <div className="project project1">
          <img src={movie} alt="" />
          <div className="content">
            <h3>Movie app🎬</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aperiam aut magnam nostrum exercitationem. Labore blanditiis iste eos dignissimos consequatur veritatis exercitationem? Cum reiciendis voluptatibus nihil error odio animi perspiciatis.</p>
            <div className="tech flex gap-5">
              <b>React</b>
              <b>Redux</b>
              <b>Scss</b>
            </div>
            <div className="options">
              <a href=""><p>Code <FaGithub/></p></a>
              <a href=""><p>Live demo <FiExternalLink/></p></a>
            </div>
          </div>
        </div>
          {/* 999999999999999999999999 */}
        <div className="project project2">
          <img src={ecom} alt="" />
          <div className="content">
            <h3>DevShops🏪</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aperiam aut magnam nostrum exercitationem. Labore blanditiis iste eos dignissimos consequatur veritatis exercitationem? Cum reiciendis voluptatibus nihil error odio animi perspiciatis.</p>
            <div className="tech flex gap-5">
              <b>React</b>
              <b>Tailwind</b>
            </div>
            <div className="options">
              <a href=""><p>Code <FaGithub/></p></a>
              <a href=""><p>Live demo <FiExternalLink/></p></a>
            </div>
          </div>
        </div>
          {/* 999999999999999999999999 */}
        <div className="project project3">
          <img src={chat} alt="" />
          <div className="content">
            <h3>Chat app📲</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aperiam aut magnam nostrum exercitationem. Labore blanditiis iste eos dignissimos consequatur veritatis exercitationem? Cum reiciendis voluptatibus nihil error odio animi perspiciatis.</p>
            <div className="tech flex gap-5">
              <b>React</b>
              <b>Redux</b>
              <b>Scss</b>
            </div>
            <div className="options">
              <a href=""><p>Code <FaGithub/></p></a>
              <a href=""><p>Live demo <FiExternalLink/></p></a>
            </div>
          </div>
        </div>
          {/* 999999999999999999999999 */}
      </section>
    </div>
  )
}

export default Projects