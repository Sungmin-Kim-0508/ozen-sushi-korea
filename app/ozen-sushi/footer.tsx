import React from "react";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col">
      <section className="flex">
        <div className="grow px-64 py-24 text-white bg-191919">
          <div className="mb-3">
            <span className="text-3xl monserratBold900">Location</span>
          </div>
          <div>
            <span className="text-base">
              607 Richmond St, London <br /> ON N6A 3G3
            </span>
          </div>
        </div>
        <div className="grow px-64 py-24 bg-F1F1F1 text-191bg-191919">
          <div className="mb-3">
            <span className="text-3xl monserratBold900">Hours</span>
          </div>
          <div className="flex gap-x-12 text-base">
            <div className="flex flex-col">
              <span>Mon to Fri</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>
            <div className="flex flex-col">
              <span>11am - 9pm</span>
              <span>11am - 10pm</span>
              <span>11am - 10pm</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between px-28 py-2 text-959595 bg-191919">
        <div>&copy; {fullYear} Ozensushi. All rights reserved</div>
        <div>Created by Jinu</div>
      </section>
    </footer>
  );
}

export default Footer;
