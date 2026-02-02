export interface RoomType {
  id: string;          // unique id from DB
  title: string;       // Single Room, Double Sharing etc
  description: string; // short description
  icon: "User" | "Users" | "Users2"; // lucide icon name
  image: string;       // image URL
  slug: string;        // single | double | triple (URL ke liye)
}
