import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between bg-FAFAFA text-959595 px-12">
      <div>Welcome to Ozensushi.ca</div>
      <div className="flex gap-[0.625rem]">
        <Link href="ozen-sushi">Ozen Sushi</Link>
        <span>|</span>
        <Link href="ozen-korea">Ozen Korea</Link>
      </div>
    </div>
  );
}

export default Header;
