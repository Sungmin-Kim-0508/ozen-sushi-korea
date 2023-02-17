import React from "react";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex justify-around bg-black text-959595">
      <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
      <div>Created by Jinu</div>
    </footer>
  );
}

export default Footer;
