import React from 'react'
import { About, Footer, Header, Skills, References, Work } from './containers'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <References />
      <Footer />
    </div>
  );
}

export default App;
