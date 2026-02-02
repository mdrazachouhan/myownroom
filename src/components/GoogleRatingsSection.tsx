import { motion } from "framer-motion";
import { Star } from "lucide-react";

const GoogleRatingsSection = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      review: "Excellent PG accommodation! Clean rooms, great food, and very cooperative staff. Highly recommended for students.",
      date: "2 weeks ago",
      avatar: "RS"
    },
    {
      name: "Priya Patel",
      rating: 5,
      review: "Best hostel I've stayed in. The facilities are top-notch and the location is perfect for my workplace.",
      date: "1 month ago",
      avatar: "PP"
    },
    {
      name: "Amit Kumar",
      rating: 4,
      review: "Good value for money. The rooms are spacious and well-maintained. WiFi could be faster though.",
      date: "3 weeks ago",
      avatar: "AK"
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      review: "Amazing experience! The staff is very helpful and the food quality is excellent. Feels like home.",
      date: "1 week ago",
      avatar: "SR"
    },
    {
      name: "Vikram Singh",
      rating: 5,
      review: "Professional management and clean environment. Security is great and the community is very friendly.",
      date: "2 months ago",
      avatar: "VS"
    }
  ];

  const averageRating = 4.8;
  const totalReviews = 1247;

  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      
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
            Customer Reviews
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our Residents Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Trusted by thousands of happy residents across India
          </p>

          {/* Google Rating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-card rounded-2xl px-6 py-4 shadow-lg border border-border/50"
          >
            <div className="flex items-center gap-2">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-6 object-contain"
              />
              <span className="text-muted-foreground font-medium">Reviews</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">{averageRating}</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.floor(averageRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : star - 0.5 <= averageRating
                          ? "fill-yellow-400/50 text-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{totalReviews.toLocaleString()} reviews</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-card rounded-2xl p-6 h-full card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 relative"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10 text-6xl font-serif leading-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                  <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-muted-foreground/50">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all reviews on Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleRatingsSection;
