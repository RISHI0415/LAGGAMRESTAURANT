import { motion } from "framer-motion";
import aagmanImg from "@/assets/aagman.jpg";
import nimarjanamImg from "@/assets/nimarjanam.jpg";
import celebrationsImg from "@/assets/celebrations.jpg";
import annadanamImg from "@/assets/annadanam.jpg";

const events = [
  {
    title: "Aagman",
    desc: "The grand welcome procession of Lord Ganesh with music, dance, and devotion through the streets.",
    img: aagmanImg,
  },
  {
    title: "Celebrations",
    desc: "Cultural programs, stage performances, and community gatherings that bring everyone together.",
    img: celebrationsImg,
  },
  {
    title: "Annadanam",
    desc: "Free food distribution to the community — serving thousands with love and devotion every year.",
    img: annadanamImg,
  },
  {
    title: "Nimarjanam",
    desc: "The immersion ceremony — a beautiful farewell procession to the river with prayers and celebrations.",
    img: nimarjanamImg,
  },
];

const CelebrationsSection = () => (
  <section id="celebrations" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Our Celebrations
      </motion.h2>
      <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
        Every year we celebrate with full spirit — from Aagman to Nimarjanam
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={event.img}
                alt={event.title}
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
              <p className="text-muted-foreground">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CelebrationsSection;
