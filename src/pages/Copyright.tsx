import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

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
              Copyright <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Information about our intellectual property rights and usage guidelines.
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Copyright Notice</h2>
                <p>
                  © {currentYear} My Own Room. All rights reserved. All content, including but not limited to 
                  text, graphics, logos, images, and software, is the property of My Own Room and is protected 
                  by Indian and international copyright laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Permitted Use</h2>
                <p>You may:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>View and browse our website for personal, non-commercial use</li>
                  <li>Print pages for personal reference only</li>
                  <li>Share links to our website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Prohibited Use</h2>
                <p>Without our prior written consent, you may not:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Reproduce, duplicate, or copy any content from this website</li>
                  <li>Redistribute content for commercial purposes</li>
                  <li>Modify or alter any content</li>
                  <li>Use our branding, logos, or trademarks</li>
                  <li>Frame or embed our website on other sites</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Trademarks</h2>
                <p>
                  "My Own Room" and our logo are trademarks of My Own Room. Other trademarks, product names, 
                  and company names mentioned on our website are the property of their respective owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. User-Generated Content</h2>
                <p>
                  If you submit any content to our platform (reviews, photos, etc.), you grant us a 
                  non-exclusive, royalty-free license to use, reproduce, and display such content in 
                  connection with our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Copyright Infringement</h2>
                <p>
                  If you believe that any content on our website infringes your copyright, please contact 
                  us with the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Description of the copyrighted work</li>
                  <li>Location of the infringing content on our website</li>
                  <li>Your contact information</li>
                  <li>A statement of good faith belief</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the 
                  content or copyright practices of these external sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                <p>
                  For any copyright-related inquiries or to request permission to use our content, 
                  please contact us at myownroomservices@gmail.com or call +91 83058 98305.
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

export default Copyright;