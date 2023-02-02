import React, { useState } from 'react'
import { About, Contact, Header, Timeline, Projects, Skills } from './containers'
import { Navbar } from './components'
import './App.scss'

import images from './constants/images'

const App = () => {

  const [navbarBackground, setNavbarBackground] = useState(false)

  const onScroll = (e) => {
    const paralaxDiv = document.querySelector('#hello');
    const rect = paralaxDiv.getBoundingClientRect();
    // console.log(rect.y)
    if (rect.y < -100) {
      setNavbarBackground({
        navbar: 'navbarSolid',
        logo: 'logoSmall img'
      })

    } else {
      setNavbarBackground(false)
    }

  }



  return (
    <div className='app' >
      <Navbar navbarBackground={navbarBackground} />
      <div id='paralax' onScroll={onScroll} >
        <img className='codeBackground' src={images.codeBackground} alt='codeBackground' />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </div>

    </div>

  );
}

export default App;
