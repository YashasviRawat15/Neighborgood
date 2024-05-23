import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us ' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our company story and work process' />

            <p>Welcome to Rent Sphere, your ultimate destination for all your renting needs! At Rent Sphere, we believe in making the process of renting hassle-free and convenient. Whether you're looking for a cozy apartment in the heart of the city, a spacious house in the suburbs, or even commercial properties for your business ventures, Rent Sphere has got you covered.</p>
            <p>Our mission is to revolutionize the way people find and rent properties by providing a seamless online platform that connects renters with landlords and property managers. We understand that finding the perfect rental can be overwhelming, which is why we've designed Rent Sphere to be intuitive, user-friendly, and packed with features to simplify your search.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
