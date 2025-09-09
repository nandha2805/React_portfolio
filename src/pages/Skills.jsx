import React from "react";
import { SKILLS } from "../data/site";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold mb-10 text-center dark:text-white">
        Skills
      </h1>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.category}
            className="p-6 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white transition transform hover:shadow-2xl hover:scale-105 hover:border-indigo-500"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.08, boxShadow: "0px 8px 20px rgba(99,102,241,0.3)" }}
          >
            {/* Category Title */}
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {skill.category}
            </h2>

            {/* Skills List Vertical */}
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <motion.li
                  key={item}
                  className="text-gray-800 dark:text-gray-300 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 5, color: "#6366f1" }} // hover effect
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
