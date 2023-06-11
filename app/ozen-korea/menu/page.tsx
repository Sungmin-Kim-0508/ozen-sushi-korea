"use client";

import React from "react";
import Image from "next/image";
import page1 from "public/images/ozen-korea/ozen_korea_menu/page1.jpg";
import page2 from "public/images/ozen-korea/ozen_korea_menu/page2.jpg";
import page3 from "public/images/ozen-korea/ozen_korea_menu/page3.jpg";
import page4 from "public/images/ozen-korea/ozen_korea_menu/page4.jpg";
import page5 from "public/images/ozen-korea/ozen_korea_menu/page5.jpg";

function OzenKoreaMenu() {
  const images = [
    {
      src: page1,
      alt: "page1",
    },
    {
      src: page2,
      alt: "page2",
    },
    {
      src: page3,
      alt: "page3",
    },
    {
      src: page4,
      alt: "page4",
    },
    {
      src: page5,
      alt: "page5",
    },
  ];
  return (
    <main className="flex flex-col justify-center items-center gap-y-5">
      {images.map((img) => (
        <Image key={img.alt} src={img.src} alt={img.alt} width={791} />
      ))}
    </main>
  );
}

export default OzenKoreaMenu;
