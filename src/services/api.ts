import { HeroData } from "@/types/hero";
import { Property } from "@/types/property";
import { RoomType } from "@/types/roomType";
import { SellItem } from "@/types/sellItem";


// /* Base URL from .env */
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// /* Home Hero API */
// export const getHeroData = async (): Promise<HeroData> => {
//   const res = await fetch(`${API_BASE_URL}/home_hero.php`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch hero data");
//   }

//   return res.json();
// };

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handle = async <T>(res: Response): Promise<T> => {
  if (!res.ok) throw new Error("API Error");
  return res.json();
};

/* Parse images — handles JSON string, array, or fallback to [image] */
const parseImages = (images: unknown, fallbackImage?: string): string[] => {
  if (Array.isArray(images)) return images;
  if (typeof images === "string") {
    try {
      const parsed = JSON.parse(images);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // not valid JSON, treat as single url
      return [images];
    }
  }
  return fallbackImage ? [fallbackImage] : [];
};

/* HERO SLIDER API */
export const getHeroData = async (): Promise<HeroData[]> =>
  handle(await fetch(`${API_BASE_URL}/home_hero.php`));

/* PG */
export const getPGTypes = async (): Promise<RoomType[]> => {
  const res = await fetch(`${API_BASE_URL}/pg/room-types.php`);

  if (!res.ok) {
    throw new Error("Failed to load PG types");
  }

  const data = await res.json();

  console.log("API RAW PG TYPES:", data); // 👈 MUST SHOW ARRAY

  return data;
};
/* PG Properties */
export const getPGProperties = async (type: string): Promise<Property[]> => {
  const res = await fetch(
    `${API_BASE_URL}/pg/properties.php?type=${type}`
  );
  return res.json();
};
 /* ✅ PROPERTY DETAIL BY SLUG */
export const getPropertyBySlug = async (
  slug: string,
  category: "pg" | "hostel" | "dormitory"
): Promise<Property | null> => {
  const res = await fetch(
    `${API_BASE_URL}/${category}/property-detail.php?slug=${slug}`
  );

  if (!res.ok) return null;

  const data = await res.json();
  if (!data) return null;

  // 🔥 API → INTERFACE MAPPING
  return {
    id: String(data.id),
    title: data.title,
    slug: data.slug,

    price: Number(data.price),
    location: data.location,
    city: data.city,

    image: data.image,
    images: parseImages(data.images, data.image),
    description: data.description,

    type: data.type,

    beds: Number(data.beds),
    baths: Number(data.baths),
    capacity: Number(data.capacity),

    amenities: data.features ?? [],
  };
};
/* HOSTEL PROPERTIES */
export const getHostelProperties = async () => {
  return handle(
    await fetch(`${API_BASE_URL}/hostel/properties.php`)
  );
};

/* HOSTEL DETAIL */
export const getHostelBySlug = async (slug: string) => {
  return handle(
    await fetch(
      `${API_BASE_URL}/hostel/property-detail.php?slug=${slug}`
    )
  );
};
/* DORMITORY */
export const getDormitoryProperties = async (): Promise<Property[]> => {
  const res = await fetch(`${API_BASE_URL}/dormitory/properties.php`);
  if (!res.ok) throw new Error("Failed to load dormitories");
  return res.json();
};

export const getDormitoryPropertyDetails = async (slug: string) => {
  const res = await fetch(
    `${API_BASE_URL}/dormitory/property-detail.php?slug=${slug}`
  );
  if (!res.ok) throw new Error("Failed to load dormitory details");
  return res.json();
};

/* SELL ITEMS */
export const getSellItems = async (): Promise<SellItem[]> =>
  handle(await fetch(`${API_BASE_URL}/sell/items.php`));

/* SELL ITEM DETAIL */
export const getSellItemBySlug = async (
  slug: string
): Promise<SellItem | null> => {
  const res = await fetch(
    `${API_BASE_URL}/sell/item-detail.php?slug=${slug}`
  );

  if (!res.ok) return null;
  const data = await res.json();
  if (!data) return null;

  return {
    ...data,
    id: String(data.id),
    price: Number(data.price),
    images: parseImages(data.images, data.image),

  };
};