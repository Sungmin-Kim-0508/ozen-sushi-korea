"use client";

import Image from "next/image";
import img7629 from "public/images/ozen-korea/img_7629.png";
import img9931 from "public/images/ozen-korea/img_9931.png";
import img104 from "public/images/ozen-korea/img_104.png";
import img105 from "public/images/ozen-korea/img_105.png";
import img106 from "public/images/ozen-korea/img_106.png";
import img107 from "public/images/ozen-korea/img_107.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";
import { RedBgBtn } from "app/components/button";

function AboutUs() {
  const SECTION_GAP_IN_MOBILE = "mb-[max(30px,8vw)]";

  const foodImages = [
    {
      src: img104,
      alt: "image_104",
    },
    {
      src: img105,
      alt: "image_105",
    },
    {
      src: img106,
      alt: "image_106",
    },
    {
      src: img107,
      alt: "image_107",
    },
  ];

  return (
    <>
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
      </section>
      <div className={`hidden md:block ${SECTION_GAP_IN_MOBILE}`}>
        <Image alt="image_9931" src={img9931} className={`w-full`} />
      </div>
      <div className={`${SECTION_GAP_IN_MOBILE}`}>
        <DiscountOfferSection />
      </div>
      <section className="hidden md:grid grid-rows-2 grid-cols-2 md:gap-3 mb-2">
        {foodImages.map((image) => (
          <Image
            key={image.alt}
            alt={image.alt}
            src={image.src}
            className="h-full max-h-full w-full max-w-full overflow-hidden md:w-full"
          />
        ))}
      </section>
    </>
  );
}

export default AboutUs;
