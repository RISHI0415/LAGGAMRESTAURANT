import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">More Than Just a Meal</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Laggam Restaurant is a modern dining spot in Hyderabad offering a perfect blend of flavor, ambiance, and comfort.
          Whether you're catching up with friends or enjoying a relaxed meal with family, every visit is designed to feel special.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
