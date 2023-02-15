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

      <h2> My Career
        <span> Journey  </span> < br />
      </h2>

      <div className='profiles' >
        {
          abouts?.map((about, index) => (

            <>

              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='profile-item'
                key={about.title + index}>

                < img src={urlFor(about.imgUrl)} alt={about.title} />
                <h3  style={{ marginTop: 20 }}> {about.title} </h3>                
                <p class='profile-item-description'> {about.description} </p>
                <p ><i> {about.disclaimer}</i>  </p>
                <ul>
                  {about.qualifications ? about.qualifications.map(item => (                    
                    <li>  <img src={images.qualIcon} /> <p> {item} </p> </li>                    
                    
                  )) : ''
                  }
                </ul>
               


              </motion.div>

              <div>
                {(abouts.length - 1) !== index
                  ?
                  <h1 className='arrowRight'> ⇨ </h1>
                  :
                  ''}
              </div>

              <div>
                {(abouts.length - 1) !== index
                  ?
                  <h1 className='arrowDown'> ⇩ </h1>
                  :
                  ''}
              </div>

            </>






          ))
        }
      </div>

    </>
  )
}

export default AppWrap(About, 'about', 'graybg')