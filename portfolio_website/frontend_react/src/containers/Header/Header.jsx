import React from 'react'
import { motion } from 'framer-motion'
import images from '../../constants/images'
import AppWrap from '../../wrapper/AppWrap'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='header'>

      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='header-info'>
        <div className='header-badge'>
          <div className='helloPt1'>
            <div>
              <p>Hello, I'm a Architectural Assistant turned</p>
              <h1><span> Full Stack </span> Developer</h1>
            </div>
          </div>

          <div className='helloPt2'>
            {/* <span> 👋 </span> */}
            <p> Hi , I'm Luke Newsham, a recently graduated Architect* turned developer. Welcome to my portfolio! </p>
          </div>

        </div>

      </motion.div >

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className='header-img'>
        <img src={images.headerBackground} alt='profile_bg' />
      </motion.div>


      {/* <motion.div
        variant={scaleVariants}
        whileInView = {scaleVariants.whileInView}
        className = 'header-circles'>

          {[images.redux, images.sass, images.react, images.python].map((image, index) => (
            <div className = 'circle-cmp flex' key={`circle-${index}`}>
              <img src={image} alt='circle' />
            </div>
          ))}

      </motion.div> */}

      

    </div>
  )
}

export default AppWrap(Header, 'hello', 'whitebg', true)