import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV, SITE } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 backdrop-blur border-b transition-colors duration-500
        ${dark ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`font-bold tracking-tight text-xl transition-transform duration-300 hover:scale-110 ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {SITE.name}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  dark
                    ? "text-gray-200 hover:text-yellow-400"
                    : "text-gray-900 hover:text-blue-600"
                } ${isActive ? "font-semibold underline underline-offset-4" : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className={`ml-3 px-3 py-1 rounded-md border transition-colors duration-500 ${
              dark
                ? "bg-white text-gray-900 border-gray-600 hover:bg-yellow-300"
                : "bg-gray-900 text-white border-gray-300 hover:bg-blue-600"
            }`}
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${dark ? "text-white" : "text-gray-900"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden transition-colors duration-500 ${
            dark ? "bg-gray-900 border-t border-gray-700" : "bg-white border-t border-gray-200"
          }`}
        >
          <div className="container py-3 flex flex-col gap-3">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`py-1 transition-colors duration-300 ${
                  dark
                    ? "text-gray-200 hover:text-yellow-400"
                    : "text-gray-900 hover:text-blue-600"
                }`}
              >
                {n.label}
              </NavLink>
            ))}

            {/* 🌙 Dark Mode Toggle Mobile */}
            <button
              onClick={() => setDark(!dark)}
              className={`px-3 py-2 rounded-md border transition-colors duration-500 ${
                dark
                  ? "bg-white text-gray-900 border-gray-600 hover:bg-yellow-300"
                  : "bg-gray-900 text-white border-gray-300 hover:bg-blue-600"
              }`}
            >
              {dark ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
