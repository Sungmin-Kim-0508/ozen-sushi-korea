import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type BtnProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
};

type AnchorProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
};

const buttonFontSize =
  "text-[min(16px,1.14vw)] md:text-[clamp(12px,3.2vw,18px)]";
const borderRounded = "rounded-[clamp(15px,1.42vw,20px)]";

export const OrangeBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
  onClick,
}) => {
  const c = twMerge(
    `text-center bg-gradient-to-r from-EC6236 to-F49172 text-white ${borderRounded} ${buttonFontSize} hover:text-EC6236 md:rounded-[14px] hover:from-white hover:to-white hover:border hover:border-EC6236 duration-1000`,
    className
  );
  return (
    <button
      type="button"
      style={{ width, height }}
      className={c}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const OrangeBgAnchor: React.FC<AnchorProps> = ({
  children,
  className,
  href,
  onClick,
}) => {
  const c = twMerge(
    `flex justify-center items-center bg-gradient-to-r from-EC6236 to-F49172 text-white ${borderRounded} ${buttonFontSize} hover:text-EC6236 md:rounded-[14px] hover:from-white hover:to-white hover:border hover:border-EC6236 duration-1000`,
    className
  );
  return (
    <Link className={c} href={href} onClick={onClick}>
      {children}
    </Link>
  );
};

export const OrangeBgAndHoverTransparentBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
  onClick,
}) => {
  const c = twMerge(
    `text-center bg-gradient-to-r from-EC6236 to-F49172 text-white ${borderRounded} ${buttonFontSize} hover:text-EC6236 md:rounded-[14px] hover:from-transparent hover:to-transparent hover:border hover:border-EC6236 duration-1000`,
    className
  );
  return (
    <button
      type="button"
      style={{ width, height }}
      className={c}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const OrangeBorderBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
  onClick,
}) => {
  const c = twMerge(
    `text-center ${borderRounded} border-2 border-EC6236 text-EC6236 ${buttonFontSize} hover:duration-500 hover:text-white hover:bg-EC6236`,
    className
  );
  return (
    <button
      type="button"
      style={{ width, height }}
      className={c}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const RedBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
  onClick,
}) => {
  const c = twMerge(
    `text-center ${borderRounded} bg-CF382D border border-CF382D ${buttonFontSize} text-white hover:duration-500 hover:bg-white hover:border-CF382D hover:text-CF382D`,
    className
  );
  return (
    <button
      type="button"
      style={{ width, height }}
      className={c}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const RedBgAnchor: React.FC<AnchorProps> = ({
  children,
  href,
  className,
  onClick,
}) => {
  const c = twMerge(
    `flex justify-center items-center ${borderRounded} bg-CF382D border border-CF382D ${buttonFontSize} text-white hover:duration-500 hover:bg-white hover:border-CF382D hover:text-CF382D`,
    className
  );
  return (
    <Link href={href} className={c} onClick={onClick}>
      {children}
    </Link>
  );
};

export const RedBgAndHoverTransparentBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
  onClick,
}) => {
  const c = twMerge(
    `text-center ${borderRounded} bg-CF382D border border-CF382D ${buttonFontSize} text-white hover:duration-500 hover:bg-transparent hover:border-CF382D hover:text-CF382D`,
    className
  );
  return (
    <button
      type="button"
      style={{ width, height }}
      className={c}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BlackBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
  onClick,
}) => {
  const c = twMerge(
    `text-center ${borderRounded} bg-191919 border border-white text-white ${buttonFontSize} hover:duration-500 hover:bg-white hover:border-white hover:text-191919`,
    className
  );
  return (
    <button
      type="button"
      style={{ width, height }}
      className={c}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BlackBgAnchor: React.FC<AnchorProps> = ({
  children,
  className,
  href,
  onClick,
}) => {
  const c = twMerge(
    `flex justify-center items-center text-center ${borderRounded} bg-191919 border border-white text-white ${buttonFontSize} hover:duration-500 hover:bg-white hover:border-white hover:text-191919`,
    className
  );
  return (
    <Link href={href} className={c} onClick={onClick}>
      {children}
    </Link>
  );
};

export const BlueBgBtn: React.FC<BtnProps> = ({
  children,
  width,
  height,
  className,
  onClick,
}) => {
  const c = twMerge(
    `text-center ${borderRounded} bg-gradient-to-r from-103DC6 to-395AC1 border border-4358DC text-white ${buttonFontSize} md:rounded-[14px] hover:bg-white hover:border-173591 hover:text-173591 hover:from-white hover:to-white duration-1000`,
    className
  );
  return (
    <button
      type="button"
      style={{ width, height }}
      className={c}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
