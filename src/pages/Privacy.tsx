import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Name, email address, and phone number</li>
                  <li>Address and identification documents</li>
                  <li>Payment information</li>
                  <li>Booking preferences and history</li>
                  <li>Communications with our team</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Process bookings and payments</li>
                  <li>Communicate with you about our services</li>
                  <li>Send promotional offers and updates (with your consent)</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as required by law or to provide our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies</h2>
                <p>
                  Our website may use cookies to enhance your browsing experience. You can choose to disable 
                  cookies through your browser settings, though this may affect some functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at 
                  myownroomservices@gmail.com or call +91 83058 98305.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
