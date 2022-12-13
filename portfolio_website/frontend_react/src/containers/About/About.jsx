import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import images from '../../constants/images'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'

const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => setAbouts(data))

  }, [])


  return (
    <>
      <h2> I Know That
        <span> Good Dev </span>
        < br />
        means
        <span> Good Buissness </span>
      </h2>

      <div className='profiles' >
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='profile-item'
              key={about.title + index}>

              < img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}> {about.title} </h2>
              <p style={{ marginTop: 10 }}> {about.description} </p>
            </motion.div>

          ))
        }

      </div>
    </>
  )
}

export default AppWrap(About, 'about')