"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

const promos = [
  { id: 1, title: "Juara I", desc: "1 Wingstop Chicken + Rice + Drink", img: "/promo/juara1.jpg" },
  { id: 2, title: "Juara II", desc: "6 Boneless + Seasoned Fries + Choco Pie", img: "/promo/juara2.jpg" },
  { id: 3, title: "Juara III", desc: "6 Crunchy Wings + 6 Boneless + Mushroom Fritters (R) + Fries", img: "/promo/juara3.jpg" },
  { id: 4, title: "Payday Deal", desc: "5 Crunchy Wings + 5 Boneless", img: "/promo/pd.jpg" },
  { id: 5, title: "Snack Combo Large", desc: "Churros + Chocolate Sauce", img: "/promo/scl.png" },
  { id: 6, title: "Flavor Bundle I", desc: "3 Boneless + Fries + Drink", img: "/promo/fb1.jpg" },
  { id: 7, title: "Flavor Bundle II", desc: "12 Wings + 4 Drinks", img: "/promo/fb2.jpg" },
  { id: 8, title: "Flavor Bundle III", desc: "2 Crunchy Wings + Rice", img: "/promo/fb3.jpg" },
];

export default function PromoCarousel() {
  return (
    <div className="w-full py-12 bg-gray-50 relative">
      <h2 className="text-center text-2xl font-bold mb-8">Promo Spesial</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".promo-next",
          prevEl: ".promo-prev",
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {promos.map((promo) => (
          <SwiperSlide key={promo.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
              {/* Gambar */}
              <div className="relative w-full aspect-[4/3] bg-white">
                <Image
                  src={promo.img}
                  alt={promo.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Isi card */}
              <div className="p-4 flex flex-col flex-grow text-center">
                <h3 className="font-bold text-lg">{promo.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{promo.desc}</p>

                {/* Tombol pesan */}
                <Link
                  href="/order"
                  className="mt-auto block w-full py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
                >
                  <span className="flex flex-col items-center justify-center leading-tight font-bold text-sm uppercase">
                    <span>PESAN</span>
                    <span>SEKARANG</span>
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

<button
  className="promo-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 
  w-12 h-12 bg-green-700 text-white flex items-center justify-center 
  shadow-lg hover:bg-green-800 border border-white"
>
  ‹
</button>
<button
  className="promo-next absolute right-4 top-1/2 -translate-y-1/2 z-20 
  w-12 h-12 bg-green-700 text-white flex items-center justify-center 
  shadow-lg hover:bg-green-800 border border-white"
>
  ›
</button>

    </div>
  );
}
