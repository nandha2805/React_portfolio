import React from "react";
import cvPath from "../assets/Nanthakumar-cv.pdf";

export default function CVButton() {
  return (
    <a
      href={cvPath}
      download="Nanthakumar-CV.pdf"
      className="px-3 py-1.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md hover:opacity-90 transition"
    >
      Download CV
    </a>
  );
}
