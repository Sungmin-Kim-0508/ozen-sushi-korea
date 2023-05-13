import React from "react";

type BtnProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
};

const buttonFontSize = "text-[clamp(11px,1.14vw,22px)]";

export const OrangeBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className={`text-center rounded-[20px] bg-gradient-to-r from-EC6236 to-F49172 border border-EC6236 text-white ${buttonFontSize} hover:text-EC6236 md:rounded-[14px] hover:from-white hover:to-white duration-1000 ${
      className ? className : ""
    }`}
  >
    {children}
  </button>
);

export const OrangeBorderBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className={`text-center rounded-full border-2 border-EC6236 text-EC6236 ${buttonFontSize} hover:duration-500 hover:text-white hover:bg-EC6236 ${
      className ? className : ""
    }`}
  >
    {children}
  </button>
);

export const RedBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className={`text-center rounded-[20px] bg-CF382D border border-CF382D ${buttonFontSize} text-white hover:duration-500 hover:bg-black hover:border-CF382D hover:text-CF382D ${
      className ? className : ""
    }`}
  >
    {children}
  </button>
);

export const BlackBgBtc: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className={`text-center rounded-[20px] bg-black border border-white text-white ${buttonFontSize} hover:duration-500 hover:bg-white hover:border-white hover:text-black ${
      className ? className : ""
    }`}
  >
    {children}
  </button>
);

export const BlueBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className={`text-center rounded-[20px] bg-gradient-to-r from-103DC6 to-395AC1 border border-4358DC text-white ${buttonFontSize} md:rounded-[14px] hover:bg-white hover:border-4358DC hover:text-4358DC hover:from-white hover:to-white duration-1000 ${
      className ? className : ""
    }`}
  >
    {children}
  </button>
);
