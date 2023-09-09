import React from 'react'
import Slider from 'react-slick'

const ImageSlider = ({images}) => {
    const settings = {
        dots:true,
        speed:1000,
        slideToShow:1,
        slideToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
    }
  return (
    <div className='image__slider__container'>
       <Slider {...settings}>
          {
            images.map((image,index)=>(
                <img src={image} alt="" key={index} />
            ))
          }
       </Slider>
    </div>
  )
}

export default ImageSlider
