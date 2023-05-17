"use client";
import Image from "next/image";
import { BlackBgBtc, RedBgBtn } from "app/components/button";
import image9928Large from "public/images/ozen-korea/img_9928.png";
import image_9930 from "public/images/ozen-korea/img_9930.png";
import food63 from "public/images/ozen-korea/food63.png";
import food64 from "public/images/ozen-korea/food64.png";
import food65 from "public/images/ozen-korea/food65.png";
import food66 from "public/images/ozen-korea/food66.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";

function OzenKoreaHome() {
  const foodImagesInSec3 = [
    {
      src: food63,
      alt: "salmin sushi",
    },
    {
      src: food64,
      alt: "rolls1",
    },
    {
      src: food65,
      alt: "rolls2",
    },
    {
      src: food66,
      alt: "rolls3",
    },
  ];
  const SECTION_GAP_IN_MOBILE = "mb-[max(30px,8vw)]";
  return (
    <>
      <section className="relative w-full min-h-full md:px-[max(20px,5.33vw)]">
        <div className="flex mb-16 md:block md:mt-[max(30px,8vw)] bg-191919 md:rounded-[max(20px,5.3vw)]">
          <div className="flex-1 flex flex-col justify-center px-[8.21vw] py-[10vw] md:px-[max(22px,5.86vw)] md:py-[max(43px,11.46vw)] md:shadow-2xl md:text-center md:opacity-100 md:rounded-[20px]">
            <span className="font-semibold text-[1.28vw] md:hidden">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-white font-extrabold text-[4.42vw] leading-none md:text-[max(32px,9.6vw)]">
              Welcome to
            </span>
            <span className="monserratBold900 text-CF382D mb-5 font-extrabold text-[4.42vw] leading-none md:text-[max(32px,9.6vw)]">
              Ozen Korea
            </span>
            <span className="hidden robotoMedium mb-[max(6px,1.6vw)] md:block md:text-[max(14px,3.73vw)] md:text-white">
              Served everyday since 2008
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] mb-5 md:hidden" />
            <div className="flex flex-col mb-5 w-[35.71vw] text-[1.15vw] md:w-full md:block md:px-[min(16px,5.86vw)] md:text-[clamp(10px,3.2vw,20px)] md:text-white">
              The unique taste comes from family recipes and from fresh simple
              and tasteful ingredients straight out of love.
            </div>
            <div className="flex gap-x-7">
              <RedBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Learn More
              </RedBgBtn>
              <BlackBgBtc className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Go to Ozen Korea
              </BlackBgBtc>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="image9928"
              src={image9928Large}
              className={`right-[6vw] z-10 w-[43vw] h-full md:hidden`}
            />
          </div>
        </div>
      </section>
      <section className={`hidden md:block ${SECTION_GAP_IN_MOBILE}`}>
        <Image
          alt="image9928"
          src={image9928Large}
          className={`hidden md:block w-full`}
        />
      </section>
      <WhatWeServeMobile />
      <section className="flex px-32 py-[8.21vw] bg-white md:flex-col md:px-0">
        <Image
          alt="image_9930"
          src={image_9930}
          className={`w-[clamp(280px,33.57vw,1000px)] h-[42vw] md:w-full md:h-full md:${SECTION_GAP_IN_MOBILE}`}
        />
        {/* Desktop */}
        <div className="flex flex-col justify-center ml-[6.42vw] w-[40vw] relative top-10 xl:top-20 mlg:top-24 mb-40 md:hidden">
          <span className="monserratBold900 text-[3.5vw] xl:text-[3vw] text-191919">
            What we{" "}
            <span className="text-CF38border-CF382D monserratBold900 text-CF382D">
              serve
            </span>
          </span>
          <div className="border-2 border-CF382D max-w-[3.75rem] my-5" />
          <div className="mb-7 text-[clamp(14px,1.0vw,20px)] text-191919 leading-normal">
            Ozen Korea is a Korean restaurant located in the vibrant city of
            London, Ontario. With its unique fusion of traditional Korean
            cuisine and contemporary style, Ozen Korea offers an exceptional
            dining experience that combines bold flavors and impeccable service.
            Ozen Sushi bridges the traditional with the contemporary, bringing
            live-fire cooking, housemade spicy mayo sauce, and a robust fresh
            fish list to the heart of London Ontario.
          </div>
          <RedBgBtn width="14.30vw" height="3.92vw">
            Learn More
          </RedBgBtn>
        </div>
      </section>
      <DiscountOfferSection />
      <section className="relative py-24 bg-white">
        <div className="text-center mb-10">
          <span className="monserratBold900 text-[clamp(38px,3vw,50px)] text-191919">
            Check out{" "}
            <span className="monserratBold900 text-[clamp(35px,3vw,50px)] text-CF382D border-CF382D">
              Our Stories
            </span>
          </span>
        </div>
        <div className="flex justify-center">
          <div className="border-2 border-CF382D w-14 mb-10" />
        </div>
        <div className="flex gap-x-3 w-full md:grid grid-rows-2 grid-cols-2 md:gap-y-3">
          {foodImagesInSec3.map((image) => (
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

const WhatWeServeMobile = () => (
  <section className="hidden md:flex w-full px-[max(20px,5.33vw)]">
    <div className="py-[max(40px,10.66vw)] md:text-center md:bg-191919 md:rounded-[max(20px,5.3vw)] md:px-[max(22px,5.86vw)]">
      <span className="monserratBold900 text-[max(20px,5.33vw)] text-white">
        What we{" "}
        <span className="text-CF38border-CF382D monserratBold900 text-CF382D">
          serve
        </span>
      </span>
      <div className="border-2 border-CF382D max-w-[3.75rem] my-5 md:mx-auto md:w-[3.75rem]" />
      <div className="mb-7 text-[clamp(14px,1.0vw,20px)] text-white leading-normal">
        Ozen Korea is a Korean restaurant located in the vibrant city of London,
        Ontario. With its unique fusion of traditional Korean cuisine and
        contemporary style, Ozen Korea offers an exceptional dining experience
        that combines bold flavors and impeccable service. Ozen Sushi bridges
        the traditional with the contemporary, bringing live-fire cooking,
        housemade spicy mayo sauce, and a robust fresh fish list to the heart of
        London Ontario.
      </div>
      <div className="flex justify-center">
        <RedBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
          Learn More
        </RedBgBtn>
      </div>
    </div>
  </section>
);

export default OzenKoreaHome;
