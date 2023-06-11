import React, { useState } from "react";
import Link from "next/link";
import { RedBgBtn } from "app/components/button";
import {
  aboutUs,
  ozen_korea_home,
  menu,
  ozen_sushi_home,
} from "app/utils/routes";
import { MenuItem } from "app/utils/types";
import { OzenKoreaLogoSmall } from "public/svgs/ozen-korea-small";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

function OzenKoreaHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: ozen_korea_home,
    },
    {
      label: "About Us",
      href: ozen_korea_home + aboutUs,
    },
    {
      label: "Menu",
      href: ozen_korea_home + menu,
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
              className={`text-191919 hover:text-CF382D ${
                pathname === href ? "text-CF382D" : ""
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
      <header className="sticky top-0 z-20 flex justify-between items-center px-[8.21vw] py-[1.78vw] md:px-[max(24px,6.4vw)] bg-191919">
        <div className="md:flex items-center gap-x-[clamp(10px,2vw,15px)]">
          <button
            className="hidden md:block md:w-[clamp(15px,2.93vw,20px)] md:h-[clamp(15px,3.46vw,22px)]"
            onClick={toggleNavbar}
          >
            <GiHamburgerMenu className="w-full h-full text-white" />
          </button>
          <Link href={ozen_korea_home} className="md:hidden">
            <OzenKoreaLogoSmall className="w-[max(183px,12.14vw)]" />
          </Link>
        </div>
        <Link
          href={ozen_korea_home}
          className="hidden md:block md:relative left-6"
        >
          <OzenKoreaLogoSmall className="w-[max(91px,24.26vw)]" />
        </Link>
        <nav className="flex gap-[4.28vw] items-center text-[clamp(19px,1.14vw,25px)]">
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-white hover:text-CF382D ${
                pathname === href ? "text-CF382D" : ""
              } md:hidden`}
            >
              {label}
            </Link>
          ))}
          <RedBgBtn
            width="clamp(100px,14.28vw,170px)"
            height="clamp(30px,3.92vw,50px)"
            className="md:rounded-xl md:bg-191919 md:text-white md:border-white"
          >
            Online Order
          </RedBgBtn>
        </nav>
      </header>
    );
  }
}

export default OzenKoreaHeader;
