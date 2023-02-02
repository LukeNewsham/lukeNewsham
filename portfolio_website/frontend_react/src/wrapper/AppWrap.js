import React from 'react'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'
import { motion } from 'framer-motion'

const AppWrap = (Component, idName, classNames, wave) => function HOC() {
    return (
        <div
            id={idName}
            className={`${classNames}`}
        >
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className='container'
            >

                {/* <SocialMedia /> */}
                <NavigationDots active={idName} />

                <div className='wrapper flex'>
                    <Component />
                </div>

            </motion.div>

            {/* {wave !== undefined ?
                <svg class='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="var(--lightGray-color)" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,138.7C480,149,600,171,720,154.7C840,139,960,85,1080,64C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                :
                ''

            } */}




        </div>

    )
}

export default AppWrap