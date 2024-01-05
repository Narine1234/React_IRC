import React from 'react';
import Slick from 'react-slick';
import ProductCard from './CardComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductCardSlider({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time (adjust based on screen size)
    slidesToScroll: 1, // Scroll 1 card at a time
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards at a time on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card at a time on even smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider" style={{ marginBottom: '30px' }}>
      <Slick {...settings}>
        {products.map((product, index) => (
          <div key={product.id || index}>
            <ProductCard
              imageSrc={product.imageSrc}
              title={product.title}
  targetAmount={product.targetAmount}
  currentAmount={product.currentAmount}
  name={product.name}
  disease={product.disease}
            />
          </div>
        ))}
      </Slick>
    </div>
  );
}

export default ProductCardSlider;

