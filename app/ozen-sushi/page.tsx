import Image from "next/image";
import { BlueBgBtn, OrangeBgBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/sushi_bowl.png";
import plaid from "public/images/ozen-sushi/plaid_bg.png";
import image144 from "public/images/ozen-sushi/image_144.png";
import image_7601 from "public/images/ozen-sushi/image_7601.png";
import image_136 from "public/images/ozen-sushi/image_136.png";
import image_137 from "public/images/ozen-sushi/image_137.png";
import image_138 from "public/images/ozen-sushi/image_138.png";
import image_139 from "public/images/ozen-sushi/image_139.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";

function OzenSushiHome() {
  const foodImages = [
    {
      src: image_136,
      alt: "image_136",
    },
    {
      src: image_137,
      alt: "image_137",
    },
    {
      src: image_138,
      alt: "image_138",
    },
    {
      src: image_139,
      alt: "image_139",
    },
  ];
  return (
    <>
      <section className="relative w-full min-h-full">
        <Image
          alt="plaid"
          src={plaid}
          className="absolute min-w-full min-h-full -z-10"
        />
        <div className="flex mb-16">
          <div className="flex-1 flex flex-col justify-center px-32 py-44 xl:py-12 mlg:px-20">
            <span className="font-semibold text-xl text-[1.3vw]">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-191919 font-extrabold text-[5.5vw] mlg:text-[4.5vw] leading-none">
              Welcome to
            </span>
            <span className="monserratBold900 text-EC6236 mb-5 font-extrabold text-[5.5vw] mlg:text-[4.5vw] leading-none">
              Ozensushi
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] mb-5" />
            <div className="flex flex-col mb-5 mlg:w-[27.25rem] text-[1.4vw] mlg:text-[1.3vw]">
              The unique taste comes from family recipes and from fresh simple
              and tasteful ingredients straight out of love.
              <span></span>
              {/* <span></span> */}
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
        <div className="flex px-32 xl:px-28 mlg:px-20">
          <Image
            alt="image_7601"
            src={image_7601}
            className="z-10 w-[clamp(24rem,30vw,36rem)] min-h-[25rem] relative top-8"
          />
          <div className="flex flex-col justify-center ml-[3vw] w-[40vw] relative top-10 xl:top-20 mlg:top-24 mb-40">
            <span className="monserratBold900 text-[3.5vw] xl:text-[3vw]">
              What we{" "}
              <span className="text-EC6236 monserratBold900">serve</span>
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] my-5" />
            <div className="text-[clamp(14px,1.0vw,20px)]">
              <div className="mb-5">
                The unique taste comes from family recipes and from fresh,
                simple and tasteful ingredients straight out of love. In every
                menu items from OZEN SUSHI there is a bit of Korean/Japanese
                culture and flavour.
              </div>
              <div className="mb-7">
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
      <DiscountOfferSection />
      <section className="relative py-24">
        <div className="text-center mb-10">
          <span className="monserratBold900 text-5xl text-black">
            Check out{" "}
            <span className="monserratBold900 text-5xl text-EC6236">
              Our Stories
            </span>
          </span>
        </div>
        <div className="flex justify-center">
          <div className="border-2 border-EC6236 w-14 mb-10" />
        </div>
        <div className="flex gap-x-3 w-full">
          {foodImages.map((image) => (
            <Image
              key={image.alt}
              alt={image.alt}
              src={image.src}
              className="h-full max-h-full w-full max-w-full overflow-hidden xl:w-1/4"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default OzenSushiHome;
