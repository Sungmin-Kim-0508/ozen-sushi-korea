import React from "react";
import { OzenSushiLogoHorizontalWhite } from "public/svgs/ozen-sushi_horizontal-white";
import { AiOutlineInstagram } from "react-icons/ai";
import { OzenSushiHorizontalLogo } from "public/svgs/ozen-sushi-horizontal";

function Footer() {
  const fullYear = new Date().getFullYear();

  const titleInfoTextSize =
    "text-[clamp(11px,1.1vw,25px)] md:text-[max(12px,3.2vw)]";
  const infoTextSize = "text-[clamp(10px,1vw,20px)] md:text-[max(12px,3.2vw)]";
  return (
    <footer className="flex flex-col">
      <section
        className="flex justify-between pl-[8.21vw] pr-[3vw] text-white bg-191919
                   md:flex-col md:items-center md:pl-0 md:pb-[max(41px,10.93vw)] md:bg-F1F1F1"
      >
        <div className="pt-[clamp(40px,4.28vw,60px)] md:mb-[max(30px,8vw)]">
          <OzenSushiLogoHorizontalWhite className="md:hidden" />
          <OzenSushiHorizontalLogo className="hidden md:block w-[max(242px,64.54vw)] h-[clamp(60.3px,8.9vh,100px)]" />
        </div>
        <div className="flex gap-x-10 pr-[2rem] py-[3.75rem] md:flex-col md:p-0">
          <div className="w-auto md:flex md:flex-col md:items-center">
            <div className="mb-3">
              <span
                className={`text text-EC6236 ${titleInfoTextSize} font-extrabold `}
              >
                Hours
              </span>
            </div>
            <div className="flex gap-x-8 md:text-191919 md:mb-[max(40px,10.66vw)]">
              <div
                className={`flex flex-col gap-y-2 ${infoTextSize} md:justify-center`}
              >
                <span>Mon to Thur & Sunday</span>
                <span>Friday & Saturday</span>
              </div>
              <div className={`flex flex-col gap-y-2 ${infoTextSize}`}>
                <span>12am - 9pm</span>
                <span>12am - 9:30pm</span>
              </div>
            </div>
          </div>
          <div className="w-auto md:flex md:flex-col md:items-center">
            <div className="mb-3">
              <span
                className={`text-EC6236 ${titleInfoTextSize} font-extrabold md:hidden`}
              >
                Get In Touch
              </span>
              <span
                className={`hidden text-EC6236 ${titleInfoTextSize} font-extrabold md:block`}
              >
                Location
              </span>
            </div>
            <div
              className={`w-2/3 ${infoTextSize} mb-5 md:text-191919 md:text-center`}
            >
              607 Richmond St, London ON N6A 3G3
            </div>
            <div className="w-5 md:hidden">
              <a href="https://www.instagram.com/ozenlondon/">
                <AiOutlineInstagram size="clamp(14px,1.14vw,20px)" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between px-[7.2rem] py-2 text-sm text-white bg-191919 mlg:px-[4.8rem] border-t border-595959 md:hidden">
        <div>Website proudly create by Jinu & Sungmin</div>
        <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
      </section>
    </footer>
  );
}

export default Footer;
