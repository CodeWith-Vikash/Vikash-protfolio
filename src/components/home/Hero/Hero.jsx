import React from 'react'
import mypic from '../../../assets/portfliopic.png'
import './Style.scss'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap,FaGithub,FaLinkedin } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='hero flex flex-col justify-center items-center gap-5'>
      <div className="first flex flex-col justify-center items-center gap-5">
        <img src={mypic} alt=""  className=' h-[170px] w-[150px] object-cover'/>
        <div className="content">
          <h3>Front-End React Developer 👋</h3>
          <p>Hi i,m Vikash Kumar . A passionate frontend react developr based in sasaram Bihar📍</p>
          <div className="icons flex my-2 gap-2">
            <a href="https://github.com/CodeWith-Vikash"><FaGithub size="1.5rem"/></a>
            <a href="https://www.linkedin.com/in/code-with-vikash/"><FaLinkedin size="1.5rem"/></a>
          </div>
        </div>
      </div>
      <div className="tech flex flex-col items-center gap-2">
        <h3>Tech stack ||</h3>
        <div className="skills flex gap-2 items-center">
          <FaHtml5  className='icon text-orange-600' title='HTML'/>
          <IoLogoCss3  className='icon text-blue-700' title='CSS'/>
          <IoLogoJavascript  className='icon text-yellow-500' title='JavaScript'/>
          <RiReactjsLine  className='icon text-blue-600' title='React'/>
          <TbBrandRedux  className='icon text-violet-600' title='Redux'/>
          <IoLogoFirebase  className='icon text-orange-600' title='Firebase'/>
          <RiTailwindCssFill  className='icon text-blue-500' title='Tailwind'/>
          <FaBootstrap  className='icon text-violet-800' title='Bootstrap'/>
          <IoLogoSass  className='icon text-pink-600' title='Sass'/>
        </div>
      </div>
    </div>
  )
}

export default Hero