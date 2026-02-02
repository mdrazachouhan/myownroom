import { motion } from "framer-motion";
import { useParams, useLocation, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Users,
  Check,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getPropertyBySlug } from "@/services/api";
import { Property } from "@/types/property";

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const category = location.pathname.split("/")[1] as
    | "pg"
    | "hostel"
    | "dormitory";

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
console.log(property);
  useEffect(() => {
    if (!slug) return;

    getPropertyBySlug(slug, category)
      .then(setProperty)
      .finally(() => setLoading(false));
  }, [slug, category]);

  if (loading) {
    return <div className="pt-40 text-center">Loading...</div>;
  }

  if (!property) {
    return <div className="pt-40 text-center">Property Not Found</div>;
  }

  const handleBookNow = () => {
    const msg = `Hi, I'm interested in ${property.title}`;
    window.open(
      `https://wa.me/918305898305?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to={`/${category}`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* IMAGE */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <img
                src={property.image}
                alt={property.title}
                className="rounded-2xl w-full"
              />
            </motion.div>

            {/* DETAILS */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-4xl font-bold mb-4">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <MapPin className="text-primary" />
                {property.location}, {property.city}
              </div>

              <div className="text-4xl font-bold text-primary mb-6">
                ₹{property.price}
              </div>

              <div className="flex gap-6 mb-6">
                <span className="flex gap-1 items-center">
                  <Bed /> {property.beds}
                </span>
                <span className="flex gap-1 items-center">
                  <Bath /> {property.baths}
                </span>
                <span className="flex gap-1 items-center">
                  <Users /> {property.capacity}
                </span>
              </div>
<p className="mb-6 text-muted-foreground">
  {property.description.replace(/<[^>]+>/g, '')}
</p>
               

              <div className="grid grid-cols-2 gap-3 mb-8">
                {property.amenities.map((a) => (
                  <span key={a} className="flex gap-2 items-center">
                    <Check className="text-primary" />
                    {a}
                  </span>
                ))}
              </div>

              <Button size="lg" className="w-full" onClick={handleBookNow}>
                <MessageCircle className="mr-2" />
                Book via WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
