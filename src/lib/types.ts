export interface Property {
  id: string;
  price: string;
  image: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "house" | "apartment";
  address: Address;
  tags?: Tag[];
  featured?: boolean;
  new?: boolean;
  inDemand?: boolean;
  description: string;
}

export type Tag = "pool" | "fireplace" | "garage" | "garden";

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  flavorText: string;
  image: string;
}
