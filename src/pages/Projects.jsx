import React, { useState } from "react";
import { PROJECTS } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold text-center">Projects</h1>

      {/* React Projects */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        💻 React / HTML / CSS Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.react.map((p, i) => (
          <motion.div
            key={p.title}
            className="border rounded-xl p-4 bg-white shadow hover:shadow-lg cursor-pointer"
            onClick={() => setSelected(p)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-md mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{p.tools.join(", ")}</p>
          </motion.div>
        ))}
      </div>

      {/* Figma Projects */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        🎨 Figma UI/UX Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.figma.map((p, i) => (
          <motion.div
            key={p.title}
            className="border rounded-xl p-4 bg-white shadow hover:shadow-lg cursor-pointer"
            onClick={() => setSelected(p)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-md mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{p.tools.join(", ")}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal - Project Details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-lg p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✖
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="rounded-md mb-4 w-full h-52 object-cover"
              />
              <h2 className="text-xl font-bold">{selected.title}</h2>
              <p className="text-sm text-gray-500 mb-3">
                {selected.tools.join(", ")}
              </p>
              <h3 className="font-semibold">Problem Statement</h3>
              <p className="text-gray-700 mb-2">{selected.problem.statement}</p>
              <h3 className="font-semibold">Problem Description</h3>
              <p className="text-gray-700">{selected.problem.description}</p>

              <div className="mt-4 flex gap-3 flex-wrap">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-md bg-gray-900 text-white text-sm"
                  >
                    GitHub
                  </a>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm"
                  >
                    View Live
                  </a>
                )}
                {selected.figma && (
                  <a
                    href={selected.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-md bg-pink-500 text-white text-sm"
                  >
                    View Prototype
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
