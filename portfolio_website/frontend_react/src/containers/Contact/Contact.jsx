import React, { useState, useEffect } from 'react'
import { animate, motion, useTransform } from 'framer-motion'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi'
import $ from 'jquery';


import './Contact.scss'

const Contact = () => {

  // const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)




  const handleSubmit = () => {

    setLoading(true);

    let formData = $('#contactForm').serializeArray()
    console.log(formData[0].value, formData[1].value, formData[2].value)

    $.ajax({
      url: 'https://lukenewshamportfolio.me/php/SMTPMailer.php',
      // url: 'http://localhost/portfolio_website/SMTPMailer.php',
      type: 'POST',
      dataType: 'json',
      data: {
        name: formData[0].value,
        email: formData[1].value,
        message: formData[2].value,
      },
      success: function (result) {
        console.log(result)
        if (result.status.code == "200") {
          setLoading(false);
          setIsFormSubmitted(true)
        }
      }
    })
  }

  return (
    <div className='contact-form flex'>
      <h2> Let's <span> Connect </span> </h2>
      {/* 
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
      </div> */}

      <div className='connectButtons'>
        <a className='socialBtn linkedIn' href={`https://www.linkedin.com/in/lukenewsham/`} target="_blank">
          <AiFillLinkedin />
        </a>
        <a className='socialBtn github' href={`https://github.com/LukeNewsham`} target="_blank">
          <AiFillGithub />
        </a>
      </div>


      {!isFormSubmitted ?
        <form method='post' id='contactForm' >
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
          <button type='button' className='' onClick={handleSubmit}>
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