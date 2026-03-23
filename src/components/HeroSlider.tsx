import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    if (!slides || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);

  }, [slides]);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].hero_image}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">

        <div className="container mx-auto px-6">

          <div className="max-w-3xl text-white">

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >

                <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm mb-6">
                  {slides[current].badge}
                </span>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                  {slides[current].title}

                  <span className="block text-primary mt-2">
                    {slides[current].highlight}
                  </span>
                </h1>

                <p className="text-lg text-white/80 mb-8 max-w-xl">
                  {slides[current].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <Link
                    to={slides[current].primary_button?.link}
                    className="bg-primary px-8 py-3 rounded-xl flex items-center gap-2 w-fit"
                  >
                    {slides[current].primary_button?.text}
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    to={slides[current].secondary_button?.link}
                    className="border border-white px-8 py-3 rounded-xl hover:bg-white/10"
                  >
                    {slides[current].secondary_button?.text}
                  </Link>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* Navigation Arrows */}

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur rounded-full items-center justify-center text-white hover:bg-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur rounded-full items-center justify-center text-white hover:bg-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {slides.map((_, i) => (

          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all ${
              i === current
                ? "w-10 h-3 bg-primary rounded-full"
                : "w-3 h-3 bg-white/50 rounded-full"
            }`}
          />

        ))}

      </div>

      {/* Progress Bar */}

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">

        <motion.div
          key={current}
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