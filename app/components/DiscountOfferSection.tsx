import Image from "next/image";
import image_7626 from "public/images/ozen-sushi/image_7626.png";
import { BlueBgBtn } from "app/components/button";

const DiscountOfferSection = () => {
  return (
    <section className="relative w-full min-h-full">
      <Image
        alt="image_7626"
        src={image_7626}
        className="absolute min-w-full h-full -z-10"
      />
      <div className="flex flex-col items-end text-end pr-56 py-32 lg:pr-20 lg:py-24">
        <span className="monserratBold900 text-[clamp(36px,3vw,100px)] text-white mb-2">
          Get 10% Off!
        </span>
        <span className="monserratBold900 text-[clamp(36px,3vw,100px)] text-white mb-5">
          Online Order!
        </span>
        <div className="border-2 w-[3.75rem] border-white mb-5" />
        <div className="text-white text-[clamp(12px,1vw,20px)] w-[40.17vw] mb-[2.14vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          consectetur augue sit amet viverra varius. Suspendisse porttitor
          placerat enim nec molestie. Nullam dolor nisi, dignissim quis sapien
          at, rhoncus tempor ipsum.
        </div>
        <BlueBgBtn width="14.30vw" height="3.92vw">
          Online Order
        </BlueBgBtn>
      </div>
    </section>
  );
};

export default DiscountOfferSection;