"use client";

import Link from "next/link";

function OzenKoreaHome() {
  return (
    <div>
      <p>오젠 코리아 홈페이지가 되는 곳</p>
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home으로 돌아가기
      </Link>
    </div>
  );
}

export default OzenKoreaHome;
