import React, { useState, useEffect } from 'react'
import { animate, motion, useTransform } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Timeline.scss'
import { GiSchoolBag } from 'react-icons/gi'
import { IoMdSchool } from 'react-icons/io'
import { MdOutlineWork } from 'react-icons/md'
import images from '../../constants/images'

const Timeline = () => {

  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    const timelineQuery = '*[_type == "timeline"]';
    client.fetch(timelineQuery).then((data) => {
      setTimeline(data)
    })
  }, [])

  let timelineSorted = timeline

  timelineSorted.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <>
      <h2> Curriculum Vitae <span> Timeline </span> </h2>

      <a className='cvButton' href={'https://lukenewshamportfolio.me/Luke Newsham CV.pdf'} target='_blank'> CV Document </a>
      <div className='timeline-container'>
        <VerticalTimeline>




          {timelineSorted.map(item => {

            let icon = item?.icon

            function getIcon() {
              return icon === 'school' ? <GiSchoolBag /> :
                icon === 'education' ? <IoMdSchool /> :
                  icon === 'work' ? <MdOutlineWork /> :
                    '';
            }
            return <VerticalTimelineElement
              // className={'timelineContainer'}
              key={item.id}
              date={item.date}
              dateClassName='timelineDate'
              lineColor={'black'}
              iconClassName={'timelineIcon'}
              icon={getIcon()}
              textClassName={'timelineText'}
            >
              <h3 className='vertical-timeline-element-title'> {item.title} </h3>
              <h5 className='vertical-timeline-element-subtitle'> {item.location} </h5>
              <p id='description'> {item.description} </p>
              <ul>
                {item.qualifications ? item.qualifications.map(item => (
                  <li className='qual'>  <img src={images.qualIcon} /> <p> {item} </p> </li>

                )) : ''
                }
                {item.achievements ? item.achievements.map(item => (
                  <li className='ach'> <p> {item} </p> </li>

                )) : ''
                }
              </ul>

            </VerticalTimelineElement>

          })}
        </VerticalTimeline>



        {/* <motion.div
          className='timeline'
        >
          {experiences?.map((experience) => (
            <motion.div
              className='timeline-item'
              key={experience.year}
            >

              {console.log(experience)}

              <div className='timeline-year'>
                <p>{experience.year} </p>
              </div>

              <motion.div
                className='timeline-works'
              >
                {experience?.works?.map((work) => (
                
                  <>
                    {console.log(work)}
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='timeline-work'
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

        </motion.div> */}
      </div>
    </>
  )
}

export default AppWrap(Timeline, 'timeline', 'whitebg')