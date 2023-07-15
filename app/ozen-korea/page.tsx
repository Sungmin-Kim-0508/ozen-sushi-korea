"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlackBgBtn, RedBgBtn } from "app/components/button";
import image9928Large from "public/images/ozen-korea/img_9928.png";
import image_9930 from "public/images/ozen-korea/img_9930.png";
import food63 from "public/images/ozen-korea/food63.png";
import food64 from "public/images/ozen-korea/food64.png";
import food65 from "public/images/ozen-korea/food65.png";
import food66 from "public/images/ozen-korea/food66.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";
import { ozen_sushi_home } from "app/utils/routes";
import { OzenKoreaDivider } from "app/components/OzenKoreaDivider";

const SECTION_GAP_IN_MOBILE = "mb-[max(30px,8vw)]";

function OzenKoreaHome() {
  const router = useRouter();
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
      <section className="relative w-full md:px-[max(20px,5.33vw)]">
        <div className="flex mb-16 md:block md:mt-[max(30px,8vw)] bg-191919 md:rounded-[max(20px,5.3vw)]">
          <div className="flex-1 flex flex-col justify-center px-[8.21vw] py-[10vw] md:px-[max(22px,5.86vw)] md:py-[max(43px,11.46vw)] md:shadow-2xl md:text-center md:opacity-100 md:rounded-[20px]">
            <span className="font-normal text-white text-[1.28vw] md:hidden">
              Served everyday since 2008
            </span>
            <span className="font-montserrat text-white font-extrabold text-[4.42vw] leading-none md:text-[max(32px,9.6vw)] md:mb-2">
              Welcome to
            </span>
            <span className="font-montserrat text-CF382D mb-5 font-extrabold text-[4.42vw] leading-none md:text-[max(32px,9.6vw)]">
              OzenKorea
            </span>
            <span className="hidden robotoMedium mb-[max(6px,1.6vw)] md:block md:text-[max(14px,3.73vw)] md:text-white">
              Served everyday since 2008
            </span>
            <div className="md:hidden">
              <OzenKoreaDivider />
            </div>
            <div className="flex flex-col mb-5 w-[35.71vw] text-[clamp(16px,1.14vw,20px)] font-light text-white font-light md:w-full md:block md:px-[min(16px,5.86vw)] md:text-[clamp(10px,3.2vw,20px)] md:font-normal">
              The unique taste comes from family recipes and from fresh simple
              and tasteful ingredients straight out of love.
            </div>
            <div className="flex gap-x-7 md:gap-x-[10px]">
              <RedBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Learn More
              </RedBgBtn>
              <BlackBgBtn
                className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]"
                onClick={(event) => {
                  event?.preventDefault();
                  router.push(`${ozen_sushi_home}`);
                }}
              >
                Go to Ozen Sushi
              </BlackBgBtn>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="image9928"
              src={image9928Large}
              className={`right-[6vw] z-10 w-[43vw] h-full md:hidden`}
            />
          </div>
        </div>
      </section>
      <section className={`hidden md:block ${SECTION_GAP_IN_MOBILE}`}>
        <Image
          alt="image9928"
          src={image9928Large}
          className={`hidden md:block w-full`}
        />
      </section>
      <WhatWeServeMobile />
      <WhatWeServeDesktop />
      <DiscountOfferSection />
      <section className="relative py-24 bg-white md:pt-8 md:pb-3">
        <div className="text-center mb-3">
          <span className="font-montserrat font-semibold text-[clamp(38px,3vw,50px)] text-191919 md:text-[max(20px,5.33vw)]">
            Check out{" "}
            <span className="font-montserrat text-[clamp(38px,3vw,50px)] text-CF382D border-CF382D md:text-[max(20px,5.33vw)]">
              Our stories
            </span>
          </span>
        </div>
        <div className="flex justify-center md:hidden">
          <div className="border-2 border-CF382D w-14 mb-10" />
        </div>
        <div className="flex gap-x-3 w-full md:grid grid-rows-2 grid-cols-2 md:gap-2">
          {foodImagesInSec3.map((image) => (
            <Image
              key={image.alt}
              alt={image.alt}
              src={image.src}
              className="h-full max-h-full w-full max-w-full overflow-hidden md:w-full"
            />
          ))}
        </div>
      </section>
    </>
  );
}

const WhatWeServeDesktop = () => (
  <section className="flex px-32 py-[8.21vw] bg-white md:flex-col md:px-0">
    <Image
      alt="image_9930"
      src={image_9930}
      className={`w-[clamp(280px,33.57vw,1000px)] h-[42vw] md:w-full md:h-full md:${SECTION_GAP_IN_MOBILE}`}
    />
    {/* Desktop */}
    <div className="flex flex-col justify-center ml-[6.42vw] w-[40vw] relative top-10 xl:top-20 mlg:top-24 mb-40 md:hidden">
      <span className="font-montserrat text-[3.5vw] font-semibold mb-3 md:text-white">
        What we{" "}
        <span className="text-CF38border-CF382D font-montserrat text-CF382D">
          serve
        </span>
      </span>
      <OzenKoreaDivider />
      <div className="mb-7 text-[clamp(16px,1.0vw,20px)] text-191919 leading-normal font-light">
        Ozen Korea is a Korean restaurant located in the vibrant city of London,
        Ontario. With its unique fusion of traditional Korean cuisine and
        contemporary style, Ozen Korea offers an exceptional dining experience
        that combines bold flavors and impeccable service. Ozen Sushi bridges
        the traditional with the contemporary, bringing live-fire cooking,
        housemade spicy mayo sauce, and a robust fresh fish list to the heart of
        London Ontario.
      </div>
      <RedBgBtn className="w-[min(200px,14.28vw)] h-[clamp(40px,3.92vw,55px)] text-[min(16px,1.14vw)] md:w-[max(140px,37.33vw)] md:h-[max(10.66vw,40px)] md:text-[clamp(10px,3.2vw,20px)]">
        Learn More
      </RedBgBtn>
    </div>
  </section>
);

const WhatWeServeMobile = () => (
  <section className="hidden md:flex w-full px-[max(20px,5.33vw)]">
    <div className="py-[max(40px,10.66vw)] md:text-center md:bg-191919 md:rounded-[max(20px,5.3vw)] md:px-[max(22px,5.86vw)]">
      <span className="font-montserrat font-semibold text-[max(20px,5.33vw)] text-white">
        What we{" "}
        <span className="text-CF38border-CF382D font-montserrat text-CF382D">
          Serve
        </span>
      </span>
      <div className="md:flex justify-center md:mt-3">
        <OzenKoreaDivider />
      </div>
      <div className="mb-7 text-[clamp(12px,3.2vw,20px)] text-white leading-normal">
        Ozen Korea is a Korean restaurant located in the vibrant city of London,
        Ontario. With its unique fusion of traditional Korean cuisine and
        contemporary style, Ozen Korea offers an exceptional dining experience
        that combines bold flavors and impeccable service. Ozen Sushi bridges
        the traditional with the contemporary, bringing live-fire cooking,
        housemade spicy mayo sauce, and a robust fresh fish list to the heart of
        London Ontario.
      </div>
      <div className="flex justify-center">
        <RedBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
          Learn More
        </RedBgBtn>
      </div>
    </div>
  </section>
);

export default OzenKoreaHome;
