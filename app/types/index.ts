import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
}

export interface CustomFilterProprs {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
}
