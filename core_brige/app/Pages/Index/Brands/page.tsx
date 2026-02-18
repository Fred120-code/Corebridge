"use client";

import Image from "next/image";
import brand1 from "@/public/Images/Brand-1.svg";
import brand2 from "@/public/Images/Brand-2.svg";
import brand3 from "@/public/Images/Brand-3.svg";
import brand4 from "@/public/Images/Brand-4.svg";
import brand5 from "@/public/Images/Brand-5.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const BrandsData = [brand1, brand2, brand3, brand4, brand5, brand3];


const Brands = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 bg-black brands-wrap">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            600: { slidesPerView: 3 },
            500: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
          }}
        >
          {BrandsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-[150px] h-[100px] items-center justify-center">
                <Image
                  src={item}
                  alt="Brands"
                  className="hover:scale-105
                            cursor-pointer transition-all duration-300 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Brands;
