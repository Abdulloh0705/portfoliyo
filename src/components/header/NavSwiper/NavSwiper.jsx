import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import "./navSwiper.scss"
// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const NavSwiper = () => {
  return (
    <div className="navSwiper">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2000, // Har 2 soniyada slaydni o'zgartiradi
          disableOnInteraction: false, // Foydalanuvchi bilan o'zaro ta'sirda autoplayni to'xtatmaydi
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./salom.png" alt="" className="swiper_imgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./swiper_img1.png" alt="" className="swiper_imgs" />
        </SwiperSlide>

      </Swiper>
    </div>

  )
}

export default NavSwiper
