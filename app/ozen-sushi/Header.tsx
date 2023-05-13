import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { OrangeBgBtn } from "../components/button";
import { aboutUs, menu, ozen_sushi_home } from "../utils/routes";
import { OzenSushiHorizontalLogo } from "../../public/svgs/ozen-sushi-horizontal";
import { MenuItem } from "app/utils/types";

function OzenSushiHeader() {
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
  ];
  return (
    <>
      <header className="sticky top-0 z-20 flex justify-between items-center pl-[8.21vw] pr-[8.1vw] py-[1.78vw] bg-white">
        <div className="md:flex items-center gap-x-[clamp(10px,2vw,15px)]">
          <button className="hidden md:block md:w-[clamp(11px,2.93vw,20px)] md:h-[clamp(13px,3.46vw,22px)]">
            <GiHamburgerMenu className="w-full h-full" />
          </button>
          <Link
            href={ozen_sushi_home}
            className="w-[clamp(220px,17.8vw,500px)] h-[clamp(60.3px,8.9vh,100px)] md:w-[clamp(129.54px,34.54vw,260px)] md:h-[clamp(20px,5.21vh,70px)]"
          >
            <OzenSushiHorizontalLogo />
          </Link>
        </div>
        <div>
          <nav className="flex gap-16 items-center relative text-[clamp(13px,1.14vw,25px)] lg:gap-5">
            {menuItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`hover:text-EC6236 ${
                  pathname === href ? "text-EC6236" : ""
                } md:hidden`}
              >
                {label}
              </Link>
            ))}
            <OrangeBgBtn
              width="clamp(100px,14.28vw,170px)"
              height="clamp(30px,3.92vw,50px)"
              className="md:rounded-xl"
            >
              Online Order
            </OrangeBgBtn>
          </nav>
        </div>
      </header>
    </>
  );
}

export default OzenSushiHeader;
