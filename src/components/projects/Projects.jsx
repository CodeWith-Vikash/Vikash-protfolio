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
            <p>
Introducing the latest innovation in movie exploration: our cutting-edge movie app! Seamlessly crafted with React, Redux, and SCSS, this web application offers a dynamic and immersive experience for movie enthusiasts. Dive into a world of cinematic wonder as you effortlessly navigate through the latest releases or explore timeless classics with just a few clicks.

With the power of infinite scrolling at your fingertips. </p>
            <div className="tech flex gap-5">
              <b>React</b>
              <b>Redux</b>
              <b>Scss</b>
            </div>
            <div className="options">
              <a href="https://github.com/CodeWith-Vikash/REACT-Projects/tree/2d47a1dc13d80d260e69fa114b7b9ee13384a773/Movie-app" target="_blank"><p>Code <FaGithub/></p></a>
              <a href="https://movie-app-gold-tau.vercel.app/" target="_blank"><p>Live demo <FiExternalLink/></p></a>
            </div>
          </div>
        </div>
          {/* 999999999999999999999999 */}
        <div className="project project2">
          <img src={ecom} alt="" /> 
          <div className="content">
            <h3>INDICART🏪</h3>
            <p>Welcome to INDICART, your premier destination for online shopping excellence. Powered by the dynamic duo of React and Tailwind CSS, our e-commerce platform offers a seamless and visually captivating shopping experience. With unlimited products spanning every category imaginable, finding your next must-have item has never been easier.</p>
            <div className="tech flex gap-5">
              <b>React</b>
              <b>Tailwind</b>
            </div>
            <div className="options">
              <a href="https://github.com/CodeWith-Vikash/INDICART.git" target='_blank'><p>Code <FaGithub/></p></a>
              <a href="https://indicart.vercel.app/" target='_blank'><p>Live demo <FiExternalLink/></p></a>
            </div>
          </div>
        </div>
          {/* 999999999999999999999999 */}
        <div className="project project3">
          <img src={chat} alt="" />
          <div className="content">
            <h3>Chat app📲</h3>
            <p>Introducing our latest innovation in digital communication: our sleek and intuitive chat app. Crafted with the trifecta of React, Tailwind CSS, and Firebase, this platform redefines the way you connect with others online. Say goodbye to complicated sign-up processes and hello to seamless communication with just your email login.

With our chat app, finding and connecting with friends has never been easier. Simply search for registered users by their username and initiate private conversations with ease.</p>
            <div className="tech flex gap-5">
              <b>React</b>
              <b>Firebase</b>
              <b>Tailwind</b>
            </div>
            <div className="options">
              <a href="https://github.com/CodeWith-Vikash/REACT-Projects/tree/2d47a1dc13d80d260e69fa114b7b9ee13384a773/chat-app" target='_blank'><p>Code <FaGithub/></p></a>
              <a href="https://vikash-chat.netlify.app" target='_blank'><p>Live demo <FiExternalLink/></p></a>
            </div>
          </div>
        </div>
          {/* 999999999999999999999999 */}
      </section>
    </div>
  )
}

export default Projects