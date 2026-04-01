import { motion } from "framer-motion";
import { Users, Heart, Star } from "lucide-react";

const AboutSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          Bhagath Singh Youth Association is a dedicated group of young individuals committed to community service,
          cultural celebrations, and keeping the spirit of unity alive. From grand Ganesh Chaturthi celebrations
          to annadanam for the needy, we serve with heart and pride.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[
          { icon: Users, label: "Active Members", value: "50+" },
          { icon: Heart, label: "Years of Service", value: "10+" },
          { icon: Star, label: "Events Per Year", value: "15+" },
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
