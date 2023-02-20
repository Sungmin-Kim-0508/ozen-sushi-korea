"use client";
import { BlackBgBtc } from "app/components/button";
import Image from "next/image";
import food57 from "public/images/ozen-sushi/food57.png";

function OzenKoreaHome() {
  return (
    <div>
      <section className="h-[43.75rem]">
        <div className="flex h-full">
          <div className="grow flex flex-col gap-y-3 w-1/2 px-28 py-48">
            <span className="text-6xl">
              Welcome to <br /> OzenKorea
            </span>
            <span className="text-lg font-bold">
              Served everyday since 2008
            </span>
            <span className="mb-4">
              The unique taste comes from family recipes and from fresh, <br />{" "}
              simple and tasteful ingredients straight out of love.
            </span>
            <BlackBgBtc width="16.25rem" height="3.25rem">
              Learn More
            </BlackBgBtc>
          </div>
          <div className="grow w-1/2">
            <Image src={food57} alt="food57" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section>
        <div>Image</div>
        <div>Operate hours</div>
      </section>
    </div>
  );
}

export default OzenKoreaHome;
