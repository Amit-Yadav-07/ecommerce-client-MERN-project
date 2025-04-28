import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../assets/images/slide-1.jpg'
import img2 from '../assets/images/slide-2.jpg'
import img3 from '../assets/images/slide-3.jpg'

const SlickCarousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true
    };

    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div className='h-[80vh]'>
                    <img src={img1} className='h-[100%] w-[100%] object-cover' alt="img-1" />
                </div>

                <div className='h-[80vh]'>
                    <img src={img2} className='h-[100%] w-[100%] object-cover' alt="img-2" />
                </div>

                <div className='h-[80vh]'>
                    <img src={img3} className='h-[100%] w-[100%] object-cover' alt="img-3" />
                </div>
                
            </Slider>
        </div>
    )
}

export default SlickCarousel;