"use client";

import Image from "next/image";
import { OrangeBorderBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/salmon_rice_bowl.png";
import food57 from "public/images/ozen-sushi/food57.png";
import food58 from "public/images/ozen-sushi/food58.png";
import food59 from "public/images/ozen-sushi/food59.png";
import food60 from "public/images/ozen-sushi/food60.png";
import food61 from "public/images/ozen-sushi/food61.png";
import food63 from "public/images/ozen-sushi/food63.png";
import food64 from "public/images/ozen-sushi/food64.png";
import food65 from "public/images/ozen-sushi/food65.png";
import food66 from "public/images/ozen-sushi/food66.png";
import stickers from "public/images/ozen-sushi/stickers.png";

function OzenSushiHome() {
  const foodImagesInSec2 = [
    {
      src: food57,
      alt: "salmin sushi",
    },
    {
      src: food58,
      alt: "rolls1",
    },
    {
      src: food59,
      alt: "rolls2",
    },
    {
      src: food60,
      alt: "rolls3",
    },
    {
      src: food61,
      alt: "sasimi",
    },
  ];
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
            <span className="gravitasOne text-191919 text-6xl font-extrabold tracking-normal mb-3">
              Welcome to
            </span>
            <span className="gravitasOne text-EC6236 text-6xl">Ozensushi</span>
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
        <div className="flex">
          {foodImagesInSec2.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} className="w-full" />
          ))}
        </div>
        <div className="flex flex-col gap-y-10 text-center bg-191919 text-white px-[17.81rem] py-32">
          <span className="text-4xl gravitasOne">What we serve</span>
          <span className="px-64">
            The unique taste comes from family recipes and from fresh, simple
            and tasteful ingredients straight out of love. In every menu items
            from OZEN SUSHI there is a bit of Korean/Japanese culture and
            flavor.
          </span>
          <span className="px-64">
            Ozen Sushi bridges the traditional with the contemporary, bringing
            live-fire cooking, housemade spicy mayo sauce, and a robust fresh
            fish list to the heart of London Ontario.
          </span>
        </div>
      </section>
      <section className="flex gap-x-60 px-72">
        <div>
          <Image src={stickers} alt="ozen-sushi-stickers" />
        </div>
        <div className="flex flex-col m-auto">
          <span className="text-3xl gravitasOne">
            Check out Our Stories
            <br />
            in INSTAGRAM
          </span>
          <div className="grid grid-cols-2 gap-2">
            {foodImagesInSec3.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default OzenSushiHome;
