import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider() {
  const slides = [
    {
      text1: "Welcome to the future of energy and water management",
     
      image: "/carosel/welcometothe.png",
      id: "slide1",
    },
    {
      text1: "Start your journey towards a profitable and green future",
      
      image: "/carosel/startyourjourney (1).png",
      id: "slide2",
    },
    {
      text1: "Meet your growing energy and water needs while saving costs",
     
      image: "/carosel/meetyourenergy.png",
      id: "slide3",
    },
    {
      text1: "Create sustainable growth stories with better managed infrastructure ",
      
      image: "/carosel/createsustainable.png",
      id: "slide4",
    },
  ];

  return (
    <div className="relative w-auto">
      {/* <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide"> */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={false}
          autoplay={true}
          loop={true}
          speed={500}
          pagination={{ clickable: true }}

          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map(({ text1,  image, id }) => (
            <SwiperSlide key={id}>
              <div className="h-[65vh] w-full relative flex justify-center items-center">
                <Image
                
                  className="object-cover w-full h-full"
                  layout="fill"
                  src={image}
                  alt=""
                />
                <div className="absolute inset-0 bg-green opacity-20"></div>
                <div className="px-4 md:container text-center z-50">
                  <h1 className="text-4xl md:text-5xl  text-white drop-shadow-md py-4">
                    {text1}
                  </h1>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
