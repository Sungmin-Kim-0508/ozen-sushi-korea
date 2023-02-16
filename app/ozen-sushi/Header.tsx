import Link from "next/link";
import React, { useState } from "react";
import BtnX from "../../public/svgs/btnX";

function OzenSushiHeader() {
  const [navHidden, setNavHidden] = useState(false);
  const toggleNav = () => {
    setNavHidden(!navHidden);
  };
  return (
    <div className={`fixed inset-0 ${navHidden ? "hidden" : "flex"}`}>
      <div
        className={`fixed inset-0 ${
          navHidden ? "" : "bg-black bg-opacity-50"
        } opacity-100`}
      ></div>
      <div className="bg-white relative flex w-full max-w-[18rem] flex-1 flex-col translate-x-0">
        <nav className="h-full max-h-full relative top-32 left-16">
          <ul className="flex flex-col gap-y-20 text-2xl">
            <Link href="/ozen-sushi">Home</Link>
            <Link href="/ozen-sushi/about-us">About Us</Link>
            <Link href="/ozen-sushi/menu">Menu</Link>
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
  );
}

export default OzenSushiHeader;
