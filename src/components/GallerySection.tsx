import { motion } from "framer-motion";

const GallerySection = () => (
  <section className="py-24 px-6 dark-section bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Feel the Vibe
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="aspect-square bg-muted-foreground/20 rounded-xl overflow-hidden hover:scale-[1.03] transition-transform"
          >
            <div className="w-full h-full bg-gradient-to-br from-gold/20 to-green/20 flex items-center justify-center text-primary-foreground/40 text-sm">
              Photo {i}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
