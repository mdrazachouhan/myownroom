import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  MessageCircle,
  Building,
  Bike,
  Car,
  Sofa,
  Package,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSellItemBySlug } from "@/services/api";

/* ================= ICON MAP ================= */

const categoryIcons = {
  flats: Building,
  bikes: Bike,
  cars: Car,
  furniture: Sofa,
  other: Package,
};

/* ✅ COMMON WHATSAPP NUMBER */
const WHATSAPP_NUMBER = "918305898305";

const ItemDetail = () => {
  const { slug } = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    getSellItemBySlug(slug)
      .then((data) => setItem(data))
      .finally(() => setLoading(false));
  }, [slug]);

  // const formatPrice = (price: number) => {
  //   if (price >= 100000) {
  //     return `₹${(price / 100000).toFixed(1)} Lakh`;
  //   }
  //   return `₹${price.toLocaleString()}`;
  // };
const formatPrice = (price: number) => {
  return `₹${price.toLocaleString("en-IN")}`;
};
  /* ================= WHATSAPP HANDLER ================= */

  const handleWhatsApp = () => {
    if (!item) return;

    const message = `Hello, I am interested in this item:

*${item.title}*
💰 Price: ${formatPrice(item.price)}
📍 Location: ${item.location}, ${item.city}

Please share more details.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  /* ================= STATES ================= */

  if (loading) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Item Not Found</h2>
      </div>
    );
  }

  const CategoryIcon = categoryIcons[item.category];

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/other">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* IMAGE CAROUSEL */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="relative rounded-xl overflow-hidden group">
                {item.images && item.images.length > 0 ? (
                  <Carousel 
                    className="w-full"
                    plugins={[Autoplay({ delay: 3000 })]}
                    opts={{ loop: true }}
                  >
                    <CarouselContent>
                      {item.images.map((img: string, index: number) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <img
                              src={img}
                              alt={`${item.title} - ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {item.images.length > 1 && (
                      <>
                        <CarouselPrevious className="hidden md:flex left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CarouselNext className="hidden md:flex right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CarouselDots />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <Badge className="absolute top-4 left-4 z-10 flex items-center gap-1 capitalize shadow-lg">
                  <CategoryIcon className="w-4 h-4" />
                  {item.category}
                </Badge>
              </div>
            </motion.div>

            {/* DETAILS */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-3xl font-bold mb-4">{item.title}</h1>

              <div className="flex gap-6 text-muted-foreground mb-6 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {item.location}, {item.city}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.postedDate}
                </span>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl mb-6">
                <div className="text-4xl font-bold text-primary">
                  {formatPrice(item.price)}
                </div>
              </div>

              <p className="text-muted-foreground mb-8">
  {item.description.replace(/<[^>]+>/g, '')}
</p>

              {/* ✅ WHATSAPP BUTTON */}
              <Button size="xl" className="w-full" onClick={handleWhatsApp}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact via WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ItemDetail;
