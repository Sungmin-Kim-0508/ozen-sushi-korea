"use client";

import Link from "next/link";
import OzenSushiHeader from "./Header";
import { home } from "../utils/routes";

function OzenSushiHome() {
  return (
    <div>
      <OzenSushiHeader />
      <Link href={home} className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home으로 돌아가기
      </Link>
    </div>
  );
}

export default OzenSushiHome;
