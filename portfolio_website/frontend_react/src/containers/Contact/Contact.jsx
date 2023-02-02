import React, { useState, useEffect } from 'react'
import { animate, motion, useTransform } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi'

import './Contact.scss'

const Contact = () => {

  // const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleSubmit = () => {
    setLoading(true);

    setInterval(function () {
      setLoading(false);
      setIsFormSubmitted(true)
    }, 10000)
  }

  return (
    <div className='contact-form flex'>
      <h2> Lets Connect </h2>

      <div className='contact-cards'>

        <div className='contact-card'>
          <HiOutlineMail />
          <a href='mailto:lenewsham@outlook.com'>
            luke.newsham@outlook.com
          </a>
        </div>
        <div className='contact-card'>
          <HiOutlineDeviceMobile />
          <a href='tel:07548839424'>
            07548839424
          </a>
        </div>
      </div>

      <h3> Or use the contact form </h3>


      {!isFormSubmitted ?
        <form  method='post' action='https://lukenewshamportfolio.me/php/SMTPMailer.php'>
          <div className='flex'>
            <input type='text' placeholder='Your Name' name='name' required>
            </input>
          </div>
          <div className='flex'>
            <input type='email' placeholder='Your Email' name='email' required>
            </input>
          </div>
          <div className='flex'>
            <textarea
              className=''
              placeholder='Your Message'
              name='message'
              required>
            </textarea>
          </div>
          <button type='submit' className='' onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        :
        <div>
          <h3> Thank you for getting in touch! </h3>
        </div>
      }


    </div>
  )
}

export default AppWrap(Contact, 'contact', 'graybg')