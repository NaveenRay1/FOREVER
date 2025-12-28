import React from 'react'
import Hero from '../components/Hero'
import LatestColletion from '../components/LatestColletion'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestColletion/>
      <BestSeller/>
    </div>
  )
}

export default Home
