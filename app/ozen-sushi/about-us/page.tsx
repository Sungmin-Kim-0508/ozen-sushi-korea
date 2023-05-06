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
        <div className="flex justify-center px-[8.21vw] py-[8.57vw] gap-x-[6.42vw]">
          <div>
            <Image
              alt="image_7606"
              src={image_7606}
              className="w-[36.42vw] h-[47.21vw]"
            />
          </div>
          <div className="flex flex-col justify-center w-[36rem]">
            <span className="monserratBold900 text-5xl mlg:text-4xl">
              About Us
            </span>
            <div className="border-2 border-EC6236 max-w-[4rem] mt-5 mb-5" />
            <div className="w-[37.6vw]">
              <div className="text-[clamp(12px,1.14vw,22px)] mb-5">
                The unique taste comes from family recipes and from fresh,
                simple and tasteful ingredients straight out of love. In every
                menu items from OZEN SUSHI there is a bit of Korean/Japanese
                culture and flavor.
              </div>
              <div className="text-[clamp(12px,1.14vw,22px)]">
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
