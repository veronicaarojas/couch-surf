import { Loyalty } from "./enums";
import { Price, Country } from "./aliases";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
}

export interface Property {
  image : string;
  title : string;
  price : Price;
  location : {
  firstLine : string;
  city : string;
  postcode: string | string;
  country: Country;
}
contact: [number, string]; 
isAvailiable: boolean;
}