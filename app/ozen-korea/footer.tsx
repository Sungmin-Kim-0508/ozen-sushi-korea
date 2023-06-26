import React from "react";
import { OzenKoreaLogo } from "public/svgs/ozen-korea-logo";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  const fullYear = new Date().getFullYear();

  const titleInfoTextSize =
    "text-[clamp(11px,1.1vw,25px)] md:text-[max(12px,3.2vw)]";
  const infoTextSize = "text-[clamp(10px,1vw,20px)] md:text-[max(12px,3.2vw)]";
  return (
    <footer className="flex flex-col">
      <section
        className="flex justify-between pl-[8.21vw] pr-[3vw] text-white bg-191919
                   md:flex-col md:items-center md:pl-0 md:pb-[max(41px,10.93vw)]"
      >
        <div className="pt-[clamp(40px,4.28vw,60px)] md:mb-[max(30px,8vw)]">
          <OzenKoreaLogo className="block w-[clamp(260px,19.28vw,270px)] md:hidden" />
          <OzenKoreaLogo className="hidden md:block w-[max(154px,41vw)] h-[max(63.47px,16.92vw)]" />
        </div>
        <div className="flex gap-x-10 pr-[2rem] py-[3.75rem] md:flex-col md:p-0">
          <div className="w-auto md:flex md:flex-col md:items-center">
            <div className="mb-3">
              <span
                className={`text text-CF382D ${titleInfoTextSize} font-extrabold `}
              >
                Hours
              </span>
            </div>
            <div className="flex gap-x-8 md:text-191919 md:mb-[max(40px,10.66vw)]">
              <div
                className={`flex flex-col gap-y-2 ${infoTextSize} md:justify-center text-white`}
              >
                <span>Mon to Fri</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div
                className={`flex flex-col gap-y-2 ${infoTextSize} text-white`}
              >
                <span>11:30am - 10:00pm</span>
                <span>11:30am - 10:00pm</span>
                <span>11:30am - 09:30pm</span>
              </div>
            </div>
          </div>
          <div className="w-auto md:flex md:flex-col md:items-center">
            <div className="mb-3">
              <span
                className={`text-CF382D ${titleInfoTextSize} font-extrabold md:hidden`}
              >
                Get In Touch
              </span>
              <span
                className={`hidden text-CF382D ${titleInfoTextSize} font-extrabold md:block`}
              >
                Location
              </span>
            </div>
            <div
              className={`w-2/3 ${infoTextSize} mb-5 md:text-white md:text-center`}
            >
              541 Oxford St W, London, ON N6H 4L1
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
        <div>&copy; {fullYear} Ozenkorea. All rights reserved</div>
      </section>
    </footer>
  );
}

export default Footer;
