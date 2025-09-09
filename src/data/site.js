import cvPath from "../assets/Nanthakumar-cv.pdf";
export const SITE = {
  name: "Nanthakumar R",
  role: "Frontend Developer & UI/UX Designer",
  taglines: [
    "Blending artistry and engineering — UI/UX crafted, React powered.",
    "Turning pixels into experiences & React code into powerful interfaces.",
    "From sketch to screen — crafting designs and coding them alive with React."
  ],
  email: "nanthakumarlingam123@gmail.com",
  phone: "+91 6382378395",
  location: "Tuticorin, Tamil Nadu, India",
  github: "https://github.com/nandha2805",        // ✅ updated
  linkedin: "https://www.linkedin.com/in/nanthakumar2", // ✅ updated
  cvPath: "/assets/Nanthakumar-cv.pdf"
};

// ✅ SKILLS separate export
export const SKILLS = [
  {
    category: "Programming",
    items: ["Java", "SQL", "JavaScript"]
  },
  {
    category: "Technologies",
    items: ["React.js", "Node.js", "My SQL"]
  },
  {
    category: "Design",
    items: ["Figma", "Visual Design", "Micro Interactions"]
  }
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" }
];
