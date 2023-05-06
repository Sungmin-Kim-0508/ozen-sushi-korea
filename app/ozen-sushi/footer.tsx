import React from "react";
import { OzenSushiLogoHorizontalWhite } from "public/svgs/ozen-sushi_horizontal-white";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  const fullYear = new Date().getFullYear();

  const titleInfoTextSize = "text-[clamp(11px,1.1vw,25px)]";
  const infoTextSize = "text-[clamp(10px,1vw,20px)]";
  return (
    <footer className="flex flex-col">
      <section className="flex justify-between pl-[7.2rem] mlg:pl-[3.5rem] text-white bg-191919">
        <div className="pt-[3.75rem] mlg:pt-[3rem] relative left-3">
          <OzenSushiLogoHorizontalWhite />
        </div>
        <div className="flex gap-x-10 pr-[2rem] py-[3.75rem]">
          <div className="w-auto">
            <div className="mb-3">
              <span
                className={`text-EC6236 ${titleInfoTextSize} font-extrabold`}
              >
                Hours
              </span>
            </div>
            <div className="flex gap-x-8">
              <div className={`flex flex-col gap-y-2 ${infoTextSize}`}>
                <span>Mon to Fri</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className={`flex flex-col gap-y-2 ${infoTextSize}`}>
                <span>11am - 9pm</span>
                <span>11am - 10pm</span>
                <span>11am - 10pm</span>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="mb-3">
              <span
                className={`text-EC6236 ${titleInfoTextSize} font-extrabold`}
              >
                Get In Touch
              </span>
            </div>
            <div className={`w-2/3 ${infoTextSize} mb-5`}>
              607 Richmond St, London ON N6A 3G3
            </div>
            <div>
              <AiOutlineInstagram size="clamp(14px,1.14vw,20px)" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between px-[7.2rem] py-2 text-sm text-white bg-191919 mlg:px-[4.8rem] border-t border-595959">
        <div>Website proudly create by Jinu & Sungmin</div>
        <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
      </section>
    </footer>
  );
}

export default Footer;
