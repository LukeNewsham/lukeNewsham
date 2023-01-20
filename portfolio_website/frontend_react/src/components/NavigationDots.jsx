import React from 'react'
import { motion } from 'framer-motion'

const NavigationDots = ({ active }) => {
    return (
        <motion.div className='navigation'  transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.3 } }
        >
            {['hello', 'about', 'work', 'timeline', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    className='navigation-dot'
                />
            ))
            }
        </motion.div >
    )
}

export default NavigationDots