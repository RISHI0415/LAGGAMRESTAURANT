import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "Good food taste and super ambiance ❤️", author: "Priya S." },
  { text: "Food is perfect and ambiance also good", author: "Rahul K." },
  { text: "Unique ambiance, unique taste", author: "Ananya M." },
  { text: "Best place for a casual date night!", author: "Vikram R." },
];

const ReviewsSection = () => (
  <section className="py-24 px-6 bg-muted/50">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        What Our Customers Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-8 shadow-sm"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-lg mb-4 italic">"{r.text}"</p>
            <p className="text-sm text-muted-foreground font-medium">— {r.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
