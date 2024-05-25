import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import neighbor from './neighbors.png'

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          
        <img alt="image" src={neighbor} className="connect"/>
        
        
          <Heading title='A Way For Neighbors to Connect' subtitle=''  className="heading"/>

          <br/>
          
          <p>Neighborhood norms have evolved away from spontaneous connections.</p>
<br/>
          <p>Today we prefer to screen our contacts online before meeting in person. We screen work colleagues using LinkedIn; we screen activity participants on Facebook; we screen romance candidates using online dating services.What's needed now is an app that lets us share specific info that we select, with nearby neighbors that we also select-just as we can do now on Linkedin, but for our social lives with nearby neighbors.Al can suggest matches and activities, making connection even easier. LLMs enable semantic understanding of wants and needs, allowing the neighborhood connector - formerly the local extrovert - to instead be an Al agent.</p>
          
          <br/>
        
        </div>
      </section>
    </>
  )
}

export default Recent
