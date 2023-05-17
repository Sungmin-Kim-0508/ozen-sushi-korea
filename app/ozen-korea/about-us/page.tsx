"use client";

import Image from "next/image";
import img7629 from "public/images/ozen-korea/img_7629.png";
import img9931 from "public/images/ozen-korea/img_9931.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";
import { RedBgBtn } from "app/components/button";

function AboutUs() {
  const SECTION_GAP_IN_MOBILE = "mb-[max(30px,8vw)]";

  return (
    <>
      <section className="flex px-32 py-[7.14vw] bg-white md:hidden">
        <Image
          alt="img7629"
          src={img7629}
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
      <section
        className={`flex md:block md:px-[max(20px,5.33vw)] ${SECTION_GAP_IN_MOBILE} mt-[max(30px,8vw)]`}
      >
        <div className="flex justify-center px-[8.21vw] py-[8.57vw] gap-x-[6.42vw] md:px-0 md:bg-191919 rounded-[max(20px,5.3vw)]">
          <Image
            alt="image_7606"
            src={img7629}
            className="w-[36.42vw] h-[47.21vw] md:hidden"
          />
          <div className="flex flex-col justify-center w-full md:px-[max(21px,5.6vw)] md:py-[max(40px,10.66vw)] md:shadow-lg">
            <span className="monserratBold900 text-191919 text-5xl mlg:text-4xl md:hidden">
              About Us
            </span>
            <span className="hidden md:block text-white  monserratBold900 text-[max(20px,5.33vw)] text-center">
              About{" "}
              <span className="monserratBold900 text-CF382D text-[max(20px,5.33vw)]">
                Us
              </span>
            </span>
            <div className="border-2 border-CF382D max-w-[4rem] my-5 md:mx-auto md:w-[7rem]" />
            <div className="text-[clamp(12px,1.14vw,22px)] md:text-[max(12px,3.2vw)] md:text-white">
              <div className="mb-5">
                The unique taste comes from family recipes and from fresh,
                simple and tasteful ingredients straight out of love. In every
                menu items from OZEN SUSHI there is a bit of Korean/Japanese
                culture and flavor.
              </div>
              <div className="mb-8">
                Ozen Sushi bridges the traditional with the contemporary,
                bringing live-fire cooking, housemade spicy mayo sauce, and a
                robust fresh fish list to the heart of London Ontario.
              </div>
            </div>
            <div className="flex justify-center">
              <RedBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Learn More
              </RedBgBtn>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image alt="image_9931" src={img9931} className={`w-full`} />
        </div>
      </section>
      <div className={`${SECTION_GAP_IN_MOBILE}`}>
        <DiscountOfferSection />
      </div>
    </>
  );
}

export default AboutUs;
