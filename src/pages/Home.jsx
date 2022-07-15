import React from 'react'
import MainSlider from '../components/main-slider/MainSlider'
import UpcomingSlider from '../components/upcoming-slider/UpcomingSlider'
import TrendingSlider from '../components/trending-slider/TrendingSlider'
import TopRatedSlider from '../components/top-rated-slider/TopRatedSlider'

const Home = () => {

  return (
    <div>
        <MainSlider/>
        <TrendingSlider/>
        <UpcomingSlider/>
        <TopRatedSlider/>
    </div>
  )
}

export default Home