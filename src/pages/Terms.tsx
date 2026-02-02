import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
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
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Please read these terms and conditions carefully before using our services.
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using My Own Room services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by these terms, please do not 
                  use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Accommodation Services</h2>
                <p>
                  My Own Room provides PG accommodation, hostel stays, and related services. All bookings are 
                  subject to availability and confirmation. We reserve the right to modify or discontinue any 
                  service without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
                <p>
                  All payments must be made as per the agreed schedule. Late payments may attract additional 
                  charges. Security deposits are refundable subject to terms and conditions at the time of check-out.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Guest Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain cleanliness and hygiene in the premises</li>
                  <li>Follow all house rules and regulations</li>
                  <li>Respect other residents and staff</li>
                  <li>Report any damages or issues immediately</li>
                  <li>Not engage in any illegal activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cancellation Policy</h2>
                <p>
                  Cancellations must be made at least 7 days prior to the check-in date for a full refund. 
                  Cancellations made within 7 days may be subject to charges. No-shows will be charged the 
                  full amount.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  My Own Room shall not be liable for any loss, damage, or injury to persons or property 
                  during the stay, except in cases of proven negligence on our part.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifications</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
                <p>
                  For any questions regarding these terms, please contact us at myownroomservices@gmail.com 
                  or call +91 83058 98305.
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

export default Terms;