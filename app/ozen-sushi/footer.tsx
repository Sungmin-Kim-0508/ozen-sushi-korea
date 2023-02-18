import React from "react";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-around bg-black text-959595">
      <section className="flex">
        <div>Location</div>
        <div>Hours</div>
      </section>
      <section className="flex">
        <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
        <div>Created by Jinu</div>
      </section>
    </footer>
  );
}

export default Footer;
