import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperGallery.css';

import { SlideshowLightbox } from 'lightbox.js-react';


const images = [
  'https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600',
];

function SwiperGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Photo Slider + Lightbox</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        navigation
        className="swiper-container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="gallery-img"
              onClick={() => handleClick(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox hiển thị ảnh khi click */}
      {open && (
        <SlideshowLightbox
          images={images.map((src) => ({ src }))}
          open={open}
          index={currentIndex}
          lightboxIdentifier="custom-lightbox"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default SwiperGallery;
