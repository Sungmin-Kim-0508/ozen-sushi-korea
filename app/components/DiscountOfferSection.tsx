import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import image_7666 from "public/images/ozen-sushi/image_7666.png";
import image_7682 from "public/images/ozen-korea/img_7682.png";
import {
  OrangeBgAndHoverTransparentBtn,
  RedBgAndHoverTransparentBtn,
} from "app/components/button";

const contents = {
  ozen_sushi: {
    HEAD1: "Celebrate Flavorful Delights!",
    HEAD2: "Your Online Order Today!",
    SUB_HEAD: "CODE: OZENLONDON",
    BODY: "Indulge in the authentic flavors of OzenSushi’s Japanese cuisine! From beautifully crafted sushi rolls to delightful sashimi and crispy tempura, experience the essence of Japan from the comfort of your home.",
  },
  ozen_sushi_mobile: {
    HEAD2: "Online Order!",
  },
  ozen_korea: {
    HEAD1: "Celebrate Flavorful Delights!",
    HEAD2: "Your Online Order Today!",
    SUB_HEAD: "CODE: OZENLONDON",
    BODY: "Delight in the flavors of OzenKorea’s Korean cuisine! Explore a wide range of authentic dishes, from savory bulgogi to flavorful bibimbap, and experience the true taste of Korea from the convenience of your home.",
  },
  ozen_korea_mobile: {
    HEAD2: "Online Order!",
  },
};

const DiscountOfferSection = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  if (pathname?.includes("ozen-sushi")) {
    return (
      <section className="relative w-full md:static md:px-[max(21px,5.6vw)]">
        <Image
          alt="image_7666"
          src={image_7666}
          className="absolute min-w-full h-full -z-10 md:hidden"
        />
        <div className="flex flex-col pl-[8.21vw] py-32 md:md:bg-F7F7F8 md:items-center md:px-[max(21px,5.6vw)] md:py-[max(40px,10.66vw)] md:rounded-[max(20px,5.3vw)] md:text-center">
          <span className="font-montserrat text-[max(42px,3vw)] font-semibold text-white mb-2 md:hidden md:text-191919 md:text-[max(20px,5.33vw)]">
            {isMobile ? "" : contents.ozen_sushi.HEAD1}
          </span>
          <span className="font-montserrat text-[max(42px,3vw)] font-semibold text-white mb-2 md:text-191919 md:text-[max(20px,5.33vw)]">
            {isMobile
              ? contents.ozen_sushi_mobile.HEAD2
              : contents.ozen_sushi.HEAD2}
          </span>
          <div className="border-2 w-[3.75rem] border-white mb-5 md:hidden" />
          {/* <span className="font-montserrat text-[max(24px,1.71vw)] font-semibold text-EC6236 mb-5 md:text-EC6236 md:text-[max(12px,3.2vw)] md:mb-3">
            {contents.ozen_sushi.SUB_HEAD}
          </span> */}
          <div className="hidden md:block border w-8 mb-3 border-EC6236" />
          <div className="text-white font-light text-[max(16px,1.14vw)] w-[40.17vw] mb-[2.14vw] md:w-full md:text-191919 md:text-[max(12px,3.2vw)] md:font-normal md:mb-7">
            {contents.ozen_sushi.BODY}
          </div>
          <OrangeBgAndHoverTransparentBtn className="w-[min(200px,14.28vw)] h-[clamp(40px,3.92vw,55px)] text-[min(16px,1.14vw)] md:w-[max(140px,37.33vw)] md:h-[max(10.66vw,40px)] md:text-[clamp(10px,3.2vw,20px)]">
            Online Order
          </OrangeBgAndHoverTransparentBtn>
        </div>
      </section>
    );
  } else {
    return (
      <section className="relative w-full min-h-full md:static md:px-[max(21px,5.6vw)]">
        <Image
          alt="image_7682"
          src={image_7682}
          className="absolute min-w-full h-full -z-10 bg-none md:hidden"
        />
        <div className="flex flex-col pl-[8.21vw] py-32 md:bg-191919 md:items-center md:px-[max(21px,5.6vw)] md:py-[max(40px,10.66vw)] md:rounded-[max(20px,5.3vw)] md:text-center">
          <span className="font-montserrat text-[max(42px,3vw)] font-semibold text-white md:text-white md:text-[max(20px,5.33vw)]">
            {isMobile ? "" : contents.ozen_korea.HEAD1}
          </span>
          <span className="font-montserrat text-[max(42px,3vw)] font-semibold text-white mb-2 md:text-white md:text-[max(20px,5.33vw)]">
            {isMobile
              ? contents.ozen_korea_mobile.HEAD2
              : contents.ozen_korea.HEAD2}
          </span>
          <div className="border-2 w-[3.75rem] border-white mb-3 md:border-CF382D md:hidden" />
          {/* <span className="font-montserrat text-[max(24px,1.71vw)] font-semibold text-CF382D mb-5 md:text-[max(12px,3.2vw)] md:mb-3">
            {contents.ozen_korea.SUB_HEAD}
          </span> */}
          <div className="hidden md:block border w-8 mb-3 border-CF382D" />
          <div className="text-white font-light text-[max(16px,1.14vw)] w-[40.17vw] mb-[2.14vw] md:w-full md:text-[max(12px,3.2vw)] md:font-normal md:mb-7">
            {contents.ozen_korea.BODY}
          </div>
          <RedBgAndHoverTransparentBtn className="w-[min(200px,14.28vw)] h-[clamp(40px,3.92vw,55px)] text-[min(16px,1.14vw)] md:w-[max(140px,37.33vw)] md:h-[max(10.66vw,40px)] md:text-[clamp(10px,3.2vw,20px)]">
            Online Order
          </RedBgAndHoverTransparentBtn>
        </div>
      </section>
    );
  }
};

export default DiscountOfferSection;
