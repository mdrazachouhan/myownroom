import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomTypeCard from "@/components/RoomTypeCard"; // your custom card
import { Button } from "@/components/ui/button";
import { getPGProperties } from "@/services/api";
import { Property } from "@/types/property";


const typeLabels: Record<string, string> = {
  single: "Single Room",
  double: "Double Sharing",
  triple: "Triple Sharing",
  quad: "Dormitory",
};

const typeDescriptions: Record<string, string> = {
  single: "Private rooms with all modern amenities.",
  double: "Comfortable shared rooms for two occupants.",
  triple: "Affordable rooms for students and working professionals.",
  quad: "Budget dormitory accommodation.",
};

const PGRoomType = () => {
  const { type = "single" } = useParams<{ type: string }>();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPGProperties(type)
      .then((props) => {
        // Ensure each property has a slug
        const propsWithSlug = props.map((p) => ({
          ...p,
          slug: p.slug || p.name.toLowerCase().replace(/\s+/g, "-"),
        }));
        setProperties(propsWithSlug);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [type]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading properties...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 hero-bg">
        <div className="container mx-auto px-4">
          <Link to="/pg">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to PG Options
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {typeLabels[type]} <span className="text-gradient">PG</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {typeDescriptions[type]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROPERTY LIST */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-xl mb-8">
            {properties.length} Properties Available
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <RoomTypeCard
                key={property.id}
                property={property}
                index={index}
                path={`/pg/${type}/${property.slug}`} // slug URL
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGRoomType;
