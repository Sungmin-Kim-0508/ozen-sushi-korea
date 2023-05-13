import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <Link href={ozen_sushi_home}>
          <OzenSushiHorizontalLogo />
        </Link>
        <div>
          <nav className="flex gap-16 items-center relative text-[clamp(13px,1.14vw,25px)] lg:gap-5">
            {menuItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`hover:text-EC6236 ${
                  pathname === href ? "text-EC6236" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <OrangeBgBtn
              width="clamp(9.2px,14.28vw,170px)"
              height="clamp(10px,3.92vw,50px)"
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
