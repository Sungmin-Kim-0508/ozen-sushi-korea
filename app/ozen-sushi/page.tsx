"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BlueBgBtn, OrangeBgBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/sushi_bowl.png";
import image144 from "public/images/ozen-sushi/image_144.png";
import image_7601 from "public/images/ozen-sushi/image_7601.png";
import image_124 from "public/images/ozen-sushi/image_124.png";
import image_136 from "public/images/ozen-sushi/image_136.png";
import image_137 from "public/images/ozen-sushi/image_137.png";
import image_138 from "public/images/ozen-sushi/image_138.png";
import image_139 from "public/images/ozen-sushi/image_139.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";

function OzenSushiHome() {
  const foodImages = [
    {
      src: image_136,
      alt: "image_136",
    },
    {
      src: image_137,
      alt: "image_137",
    },
    {
      src: image_138,
      alt: "image_138",
    },
    {
      src: image_139,
      alt: "image_139",
    },
  ];
  return (
    <>
      <section className="relative w-full min-h-full md:px-[max(20px,5.33vw)]">
        <div className="flex mb-16 md:block">
          <div className="flex-1 flex flex-col justify-center px-[max(42px,8.21vw)] py-[14.62vw] md:px-[max(22px,5.86vw)] md:py-[max(43px,11.46vw)] md:shadow-2xl md:text-center md:opacity-100 md:rounded-[20px]">
            <span className="font-semibold text-xl text-[clamp(11px,1.28vw,40px)] md:hidden">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-191919 font-extrabold text-[clamp(40px,4.42vw,77px)] leading-none md:text-[max(32px,9.6vw)]">
              Welcome to
            </span>
            <span className="monserratBold900 text-EC6236 mb-5 font-extrabold text-[clamp(40px,4.42vw,77px)] leading-none md:text-[max(32px,9.6vw)]">
              Ozen Sushi
            </span>
            <span className="hidden robotoMedium mb-[max(6px,1.6vw)] md:block md:text-[max(14px,3.73vw)]">
              Served everyday since 2008
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] mb-5 md:hidden" />
            <div className="mb-5 w-[35.71vw] text-[clamp(10px,1.15vw,20px)] md:w-full md:block md:px-[min(16px,5.86vw)] md:text-[clamp(10px,3.2vw,20px)]">
              The unique taste comes from family recipes and from fresh simple
              and tasteful ingredients straight out of love.
            </div>
            <div className="flex gap-x-7 md:justify-center md:gap-x-[10px]">
              <OrangeBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Learn More
              </OrangeBgBtn>
              <BlueBgBtn className="w-[clamp(140px,14.28vw,240px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Go to Ozen Korea
              </BlueBgBtn>
            </div>
          </div>
          <div className="flex-1 md:flex-initial">
            <Image
              alt="salmonRiceBowl"
              src={salmonRiceBowl}
              className={`absolute right-[6vw] top-[3.5vw] z-10 w-[43vw] h-[43vw] md:hidden`}
            />
            <Image
              alt="img144"
              src={image144}
              className="absolute right-0 bg-transparent w-[47.86vw] h-[49.1vw] md:-z-10 md:hidden"
            />
          </div>
        </div>
        <div className="flex px-32 xl:px-24 md:contents md:px-0">
          <Image
            alt="image_7601"
            src={image_7601}
            className="z-10 w-[clamp(280px,36.43vw,1000px)] relative top-8 md:hidden"
          />
          <Image
            alt="image_124"
            src={image_124}
            className="hidden md:block w-full mb-[max(30px,8vw)]"
          />
          <div className="flex flex-col justify-center ml-[6.42vw] w-[40vw] relative top-10 xl:top-20 mlg:top-24 mb-40 md:hidden">
            <WhatWeServeSection />
          </div>
        </div>
        <div className="hidden md:block pt-[max(40px,10.66vw)] pb-[max(30px,8vw)] px-[max(21px,5.6vw)] bg-191919 text-center rounded-[max(20px,5.3vw)] mb-[max(30px,8vw)]">
          <WhatWeServeSection />
        </div>
      </section>
      <DiscountOfferSection />
      <section className="relative py-24 md:pt-[max(30px,8vw)] md:pb-[max(7px,1.86vw)]">
        <div className="text-center mb-10 md:mb-[max(20px,5.33vw)]">
          <span className="monserratBold900 text-[clamp(38px,3vw,50px)] text-black md:text-[max(20px,5.33vw)]">
            Check out{" "}
            <span className="monserratBold900 text-[clamp(38px,3vw,50px)] text-EC6236 md:text-[max(20px,5.33vw)]">
              Our Stories
            </span>
          </span>
        </div>
        <div className="flex justify-center md:hidden">
          <div className="border-2 border-EC6236 w-14 mb-10" />
        </div>
        <div className="flex gap-x-3 w-full md:grid grid-rows-2 grid-cols-2 md:gap-y-3">
          {foodImages.map((image) => (
            <Image
              key={image.alt}
              alt={image.alt}
              src={image.src}
              className="h-full max-h-full w-full max-w-full overflow-hidden md:w-full"
            />
          ))}
        </div>
      </section>
    </>
  );
}

const WhatWeServeSection = () => (
  <>
    <span className="monserratBold900 text-[3.5vw] md:text-white md:text-[max(20px,5.3vw)]">
      What we{" "}
      <span className="monserratBold900 text-EC6236 md:text-[max(20px,5.3vw)]">
        serve
      </span>
    </span>
    <div className="border-2 border-EC6236 max-w-[3.75rem] my-5 md:mx-auto" />
    <div className="text-[clamp(14px,1.0vw,20px)] md:text-white md:text-[max(12px,3.2vw)]">
      <div className="mb-5">
        The unique taste comes from family recipes and from fresh, simple and
        tasteful ingredients straight out of love. In every menu items from OZEN
        SUSHI there is a bit of Korean/Japanese culture and flavour.
      </div>
      <div className="mb-7">
        Ozen Sushi bridges the traditional with the contemporary, bringing
        live-fire cooking, housemade spicy mayo sauce, and a robust fresh fish
        list to the heart of London Ontario.
      </div>
    </div>
    <OrangeBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
      Learn More
    </OrangeBgBtn>
  </>
);

export default OzenSushiHome;
