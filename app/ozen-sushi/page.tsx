"use client";

import Image from "next/image";
import { BlueBgBtn, OrangeBgBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/sushi_bowl.png";
import plaid from "public/images/ozen-sushi/plaid_bg.png";
import image144 from "public/images/ozen-sushi/image_144.png";
import image_7601 from "public/images/ozen-sushi/image_7601.png";
import image_7626 from "public/images/ozen-sushi/image_7626.png";

function OzenSushiHome() {
  return (
    <>
      <section className="relative w-full min-h-full">
        <Image
          alt="plaid"
          src={plaid}
          className="absolute min-w-full min-h-full -z-10"
        />
        <div className="flex mb-16 xl:mb-48">
          <div className="flex-1 flex flex-col px-56 xl:px-28 py-44 xl:py-12">
            <span className="font-semibold text-xl mb-2">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-191919 text-8xl xl:text-6xl lg:text-4xl font-extrabold">
              Welcome to
            </span>
            <span className="monserratBold900 text-EC6236 text-8xl xl:text-6xl lg:text-4xl font-extrabold mb-5">
              Ozensushi
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] mb-5" />
            <div className="flex flex-col mb-5">
              <span className="text-xl">
                The unique taste comes from family recipes and from fresh
              </span>
              <span className="text-xl">
                simple and tasteful ingredients straight out of love.
              </span>
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
              className="absolute right-16 z-10 max-w-full xl:w-2/5"
            />
            <Image
              alt="img144"
              src={image144}
              className="absolute right-0 bg-transparent max-w-full xl:w-2/5"
            />
          </div>
        </div>
        <div className="relative flex xl:gap-x-40 px-32 xl:px-28">
          <div className="flex-1">
            <Image
              alt="image_7601"
              src={image_7601}
              width={500}
              className="absolute left-56 -top-28 xl:left-28 z-10 xl:-top-8 lg:w-[25rem] lg:h-[35rem] lg:top-2"
            />
          </div>
          <div className="flex-1 flex flex-col mb-40 px-28 xl:mb-32 xl:px-0 xl:w-[65rem] xl:relative xl:top-[3.75rem]">
            <span className="text-5xl lg:text-4xl">
              What we <span className="text-EC6236">serve</span>
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] my-5" />
            <div>
              <div className="mb-5 text-xl lg:text-sm">
                The unique taste comes from family recipes and from fresh,
                simple and tasteful ingredients straight out of love. In every
                menu items from OZEN SUSHI there is a bit of Korean/Japanese
                culture and flavour.
              </div>
              <div className="mb-7 text-xl lg:text-sm">
                Ozen Sushi bridges the traditional with the contemporary,
                bringing live-fire cooking, housemade spicy mayo sauce, and a
                robust fresh fish list to the heart of London Ontario.
              </div>
            </div>
            <OrangeBgBtn width="12.5rem" height="3.25rem">
              Learn More
            </OrangeBgBtn>
          </div>
        </div>
      </section>
      <section className="relative w-full h-full">
        <Image
          alt="image_7626"
          src={image_7626}
          className="absolute min-w-full min-h-full -z-10"
        />
        <div className="flex flex-col items-end text-end pr-40 mlg:pr-20 py-32 mlg:py-24">
          <span className="monserratBold900 text-5xl mlg:text-4xl text-white mb-2">
            Get 10% Off!
          </span>
          <span className="monserratBold900 text-5xl mlg:text-4xl text-white xl:text-6xl lg:text-4xl mb-5">
            Online Order!
          </span>
          <div className="border-2 w-[3.75rem] border-white mb-5" />
          <div className="text-white text-xl lg:text-lg w-[40rem] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consectetur augue sit amet viverra varius. Suspendisse porttitor
            placerat enim nec molestie. Nullam dolor nisi, dignissim quis sapien
            at, rhoncus tempor ipsum.
          </div>
          <BlueBgBtn width="12.5rem" height="3.25rem">
            Online Order
          </BlueBgBtn>
        </div>
      </section>
      <section className="relative">
        <div>
          <span className="monserratBold900 text-4xl text-black">
            Check out{" "}
            <span className="monserratBold900 text-4xl text-EC6236">
              Our Stories
            </span>
          </span>
          <div className="border-2 border-EC6236 max-w-[3.75rem] mb-5" />
        </div>
      </section>
    </>
  );
}

export default OzenSushiHome;
