"use client";

import Image from "next/image";
import Link from "next/link";
import { OzenKoreaLogo } from "public/svgs/ozen-korea";
import ozen_sushi_logo from "public/images/ozen-sushi/ozensushi_original_logo.png";

const btnDefaultStyle =
  "w-64 h-12 text-center leading-[48px] rounded-full mx-[5rem]";

function page() {
  return (
    <div className="grid gap-y-20 px-[8rem] mt-64 md:grid-flow-col md:justify-center md:gap-x-32">
      <div className="grid">
        <OzenKoreaLogo />
        <Link
          href="/ozen-korea"
          className={`${btnDefaultStyle} text-white bg-22346b relative top-9 hover:bg-CF382D hover:duration-500`}
        >
          Ozen Korea
        </Link>
      </div>
      <div className="md:border-l md:border-DBDBDB md:h-28 md:relative md:top-20"></div>
      <div className="grid">
        <Image
          src={ozen_sushi_logo}
          alt="ozen_sushi_logo"
          className="relative left-14"
        />
        <Link
          href="/ozen-sushi"
          className={`${btnDefaultStyle} text-EC6236 bg-white border-2 border-EC6236 relative top-7 hover:bg-EC6236 hover:duration-500 hover:text-white`}
        >
          Ozen Sushi
        </Link>
      </div>
    </div>
  );
}

export default page;
