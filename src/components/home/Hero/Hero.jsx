import React from 'react'
import mypic from '../../../assets/portfliopic.png'
import './Style.scss'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='hero flex flex-col justify-center items-center h-[90vh] gap-5'>
      <div className="first flex flex-col justify-center items-center gap-5">
        <img src={mypic} alt=""  className='rounded-full h-[170px] w-[150px] object-cover object-center'/>
        <div className="content">
          <h3>Front-End React Developer 👋</h3>
          <p>Hi i,m Vikash Kumar . A passionate frontend react developr based in sasaram Bihar</p>
        </div>
      </div>
      <div className="tech flex flex-col items-center gap-2">
        <h3>Tech stack ||</h3>
        <div className="skills flex gap-2 items-center">
          <FaHtml5 size="1.8rem" className='icon text-orange-600'/>
          <IoLogoCss3 size="1.8rem" className='icon text-blue-700'/>
          <IoLogoJavascript size="1.8rem" className='icon text-yellow-500'/>
          <RiReactjsLine size="1.8rem" className='icon text-blue-600'/>
          <TbBrandRedux size="1.8rem" className='icon text-orange-500'/>
          <RiTailwindCssFill size="1.8rem" className='icon text-blue-500'/>
          <FaBootstrap size="1.8rem" className='icon text-violet-800'/>
          <IoLogoSass size="1.8rem" className='icon text-pink-600'/>
        </div>
      </div>
    </div>
  )
}

export default Hero