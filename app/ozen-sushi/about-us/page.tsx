"use client";

import { OrangeBorderBtn } from "app/components/button";
import Image from "next/image";

function AboutUs() {
  return (
    <main>
      <section className="flex flex-col items-center px-72 py-24">
        <div className="text-center mb-10">
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
        <div>
          <OrangeBorderBtn width="16.25rem" height="3.25rem">
            Online Order
          </OrangeBorderBtn>
        </div>
      </section>
      <section>
        <div className="flex">
          {/* {foodImages.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} className="w-full" />
          ))} */}
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
