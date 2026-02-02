import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 2 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part and suffix (like +, K, etc.)
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericPart = match[1].replace(/,/g, "");
    const suffix = match[2] || "";
    const targetNumber = parseFloat(numericPart);
    const isDecimal = numericPart.includes(".");
    const hasCommas = match[1].includes(",");

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = targetNumber * easeOutQuart;

      let formattedValue: string;
      if (isDecimal) {
        formattedValue = currentValue.toFixed(1);
      } else {
        const rounded = Math.floor(currentValue);
        formattedValue = hasCommas ? rounded.toLocaleString() : rounded.toString();
      }

      setDisplayValue(formattedValue + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;
