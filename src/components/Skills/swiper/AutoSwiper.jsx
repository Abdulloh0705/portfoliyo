import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./autoSwiper.scss";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const AutoSwiper = () => {
    const slides = [
        { src: "/public/html.png", alt: "HTML Logo", shadowColor: "rgba(255, 102, 0, 0.5)" }, // HTML
        { src: "/public/css.png", alt: "CSS Logo", shadowColor: "rgba(0, 102, 255, 0.5)" }, // CSS
        { src: "/public/js2.png", alt: "JavaScript Logo", shadowColor: "rgba(247, 223, 30, 0.5)" }, // JS
        { src: "/public/redux.png", alt: "Redux Logo", shadowColor: "rgba(118, 74, 188, 0.5)" }, // Redux
        { src: "/public/react1.png", alt: "React Logo", shadowColor: "rgba(97, 219, 251, 0.5)" }, // React
    ];


    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2100,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        className="slide-image"
                        style={{
                            boxShadow: `0 4px 20px ${slide.shadowColor}`,
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AutoSwiper;
