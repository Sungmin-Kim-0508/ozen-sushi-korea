"use client";

import Image from "next/image";
import { BlueBgBtn, OrangeBgBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/sushi_bowl.png";
import food63 from "public/images/ozen-sushi/food63.png";
import food64 from "public/images/ozen-sushi/food64.png";
import food65 from "public/images/ozen-sushi/food65.png";
import food66 from "public/images/ozen-sushi/food66.png";
import food91 from "public/images/ozen-sushi/food91.png";
import plaid from "public/images/ozen-sushi/plaid_bg.png";
import image144 from "public/images/ozen-sushi/image_144.png";

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
    <>
      <section className="relative w-full">
        <Image alt="plaid" src={plaid} className="absolute min-w-full -z-10" />
        <div className="flex">
          {/* need to define lg:font-size */}
          <div className="flex-1 flex flex-col px-28 py-44">
            <span className="font-semibold text-2xl xl:text-[1.125rem] mb-2">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-191919 text-8xl xl:text-6xl font-extrabold">
              Welcome to
            </span>
            <span className="monserratBold900 text-EC6236 text-8xl xl:text-6xl font-extrabold mb-5">
              Ozensushi
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] mb-5" />
            <div className="flex flex-col mb-5">
              <span>
                The unique taste comes from family recipes and from fresh
              </span>
              <span>simple and tasteful ingredients straight out of love.</span>
            </div>
            <div className="flex gap-x-7">
              <OrangeBgBtn width="12.5rem" height="3.25rem">
                Learn More
              </OrangeBgBtn>
              <BlueBgBtn width="12.5rem" height="3.25rem">
                Go to Ozen Korea
              </BlueBgBtn>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="salmonRiceBowl"
              src={salmonRiceBowl}
              className="absolute right-16 z-10 max-w-full lg:w-2/5"
            />
            <Image
              alt="img144"
              src={image144}
              className="absolute right-0 bg-transparent max-w-full lg:w-2/5 "
            />
          </div>
        </div>
      </section>
      <section>Section2</section>
      <section>Section3</section>
    </>
  );
}

export default OzenSushiHome;
