import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1920&q=80",
    title: "Find Your Perfect",
    highlight: "PG, Hostel & Co-Living",
    description: "Verified stays with modern amenities for students, professionals, and travelers.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=80",
    title: "Comfortable",
    highlight: "Living Spaces",
    description: "Modern amenities, prime locations, and a community that feels like family.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&q=80",
    title: "Premium",
    highlight: "Accommodation",
    description: "Affordable stays with world-class facilities. Connect with like-minded individuals.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
    title: "Your Home",
    highlight: "Away From Home",
    description: "Experience the warmth of home with all modern conveniences.",
  }
];

const HeroSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section className="relative min-h-screen overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-screen">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={slide.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6"
                          >
                                                        ✨ Welcome to My Own Room
                          </motion.span>
                          
                          <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-4"
                          >
                            {slide.title}
                            <span className="block text-primary mt-2">{slide.highlight}</span>
                          </motion.h1>
                          
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed max-w-xl"
                          >
                            {slide.description}
                          </motion.p>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                          >
                            <Link to="/pg">
                              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                                Explore Stays
                                <ArrowRight className="w-5 h-5 ml-2" />
                              </Button>
                            </Link>
                            <Link to="/contact">
                              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto text-background border-background/30 hover:bg-background/10 hover:border-background/50">
                                Contact Us
                              </Button>
                            </Link>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*       {/* Navigation Arrows - Hidden on mobile */}

      <button
        onClick={scrollPrev}
className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 items-center justify-center text-background hover:bg-background/20 transition-all duration-300 group"        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button
        onClick={scrollNext}
className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 items-center justify-center text-background hover:bg-background/20 transition-all duration-300 group"        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 ${
              selectedIndex === index
                ? "w-10 h-3 bg-primary rounded-full"
                : "w-3 h-3 bg-background/50 rounded-full hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20 z-20">
        <motion.div
          key={selectedIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-primary"
        />
      </div>
    </section>
  );
};

export default HeroSlider;