import { RedBgBtc } from "app/components/button";
import { aboutUs, ozen_korea_home, menu } from "app/utils/routes";
import { MenuItem } from "app/utils/types";
import Link from "next/link";
import React from "react";

function OzenKoreaHeader() {
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
    <header className="flex justify-around items-center py-5">
      <nav>
        <ul className="flex gap-x-4">
          {menuItems.map(({ label, href }) => (
            <li>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>Image</div>
      <div>
        <RedBgBtc width="8.75rem" height="2.5rem">
          Order Online
        </RedBgBtc>
      </div>
    </header>
  );
}

export default OzenKoreaHeader;
