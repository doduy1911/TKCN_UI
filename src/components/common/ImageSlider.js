"use client"

import Image from "next/image";
import { useState } from "react";

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageSlider = ({ dataImage }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="rounded-[7px] overflow-hidden">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        navigation={true}
        spaceBetween={10}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="image-slider-main"
      >
        {dataImage?.data?.urls?.map((item, index) =>
          <SwiperSlide key={index}>
            <Image
              src={item || ""}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover"
            />
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="image-slider-thumb"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4
          },
          1000: {
            slidesPerView: 5
          }
        }}
      >
        {dataImage?.data?.urls?.map((item, index) =>
          <SwiperSlide key={index}>
            <Image
              src={item || ""}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </div>

  )
}

export default ImageSlider