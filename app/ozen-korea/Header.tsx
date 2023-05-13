import React from "react";
import Link from "next/link";
import { RedBgBtn } from "app/components/button";
import { aboutUs, ozen_korea_home, menu } from "app/utils/routes";
import { MenuItem } from "app/utils/types";
import { OzenKoreaLogoSmall } from "public/svgs/ozen-korea-small";
import { usePathname } from "next/navigation";

function OzenKoreaHeader() {
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
  return (
    <header className="sticky top-0 z-20 flex justify-between items-center px-[8.21vw] py-[1.78vw] bg-black">
      <Link href={ozen_korea_home}>
        <OzenKoreaLogoSmall />
      </Link>
      <nav className="flex gap-[4.28vw] items-center text-[clamp(13px,1.14vw,25px)]">
        {menuItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`hover:text-CF382D ${
              pathname === href ? "text-CF382D" : ""
            }`}
          >
            {label}
          </Link>
        ))}
        <RedBgBtn width="10.71vw" height="3.14vw">
          Online Order
        </RedBgBtn>
      </nav>
    </header>
  );
}

export default OzenKoreaHeader;
