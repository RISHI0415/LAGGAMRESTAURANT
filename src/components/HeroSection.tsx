import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-youth.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Bhagath Singh Youth Association - Ganesh Utsav" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-navy/70" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center px-6 max-w-3xl"
    >
      <img src={logo} alt="BSYA Logo" width={120} height={120} className="mx-auto mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
        Bhagath Singh Youth Association
      </h1>
      <p className="text-xl md:text-2xl text-saffron font-semibold mb-4">🙏 Ganesh Utsav Committee</p>
      <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
        Celebrating Ganesh Chaturthi with grand Aagman, Annadanam, cultural programs & Nimarjanam every year.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="hero" size="lg">
          <a href="#celebrations">Our Celebrations</a>
        </Button>
        <Button variant="heroOutline" size="lg">
          <a href="#members">Meet the Team</a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
