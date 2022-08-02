import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Clients() {
  const logos = [
    "/clients/client1.jpg",
    "/clients/client2.jpg",
    "/clients/client3.jpg",
    "/clients/client4.jpg",
    "/clients/client5.jpg",
    "/clients/client6.jpg",
    "/clients/client7.jpg",
    "/clients/client8.jpg",
    "/clients/client9.jpg",
    "/clients/client10.jpg",
    "/clients/client11.jpg",
    "/clients/client12.jpg",
    "/clients/client13.jpg",
    "/clients/client14.jpg",
    "/clients/client15.jpg",
    "/clients/client16.jpg",
    "/clients/client17.jpg",
    "/clients/client18.jpg",
    "/clients/client19.jpg",
    "/clients/client20.jpg",
    "/clients/client21.jpg",
    "/clients/client22.jpg",
    "/clients/client23.jpg",
    "/clients/client24.jpg",
    "/clients/client25.jpg",
    "/clients/client26.jpg",
    "/clients/client27.jpg",
    "/clients/client28.jpg",
    "/clients/client29.jpg",
    "/clients/client30.jpg",
    "/clients/client31.jpg",
    "/clients/client32.jpg",
    "/clients/client33.jpg",
    "/clients/client34.jpg",
    "/clients/client35.jpg",
    "/clients/client36.jpg",
    "/clients/client37.jpg",
  ];

  return (
    <section className=" md:pt-14  pb-5 pt-7 bg-darkgray  relative">
      <div className="flex gap-4 justify-center mb-8 ">
        <h1 className="text-3xl  capitalize lg:text-4xl text-white  text-center">
          Our Customers
        </h1>
      </div>

      <div className="lg:container  mx-auto  lg:pb-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={3}
          breakpoints={{
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 800,

              pagination: {},
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 800,

              pagination: {},
            },
          }}
          // breakpoints={{
          //   768: {
          //     slidesPerView: "auto",
          //   },
          //   1024: {},
          // }}
          autoplay={true}
          loop={true}
          speed={800}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div className="h-36 w-auto  relative cursor-pointer">
                <Image
                  layout="fill"
                  alt=""
                  src={x}
                  className="absolute inset-0 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
