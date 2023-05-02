import React from "react";
import { OzenSushiLogoHorizontalWhite } from "public/svgs/ozen-sushi_horizontal-white";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col">
      <section className="flex text-white bg-191919">
        <div className="flex-1 px-28 py-20 lg:px-20">
          <OzenSushiLogoHorizontalWhite />
        </div>
        <div className="flex-1 flex justify-end mr-5 gap-x-20 py-12 xl:gap-x-14 lg:gap-x-16 mlg:gap-x-16">
          <div className="xl:w-[15rem] lg:w-[10rem] mlg:w-[20rem]">
            <div className="mb-3">
              <span className="text-EC6236 text-3xl xl:text-2xl lg:text-xl mlg:text-base">
                Hours
              </span>
            </div>
            <div className="flex gap-x-8 text-xl xl:text-base lg:text-sm mlg:text-sm">
              <div className="flex flex-col gap-y-2">
                <span>Mon to Fri</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <span>11am - 9pm</span>
                <span>11am - 10pm</span>
                <span>11am - 10pm</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mb-3">
              <span className="text-EC6236 text-3xl xl:text-2xl lg:text-xl mlg:text-base">
                Get In Touch
              </span>
            </div>
            <div className="w-2/3 text-xl xl:text-base lg:text-sm mlg:text-sm">
              607 Richmond St, London ON N6A 3G3
            </div>
            <div>{/* instagram icon here */}</div>
          </div>
        </div>
      </section>
      <section className="flex justify-between px-28 py-2 text-sm text-white bg-191919">
        <div>Website proudly create by Jinu & Sungmin</div>
        <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
      </section>
    </footer>
  );
}

export default Footer;
