import React from 'react'
import ImageSlider from '@/src/Components/ImageSlider'
import { bannerImages } from '@/src/Data'

const HomePage = () => {
  return (
    <div>
      <ImageSlider images={bannerImages}/>
    </div>
  )
}

export default HomePage
