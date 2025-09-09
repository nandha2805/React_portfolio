import hallImg from "../assets/hallbooking.jpg";
import todoImg from "../assets/todo.png";
import landImg from "../assets/landing.png";
import biacImg from "../assets/biac.jpg";
import calImg from "../assets/calculator.png";
import foodImg from "../assets/food.png";
import streetImg from "../assets/streetfood.png";
import redImg from "../assets/red.png";

export const PROJECTS = {
  react: [
    {
      title: "Advance Online Hall Reservation System",
      image: hallImg,
      tools: ["React", "MongoDB", "Express", "Node.js"],
      github: "https://github.com/yourusername/hall-reservation",
      live: "https://yourliveurl.com/hall-reservation",
      problem: {
        statement:
          "Manual scheduling of college halls often leads to conflicts and inefficiencies.",
        description:
          "This MERN stack system provides real-time hall availability, booking, approval workflows, and notifications to avoid scheduling conflicts.",
      },
    },
    {
      title: "To-Do List App",
      image: todoImg,
      tools: ["React"],
      github: "https://github.com/yourusername/todo",
      live: "https://yourliveurl.com/todo",
      problem: {
        statement: "Students often forget their tasks without proper tracking.",
        description:
          "This React app allows users to add, edit, mark as complete, and delete tasks for effective productivity.",
      },
    },
    {
      title: "Landing Page",
      image: landImg,
      tools: ["HTML", "CSS"],
      github: "https://github.com/yourusername/landingpage",
      live: "https://yourliveurl.com/landingpage",
      problem: {
        statement:
          "Businesses need a professional landing page to showcase services/products.",
        description:
          "A responsive landing page built with HTML & CSS, focusing on user-friendly layout and visuals.",
      },
    },
    {
      title: "Calculator",
      image: calImg,
      tools: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/calculator",
      live: "https://yourliveurl.com/calculator",
      problem: {
        statement: "Manual calculation is error-prone and time consuming.",
        description:
          "A simple calculator that performs arithmetic operations using HTML, CSS, and JavaScript.",
      },
    },
  ],

  figma: [
    {
      title: "Food Delivery App",
      image: foodImg,
      tools: ["Figma", "UI/UX"],
      figma: "https://www.figma.com/proto/yourfileid",
      problem: {
        statement:
          "Students and working professionals often struggle to get affordable meals on time.",
        description:
          "Designed a mobile-first food delivery app prototype with real-time ordering, tracking, and easy payment integration.",
      },
    },
    {
      title: "Red Banana Powder Branding",
      image: redImg,
      tools: ["Figma", "UI/UX"],
      figma: "https://www.figma.com/proto/yourfileid",
      problem: {
        statement: "Local products need modern branding to attract online customers.",
        description:
          "Created packaging & e-commerce prototype for Red Banana Powder to increase online market reach.",
      },
    },
    {
      title: "BIAC Game UI",
      image: biacImg,
      tools: ["Figma", "Game UI/UX"],
      figma: "https://www.figma.com/proto/yourfileid",
      problem: {
        statement: "Gamers need engaging and intuitive interfaces.",
        description:
          "Designed interactive game UI screens with focus on immersive experience and smooth navigation.",
      },
    },
    {
      title: "Street Food App",
      image: streetImg,
      tools: ["Figma", "UI/UX"],
      figma: "https://www.figma.com/proto/yourfileid",
      problem: {
        statement:
          "Street food vendors face difficulty in reaching tech-savvy customers.",
        description:
          "A user-friendly mobile app prototype connecting street food vendors with nearby customers, with GPS & order tracking.",
      },
    },
  ],
};
