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
    className="h-12 text-center p-0 rounded-full mx-[5rem] bg-EC6236 text-white"
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
    className="w-64 h-12 text-center p-0 rounded-full mx-[5rem] border-2 border-EC6236 text-EC6236"
  >
    {children}
  </button>
);
