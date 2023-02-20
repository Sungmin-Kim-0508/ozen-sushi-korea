"use client";

import OzenSushiHeader from "./Header";
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
