import React from "react";

type BtnProps = {
  children: React.ReactNode;
  // 'rem' only
  width: string;
  height: string;
  className?: string;
};

export const OrangeBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className={`text-center rounded-[1.42vw] bg-gradient-to-r from-EC6236 to-F49172 border border-EC6236 text-white text-[clamp(12px,1.14vw,22px)] hover:text-EC6236 hover:from-white hover:to-white duration-1000 ${
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
    className={`text-center rounded-full border-2 border-EC6236 text-EC6236 text-[clamp(12px,1.14vw,22px)] hover:duration-500 hover:text-white hover:bg-EC6236 ${
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
    className={`text-center rounded-[1.42vw] bg-CF382D border border-CF382D text-[clamp(12px,1.14vw,22px)] text-white hover:duration-500 hover:bg-black hover:border-CF382D hover:text-CF382D ${
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
    className={`text-center rounded-[1.42vw] bg-black border border-white text-white text-[clamp(12px,1.14vw,22px)] hover:duration-500 hover:bg-white hover:border-white hover:text-black ${
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
    className={`text-center rounded-[1.42vw] bg-gradient-to-r from-103DC6 to-395AC1 border border-4358DC text-white text-[clamp(12px,1.14vw,22px)] hover:bg-white hover:border-4358DC hover:text-4358DC hover:from-white hover:to-white duration-1000 ${
      className ? className : ""
    }`}
  >
    {children}
  </button>
);
