import React from "react";
import { Building, Users, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
export const StatsSection = () => {
  const stats = [
    { icon: Users, value: "5,000+", label: "Happy Residents" },
    { icon: MapPin, value: "50+", label: "Locations" },
    { icon: Star, value: "4.8", label: "Average Rating" },
    { icon: Building, value: "200+", label: "Properties" },
  ];
  return (
    <>
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-primary-foreground"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-display font-bold mb-1">
                  <AnimatedCounter value={stat.value} duration={2} />
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
