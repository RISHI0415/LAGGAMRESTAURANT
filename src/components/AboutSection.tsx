import { motion } from "framer-motion";
import { Users, Heart, Star, Calendar } from "lucide-react";

const AboutSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Bhagath Singh Youth Association is a passionate group of young devotees who organize grand
          Ganesh Chaturthi celebrations every year. From the joyful Aagman procession to the devotional
          Nimarjanam, we bring the community together through faith, seva, and festivity. Our Annadanam
          serves thousands of devotees with love during the festival.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { icon: Users, label: "Youth Members", value: "50+" },
          { icon: Calendar, label: "Years of Celebrations", value: "10+" },
          { icon: Heart, label: "Annadanam Meals Served", value: "5000+" },
          { icon: Star, label: "Days of Festival", value: "9" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-muted rounded-2xl p-6"
          >
            <stat.icon className="w-8 h-8 text-saffron mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
