import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, IndianRupee, Sofa, Wifi, ShieldCheck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const whyChooseUs = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "Every property is personally inspected and verified for quality & safety."
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Pay only for what you get."
  },
  {
    icon: Sofa,
    title: "Fully Furnished Rooms",
    description: "Move-in ready rooms with beds, wardrobes, study tables & more."
  },
  {
    icon: Wifi,
    title: "WiFi, Parking & Power Backup",
    description: "High-speed internet, secure parking, and 24/7 power backup included."
  },
  {
    icon: ShieldCheck,
    title: "Safe for Students & Professionals",
    description: "CCTV surveillance, security guards, and strict visitor policies."
  }
];

const WhyChooseSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-muted/30 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full"
          >
            Why Us
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose StayNest?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We go above and beyond to ensure your stay is comfortable, safe, and memorable.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <div className="group bg-card rounded-2xl p-8 h-full card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 text-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <h4 className="font-display font-bold text-foreground mb-3 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {whyChooseUs.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-8 h-2 bg-primary rounded-full"
                    : "w-2 h-2 bg-primary/30 rounded-full hover:bg-primary/50"
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSlider;