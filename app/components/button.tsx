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
    className={`text-center p-0 rounded-[1.25rem] bg-gradient-to-r from-EC6236 to-F49172 border border-EC6236 text-white hover:text-EC6236 hover:from-white hover:to-white duration-1000 ${className}`}
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
    className={`text-center p-0 rounded-full border-2 border-EC6236 text-EC6236 hover:duration-500 hover:text-white hover:bg-EC6236 ${className}`}
  >
    {children}
  </button>
);

export const RedBgBtc: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className={`text-center p-0 rounded-full bg-CF382D border-2 border-CF382D text-white hover:duration-500 hover:bg-22346b hover:border-22346b ${className}`}
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
    className={`text-center p-0 rounded-full bg-black border-2 border-white text-white hover:duration-500 hover:bg-22346b hover:border-22346b ${className}`}
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
    className={`text-center p-0 rounded-[1.25rem] bg-gradient-to-r from-103DC6 to-395AC1 border border-4358DC text-white hover:bg-white hover:border-4358DC hover:text-4358DC hover:from-white hover:to-white duration-1000 ${className}`}
  >
    {children}
  </button>
);
