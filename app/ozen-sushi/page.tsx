import Image from "next/image";
import { BlueBgBtn, OrangeBgBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/sushi_bowl.png";
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
        <div className="flex mb-16">
          <div className="flex-1 flex flex-col justify-center px-[8.21vw] py-[14.62vw] mlg:pt-[8vw]">
            <span className="font-semibold text-xl text-[clamp(11px,1.28vw,40px)]">
              Served everyday since 2008
            </span>
            <span className="monserratBold900 text-191919 font-extrabold text-[clamp(40px,4.42vw,77px)] leading-none">
              Welcome to
            </span>
            <span className="monserratBold900 text-EC6236 mb-5 font-extrabold text-[clamp(40px,4.42vw,77px)] leading-none">
              Ozen Sushi
            </span>
            <div className="border-2 border-EC6236 max-w-[3.75rem] mb-5" />
            <div className="flex flex-col mb-5 w-[35.71vw] text-[clamp(10px,1.15vw,20px)]">
              The unique taste comes from family recipes and from fresh simple
              and tasteful ingredients straight out of love.
            </div>
            <div className="flex gap-x-7">
              <OrangeBgBtn
                width="clamp(9.2px,14.28vw,200px)"
                height="clamp(9.2px,3.92vw,60px)"
              >
                Learn More
              </OrangeBgBtn>
              <BlueBgBtn
                width="clamp(9.2px,14.28vw,240px)"
                height="clamp(9.2px,3.92vw,60px)"
              >
                Go to Ozen Korea
              </BlueBgBtn>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="salmonRiceBowl"
              src={salmonRiceBowl}
              className={`absolute right-[6vw] top-[3.5vw] z-10 w-[43vw] h-[43vw]`}
            />
            <Image
              alt="img144"
              src={image144}
              className="absolute right-0 bg-transparent w-[47.86vw] h-[49.1vw]"
            />
          </div>
        </div>
        <div className="flex px-32 xl:px-24 mlg:px-12">
          <Image
            alt="image_7601"
            src={image_7601}
            className="z-10 w-[clamp(280px,36.43vw,1000px)] v-[47.45vw] relative top-8"
          />
          <div className="flex flex-col justify-center ml-[6.42vw] w-[40vw] relative top-10 xl:top-20 mlg:top-24 mb-40">
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
            <OrangeBgBtn
              width="clamp(9.2px,14.28vw,200px)"
              height="clamp(9.2px,3.92vw,60px)"
            >
              Learn More
            </OrangeBgBtn>
          </div>
        </div>
      </section>
      <DiscountOfferSection />
      <section className="relative py-24">
        <div className="text-center mb-10">
          <span className="monserratBold900 text-[clamp(38px,3vw,50px)] text-black">
            Check out{" "}
            <span className="monserratBold900 text-[clamp(38px,3vw,50px)] text-EC6236">
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
