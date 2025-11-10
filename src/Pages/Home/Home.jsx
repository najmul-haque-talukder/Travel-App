import React from 'react'
import Slider from './HomeComponents/Slider'
import DestinationCard from './HomeComponents/DestinationCard'
import Section1 from './HomeComponents/Section1'
import Section2 from './HomeComponents/Section2'
import Section4 from './HomeComponents/Section4'
import Banner from './HomeComponents/Banner'
import Section5 from './HomeComponents/Section5'

const Home = () => {
  return (
    <div>

      <Slider />
      <DestinationCard />
      <Section1 />
      <Section2 />
      <Section4 />


      <div className='px-20 py-6'>
        <Banner />
      </div>

      <Section5 />

    </div>
  )
}

export default Home