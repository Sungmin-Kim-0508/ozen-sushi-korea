"use client";

import { OrangeBorderBtn } from "app/components/button";
import Image from "next/image";
import food70 from "public/images/ozen-sushi/food70.png";
import food71 from "public/images/ozen-sushi/food71.png";
import food72 from "public/images/ozen-sushi/food72.png";
import food73 from "public/images/ozen-sushi/food73.png";
import food74 from "public/images/ozen-sushi/food74.png";

function AboutUs() {
  const foodImages = [
    {
      src: food70,
      alt: "food70",
    },
    {
      src: food72,
      alt: "food70",
    },
    {
      src: food71,
      alt: "food71",
    },
    {
      src: food73,
      alt: "food73",
    },
    {
      src: food74,
      alt: "food74",
    },
  ];
  return (
    <main>
      <section className="flex flex-col items-center px-72 py-24">
        <div className="text-center mb-10">
          <span className="text-4xl">About Us</span>
        </div>
        <div className="mb-5">
          <span>
            The unique taste comes from family recipes and from fresh, simple
            and tasteful ingredients straight out of love. In <br /> every menu
            items from OZEN SUSHI there is a bit of Korean/Japanese culture and
            flavor.
          </span>
        </div>
        <div className="mb-10">
          <span>
            Ozen Sushi bridges the traditional with the contemporary, bringing
            live-fire cooking, housemade spicy mayo sauce,
            <br /> and a robust fresh fish list to the heart of London Ontario.
          </span>
        </div>
        <div>
          <OrangeBorderBtn width="16.25rem" height="3.25rem">
            Online Order
          </OrangeBorderBtn>
        </div>
      </section>
      <section>
        <div className="flex">
          {foodImages.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} className="w-full" />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
