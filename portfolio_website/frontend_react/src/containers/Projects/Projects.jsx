import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'
import { FaRegEye } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { animate, motion, useTransform } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import './Projects.scss'

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)

  }

  return (
    <>
      <h2> Full Stack
        <span> Projects </span>
        < br />
      </h2>

      <div className='work-filter'>
        {['All', 'PostgreSQL', 'Express', 'React', 'Redux', 'Node', 'Leaflet', 'Sass', 'Sanity', 'Bootstrap', 'JQuery', 'Php'].map((item, index) => (

          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`work-filter-item flex ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>





        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='work-portfolio'
      >
        <div className='works'>
          {filterWork.map((work, index) => (
            <a className='work-item flex' key={index} href={work.projectLink}>
              <div className='work-img flex'>
                {work.imgUrl ? <img src={urlFor(work.imgUrl)} alt={work.name} />
                  : ''}

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className='work-hover flex'
                >
                  {work.projectLink ?
                    <a href={work.projectLink} target='_blank'>
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className='flex'
                      >
                        <FaRegEye />
                      </motion.div>
                    </a>
                    :
                    ''
                  }

                  {work.demoLink ?
                    <a href={work.demoLink} target='_blank' >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className='flex'
                      >
                        <BsPlayFill />
                      </motion.div>
                    </a>
                    :
                    ''
                  }

                  <a href={work.codeLink} target='_blank'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='flex'
                    >
                      <FiInfo />
                    </motion.div>
                  </a>

                </motion.div>

              </div>

              <div className='work-content flex'>

                <div className='work-title flex'>
                  <p> {work.title} </p>
                </div>

                <p class='used'> {work.used ? work.used : 'No Data'}</p>

                <p style={{ marginTop: 10 }}> {work.description} </p>

                <div class='linksMobile'>
                  {work.projectLink ?
                    <a href={work.projectLink} target='_blank'>
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className='flex'
                      >
                        <FaRegEye />
                      </motion.div>
                    </a>
                    :
                    ''
                  }

                  {work.demoLink ?
                    <a href={work.demoLink} target='_blank' >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className='flex'
                      >
                        <BsPlayFill />
                      </motion.div>
                    </a>
                    :
                    ''
                  }

                  <a href={work.codeLink} target='_blank'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='flex'
                    >
                      <FiInfo />
                    </motion.div>
                  </a>
                </div>





              </div>

            </a>
          ))}
        </div>

      </motion.div>



    </>
  )
}

export default AppWrap(Projects, 'projects', 'graybg')