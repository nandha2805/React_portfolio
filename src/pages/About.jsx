import React from "react";
import { SITE } from "../data/site";
import profileImg from "../assets/profile.png";   
import { motion } from "framer-motion";   // ✅ Added

export default function About() {
  return (
    <section className="container py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left side photo */}
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}   // ✅ Animate only first time
      >
        <img
          src={profileImg}
          alt="Home"
          className="w-64 h-64 rounded-full object-cover shadow-md"
        />
      </motion.div>

      {/* Right side content */}
      <motion.div
        className="prose max-w-xl"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>About Me</h1>
        <p>
          I’m a passionate Frontend Developer & UI/UX Designer focused on crafting clean, responsive, and user-friendly web interfaces.  
          With expertise in React and modern design principles, I bridge the gap between design and code.  
          I enjoy turning creative ideas into engaging digital experiences that users love.  
          Always eager to learn, I thrive on building products that balance aesthetics and functionality.  
        </p>
      </motion.div>
    </section>
  );
}
