import { motion } from "framer-motion";
import { UtensilsCrossed, Coffee, Salad, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Salad, title: "Starters", desc: "Fresh, flavorful appetizers to kick off your meal" },
  { icon: UtensilsCrossed, title: "Main Course", desc: "Hearty dishes crafted with love and premium ingredients" },
  { icon: Coffee, title: "Snacks", desc: "Light bites perfect for any time of the day" },
  { icon: Wine, title: "Beverages", desc: "Refreshing drinks to complement every dish" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 px-6 bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Deliciously Crafted for Every Craving</h2>
        <p className="text-muted-foreground text-lg">From starters to beverages, every item is a flavor journey</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <cat.icon className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
            <p className="text-muted-foreground text-sm">{cat.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Button variant="gold" size="lg">Explore Full Menu</Button>
      </div>
    </div>
  </section>
);

export default MenuSection;
