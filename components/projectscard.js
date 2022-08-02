import React from "react";
import Image from "next/image";
function Projectscard() {
  return (
    <>
      <section className="text-black bg-blue body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black   mb-4">
            Our Projects

            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black">
            The comprehensive portfolio of Zenith Energy
             
            </p>
            
          </div>
          <div className="flex flex-col lg:flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 gap-6">
            <div className="w-full  flex flex-col justify-around h-[550px]   shadow-xl  ">
              <div className="bg-blue  rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/netzero.png"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-black text-center mt-14 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                    
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full  flex flex-col justify-around h-[550px]   shadow-xl ">
              <div className="  rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/netzero.png"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-black text-center mt-14 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                    
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full  flex flex-col justify-around h-[550px]   shadow-xl ">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/netzero.png"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-black text-center mt-14 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                    
                  </p>
                </div>
              </div>
            </div>


            <div className="w-full  flex flex-col justify-around h-[550px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/netzero.png"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-black text-center mt-14 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                    
                  </p>
                </div>
              </div>
            </div>

            

            


          </div>
          <button className="flex mx-auto mt-16 text-black shadow-2xl bg-lightgray border-0 py-2 px-8 focus:outline-none hover:bg-orange1 rounded text-lg">
           Explore
          </button>
        </div>
      </section>
    </>
  );
}

export default Projectscard;
