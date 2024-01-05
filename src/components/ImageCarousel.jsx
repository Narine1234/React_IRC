

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import './ImageSlider.css';
 
const ImageCarousel = ({ images }) => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 5000,
        
    };
    return (
            <div className="imgslider" style={{ width: '100%' }}>
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="carousel-image"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
    );
};
export default ImageCarousel;