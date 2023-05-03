"use client";

import Image from "next/image";
import { BlueBgBtn } from "app/components/button";
import image_7606 from "public/images/ozen-sushi/image_7606.png";
import plaid from "public/images/ozen-sushi/plaid_bg.png";
import image_7626 from "public/images/ozen-sushi/image_7626.png";
import image_136 from "public/images/ozen-sushi/image_136.png";
import image_137 from "public/images/ozen-sushi/image_137.png";
import image_138 from "public/images/ozen-sushi/image_138.png";
import image_139 from "public/images/ozen-sushi/image_139.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";

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
      <section className="flex gap-x-16 relative w-full min-h-full">
        <Image
          alt="plaid"
          src={plaid}
          className="absolute min-w-full min-h-full -z-10"
        />
        <div className="px-[17rem] py-[8rem] flex justify-center gap-x-32 xl:px-[10rem] mlg:px-[5rem] mlg:gap-x-16">
          <div>
            <Image alt="image_7606" src={image_7606} />
          </div>
          <div className="flex flex-col justify-center w-[36rem]">
            <span className="monserratBold900 text-5xl mlg:text-4xl">
              About Us
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] mt-5 mb-5" />
            <div className="text-xl mlg:text-base">
              <div className="mb-5">
                The unique taste comes from family recipes and from fresh,
                simple and tasteful ingredients straight out of love. In every
                menu items from OZEN SUSHI there is a bit of Korean/Japanese
                culture and flavor.
              </div>
              <div>
                Ozen Sushi bridges the traditional with the contemporary,
                bringing live-fire cooking, housemade spicy mayo sauce, and a
                robust fresh fish list to the heart of London Ontario.
              </div>
            </div>
          </div>
        </div>
      </section>
      <DiscountOfferSection />
      <section>
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
