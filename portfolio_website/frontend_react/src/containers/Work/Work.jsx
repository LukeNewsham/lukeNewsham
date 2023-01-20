import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { animate, motion, useTransform } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import './Work.scss'

const Work = () => {

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
      <h2> Capstone
        <span> Projects </span>
        < br />
      </h2>

      <div className='work-filter'>
        {['All', 'Postgres SQL', 'Express JS', 'React JS', 'Node Js', 'Sass', 'Sanity', 'Bootstrap'].map((item, index) => (

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
            <div className='work-item flex' key={index}>
              <div className='work-img flex'>
                {/* <img src={urlFor(work.imgUrl)} alt={work.name} /> */}
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className='work-hover flex'
                >
                  <a href={work.projectLink} target='_blank' rel='norelfer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='flex'
                    >
                      <AiFillEye />

                    </motion.div>

                  </a>

                  <a href={work.codeLink} target='_blank' rel='norelfer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='flex'
                    >
                      <AiFillGithub />

                    </motion.div>

                  </a>

                </motion.div>

              </div>

              <div className='work-content flex'>

                <p style={{ marginTop: 10 }}> {work.description} </p>
                <div className = 'flex'>

                {/* {
                  work.tags.map((item) => (
                    <p className = 'work-tag'> {item} </p>
                  ))
                } */}

                </div>


                <div className='work-title flex'>
                  <p> {work.title} </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </motion.div>



    </>
  )
}

export default AppWrap(Work, 'work')