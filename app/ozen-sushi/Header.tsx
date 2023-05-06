import React, { useState } from "react";
import Link from "next/link";
import BtnX from "../../public/svgs/btnX";
import { usePathname } from "next/navigation";
import { OrangeBgBtn } from "../components/button";
import { aboutUs, home, menu, ozen_sushi_home } from "../utils/routes";
import { OzenSushiHorizontalLogo } from "../../public/svgs/ozen-sushi-horizontal";
import { MenuItem } from "app/utils/types";

function OzenSushiHeader() {
  const pathname = usePathname();
  const [navHidden, setNavHidden] = useState(false);
  const toggleNav = () => {
    setNavHidden(!navHidden);
  };
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
      {/* Desktop */}
      <div className="sticky top-0 z-20 flex justify-between items-center px-[7.2rem] py-[1.78vw] mlg:px-[4rem] bg-white">
        <div>
          <Link href={home}>
            <OzenSushiHorizontalLogo />
          </Link>
        </div>
        <div className="flex">
          <nav className="flex gap-16 items-center relative right-20 text-[1.14vw] lg:gap-5 lg:right-5">
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
            <OrangeBgBtn width="10.71vw" height="3.14vw">
              Online Order
            </OrangeBgBtn>
          </nav>
        </div>
      </div>
    </>
  );
}

export default OzenSushiHeader;
