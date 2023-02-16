"use client";

import Link from "next/link";
import { OzenKoreaLogo } from "../public/svgs/ozen-korea";
import { OzenSushiLogo } from "../public/svgs/ozen-sushi";

const btnDefaultStyle =
  "w-64 h-12 text-center leading-[48px] rounded-full mx-[5rem]";

function page() {
  return (
    <div className="grid gap-y-20 px-[8rem] mt-64 md:grid-flow-col md:justify-center md:gap-x-32">
      <div className="grid">
        <OzenKoreaLogo />
        <Link
          href="/ozen-korea"
          className={`${btnDefaultStyle} text-white bg-22346b relative top-9`}
        >
          Ozen Korea
        </Link>
      </div>
      <div className="md:border-l md:border-solid md:border-DBDBDB md:h-28 md:relative md:top-20"></div>
      <div className="grid">
        <OzenSushiLogo />
        <Link
          href="/ozen-sushi"
          className={`${btnDefaultStyle} text-EC6236 bg-white border-solid border-2 border-EC6236 relative top-7`}
        >
          Ozen Sushi
        </Link>
      </div>
    </div>
  );
}

export default page;
