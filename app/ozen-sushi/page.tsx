"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlueBgBtn, OrangeBgBtn } from "../components/button";
import { ANIMATION_CONFIGUARTION } from "app/utils/constants";
import salmonRiceBowl from "public/images/ozen-sushi/sushi_bowl.png";
import image144 from "public/images/ozen-sushi/image_144.png";
import image_7601 from "public/images/ozen-sushi/image_7601.png";
import image_104 from "public/images/ozen-sushi/image_104.png";
import image_105 from "public/images/ozen-sushi/image_105.png";
import image_106 from "public/images/ozen-sushi/image_106.png";
import image_107 from "public/images/ozen-sushi/image_107.png";
import image_124 from "public/images/ozen-sushi/image_124.png";
import image_137 from "public/images/ozen-sushi/image_137.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";
import { ozen_korea_home } from "app/utils/routes";
import { OzenSushiDivider } from "app/components/OzenSushiDivider";

const textSize = `text-[clamp(14px,1.14vw,28px)]`;

function OzenSushiHome() {
  const router = useRouter();
  const foodImages = [
    {
      src: image_104,
      alt: "image_104",
    },
    {
      src: image_105,
      alt: "image_105",
    },
    {
      src: image_106,
      alt: "image_106",
    },
    {
      src: image_107,
      alt: "image_107",
    },
  ];
  return (
    <>
      <section
        className={`relative w-full min-h-full bg-FAFAFA md:px-[max(20px,5.33vw)] ${ANIMATION_CONFIGUARTION}`}
      >
        <div className="flex md:block md:py-8">
          <div className="flex-1 flex flex-col justify-center px-[max(42px,8.21vw)] py-[14.62vw] md:px-[max(22px,5.86vw)] md:py-[max(43px,11.46vw)] md:shadow-2xl md:text-center md:opacity-100 md:rounded-[20px]">
            <span className="font-normal text-xl text-[clamp(11px,1.28vw,40px)] md:hidden">
              Served everyday since 2008
            </span>
            <span className="font-montserrat text-191919 font-[900] text-[clamp(40px,4.42vw,77px)] leading-none md:text-[max(32px,9.6vw)]">
              Welcome to
            </span>
            <span className="font-montserrat text-EC6236 mb-5 font-[900] text-[clamp(40px,4.42vw,77px)] leading-none md:text-[max(32px,9.6vw)]">
              Ozensushi
            </span>
            <span className="hidden robotoMedium mb-[max(6px,1.6vw)] md:block md:text-[max(14px,3.73vw)]">
              Served everyday since 2008
            </span>
            <div className="md:hidden">
              <OzenSushiDivider />
            </div>
            <div
              className={`mb-5 w-[35.71vw] ${textSize} font-light md:w-full md:block md:px-[min(16px,5.86vw)] md:text-[clamp(12px,3.2vw,16px)]`}
            >
              The unique taste comes from family recipes and from fresh simple
              and tasteful ingredients straight out of love.
            </div>
            <div className="flex gap-x-7 md:justify-center md:gap-x-[10px] md:w-[max(290px,77.33vw)] md:h-[clamp(40px,10.66vw,58px)]">
              <OrangeBgBtn className="w-[min(200px,14.28vw)] h-[clamp(40px,3.92vw,55px)] md:w-full md:h-full">
                Learn More
              </OrangeBgBtn>
              <BlueBgBtn
                className="w-[min(200px,14.28vw)] h-[clamp(40px,3.92vw,55px)] md:w-full md:h-full"
                onClick={(event) => {
                  event?.preventDefault();
                  router.push(`${ozen_korea_home}`);
                }}
              >
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
        <div className="flex gap-x-[13vw] px-[12rem] pb-[6.75rem] md:contents md:px-0">
          <Image
            alt="image_7601"
            src={image_7601}
            className="z-10 w-[27.42vw] h-[35.78vw] relative top-8 md:hidden"
          />
          <Image
            alt="image_124"
            src={image_124}
            className="hidden md:block w-full mb-[max(30px,8vw)]"
          />
          <div className="flex flex-col justify-center md:hidden">
            <WhatWeServeSection />
          </div>
        </div>
        <div className="hidden md:block pt-[max(40px,10.66vw)] pb-[max(30px,8vw)] px-[max(21px,5.6vw)] bg-191919 text-center rounded-[max(20px,5.3vw)] mb-[max(30px,8vw)]">
          <WhatWeServeSection />
        </div>
      </section>
      <section className="hidden md:block px-[max(20px,5.33vw)] mb-[max(30px,8vw)]">
        <Image alt="img_137" src={image_137} className="w-full rounded-3xl" />
      </section>
      <DiscountOfferSection />
      <section
        className={`relative py-24 bg-FAFAFA md:pt-[max(30px,8vw)] md:pb-[max(7px,1.86vw)] ${ANIMATION_CONFIGUARTION}`}
      >
        <div className="text-center mb-5 md:mb-[max(20px,5.33vw)]">
          <span className="font-montserrat text-[clamp(38px,3vw,50px)] font-semibold text-191919 md:text-[max(20px,5.33vw)]">
            Check out{" "}
            <span className="font-montserrat text-[clamp(38px,3vw,50px)] text-EC6236 md:text-[max(20px,5.33vw)]">
              Our Stories
            </span>
          </span>
        </div>
        <div className="flex justify-center mb-12 md:hidden">
          <OzenSushiDivider />
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
    <span className="font-montserrat text-[3.5vw] font-semibold mb-3 md:text-white md:text-[max(20px,5.3vw)]">
      What we{" "}
      <span className="font-montserrat text-EC6236 md:text-[max(20px,5.3vw)]">
        serve
      </span>
    </span>
    <div className="md:flex md:justify-center md:mt-5">
      <OzenSushiDivider />
    </div>
    <div
      className={`${textSize} font-light md:text-white md:text-[max(12px,3.2vw)]`}
    >
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
    <OrangeBgBtn className="w-[min(200px,14.28vw)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)]">
      Learn More
    </OrangeBgBtn>
  </>
);

export default OzenSushiHome;
