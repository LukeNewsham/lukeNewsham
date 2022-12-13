import React, { useState, useEffect } from 'react'
import { animate, motion, useTransform } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'

import './Skills.scss'

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })

    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data)
    })
  }, [])


  return (
    <>
      <h2> Skills & Experience </h2>
      <div className='skills-container'>
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

        <motion.div
          className='skills-exp'
        >
          {experiences?.map((experience) => (
            <motion.div
              className='skills-exp-item'
              key={experience.year}
            >

              {console.log(experience)}

              <div className='skills-exp-year'>
                <p>{experience.year} </p>
              </div>

              <motion.div
                className='skills-exp-works'
              >
                {experience?.works?.map((work) => (
                
                  <>
                    {console.log(work)}
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4> {work.name} </h4>
                      <p> {work.company} </p>
                      <p> {work.desc} </p>
                    </motion.div>

                    
                  </>
                ))}

              </motion.div>
            </motion.div>

          ))}

        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills', 'whitebg')