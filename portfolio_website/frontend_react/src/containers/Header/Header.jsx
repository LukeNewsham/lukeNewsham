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
    <div className='header flex'>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='header-info'>
        <div className='header-badge'>
          <div className='badge-cmp flex'>
            <span> 👋 </span>
            <div style={{ marginLeft: 20 }}>
              <p> Hello, I am  </p>
              <h1> Luke </h1>

            </div>
          </div>
          <div className='tag-cmp flex'>
            <p> Full Stack Engineer </p>


          </div>

        </div>

      </motion.div >

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className='header-img'>
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className = 'overlay-circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView = {scaleVariants.whileInView}
        className = 'header-circles'>

          {[images.redux, images.sass, images.react, images.python].map((image, index) => (
            <div className = 'circle-cmp flex' key={`circle-${index}`}>
              <img src={image} alt='circle' />
            </div>
          ))}

      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'hello')