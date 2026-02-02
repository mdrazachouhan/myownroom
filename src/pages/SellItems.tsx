import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Filter, Package } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { getSellItems } from "@/services/api";
import { SellItem } from "@/types/sellItem";

const SellItems = () => {
  const [items, setItems] = useState<SellItem[]>([]);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    getSellItems().then(setItems);
  }, []);

  const filtered =
    filter === "all"
      ? items
      : items.filter(i => i.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-6 border-b sticky top-16 bg-background z-40">
          <div className="container flex gap-2 overflow-x-auto">
            <Filter className="mt-2" />
            {["all","flats","bikes","cars","furniture","other"].map(c => (
              <Button
                key={c}
                size="sm"
                variant={filter === c ? "default" : "outline"}
                onClick={() => setFilter(c)}
              >
                {c}
              </Button>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  onClick={() => navigate(`/other/${item.slug}`)}
                  className="cursor-pointer overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <img src={item.image} className="w-full h-full object-cover"/>
                    <Badge className="absolute top-3 left-3">
                      {item.category}
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-primary font-bold">
                      ₹{item.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.location}, {item.city}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.postedDate}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-10">
              <Package className="mx-auto w-10 h-10 opacity-40" />
              No items found
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SellItems;
