"use client";

import Image from "next/image";
import Link from "next/link";
import { OzenKoreaLogo } from "public/svgs/ozen-korea";
import ozen_sushi_logo from "public/images/ozen-sushi/ozensushi_original_logo.png";

const btnDefaultStyle =
  "w-64 h-12 text-center leading-[48px] rounded-full mx-auto";

function page() {
  return (
    <div className="grid grid-flow-col justify-center gap-x-20 px-[8rem] py-64 lg:gap-x-6 md:grid-flow-row md:justify-center md:py-16">
      <div className="grid md:justify-center md:align-middle md:mx-auto">
        <OzenKoreaLogo className="w-[clamp(350px,26.85vw,376px)] md:w-[max(190px,50.66vw)] md:mx-auto" />
        <Link
          href="/ozen-korea"
          className={`${btnDefaultStyle} text-white bg-22346b hover:bg-CF382D hover:duration-500`}
        >
          Ozen Korea
        </Link>
      </div>
      <div className="md:border-l-0 md:border-DBDBDB md:h-28 md:relative md:top-20"></div>
      <div className="grid">
        <Image
          src={ozen_sushi_logo}
          alt="ozen_sushi_logo"
          className="md:mb-3"
        />
        <Link
          href="/ozen-sushi"
          className={`${btnDefaultStyle} text-EC6236 bg-white border-2 border-EC6236 relative top-7 hover:bg-EC6236 hover:duration-500 hover:text-white
          md:bg-EC6236 md:text-white md:border-0 md:hover:bg-white md:hover:border-EC6236 md:hover:border-2 md:hover:text-EC6236`}
        >
          Ozen Sushi
        </Link>
      </div>
    </div>
  );
}

export default page;
