"use client";
import { BlackBgBtc } from "app/components/button";
import Image from "next/image";
import image9928 from "public/images/ozen-korea/img_9928.png";
import image9926 from "public/images/ozen-korea/img_9926.png";
import food63 from "public/images/ozen-korea/food63.png";
import food64 from "public/images/ozen-korea/food64.png";
import food65 from "public/images/ozen-korea/food65.png";
import food66 from "public/images/ozen-korea/food66.png";

function OzenKoreaHome() {
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
      <section className="h-[43.75rem]">
        <div className="flex h-full">
          <div className="grow flex flex-col gap-y-3 w-1/2 px-28 py-48">
            <span className="text-6xl gravitas-one">
              Welcome to <br /> OzenKorea
            </span>
            <span className="text-lg font-bold">
              Served everyday since 2008
            </span>
            <span className="mb-4">
              The unique taste comes from family recipes and from fresh, <br />{" "}
              simple and tasteful ingredients straight out of love.
            </span>
            <BlackBgBtc width="16.25rem" height="3.25rem">
              Learn More
            </BlackBgBtc>
          </div>
          <div className="grow w-1/2">
            <Image src={image9928} alt="food57" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="h-[43.75rem]">
        <div className="flex h-full">
          <div className="grow w-1/2">
            <Image src={image9926} alt="food57" className="w-full h-full" />
          </div>
          <div className="grow flex flex-col gap-y-3 w-1/2 px-28 py-48">
            <div>
              <span>Operate Hours</span>
            </div>
            <div>Monday to Friday</div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-y-10 text-center bg-FAFAFA text-191919 px-[17.81rem] py-32">
          <span className="text-4xl">What we serve</span>
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
      <section className="flex flex-col items-center py-28 gap-y-8 bg-white">
        <div className="text-4xl text-191919">
          Check out Our Stories in INSTAGRAM
        </div>
        <div className="flex gap-x-4">
          {foodImagesInSec3.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default OzenKoreaHome;
