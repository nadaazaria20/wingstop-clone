"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderImages = [
  "/promo/promo1.png",
  "/promo/promo2.png",
  "/promo/promo3.png",
  "/promo/promo4.png",
  "/promo/promo5.png",
];

export default function PromoSlider() {
  return (
    <div className="w-full mt-[60px]"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
      >
        {sliderImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">
              <Image
                src={src}
                alt={`Promo ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
