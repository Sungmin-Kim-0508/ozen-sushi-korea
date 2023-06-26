"use client";

import Image from "next/image";
import image_7606 from "public/images/ozen-sushi/image_7606.png";
import image_131 from "public/images/ozen-sushi/image_131.png";
import image_136 from "public/images/ozen-sushi/image_136.png";
import image_137 from "public/images/ozen-sushi/image_137.png";
import image_138 from "public/images/ozen-sushi/image_138.png";
import image_139 from "public/images/ozen-sushi/image_139.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";
import { OrangeBgBtn } from "app/components/button";
import { OzenSushiDivider } from "app/components/OzenSushiDivider";

function AboutUs() {
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
      <section className="flex md:block md:px-[max(20px,5.33vw)]">
        <div className="flex justify-center px-[8.21vw] py-[8.57vw] gap-x-[6.42vw] md:px-0">
          <Image
            alt="image_7606"
            src={image_7606}
            className="w-[36.42vw] h-[47.21vw] md:hidden"
          />
          <div className="flex flex-col justify-center w-full md:px-[max(21px,5.6vw)] md:py-[max(40px,10.66vw)] md:shadow-lg">
            <span className="font-montserrat text-5xl font-bold mlg:text-4xl md:hidden">
              About <span className="font-montserrat text-EC6236">Us</span>
            </span>
            <span className="hidden md:block font-montserrat text-[max(20px,5.33vw)] font-semibold text-center">
              About{" "}
              <span className="font-montserrat text-EC6236 text-[max(20px,5.33vw)]">
                Us
              </span>
            </span>
            <div className="mt-5 md:flex justify-center md:mt-3">
              <OzenSushiDivider />
            </div>
            <div className="text-[clamp(12px,1.14vw,22px)] font-light md:text-[max(12px,3.2vw)] md:text-center md:font-normal">
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
              <OrangeBgBtn className="hidden w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:block md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Learn More
              </OrangeBgBtn>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:block mb-8">
        <Image
          alt="image_131"
          src={image_131}
          className="px-[max(20px,5.33vw)] min-w-full"
        />
      </section>
      <div className="md:mb-8">
        <DiscountOfferSection />
      </div>
      <section className="hidden">
        <div className="flex w-full">
          {foodImages.map((image) => (
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

export default AboutUs;
