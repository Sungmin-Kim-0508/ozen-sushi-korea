import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { OrangeBgAnchor } from "../components/button";
import {
  aboutUs,
  menu,
  ozen_korea_home,
  ozen_sushi_home,
} from "../utils/routes";
import { OzenSushiHorizontalLogo } from "../../public/svgs/ozen-sushi-horizontal";
import { MenuItem } from "app/utils/types";

function OzenSushiHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: ozen_sushi_home,
    },
    {
      label: "About Us",
      href: ozen_sushi_home + aboutUs,
    },
    {
      label: "Menu",
      href: ozen_sushi_home + menu,
    },
    {
      label: "Ozen Korea",
      href: ozen_korea_home,
    },
  ];

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (isNavOpen) {
    return (
      <header
        className={`fixed top-0 left-0 bg-white w-full h-screen z-30 animate-flip-down animate-duration-[800ms]`}
      >
        <nav
          className="flex flex-col gap-y-[max(40px,10.66vw)] items-center
                     pt-[max(80px,21.33vw)] px-[max(120px,32vw)]
                     text-[max(20px,5.33vw)]"
        >
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`hover:text-EC6236 ${
                pathname === href ? "text-EC6236" : ""
              } ${label === "Ozen Korea" ? "block" : ""}`}
              onClick={() => setIsNavOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button
            className="absolute bottom-[max(72px,19.2vw)]"
            onClick={toggleNavbar}
          >
            <RxCross2 className="text-959595" />
          </button>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="sticky top-0 z-20 flex justify-between items-center pl-[8.21vw] pr-[8.1vw] py-[1.78vw] bg-white border-b-2 border-b-EDEDED animate-flip-up">
        <div className="md:flex items-center gap-x-[clamp(10px,2vw,15px)]">
          <button
            className="hidden md:block md:w-[clamp(11px,2.93vw,20px)] md:h-[clamp(13px,3.46vw,22px)]"
            onClick={toggleNavbar}
          >
            <GiHamburgerMenu className="w-full h-full" />
          </button>
          <Link
            href={ozen_sushi_home}
            className="w-[clamp(220px,17.8vw,500px)] h-[clamp(60.3px,8.9vh,100px)] md:w-[clamp(129.54px,34.54vw,260px)] md:h-[clamp(20px,5.21vh,70px)]"
          >
            <OzenSushiHorizontalLogo className="w-full h-full" />
          </Link>
        </div>
        <div>
          <nav className="flex gap-12 items-center relative text-[clamp(16px,1.14vw,18px)]">
            {menuItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`hover:text-EC6236 ${
                  pathname === href ? "text-EC6236" : ""
                } ${label === "Ozen Korea" ? "hidden" : ""} md:hidden`}
              >
                {label}
              </Link>
            ))}
            <OrangeBgAnchor
              href="https://order.online/business/~154476/"
              className="w-[clamp(140px,10.71vw,165px)] h-[clamp(40px,3.92vw,48px)] md:w-[clamp(100px,26.66vw,160px)] md:h-[clamp(30px,8vw,45px)] md:text-[clamp(10px,2.66vw,15px)]"
            >
              Online Order
            </OrangeBgAnchor>
          </nav>
        </div>
      </header>
    );
  }
}

export default OzenSushiHeader;
