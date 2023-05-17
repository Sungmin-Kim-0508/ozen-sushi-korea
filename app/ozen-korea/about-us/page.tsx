"use client";

import Image from "next/image";
import img7629 from "public/images/ozen-korea/img_7629.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";
import { RedBgBtn } from "app/components/button";

function AboutUs() {
  return (
    <>
      <section className="flex px-32 py-[7.14vw] bg-white">
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
      <DiscountOfferSection />
    </>
  );
}

export default AboutUs;
