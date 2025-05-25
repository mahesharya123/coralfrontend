import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CSS/HeroSlider.css';
import img1 from './img/slider-one.jpg';
import img2 from './img/image2.jpg';
import img3 from './img/image3.jpg';

export const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: img1,
      title: 'Luxury Hotel & Best Resort',
      subtitle: 'Experience the perfect combination of luxury and comfort'
    },
    {
      id: 2,
      image: img2,
      title: 'Premium Accommodations',
      subtitle: 'Discover our exclusive suite collection'
    },
    {
      id: 3,
      image: img3,
      title: 'Perfect Getaway',
      subtitle: 'Your dream vacation starts here'
    }
  ];

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide) => (
         <SwiperSlide key={slide.id}>
  <div 
    className="hero-slide"
    style={{ 
      backgroundImage: `url(${slide.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-lg-6 text-white">
          <h1 className="display-4 mb-4">{slide.title}</h1>
          <p className="lead">{slide.subtitle}</p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
