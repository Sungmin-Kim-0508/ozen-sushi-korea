import React from "react";

type BtnProps = {
  children: React.ReactNode;
  // 'rem' only
  width: string;
  height: string;
};

export const OrangeBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className="text-center p-0 rounded-full bg-EC6236 border-2 border-EC6236 text-white hover:duration-500 hover:text-EC6236 hover:bg-white"
  >
    {children}
  </button>
);

export const OrangeBorderBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
}) => (
  <button
    type="button"
    style={{ width, height }}
    className="text-center p-0 rounded-full border-2 border-EC6236 text-EC6236 hover:duration-500 hover:text-white hover:bg-EC6236"
  >
    {children}
  </button>
);

export const RedBgBtc: React.FC<BtnProps> = ({ children, width, height }) => (
  <button
    type="button"
    style={{ width, height }}
    className="text-center p-0 rounded-full bg-CF382D border-2 border-CF382D text-white hover:duration-500 hover:bg-22346b hover:border-22346b"
  >
    {children}
  </button>
);

export const BlackBgBtc: React.FC<BtnProps> = ({ children, width, height }) => (
  <button
    type="button"
    style={{ width, height }}
    className="text-center p-0 rounded-full bg-black border-2 border-white text-white hover:duration-500 hover:bg-22346b hover:border-22346b"
  >
    {children}
  </button>
);
