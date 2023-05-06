"use client";

import React from "react";
import Footer from "./footer";
import OzenKoreaHeader from "./Header";
function OzenKoreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-white">
      <OzenKoreaHeader />
      {children}
      <Footer />
    </main>
  );
}
export default OzenKoreaLayout;
