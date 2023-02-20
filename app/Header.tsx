"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  const isOzenPage = pathName?.includes("ozen-");
  const isOzenSushiPage = pathName?.includes("-sushi");
  const isOzenKoreaPage = pathName?.includes("-korea");

  const bgColour = isOzenKoreaPage ? "bg-black" : "bg-FAFAFA";
  return (
    <header
      className={`flex justify-around items-center py-2 ${bgColour} text-959595`}
    >
      <div></div>
      <div className="ml-56">
        {isOzenPage
          ? "Why don't you try different flavour?"
          : "Welcome to Ozensushi.ca"}
      </div>
      <div className="flex gap-[0.625rem]">
        <Link
          href="ozen-sushi"
          className={`hover:text-EC6236 ${
            isOzenSushiPage ? "text-EC6236" : ""
          }`}
        >
          Ozen Sushi
        </Link>
        <span>|</span>
        <Link
          href="ozen-korea"
          className={`hover:text-EC6236 ${
            isOzenKoreaPage ? "text-EC6236" : ""
          }`}
        >
          Ozen Korea
        </Link>
      </div>
    </header>
  );
}

export default Header;
