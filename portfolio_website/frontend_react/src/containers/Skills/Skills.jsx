import React, { useState, useEffect } from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'
import images from '../../constants/images'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'

const Skills = () => {

  const [skills, setSkills] = useState([])

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })

  }, [])



  return (
    <>

      <h2> I offer a
        <span> range </span>
         of skills
        < br />
        {/* along my
        <span> journey </span> */}
      </h2>

      <div id ='skills-container'>
        <motion.div
          className='skills-list' id='frontend'
        >
          <h3> Frontend </h3>
          {skills?.map((skill) => (
            skill.type === 'frontend' ?
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='skills-item flex'
                key={skill.name}
              >
                <div className='flex' >
                  <img src={urlFor(skill.icon)} alt='Skill.name' />
                </div>
                <p> {skill.name} </p>
              </motion.div>
              :
              ``
          ))}
        </motion.div>

        <motion.div
          className='skills-list' id='backend'
        >
          <h3> Backend </h3>
          {skills?.map((skill) => (
            skill.type === 'backend' ?
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='skills-item flex'
                key={skill.name}
              >
                <div className='flex'>
                  <img src={urlFor(skill.icon)} alt='Skill.name' />
                </div>
                <p> {skill.name} </p>
              </motion.div>
              :
              ``
          ))}
        </motion.div>



      </div>


    </>
  )
}

export default AppWrap(Skills, 'skills', 'whitebg')