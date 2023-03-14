"use client";

import Image from "next/image";
import { OrangeBorderBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/salmon_rice_bowl.png";
import food63 from "public/images/ozen-sushi/food63.png";
import food64 from "public/images/ozen-sushi/food64.png";
import food65 from "public/images/ozen-sushi/food65.png";
import food66 from "public/images/ozen-sushi/food66.png";
import food91 from "public/images/ozen-sushi/food91.png";

function OzenSushiHome() {
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
    <main>
      <section className="flex">
        <div className="flex-1 flex flex-col align-middle relative top-32 left-64">
          <div className="flex flex-col mb-3">
            <span className="monserratBold900 text-191919 text-6xl font-extrabold tracking-normal mb-3">
              Welcome to
            </span>
            <span className="monserratBold900 text-EC6236 text-6xl">
              Ozensushi
            </span>
          </div>
          <div className="flex flex-col mb-8">
            <span className="font-semibold text-[1.125rem] mb-2">
              Served everyday since 2008
            </span>
            <span>
              The unique taste comes from family recipes and from fresh
            </span>
            <span>simple and tasteful ingredients straight out of love.</span>
          </div>
          <div className="">
            <OrangeBorderBtn width="16.25rem" height="3.25rem">
              Learn More
            </OrangeBorderBtn>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={salmonRiceBowl}
            alt="salmon rice bowl"
            className="w-full"
          />
        </div>
      </section>
      <section>
        <div className="flex bg-191919">
          <div>
            <Image src={food91} alt="food91" />
          </div>
          <div className="flex flex-col justify-center gap-y-10 text-white px-40 py-10">
            <span className="text-4xl min-w-max monserratBold900 w-[45.5rem]">
              What we served
            </span>
            <span className="px-auto w-[45.5rem]">
              The unique taste comes from family recipes and from fresh, simple
              and tasteful ingredients straight out of love. In every menu items
              from OZEN SUSHI there is a bit of Korean/Japanese culture and
              flavor.
            </span>
            <span className="px-auto w-[45.5rem]">
              Ozen Sushi bridges the traditional with the contemporary, bringing
              live-fire cooking, housemade spicy mayo sauce, and a robust fresh
              fish list to the heart of London Ontario.
            </span>
          </div>
        </div>
      </section>
      <section className="flex gap-x-60 px-28 py-24">
        <div className="flex flex-col m-auto text-3xl min-w-max mb-7">
          <div className="flex gap-x-3 mb-5">
            <span className="monserratBold600">Check out</span>
            <span className="monserratBold600 text-EC6236 ">Our Stories</span>
          </div>
          <div className="flex gap-4">
            {foodImagesInSec3.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} width={350} height={350} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default OzenSushiHome;
