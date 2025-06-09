import React from 'react'
import Hero from '../components/howItWorks/Hero'
import ContactForm from '../components/contact/ContactForm'

const ContactUs = () => {
  return (
    <div>
        <Hero
        h1={"Get in Touch"}
        p={"We're here to answer your questions and provide information about our elderly care services."}
        />
        <ContactForm/>
    </div>
  )
}

export default ContactUs