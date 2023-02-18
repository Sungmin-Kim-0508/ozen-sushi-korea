import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BtnX from "../../public/svgs/btnX";
import { OrangeBgBtn } from "../components/button";
import { aboutUs, home, menu, ozen_sushi_home } from "../utils/routes";
import { OzenSushiHorizontalLogo } from "../../public/svgs/ozen-sushi-horizontal";

type MenuItem = {
  label: string;
  href: string;
};

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
      <div className="flex h-24 max-h-24 justify-around items-center">
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
      {/* Mobile */}
      <div
        className={`fixed inset-0 ${navHidden ? "hidden" : "flex"} md:hidden`}
      >
        <div
          className={`fixed inset-0 ${
            navHidden ? "" : "bg-black bg-opacity-50"
          } opacity-100`}
        ></div>
        <div className="bg-white relative flex w-full max-w-[18rem] flex-1 flex-col translate-x-0">
          <nav className="h-full max-h-full relative top-32 left-16">
            <ul className="flex flex-col gap-y-20 text-2xl">
              {menuItems.map(({ label, href }) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="absolute top-6 right-[6.5rem]">
          <button
            type="button"
            className="ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNav}
          >
            <BtnX />
          </button>
        </div>
      </div>
    </>
  );
}

export default OzenSushiHeader;
