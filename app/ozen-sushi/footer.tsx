import React from "react";
import { OzenSushiLogoHorizontalWhite } from "public/svgs/ozen-sushi_horizontal-white";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col">
      <section className="flex justify-between pl-[7.2rem] text-white bg-191919">
        <div className="pt-[3.75rem] relative left-3">
          <OzenSushiLogoHorizontalWhite />
        </div>
        <div className="flex gap-x-10 pr-[2rem] py-[3.75rem]">
          <div className="w-auto">
            <div className="mb-3">
              <span className="text-EC6236 text-[1.1vw] font-extrabold">
                Hours
              </span>
            </div>
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-2 text-[1vw]">
                <span>Mon to Fri</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className="flex flex-col gap-y-2 text-[1vw]">
                <span>11am - 9pm</span>
                <span>11am - 10pm</span>
                <span>11am - 10pm</span>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="mb-3">
              <span className="text-EC6236 text-[1.1vw] font-extrabold">
                Get In Touch
              </span>
            </div>
            <div className="w-2/3  text-[1vw]">
              607 Richmond St, London ON N6A 3G3
            </div>
            <div>{/* instagram icon here */}</div>
          </div>
        </div>
      </section>
      <section className="flex justify-between px-[7.2rem] py-2 text-sm text-white bg-191919">
        <div>Website proudly create by Jinu & Sungmin</div>
        <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
      </section>
    </footer>
  );
}

export default Footer;
