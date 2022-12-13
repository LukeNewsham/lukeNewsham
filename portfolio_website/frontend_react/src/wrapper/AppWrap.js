import React from 'react'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'
import { motion } from 'framer-motion'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div
            id={idName}
            className={`${classNames}`}
        >
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className = 'container'
            >

                {/* <SocialMedia /> */}
                <NavigationDots active={idName} />

                <div className='wrapper flex'>
                    <Component />
                </div>

            </motion.div>


        </div>

    )
}

export default AppWrap