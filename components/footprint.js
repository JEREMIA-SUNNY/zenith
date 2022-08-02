import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  FaAccessibleIcon,
  FaAddressBook,
  FaAdjust,
  FaBeer,
  FaDownload,
  FaSalesforce,
  FaVideo,
} from "react-icons/fa";
function Footprint() {
  const footPrints = [
    {
      id: 1,
      name: " 30+",
      title: "YEARS OF LEGACY",
      icons:"/footprint/home.png"
    },
    {
      id: 2,
      name: " 10+",
      title: "INDUSTRIES IMPACTED",
      icons:"/footprint/grass.png"
    },
    {
      id: 3,

      name: "  800+",
      title: "ENERGY AUDITS",
      icons:"/footprint/small-wind-mill-.png"
    },
    { id: 4, name: "2GW+ ", title: "RENEWABLE ENERGY",
    icons:"/footprint/solar-energy.png"
  },

    {
      id: 5,
      name: " 90+",
      title: "CDM PROJECTS",
      icons:"/footprint/save.png"
    },
  ];
  const industry = [
    {
      id: 1,
      title: "Cement",
      icons:"/ind/ind1.png"
    },
    {
      id: 2,
      title: "Power",
      icons:"/ind/ind2.png"
    },
    {
      id: 3,
      title: " Paper",
      icons:"/ind/ind3.png"
    },
    {
      id: 4,
      title: " Real Estate",
      icons:"/ind/ind4.png"
    },
    {
      id: 5,
      title: " Mining",
      
      icons:"/ind/ind5.png"
    },
    {
      id: 6,
      title: " Pharma",
      icons:"/ind/ind6.png"
    },
    {
      id: 7,
      title: "Refineries",
      icons:"/ind/ind7.png"
    },
  ];
  const sdge=[
    {
      id: 1,
      title: "Accountability",
      icons:"/sdge/accountability.png"
    },
    {
      id: 2,
      title: "Commitment",
      icons:"/sdge/commitment.png"
    },
    {
      id: 3,
      title: "Collaboration",
      icons:"/sdge/expertise2.png"
    },
    {
      id: 4,
      title: "Efficiency",
      icons:"/sdge/sdg1.png"
    },
    {
      id: 5,
      title: "peace",
      icons:"/sdge/sdg2.png"
    },
    {
      id: 6,
      title: "peace",
      icons:"/sdge/sdg3.png"
    },
    {
      id: 7,
      title: "peace",
      icons:"/sdge/sdg4.png"
    },
    {
      id: 8,
      title: "peace",
      icons:"/sdge/sdg5.png"
    },{
      id: 9,
      title: "peace",
      icons:"/sdge/sdg6.png"
    },{
      id: 10,
      title: "peace",
      icons:"/sdge/sdg7.png"
    },

  ]
  return (
    <>
      <section className="text-black md:pt-14 pt-7 pb-6  md:pb-10   bg-lightgray">
        <div className=" container  lg:h-full h-1/2 mx-auto ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={40}
            slidesPerGroup={1}
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
            <SwiperSlide>
              <div className="flex gap-5 justify-center m">
                <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
                  Footprint
                </h1>
              </div>
              <div className="grid  lg:grid-cols-5 grid-cols-2 mt-14 mb-10 gap-5 justify-center   items-center">
                {footPrints.map(({ name, title, id,icons }) => (
                  <div key={id} className=" w-full items-start">
                    <div className=" rounded-lg flex flex-col gap-4 lg:items-center justify-center">
                    <div className="block">
                          <Image
                            src={icons}
                            alt="logo"
                            width={100}
                            height={100}
                          />
                        </div>
                      <div>
                        <h2 className="title-font flex-1 text-center font-medium text-3xl text-black">
                          {name}
                        </h2>
                        <div className="flex justify-center">
                          <h1 className="lg:w-full w-[70px] lg:ml-0  h-[2px] bg-orange"></h1>
                        </div>

                        <p className="leading-relaxed text-center">{title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ////////////////////////////////////// */}
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-5  mt-2  justify-center ">
                <h1 className="text-3xl lg:w-[250px]  capitalize lg:text-4xl text-black  text-center">
                  Industries
                </h1>
              </div>
              <div className="grid  lg:grid-cols-4 grid-cols-2   mt-12 mb-10  h-fit gap-x-7 gap-y-7 lg:gap-10 justify-center  items-center">
                {industry.map(({ icons,title, id }) => {
                  return (
                    <div key={id} className=" w-full items-start">
                      <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                        {/* icon */}
                        <div className="block">
                          <Image
                            src={icons}
                            alt="logo"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div>
                          <h2 className="title-font lg:w-fit  flex-1 font-medium text-center   text-2xl text-black">
                            {title}
                          </h2>
                          <div className="flex justify-center">
                            <h1 className="w-full lg:ml-0  h-[2px] bg-orange"></h1>
                          </div>

                          {/* <p className="leading-relaxed">lorem ip</p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-5 justify-center ">
                <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
                  Footprint
                </h1>
              </div>
              <div className="grid  lg:grid-cols-5 grid-cols-2 mt-14 mb-10 gap-5 justify-center   items-center">
                {sdge.map(({ icons, title, id }) => (
                  <div key={id} className=" w-full items-start">
                    <div className=" rounded-lg flex flex-col gap-4 lg:items-center justify-center">
                    <div className="flex items-center justify-center">
                          <Image
                            src={icons}
                            alt="logo"
                            width={90}
                            height={90}
                          />
                        </div>
                      <div>
                        <h2 className="title-font flex-1 text-center font-medium text-3xl text-black">
                          {title}
                        </h2>
                        <div className="flex justify-center">
                          <h1 className="lg:w-full w-[70px] lg:ml-0  h-[2px] bg-orange"></h1>
                        </div>

                   
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ////////////////////////////////////// */}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Footprint;
