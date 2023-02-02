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
              <h3>Hey, I'm Luke Newsham</h3>
              <h1><span> Full Stack </span> Developer</h1>
            </div>
          </div>

          <div className='helloPt2'>
            {/* <span> 👋 </span> */}
            {/* <p> Hi , I'm Luke Newsham, a recently graduated Architect* turned developer. Welcome to my portfolio! </p> */}
          </div>

          <div className='letsConnectHeader'>
            <a className='letsConnectBtn' href={`#contact`}> Lets Connect </a>
          </div>

        </div>

      </motion.div >


      <svg class='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--lightGray-color)" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,138.7C480,149,600,171,720,154.7C840,139,960,85,1080,64C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>




      {/* <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className='header-img'>
        <img src={images.headerBackground} alt='profile_bg' />
      </motion.div> */}


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

export default AppWrap(Header, 'hello')