"use client";

import React from "react";
import OzenKoreaHeader from "./Header";
function OzenKoreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-black text-white">
      <OzenKoreaHeader />
      {children}
    </main>
  );
}
export default OzenKoreaLayout;
