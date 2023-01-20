import React from 'react'
import { About, Contact, Header, Timeline, Work } from './containers'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
