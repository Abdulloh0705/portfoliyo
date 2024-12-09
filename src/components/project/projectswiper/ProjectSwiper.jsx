import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
import './projectswiper.scss';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const ProjectSwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2000, // Har 2 soniyada slaydni o'zgartiradi
                    disableOnInteraction: false, // Foydalanuvchi bilan o'zaro ta'sirda autoplayni to'xtatmaydi
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]} // Autoplay modulini qo'shdim
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="https://abdulloh0705.github.io/VueCinema/">
                        <img src="/public/vue.jpg" alt="" className="swiper_img" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://proweb-henna.vercel.app">
                        <img src="/public/niga.jpg" alt="" className="swiper_img" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://nike-react-flax.vercel.app">
                        <img src="/public/go trip.jpg" alt="" className="swiper_img" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://kran-new1.vercel.app">
                        <img src="/public/kran.jpg" alt="" className="swiper_img" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://click-house-ten.vercel.app/">
                        <img src="/public/mebel.jpg" alt="" className="swiper_img" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default ProjectSwiper;
