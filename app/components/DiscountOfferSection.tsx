import Image from "next/image";
import image_7626 from "public/images/ozen-sushi/image_7626.png";
import { BlueBgBtn, OrangeBgBtn } from "app/components/button";

const DiscountOfferSection = () => {
  return (
    <section className="relative w-full min-h-full md:static md:px-[max(21px,5.6vw)]">
      <Image
        alt="image_7626"
        src={image_7626}
        className="absolute min-w-full h-full -z-10 md:hidden"
      />
      <div className="flex flex-col items-end text-end pr-[8.21vw] py-32 md:md:bg-F7F7F8 md:items-center md:px-[max(21px,5.6vw)] md:py-[max(40px,10.66vw)] md:rounded-[max(20px,5.3vw)] md:text-center">
        <span className="monserratBold900 text-[clamp(36px,3vw,100px)] text-white mb-2 md:text-black md:text-[max(20px,5.33vw)]">
          Get 10% Off!
        </span>
        <span className="monserratBold900 text-[clamp(36px,3vw,100px)] text-white mb-5 md:text-EC6236 md:text-[max(20px,5.33vw)]">
          Online Order!
        </span>
        <div className="border-2 w-[3.75rem] border-white mb-5 md:border-EC6236" />
        <div className="text-white text-[clamp(12px,1vw,20px)] w-[40.17vw] mb-[2.14vw] md:w-full md:text-black md:text-[max(12px,3.2vw)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          consectetur augue sit amet viverra varius. Suspendisse porttitor
          placerat enim nec molestie. Nullam dolor nisi, dignissim quis sapien
          at, rhoncus tempor ipsum.
        </div>
        <BlueBgBtn className="w-[clamp(140px,14.28vw,200px)] h-[clamp(40px,3.92vw,55px)] md:hidden">
          Online Order
        </BlueBgBtn>
        <OrangeBgBtn className="hidden md:block w-[max(140px,37.55vw)] h-[max(40px,7vw)] md:text-[clamp(10px,3.2vw,20px)]">
          Online Order
        </OrangeBgBtn>
      </div>
    </section>
  );
};

export default DiscountOfferSection;
