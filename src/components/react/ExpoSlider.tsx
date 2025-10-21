// src/components/ExpoSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const slides = [
  {
    img: "https://media.istockphoto.com/id/1493482723/pt/foto/rice-beans-grilled-chicken-steak-salad.jpg?s=612x612&w=0&k=20&c=vRfHmxp7BIOoMf529VtyXGW-Dd7tIWDk4fkFJOI-EoU=",
  },
  {
    img: "https://static.vecteezy.com/ti/fotos-gratis/t2/24575045-grelhado-carne-e-legumes-em-rustico-espetos-gerado-de-ai-gratis-foto.jpg",
  },
  {
    img: "https://media.istockphoto.com/id/2159432737/pt/foto/brazilian-feijoada-traditional-food-from-brazil-cuisine-on-ceramic-casserole-bowl-over-rustic.jpg?s=612x612&w=0&k=20&c=bumh5_j-4U-TQXUUFvK1mipUJKZZ_u9vm7H-jihueKE=",
  },
  {
    img: "https://media.istockphoto.com/id/1493482723/pt/foto/rice-beans-grilled-chicken-steak-salad.jpg?s=612x612&w=0&k=20&c=vRfHmxp7BIOoMf529VtyXGW-Dd7tIWDk4fkFJOI-EoU=",
  },
  {
    img: "https://static.vecteezy.com/ti/fotos-gratis/t2/24575045-grelhado-carne-e-legumes-em-rustico-espetos-gerado-de-ai-gratis-foto.jpg",
  },
];

export default function ExpoSlider() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Swiper
        direction="horizontal"
        speed={1000}
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
