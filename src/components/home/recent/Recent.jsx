import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Check out our latest addition to Rent Sphere: a charming two-bedroom apartment nestled in the heart of downtown, boasting modern amenities and panoramic city views. Do not miss your chance to make this your next home sweet home!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
