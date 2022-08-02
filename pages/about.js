import Image from "next/image";
import TeamCard from "../components/teamCard";
function About() {
  const team = [
    {
      name: "tom",
      image: "/about/team1.jpg",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "jerry",
      image: "/about/team2.jpg",
      role: "CEO",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team3.jpg",
      role: "General Manager",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team4.jpg",
      role: "Head of Sourcing",

      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team5.jpg",
      role: "Head of Quality",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team6.jpg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team7.jpg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];

  return (
    <>
      <section className="md:pt-14 text-black bg-blue " id="WhoWe-Are">
        <div className="p-4 md:container flex flex-wrap gap-10 mx-auto">
          <div className="w-auto lg:min-w-[700px] flex-1 pb-10">
            <h1 className="text-4xl text-center tracking-wide  text-black">
              Who We Are
            </h1>
            <p className="prose pt-8 p-5">
              Established in 1991, Zenith is a leading sustainability solutions
              provider specialized in Energy Savings, Solar Energy, Water
              Management and Carbon Trading. Zenith is empaneled with the Bureau
              of Energy Efficiency (BEE) and Govt of India as an Energy Auditing
              consultancy and an ESCO (Energy Services Company). With hundreds
              of energy audits, investments, solar installations and CDM
              projects under its belt, Zenith is the chosen partner for several
              businesses across India for transitioning into a green economy.
            </p>
          </div>

          <div className="w-full flex lg:flex-row  flex-1 lg:w-full md:h-fit lg:gap-0 gap-10 items-center  md:flex-col flex-col   ">
            <div className="lg:w-full  flex   lg:min-w-[357px]   lg:h-full  md:h-[400px]  h-[300px] relative">
              <Image
                layout="fill"
                alt=""
                objectFit=" cover "
                src="/ourvison/ov.png"
              />

              <div className="w-full h-full text-white    lg:p-20  p-24 flex flex-col justify-center items-center relative ">
                <p className="text-center text-xl mb-2 font-semibold ">
                  Our Vision
                </p>
                <p className="text-center">
                  To be a market leader in creating a technology workforce for
                  the future through disruptions in upskilling and staffing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[100px] bg-lightgray " id="Core-values"></div>
      <div className="bg-lightgray">
        <section className=" lg:container mx-auto  bg-lightgray text-black">
          <h1 className="text-4xl tracking-wide mb-10 text-center  text-black">
            Core Values
          </h1>

          <div className="lg:container mb-10  mx-auto">
            <div className="flex lg:flex-row  flex-col gap-5 justify-center items-center">
              <div className="p-4 lg:w-[400px] ">
                <div className="h-full rounded-lg ">
                  <div className="h-60 w-full flex justify-center relative">
                    <div className="w-[300px] h-full relative ">
                      <Image
                        className="absolute inset-0 object-cover"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        src="/aboutus/passion.png"
                      />
                    </div>
                    <div className="absolute inset-0 "></div>
                    <div className="absolute inset-0 text-black p-8 flex items-center justify-center">
                      <p className=" text-3xl font-semibold text-black">
                        Passion
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 text-center ">
                    <p className="leading-relaxed md:px-5 mb-3">
                      A driving force behind our continuous innovation and value
                      creation
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-[400px] ">
                <div className="h-full flex flex-col-reverse rounded-lg ">
                  <div className="h-60 w-full flex justify-center relative">
                    <div className="w-[300px] h-full relative">
                      <Image
                        className="absolute inset-0 object-cover"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        src="/aboutus/expertise.png"
                      />
                    </div>
                    <div className="absolute inset-0 "></div>
                    <div className="absolute inset-0 text-black p-8 flex items-center justify-center">
                      <p className=" text-3xl font-semibold text-black">

                        Commitment
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 text-center ">
                    <p className="leading-relaxed md:px-5 mb-3">
                    Committed to achieving the sustainability goals for businesses through efficient water and energy management
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-[400px] ">
                <div className="h-full rounded-lg ">
                  <div className="h-60 w-full flex justify-center relative">
                    <div className="w-[300px] h-full relative">
                      <Image
                        className="absolute inset-0 object-cover"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        src="/aboutus/empathy.png"
                      />
                    </div>
                    <div className="absolute inset-0 "></div>
                    <div className="absolute inset-0  p-8 flex items-center justify-center">
                      <p className=" text-3xl font-semibold  text-black">
                      Accountability 
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 text-center ">
                    <p className="leading-relaxed md:px-5 mb-3">
                     End-End Accountability on deployment and maintenance of infrastructure. A reliable long-term partner on the path to sustainability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-[400px] ">
                <div className="h-full flex flex-col-reverse rounded-lg ">
                  <div className="h-60 w-full flex justify-center relative">
                    <div className="w-[300px] h-full relative">
                      <Image
                        className="absolute inset-0 object-cover"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        src="/aboutus/expertise.png"
                      />
                    </div>
                    <div className="absolute inset-0 "></div>
                    <div className="absolute inset-0 text-black p-8 flex items-center justify-center">
                      <p className=" text-3xl font-semibold text-black">
                        Expertise
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 text-center ">
                    <p className="leading-relaxed md:px-5 mb-3">
                   Expertise is at the core of Zenith, with 3 decades of track record cutting across 10+ sectors, backed by strong leadership, mentors and SMEs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* core teaaaaaaaaaaaaaaaaaaaaaaam */}
      <div className="w-full h-[50px]" id="MeetOur-Team"></div>
      {/* <section className="bg-coustom1 md:pt-24 md:pb-10 ">
        <div className="container px-6  mx-auto">
          <h1 className="text-3xl text-center text-black capitalize lg:text-4xl ">
            Meet Our Team
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {team.map(({ name, image, role, description, id }) => {
              return (
                <div key={id} className="flex flex-col items-center p-5">
                  <div className="relative lg:w-[300px] lg:h-[300px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
                    <Image
                      className="rounded-full"
                      alt="profle"
                      src={image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <h1 className="mt-4 text-2xl  text-black capitalize font-bold ">
                    {name}
                  </h1>
                  <div className="flex flex-col gap-5 justify-center">
                    <p className=" text-black capitalize text-center  ">
                      {role}
                    </p>
                    <h1 className="md:w-[255px] h-[2px]  bg-blue mb-5"></h1>
                  </div>
                  <p className="text-center">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      <section>
        <TeamCard/>
      </section>
    </>
  );
}
export default About;
