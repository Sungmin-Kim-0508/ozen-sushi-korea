"use client";

import Image from "next/image";
import img9926 from "public/images/ozen-korea/img_9926.png";
import img9933 from "public/images/ozen-korea/img_9933.png";
import img9932 from "public/images/ozen-korea/img_9932.png";
import img9928 from "public/images/ozen-korea/img_9928.png";
import img9934 from "public/images/ozen-korea/img_9934.png";

function AboutUs() {
  const foodImages = [
    {
      src: img9926,
      alt: "img9926",
    },
    {
      src: img9933,
      alt: "img9933",
    },
    {
      src: img9932,
      alt: "img9932",
    },
    {
      src: img9928,
      alt: "img9928",
    },
    {
      src: img9934,
      alt: "img9934",
    },
  ];
  return (
    <main>
      <section className="flex flex-col items-center px-72 py-24 text-center">
        <div className="mb-10">
          <span className="text-4xl monserratBold900">About Us</span>
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
