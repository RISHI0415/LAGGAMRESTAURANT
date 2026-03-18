import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-primary/80" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center px-6 max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
        <Star className="w-4 h-4 text-gold fill-gold" />
        <span className="text-sm text-primary-foreground font-medium">Rated 5.0 by happy customers</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        Where Taste Meets<br />Ambience
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
        Experience delicious food in a space designed to make every moment special.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="hero" size="lg">
          <a href="#menu">View Menu</a>
        </Button>
        <Button variant="heroOutline" size="lg" className="text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Get Directions</a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
