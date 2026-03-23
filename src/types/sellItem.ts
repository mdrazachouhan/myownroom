export interface SellItem {
  id: string;
  slug: string;
  title: string;
  category: "flats" | "bikes" | "cars" | "furniture" | "other";
  price: number;
  city: string;
  location: string;
  image: string;
  images?: string[];

  description: string;
  postedDate: string;
}
