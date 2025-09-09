import React from "react";
import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={`mailto:${SITE.email}`} className="hover:underline">
            {SITE.email}
          </a>
          <span>•</span>
          <span>{SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}
