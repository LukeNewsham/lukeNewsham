import React from 'react'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`container ${classNames}`}>
            {/* <SocialMedia /> */}
            <NavigationDots active = {idName} />

            <div className='wrapper flex'>
                <Component />
            </div>
        </div>
    )
}

export default AppWrap