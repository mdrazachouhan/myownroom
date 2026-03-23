import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building,
  Building2,
  Home,
  Utensils,
  Shirt,
  Phone,
  ArrowUp,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import WhyChooseSlider from "@/components/WhyChooseSlider";
import GoogleRatingsSection from "@/components/GoogleRatingsSection";
import { StatsSection } from "@/components/StatsSection";
import { getHeroData } from "@/services/api";
import { HeroData } from "@/types/hero";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
   /* hero slider data */
const [heroSlides, setHeroSlides] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /* hero slider API */
  useEffect(() => {
    loadHeroSlider();
  }, []);

  const loadHeroSlider = async () => {
    try {
      const data = await getHeroData();
        console.log("Hero API Data:", data);
      setHeroSlides(data);
    } catch (error) {
      console.error("Hero slider API error:", error);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const accommodationTypes = [
    {
      title: "PG Accommodation",
      description:
        "Fully furnished private & shared rooms with daily meals, housekeeping, and 24/7 security. Perfect for students and working professionals.",
      icon: Building,
      path: "/pg",
      gradient: "from-primary to-primary/80",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    },
    {
      title: "Hostels",
      description:
        "Budget-friendly stays with common areas, high-speed WiFi, and vibrant community living. Ideal for students and backpackers.",
      icon: Building2,
      path: "/hostel",
      gradient: "from-secondary to-secondary/80",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    },
    {
      title: "Co-living Spaces",
      description:
        "Shared bunk spaces with essential amenities at the most affordable prices. Great for short stays and group bookings.",
      icon: Home,
      path: "/pg/triple",
      gradient: "from-accent to-accent/80",
      image:
        "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=600&q=80",
    },
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: "Happy Residents" },
    { icon: MapPin, value: "50+", label: "Locations" },
    { icon: Star, value: "4.8", label: "Average Rating" },
    { icon: Building, value: "200+", label: "Properties" },
  ];

  const extraServices = [
    {
      icon: Utensils,
      title: "Tiffin Service",
      description:
        "Delicious home-cooked meals delivered to your doorstep daily. Choose from veg and non-veg options with flexible meal plans.",
      note: "Extra charges apply",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    },
    {
      icon: Shirt,
      title: "Laundry Service",
      description:
        "Professional washing, ironing, and dry cleaning services. Pickup and delivery at your convenience with same-day options.",
      note: "Extra charges apply",
      image:
        "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

       {/* Stats Section */}

      {/* Find Your Ideal Space Section */}
      <section className="py-20 md:py-28 bg-background relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full"
            >
              Our Offerings
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Find Your Ideal Space
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of accommodation options designed to
              suit every need and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {accommodationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link to={type.path} className="block h-full">
                  <motion.div
                    className="group bg-card rounded-2xl h-full card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 relative overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${type.gradient} opacity-40`}
                      />
                      <motion.div
                        className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <type.icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {type.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {type.description}
                      </p>

                      <span className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                        View Options{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* Why Choose StayNest Slider */}
      <WhyChooseSlider />
      {/* Stats Section */}
      <StatsSection />

      {/* Extra Services Section */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 bg-primary/10 px-4 py-1.5 rounded-full"
            >
              Add-On Services
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Extra Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Additional services to enhance your living experience
            </p>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium border border-accent/30"
            >
              Terms & Conditions Apply
            </motion.span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {extraServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="group bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 relative overflow-hidden h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Image - Smaller */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full text-xs font-semibold border border-border/50">
                      {service.note}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md"
                        whileHover={{ rotate: -5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Get Started Today
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-background mb-6">
                  Ready to Find Your Perfect Stay?
                </h2>
                <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-10">
                  Book comfortable and affordable stays in minutes. Join
                  thousands of happy residents today.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/pg">
                  <Button variant="hero" size="xl" className="group">
                    Start Exploring
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="heroOutline"
                    size="xl"
                    className="text-background border-background/30 hover:bg-background/10 hover:border-background/50 group"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Get in Touch
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Ratings Section */}
      <GoogleRatingsSection />

      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
