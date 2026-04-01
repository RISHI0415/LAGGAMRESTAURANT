import { motion } from "framer-motion";


const years = [
  { year: "2018", highlight: "Association Founded" },
  { year: "2019", highlight: "First Grand Ganesh Chaturthi" },
  { year: "2020", highlight: "Community Support During COVID" },
  { year: "2021", highlight: "Expanded Annadanam Program" },
  { year: "2022", highlight: "50+ Active Members Milestone" },
  { year: "2023", highlight: "Biggest Celebration Yet" },
  { year: "2024", highlight: "Cultural Programs & Youth Rally" },
  { year: "2025", highlight: "Continuing the Legacy" },
];

const YearlyTimeline = () => (
  <section className="py-24 px-6 bg-navy text-white">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Our Journey — Each Year
      </motion.h2>
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron/30" />
        {years.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative flex items-center mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-16 md:pl-0`}>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="text-saffron font-bold text-lg">{item.year}</div>
                <div className="text-white/80 mt-1">{item.highlight}</div>
              </div>
            </div>
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-saffron rounded-full border-2 border-navy z-10" />
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default YearlyTimeline;
