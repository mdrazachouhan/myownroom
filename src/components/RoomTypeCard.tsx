import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Property } from "@/types/property";
import { Bed, Bath, Users, MapPin } from "lucide-react";

interface RoomTypeCardProps {
  property: Property;
  path: string;
  index: number;
}

const RoomTypeCard = ({ property, path, index }: RoomTypeCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        onClick={() => navigate(path)}
        className="overflow-hidden cursor-pointer group h-full"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            {property.type}
          </div>

          <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            ₹{property.price}
          </div>
        </div>

        {/* CONTENT */}
        <CardContent className="p-5">
          {/* TITLE */}
          <h3 className="text-xl font-semibold mb-2">
            {property.title}
          </h3>

          {/* LOCATION */}
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            {property.location}
          </div>

          {/* ICON INFO */}
          <div className="flex gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Bed className="w-4 h-4" /> {property.beds}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-4 h-4" /> {property.baths}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {property.capacity}
            </span>
          </div>

          {/* AMENITIES */}
          <div className="flex flex-wrap gap-2 mb-4 text-xs">
            {property.amenities?.slice(0, 4).map((a, i) => (
              <span
                key={i}
                className="bg-gray-200 px-2 py-1 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>

          <button className="w-full border border-orange-500 text-orange-500 py-2 rounded hover:bg-orange-50">
            View Details
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RoomTypeCard;
