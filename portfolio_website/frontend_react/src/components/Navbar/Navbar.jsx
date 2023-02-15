import React, { useState } from 'react'
import images from '../../constants/images'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import './Navbar.scss'

const Navbar = ({ navbarBackground }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <nav className={`navbar ${navbarBackground.navbar}`}>
        <div className={`navbar-logo ${navbarBackground.logo}`} >
          <img src={images.logo} alt='logo' />
        </div>
        <ul className='navbar-links'>
          {['hello', 'about', 'skills', 'projects', 'timeline'].map((item) => (
            <li className='flex p-text' key={`link-${item}`}>

              <a href={`#${item}`}> {item} </a>

            </li>
          ))}
        </ul>


        <div className='connectButtons'>
          <a class='socialBtn' href={`https://www.linkedin.com/in/lukenewsham/`} target="_blank">
            <AiFillLinkedin />
          </a>
          <a class='socialBtn' href={`https://github.com/LukeNewsham`} target="_blank">
            <AiFillGithub />
          </a>
          <a className='letsConnectBtn' href={`#contact`}> Let's Connect  </a>
        </div>

        <div className='navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div class='navBar-menu-side' whileInView={{ x: [300, 0], opacity: [0, 1] }} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <HiX onClick={() => setToggle(false)} />


              <ul>

                {['hello', 'about', 'skills', 'projects', 'timeline', 'contact'].map((item) => (
                  <li key={item}>

                    <a href={`#${item}`} onClick={() => setToggle(false)}> {item} </a>

                  </li>
                ))}
                <li>
                  <a class='socialBtn' href={`https://www.linkedin.com/in/lukenewsham/`} target="_blank">
                    <AiFillLinkedin />
                  </a>
                  <a class='socialBtn' href={`https://github.com/LukeNewsham`} target="_blank">
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>

      </nav>
    </div>
  )
}
export default Navbar