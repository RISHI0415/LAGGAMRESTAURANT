import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="py-24 px-6 bg-saffron text-white">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">🙏 Ganpati Bappa Morya!</h2>
      <p className="text-lg text-white/80 mb-10">
        Join us this Ganesh Chaturthi! Be a part of the celebrations, volunteer for Annadanam,
        and experience the divine energy of our community.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="bg-navy text-white hover:bg-navy/90 rounded-full px-8 font-semibold" asChild>
          <a href="#location">Get in Touch</a>
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
          <a href="#celebrations">View Celebrations</a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default FinalCTA;
