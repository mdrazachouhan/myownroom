import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, Bed, Bath, Wifi, Car, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  priceUnit: string;
  image: string;
  beds: number;
  baths: number;
  amenities: string[];
  type: "single" | "double" | "triple" | "hostel" | "coliving";
  capacity: number;
  description: string;
  features: string[];
  contact: string;
}

interface PropertyCardProps {
  property: Property;
  index: number;
  basePath: string;
}

const PropertyCard = ({ property, index, basePath }: PropertyCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        variant="property"
        onClick={() => navigate(`${basePath}/${property.id}`)}
        className="overflow-hidden group"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </div>
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-semibold">
            ₹{property.price.toLocaleString()}/{property.priceUnit}
          </div>
        </div>
        
        <CardContent className="p-5">
          <h3 className="font-display text-xl font-semibold mb-2 line-clamp-1">
            {property.name}
          </h3>
          
          <div className="flex items-center gap-1 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm line-clamp-1">{property.location}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.beds} Bed{property.beds > 1 ? "s" : ""}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.baths} Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{property.capacity}</span>
            </div>
          </div>
          
          <div className="flex gap-2 mb-4">
            {property.amenities.slice(0, 3).map((amenity, i) => (
              <span
                key={i}
                className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
              >
                {amenity}
              </span>
            ))}
          </div>
          
          <Button variant="outline" className="w-full" size="sm">
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
