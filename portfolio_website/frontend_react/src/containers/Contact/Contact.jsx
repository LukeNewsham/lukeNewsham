import React, { useState, useEffect } from 'react'
import { animate, motion, useTransform } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi'

import './Contact.scss'

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
      })

  }

  return (
    <>
      <h2> Lets chat </h2>

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


      {!isFormSubmitted ?
        <div className='contact-form flex'>
          <div className='flex'>
            <input type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}>
            </input>
          </div>
          <div className='flex'>
            <input type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}>
            </input>
          </div>
          <div className='flex'>
            <textarea
              className=''
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput} />
          </div>
          <button type='button' className='' onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        :
        <div>
          <h3> Thank you for getting in touch! </h3>
        </div>
      }


    </>
  )
}

export default AppWrap(Contact, 'contact')