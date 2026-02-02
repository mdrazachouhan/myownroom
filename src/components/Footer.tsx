import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Star } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Trust Banner */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-primary-foreground text-center">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">Trusted by students and professionals across the city</span>
            <Star className="w-5 h-5 fill-current hidden md:block" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/">
              <img src={logoDark} alt="My Own Room" className="h-12 mb-4" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Find your perfect stay with us. Quality PGs, hostels, and co-living spaces 
              at affordable prices with all modern amenities.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-5 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/pg" className="hover:text-primary transition-colors">PG Accommodation</Link></li>
              <li><Link to="/hostel" className="hover:text-primary transition-colors">Hostel Stays</Link></li>
              <li><span className="hover:text-primary transition-colors cursor-default">Tiffin Service</span></li>
              <li><span className="hover:text-primary transition-colors cursor-default">Laundry Service</span></li>
            </ul>
          </motion.div>


          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-5 text-lg">Policies</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policies</Link></li>
              <li><Link to="/copyright" className="hover:text-primary transition-colors">Copyright Policies</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Behind Ram Mandir, Shanti Nagar, Raipur, Chhattisgarh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+918305898305" className="text-background hover:text-primary transition-colors font-medium">
                  +91 83058 98305
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+916232710385" className="text-background hover:text-primary transition-colors font-medium">
                  +91 62327 10385
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:myownroomservices@gmail.com" className="text-background/80 hover:text-primary transition-colors">
                  myownroomservices@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>Copyright © {currentYear}. Designed by <span className="text-primary font-medium">Nimble Technology</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
