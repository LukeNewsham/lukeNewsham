import React, { useState } from 'react'
import images from '../../constants/images'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'

const Navbar = ({navbarBackground}) => {
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

        <div className='letsConnectBtnNav'> <a className='letsConnectBtn' href={`#contact`}> Lets Connect  </a>
        </div>

        <div className='navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['hello', 'about', 'skills', 'projects', 'timeline', 'contact'].map((item) => (
                  <li key={item}>

                    <a href={`#${item}`} onClick={() => setToggle(false)}> {item} </a>

                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

      </nav>
    </div>
  )
}
export default Navbar