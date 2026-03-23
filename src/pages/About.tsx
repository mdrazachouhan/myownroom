import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your comfort and satisfaction are our top priorities. We go the extra mile to ensure a pleasant stay."
    },
    {
      icon: Target,
      title: "Quality Assured",
      description: "Every property is personally verified to meet our high standards of cleanliness and amenities."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a welcoming community where residents feel at home and make lasting connections."
    },
    {
      icon: Award,
      title: "Trust & Safety",
      description: "Your safety is paramount. All our properties have security measures and verified backgrounds."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Residents" },
    { number: "50+", label: "Verified Properties" },
    { number: "10+", label: "Cities Covered" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're on a mission to make finding your perfect accommodation 
              easy, transparent, and delightful. Your home away from home starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
               <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our journey began in 1947, when our family first stepped into the rental 
                  and accommodation business with a simple belief — providing safe, reliable, 
                  and comfortable living spaces for people. What started as a traditional, 
                  offline rental service gradually became a trusted name built on relationships, 
                  integrity, and long-term commitment.
                </p>
                <p>
                  In 2013, the second generation modernized the business by improving property 
                  standards, documentation, and customer experience, adapting to the changing 
                  needs of students, working professionals, and travelers. This phase marked 
                  a significant transformation, blending experience with structured operations.
                </p>
                <p>
                  Today, the third generation is taking this legacy forward by bringing the 
                  business online, making it more accessible, transparent, and efficient for 
                  the modern world. With the launch of our digital platform, we aim to simplify 
                  property discovery, verification, and enquiry — while preserving the trust 
                  we've earned over decades.
                </p>
                <p>
                  Every property listed with us is carefully managed with attention to quality, 
                  safety, and comfort. We believe in transparency — what you see is exactly 
                  what you get. Our long-standing experience, combined with modern technology, 
                  allows us to offer personalized service backed by generations of expertise.
                </p>
                <p className="font-medium text-foreground italic">
                  From offline roots to an online future, our mission remains the same: 
                  to help people find a place they can truly call home.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
                alt="Cozy living space"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-display font-bold">1947</div>
                <div className="text-sm opacity-90">Our Beginning</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
      

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at StayNest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 card-shadow border border-border/50 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
