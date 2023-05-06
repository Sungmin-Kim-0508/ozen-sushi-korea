"use client";
import { BlackBgBtc, RedBgBtn } from "app/components/button";
import Image from "next/image";
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
  return (
    <>
      <section className="relative w-full min-h-full bg-black">
        <div className="flex mb-16">
          <div className="flex-1 flex flex-col justify-center px-[8.21vw] py-[14.62vw]">
            <span className="font-semibold text-xl text-[1.28vw]">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-white font-extrabold text-[4.42vw] leading-none">
              Welcome to
            </span>
            <span className="monserratBold900 text-CF382D mb-5 font-extrabold text-[4.42vw] leading-none">
              Ozen Korea
            </span>
            <div className="border-2 border-CF382D max-w-[3.75rem] mb-5" />
            <div className="flex flex-col mb-5 w-[35.71vw] text-[1.15vw]">
              The unique taste comes from family recipes and from fresh simple
              and tasteful ingredients straight out of love.
            </div>
            <div className="flex gap-x-7">
              <RedBgBtn width="14.28vw" height="3.92vw">
                Learn More
              </RedBgBtn>
              <BlackBgBtc width="14.28vw" height="3.92vw">
                Go to Ozen Korea
              </BlackBgBtc>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="image9928"
              src={image9928Large}
              className={`right-[6vw] z-10 w-[43vw] h-[43vw]`}
            />
          </div>
        </div>
      </section>
      <section className="flex px-32 py-[7.14vw] bg-white">
        <Image
          alt="image_9930"
          src={image_9930}
          className="w-[clamp(280px,33.57vw,1000px)] h-[42vw]"
        />
        <div className="flex flex-col justify-center ml-[6.42vw] w-[40vw] relative top-10 xl:top-20 mlg:top-24 mb-40">
          <span className="monserratBold900 text-[3.5vw] xl:text-[3vw] text-191919">
            What we{" "}
            <span className="text-CF38border-CF382D monserratBold900 text-CF382D">
              serve
            </span>
          </span>
          <div className="border-2 border-CF382D max-w-[3.75rem] my-5" />
          <div className="mb-7 text-[clamp(14px,1.0vw,20px)] text-black leading-normal">
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
          <span className="monserratBold900 text-[clamp(38px,3vw,50px)] text-black">
            Check out{" "}
            <span className="monserratBold900 text-[clamp(35px,3vw,50px)] text-CF382D border-CF382D">
              Our Stories
            </span>
          </span>
        </div>
        <div className="flex justify-center">
          <div className="border-2 border-CF382D w-14 mb-10" />
        </div>
        <div className="flex gap-x-3 w-full">
          {foodImagesInSec3.map((image) => (
            <Image
              key={image.alt}
              alt={image.alt}
              src={image.src}
              className="h-full max-h-full w-full max-w-full overflow-hidden xl:w-1/4"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default OzenKoreaHome;
