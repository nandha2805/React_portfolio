import React from "react";
import { SITE } from "../data/site";
import cvPath from "../assets/Nanthakumar-cv.pdf";

const Item = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm"
  >
    {label}
  </a>
);

export default function Socials() {
  return (
    <div className="flex gap-3 flex-wrap justify-center md:justify-start">
      <Item href={SITE.github} label="GitHub" />
      <Item href={SITE.linkedin} label="LinkedIn" />

      {/* ✅ CV Button - open in new tab + download */}
     <a
    href={cvPath}
    download="Nanthakumar-CV.pdf"
    className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-blue-600 transition"
  >
    Download CV
  </a>

    </div>
  );
}
