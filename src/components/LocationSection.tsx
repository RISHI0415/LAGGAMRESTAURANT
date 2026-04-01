import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => (
  <section id="location" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Our Location
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-saffron mt-1 shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Address</h3>
              <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-saffron mt-1 shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Contact</h3>
              <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Get Directions</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+91XXXXXXXXXX">Call Now</a>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-muted aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIxJzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="BSYA Location"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
