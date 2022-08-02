import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function TeamCard() {
  const { asPath } = useRouter();
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };

  useEffect(() => {
    const hashes = [
      "skin",
      "hair",
      "mens",
      "baby",
      "body",
      "hygiene",
      "nutraceuticals",
      "oral",
    ];
    const whichButton = hashes.indexOf(asPath.split("#")[1]);
    setButtonIndex(whichButton === -1 ? 0 : whichButton);
  }, [asPath]);

  const buttons = [
    {
      name: " Management",
      products: [
        { image: "/team/des.jpg", logo: false, text: "Deconstruct" },
        { image: "/team/des.jpg", logo: false, text: "Deconstruct" },
        { image: "/team/des.jpg", logo: false, text: "Deconstruct" },
      ],
    },
    {
      name: "Advisors",
      products: [
        { image: "/team/dev.jpg", logo: false, text: "Curl Up" },
        { image: "/team/dev.jpg", logo: false, text: "Curl Up" },
        { image: "/team/dev.jpg", logo: false, text: "Curl Up" },
      ],
    },
    {
      name: "Experts",
      products: [
        { image: "/team/amrk.jpg", logo: false, text: "Aramusk" },
        { image: "/team/amrk.jpg", logo: false, text: "Aramusk" },
        { image: "/team/amrk.jpg", logo: false, text: "Aramusk" },
      ],
    },
  ];
  return (
    <>
      <section class="bg-white mb-10">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center  capitalize lg:text-4xl text-black">
            our team
          </h1>

          <p class="max-w-2xl mx-auto my-6 text-center text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div class="grid md:grid-cols-3 grid-cols-4 md:gap-4 gap-2 pt-12">
            {buttons.map((button, index) => (
              <div
                key={index}
                onClick={() => {
                  buttonClick(index);
                }}
                className={`${
                  index === buttonIndex
                    ? " underline decoration-orange1  decoration-2 shadow-md shadow-orange1 text-zinc-900"
                    : "bg-white shadow-md"
                } w-full h-16 hover:scale-105 cursor-pointer transition rounded-sm flex items-center justify-center relative p-2`}
              >
                <p className="text-xs tracking-tight font-medium text-center truncate leading-4 uppercase">
                  {button.name}
                </p>
              </div>
            ))}
          </div>

          <div class="grid border grid-cols-1  gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-3">
            {buttons[buttonIndex].products.map((product, index) => (
              <div
                key={index}
                className="w-full h-44 md:h-72 shadow-md shadow-slate-200 hover:scale-105 transition-all text-white font-bold uppercase relative cursor-pointer"
              >
                <Image
                  layout="fill"
                  alt=""
                  src={product.image}
                  className="w-full h-full object-cover absolute inset-0 hover:grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default TeamCard;
