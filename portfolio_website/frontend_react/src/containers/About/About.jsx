import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import images from '../../constants/images'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'

const About = () => {

  const [skills, setSkills] = useState([])
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => setAbouts(data))
    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })

  }, [])



  return (
    <>

      <h2> I have acquired many
        <span> skills </span>
        < br />
        along my
        <span> journey </span>
      </h2>

      <div className='profiles' >
        {
          abouts?.map((about, index) => (
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
      <motion.div
        className='skills-list'
      >
        {skills?.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='skills-item flex'
            key={skill.name}
          >
            <div className='flex' style={{ backgroundColor: skill.bgColor }}>
              <img src={urlFor(skill.icon)} alt='Skill.name' />
            </div>
            <p> {skill.name} </p>
          </motion.div>

        ))}

      </motion.div>
    </>
  )
}

export default AppWrap(About, 'about', 'graybg')