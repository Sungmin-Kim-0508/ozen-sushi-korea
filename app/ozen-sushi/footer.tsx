import React from "react";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col">
      <section className="flex">
        <div className="grow text-white bg-black">
          <span>Location</span>
          <div>
            <span>
              607 Richmond St, London <br /> ON N6A 3G3
            </span>
          </div>
        </div>
        <div className="grow bg-white text-black">
          <span>Hours</span>
          <div className="flex flex-col">
            <span>Mon to Fri 11am - 9pm</span>
            <span>Saturday 11am - 10pm</span>
            <span>Sunday 11am - 10pm</span>
          </div>
        </div>
      </section>
      <section className="flex">
        <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
        <div>Created by Jinu</div>
      </section>
    </footer>
  );
}

export default Footer;
