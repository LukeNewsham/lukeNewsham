import React from 'react'
import { motion } from 'framer-motion'

const NavigationDots = ({ active }) => {
    return (
        <motion.div className='navigation'  transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.3 } }
        >
            {['hello', 'about', 'skills', 'projects', 'timeline', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    style={active === item ? { backgroundColor: 'var(--secondary-color)' } : {}}
                    className='navigation-dot'
                />
            ))
            }
        </motion.div >
    )
}

export default NavigationDots