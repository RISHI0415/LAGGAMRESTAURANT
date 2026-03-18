import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="py-24 px-6 dark-section bg-primary text-primary-foreground">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Hungry Yet?</h2>
      <p className="text-lg text-primary-foreground/70 mb-10">
        Come experience food that delights your taste buds and ambiance that lifts your mood.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="hero" size="lg" asChild>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Visit Now</a>
        </Button>
        <Button variant="heroOutline" size="lg" className="text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10" asChild>
          <a href="tel:+91XXXXXXXXXX">Contact Us</a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default FinalCTA;
