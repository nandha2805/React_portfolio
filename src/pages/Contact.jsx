import React from "react";
import { SITE } from "../data/site";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="container py-16 max-w-3xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Contact
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        I’m open to full-time roles and freelance projects.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* Say Hello Card */}
        <motion.div
          className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Say hello
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <strong>Email:</strong> {SITE.email}
            </li>
            <li>
              <strong>Phone:</strong> {SITE.phone}
            </li>
            <li>
              <strong>Location:</strong> {SITE.location}
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full border dark:border-gray-600 dark:text-gray-200"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full border dark:border-gray-600 dark:text-gray-200"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              href={SITE.cvPath}
              download
              className="px-3 py-1.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-3">
            <motion.input
              required
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              required
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              required
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            (Static form — connect with EmailJS/Backend to receive messages.)
          </p>
        </motion.form>
      </div>
    </motion.section>
  );
}
