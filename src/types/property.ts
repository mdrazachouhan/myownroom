export interface Property {
  id: string;

  title: string;        // name/title
  slug: string;         // ⭐ IMPORTANT

  price: number;
  location: string;
  city: string;

  image: string;
  description: string;

  type: "single" | "double" | "triple" | "quad";

  beds: number;         // ⭐ icon data
  baths: number;        // ⭐ icon data
  capacity: number;     // ⭐ icon data

  amenities: string[];
}
