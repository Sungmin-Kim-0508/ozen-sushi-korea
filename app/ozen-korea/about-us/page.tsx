"use client";

import Image from "next/image";
import img7629 from "public/images/ozen-korea/img_7629.png";
import img9931 from "public/images/ozen-korea/img_9931.png";
import img104 from "public/images/ozen-korea/img_104.png";
import img105 from "public/images/ozen-korea/img_105.png";
import img106 from "public/images/ozen-korea/img_106.png";
import img107 from "public/images/ozen-korea/img_107.png";
import DiscountOfferSection from "app/components/DiscountOfferSection";
import { RedBgBtn } from "app/components/button";
import { OzenKoreaDivider } from "app/components/OzenKoreaDivider";

function AboutUs() {
  const SECTION_GAP_IN_MOBILE = "md:mb-[max(30px,8vw)]";

  const foodImages = [
    {
      src: img104,
      alt: "image_104",
    },
    {
      src: img105,
      alt: "image_105",
    },
    {
      src: img106,
      alt: "image_106",
    },
    {
      src: img107,
      alt: "image_107",
    },
  ];

  return (
    <>
      <section
        className={`flex md:block md:px-[max(20px,5.33vw)] ${SECTION_GAP_IN_MOBILE} mt-[max(30px,8vw)]`}
      >
        <div className="flex justify-center px-[8.21vw] py-[8.57vw] gap-x-[6.42vw] md:p-0 md:bg-191919 rounded-[max(20px,5.3vw)]">
          <Image
            alt="image_7606"
            src={img7629}
            className="w-[36.42vw] h-[47.21vw] md:hidden"
          />
          <div className="flex flex-col justify-center w-full md:px-[max(21px,5.6vw)] md:py-[max(40px,10.66vw)] md:shadow-lg md:text-center">
            <span className="font-montserrat text-191919 text-5xl font-bold mlg:text-4xl md:hidden">
              About{" "}
              <span className="font-montserrat text-CF382D text-5xl">us</span>
            </span>
            <span className="hidden md:block text-white font-montserrat font-semibold text-[max(20px,5.33vw)] text-center">
              About{" "}
              <span className="font-montserrat text-CF382D text-[max(20px,5.33vw)]">
                us
              </span>
            </span>
            <div className="mt-5 md:flex justify-center mb:mt-3">
              <OzenKoreaDivider />
            </div>
            <div className="text-[clamp(12px,1.14vw,22px)] font-light md:text-[max(12px,3.2vw)] md:text-white md:font-normal">
              <div className="mb-5">
                Ozen Korea is a Korean restaurant located in the vibrant city of
                London, Ontario. With its unique fusion of traditional Korean
                cuisine and contemporary style, Ozen Korea offers an exceptional
                dining experience that combines bold flavors and impeccable
                service.
              </div>
              <div className="mb-8">
                Ozen Korea is located in the heart of the city, just a short
                distance from both Oxford Street and Wonderland Road, two of the
                most prominent landmarks in London, Ontario. Whether you’re
                looking to explore the city’s cultural offerings or indulge in
                some delicious Korean food, Ozen Korea is the perfect
                destination.
              </div>
            </div>
            <div className="flex justify-center">
              <RedBgBtn className="hidden w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:block md:w-[max(140px,37.55vw)] md:h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
                Learn More
              </RedBgBtn>
            </div>
          </div>
        </div>
      </section>
      <div className={`hidden md:block ${SECTION_GAP_IN_MOBILE}`}>
        <Image alt="image_9931" src={img9931} className={`w-full`} />
      </div>
      <div className={`${SECTION_GAP_IN_MOBILE}`}>
        <DiscountOfferSection />
      </div>
      <section className="hidden md:grid grid-rows-2 grid-cols-2 md:gap-2 mb-2">
        {foodImages.map((image) => (
          <Image
            key={image.alt}
            alt={image.alt}
            src={image.src}
            className="h-full max-h-full w-full max-w-full overflow-hidden md:w-full"
          />
        ))}
      </section>
    </>
  );
}

export default AboutUs;
