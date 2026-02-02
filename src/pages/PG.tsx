import { motion } from "framer-motion";
import { User, Users, Users2 } from "lucide-react";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PGTypeCard from "@/components/PGTypeCard";
import { getPGTypes } from "@/services/api";
import { RoomType } from "@/types/roomType";

const iconMap: any = {
  User,
  Users,
  Users2,
};

const PG = () => {
  const [roomTypes, setRoomTypes] = useState<RoomType[]>([]);

  useEffect(() => {
    getPGTypes().then(setRoomTypes);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 text-center">
        <motion.h1 className="text-5xl font-bold">
          PG <span className="text-gradient">Accommodation</span>
        </motion.h1>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {roomTypes.map((t, i) => (
            <PGTypeCard
              key={t.id}
              title={t.title}
              description={t.description}
              image={t.image}
              icon={iconMap[t.icon]}
              path={`/pg/${t.slug}`}
              index={i}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PG;
