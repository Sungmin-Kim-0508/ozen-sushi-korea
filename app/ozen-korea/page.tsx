"use client";
import { BlackBgBtc, RedBgBtn } from "app/components/button";
import Image from "next/image";
import image9928Large from "public/images/ozen-korea/img_9928.png";
import image_9930 from "public/images/ozen-korea/img_9930.png";
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
      <section>
        <div className="flex h-full">
          <div className="flex-1 flex flex-col justify-center px-36 xl:px-24 mlg:px-12">
            <span className="font-semibold text-base mb-2">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-white text-8xl font-extrabold xl:text-6xl">
              Welcome to
            </span>
            <span className="monserratBold900 text-CF382D text-8xl font-extrabold xl:text-6xl mb-5">
              Ozen Korea
            </span>
            <div className="border-2 border-CF382D max-w-[3.75rem] mb-5" />
            <div className="flex flex-col mb-5 text-base">
              <span>
                The unique taste comes from family recipes and from fresh
              </span>
              <span>simple and tasteful ingredients straight out of love.</span>
            </div>
            <div className="flex gap-x-7">
              <RedBgBtn width="12.5rem" height="3.25rem">
                Learn More
              </RedBgBtn>
              <BlackBgBtc width="12.5rem" height="3.25rem">
                Go to Ozen Korea
              </BlackBgBtc>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={image9928Large}
              alt="food57"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-white py-[6.25rem]">
        <div className="flex justify-center">
          <Image alt="image_9930" src={image_9930} width={500} />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-black text-5xl lg:text-4xl">
            What we <span className="text-CF382D">serve</span>
          </span>
          <div className="border-2 border-CF382D max-w-[3.75rem] my-5" />
          <div className="mb-5 text-black text-xl lg:text-sm">
            Ozen Korea is a Korean restaurant located in the vibrant city of
            London, Ontario. With its unique fusion of traditional Korean
            cuisine and contemporary style, Ozen Korea offers an exceptional
            dining experience that combines bold flavors and impeccable service.
            Ozen Sushi bridges the traditional with the contemporary, bringing
            live-fire cooking, housemade spicy mayo sauce, and a robust fresh
            fish list to the heart of London Ontario.
          </div>
          <RedBgBtn width="12.5rem" height="3.25rem">
            Learn More
          </RedBgBtn>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-y-10 text-center bg-FAFAFA text-191919 px-[17.81rem] py-32">
          <span className="text-4xl monserratBold900">What we serve</span>
          <span className="px-auto">
            The unique taste comes from family recipes and from fresh, simple
            and tasteful ingredients straight out of love. In every menu items
            from OZEN SUSHI there is a bit of Korean/Japanese culture and
            flavor.
          </span>
          <span className="px-auto">
            Ozen Sushi bridges the traditional with the contemporary, bringing
            live-fire cooking, housemade spicy mayo sauce, and a robust fresh
            fish list to the heart of London Ontario.
          </span>
        </div>
      </section>
      <section className="flex flex-col items-center py-28 gap-y-8 bg-white">
        <div className="text-4xl text-191919 text-center monserratBold600">
          Check out Our Stories
          <br />
          in INSTAGRAM
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
