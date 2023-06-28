import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { BlackBgBtc, RedBgBtn } from "app/components/button";
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
  const onlineOrderBtnStyle =
    "w-[clamp(140px,10.71vw,165px)] h-[clamp(40px,3.92vw,48px)] md:w-[clamp(100px,26.66vw,160px)] md:h-[clamp(30px,8vw,45px)] md:text-[clamp(10px,2.66vw,15px)]";

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
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
    {
      label: "Ozen Sushi",
      href: ozen_sushi_home,
    },
  ];

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (isNavOpen) {
    return (
      <header
        className={`fixed top-0 left-0 w-full h-screen z-30 animate-flip-down animate-duration-[800ms] bg-191919`}
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
              className={`text-white hover:text-CF382D ${
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
        <nav className="flex gap-[4.28vw] items-center text-[clamp(16px,1.14vw,18px)]">
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-white hover:text-CF382D ${
                pathname === href ? "text-CF382D" : ""
              } ${label === "Ozen Sushi" ? "hidden" : ""} md:hidden`}
            >
              {label}
            </Link>
          ))}
          {isMobile ? (
            <BlackBgBtc className={onlineOrderBtnStyle}>
              Online Order
            </BlackBgBtc>
          ) : (
            <RedBgBtn className={onlineOrderBtnStyle}>Online Order</RedBgBtn>
          )}
        </nav>
      </header>
    );
  }
}

export default OzenKoreaHeader;
