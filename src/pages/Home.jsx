import React from "react";
import Socials from "../components/Socials";
import { SITE } from "../data/site";
import { ReactTyped } from "react-typed";
import profileImg from "../assets/profile.png";
import { motion } from "framer-motion";
import cvPath from "../assets/Nanthakumar-cv.pdf";


export default function Home() {
  return (
    <section className="container py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left side text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          {SITE.role}
        </h1>

        {/* 🔹 Auto-rotating tagline */}
        <p className="mt-2 text-lg text-gray-700 max-w-2xl">
          <ReactTyped
            strings={SITE.taglines}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop
          />
        </p>

        <div className="mt-6">
          <Socials />
        </div>
      </motion.div>

      {/* Right side photo */}
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <img
          src={profileImg}
          alt="Home"
          className="w-65 h-64 rounded-full object-cover shadow-md"
        />
      </motion.div>
    </section>
  );
}
