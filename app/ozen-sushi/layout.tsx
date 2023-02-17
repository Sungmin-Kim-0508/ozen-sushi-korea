"use client";

import Link from "next/link";
import OzenSushiHeader from "./Header";
import { home } from "../utils/routes";
import Footer from "./footer";

function OzenSushiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OzenSushiHeader />
      {children}
      <Footer />
    </>
  );
}

export default OzenSushiLayout;
