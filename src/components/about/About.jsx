import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "./banner.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us ' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our company story and work process' />

            <p>NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an Al agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do together.</p>
            <p>We offer users the ability to screen potential nearby connections and arrange shared face-to-face activities. Our team previously founded Foresight Institute, Persist Ventures, & Systemic Altruism.</p>
            <a href="#"><button className='btn2'>More About Us</button></a>
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
