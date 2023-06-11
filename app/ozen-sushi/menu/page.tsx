"use client";

import React from "react";
import Image from "next/image";
import page1 from "public/images/ozen-sushi/ozen_sushi_menu/page1.jpg";
import page2 from "public/images/ozen-sushi/ozen_sushi_menu/page2.jpg";
import page3 from "public/images/ozen-sushi/ozen_sushi_menu/page3.jpg";
import page4 from "public/images/ozen-sushi/ozen_sushi_menu/page4.jpg";
import page5 from "public/images/ozen-sushi/ozen_sushi_menu/page5.jpg";
import page6 from "public/images/ozen-sushi/ozen_sushi_menu/page6.jpg";
import page7 from "public/images/ozen-sushi/ozen_sushi_menu/page7.jpg";

function pages() {
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
    {
      src: page6,
      alt: "page6",
    },
    {
      src: page7,
      alt: "page7",
    },
  ];
  return (
    <main className="flex flex-col justify-center items-center gap-y-5">
      {images.map((img) => (
        <Image key={img.alt} src={img.src} alt={img.alt} />
      ))}
    </main>
  );
}

export default pages;
