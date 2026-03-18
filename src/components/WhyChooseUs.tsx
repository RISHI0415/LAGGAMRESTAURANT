import { motion } from "framer-motion";
import { Utensils, Leaf, IndianRupee, Sparkles, Heart } from "lucide-react";

const points = [
  { icon: Utensils, title: "Exceptional Taste", desc: "Every dish bursts with authentic flavor" },
  { icon: Leaf, title: "Unique Ambiance", desc: "A space that feels warm and inviting" },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium dining without the premium price" },
  { icon: Sparkles, title: "Clean & Comfortable", desc: "Spotless environment, every single time" },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction is our top priority" },
];

const WhyChooseUs = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Why People Love Laggam
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <p.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-bold mb-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
