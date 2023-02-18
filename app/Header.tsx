"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  const isOzenPage = pathName?.includes("ozen-sushi");
  return (
    <header className="flex justify-between bg-FAFAFA text-959595 px-12">
      <div className="">
        {isOzenPage
          ? "Why don't you try different flavour?"
          : "Welcome to Ozensushi.ca"}
      </div>
      <div className="flex gap-[0.625rem]">
        <Link href="ozen-sushi">Ozen Sushi</Link>
        <span>|</span>
        <Link href="ozen-korea">Ozen Korea</Link>
      </div>
    </header>
  );
}

export default Header;
