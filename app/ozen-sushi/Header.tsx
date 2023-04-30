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
      <div className="sticky top-0 z-20 flex h-24 max-h-24 justify-around items-center bg-white">
        <nav className="flex gap-10">
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
        </nav>
        <div>
          <Link href={home}>
            <OzenSushiHorizontalLogo />
          </Link>
        </div>
        <div>
          <OrangeBgBtn width="8.75rem" height="2.56rem">
            Online Order
          </OrangeBgBtn>
        </div>
      </div>
    </>
  );
}

export default OzenSushiHeader;
