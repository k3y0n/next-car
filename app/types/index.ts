import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CustomFilterProprs {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer?: (setManufacturer: string) => void;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface Car {
  transmission: string;
  class: string;
  drive: string;
  fuel_type: string;
  make: string;
  model: string;
  city_mpg: number;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  highway_mpg: number;
  year: number;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
