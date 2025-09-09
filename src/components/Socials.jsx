import React from "react";
import { SITE } from "../data/site";

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
        href={SITE.cvPath}
        target="_blank"
        rel="noreferrer"
        download="Nanthakumar-CV.pdf"
        className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-700"
      >
        📄 CV
      </a>
    </div>
  );
}
