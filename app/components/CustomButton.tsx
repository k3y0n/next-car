"use client";
import Image from "next/image";
import { CustomButtonProps } from "../types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className="cutom-btn"
      onClick={handleClick}
    >
      <span className={`flex-1 ${containerStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
