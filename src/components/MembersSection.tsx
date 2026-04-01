import { motion } from "framer-motion";
import { User } from "lucide-react";

const members = [
  { name: "Member 1", role: "President" },
  { name: "Member 2", role: "Vice President" },
  { name: "Member 3", role: "Secretary" },
  { name: "Member 4", role: "Treasurer" },
  { name: "Member 5", role: "Event Coordinator" },
  { name: "Member 6", role: "Volunteer Lead" },
  { name: "Member 7", role: "Youth Leader" },
  { name: "Member 8", role: "Media Head" },
];

const MembersSection = () => (
  <section id="members" className="py-24 px-6 bg-muted">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Youth Members
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-saffron" />
            </div>
            <h3 className="font-bold text-foreground">{member.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MembersSection;
