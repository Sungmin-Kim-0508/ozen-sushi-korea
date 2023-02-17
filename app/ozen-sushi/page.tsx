"use client";

import Image from "next/image";
import { OrangeBorderBtn } from "../components/button";
import salmonRiceBowl from "public/images/ozen-sushi/salmon_rice_bowl.png";
// import leavesPic from "public/images/ozen-sushi/josh-calabrese.png";

function OzenSushiHome() {
  return (
    <div>
      <section className="flex gap-x-60 px-96">
        <div className="flex flex-col relative top-20">
          <div className="flex flex-col mb-3">
            <span className="font-gravitasOneRegular text-191919 text-6xl font-extrabold tracking-normal">
              Welcome to
            </span>
            <span className="font-gravitasOneRegular text-EC6236 text-6xl">
              Ozensushi
            </span>
          </div>
          <div className="flex flex-col mb-8">
            <span className="font-semibold text-[1.125rem] mb-2">
              Served everyday since 2008
            </span>
            <span>
              The unique taste comes from family recipes and from fresh
            </span>
            <span>simple and tasteful ingredients straight out of love.</span>
          </div>
          <div className="">
            <OrangeBorderBtn width="16.25rem" height="3.25rem">
              Learn More
            </OrangeBorderBtn>
          </div>
        </div>
        <div>
          <Image src={salmonRiceBowl} alt="salmon rice bowl" />
          {/* <Image src={leavesPic} alt="Leaves Pic" className="absolute w-7" /> */}
        </div>
      </section>
      <section>
        <div>Images</div>
        <div className="flex flex-col bg-191919 text-white">
          <span>What we serve</span>
          <span>
            The unique taste comes from family recipes and from fresh, simple
            and tasteful ingredients straight out of love. In every menu items
            from OZEN SUSHI there is a bit of Korean/Japanese culture and
            flavor.
          </span>
          <span>
            Ozen Sushi bridges the traditional with the contemporary, bringing
            live-fire cooking, housemade spicy mayo sauce, and a robust fresh
            fish list to the heart of London Ontario.
          </span>
        </div>
      </section>
    </div>
  );
}

export default OzenSushiHome;
