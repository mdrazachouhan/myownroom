import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoomTypeCard from "@/components/RoomTypeCard";
import { getHostelProperties } from "@/services/api";
import { Property } from "@/types/property";

const Hostel = () => {
  const [hostels, setHostels] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHostelProperties()
      .then(setHostels)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="pt-40 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 hero-bg">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gradient">Hostels</span> for Travelers
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Affordable stays with vibrant social spaces and modern amenities.
          </p>
        </div>
      </section>

      {/* LIST */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">
            {hostels.length} Hostels Available
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostels.map((h, i) => (
              <RoomTypeCard
                key={h.id}
                property={h}
                index={i}
                path={`/hostel/${h.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hostel;
