import polybuddy from "../../assets/polybuddy.jpg";
import bank from "../../assets/bank.jpg";
import library from "../../assets/library.jpg";
import apptrak from "../../assets/apptrak.jpg";
import bitmap from "../../assets/bitmap.jpg";
import simulation from "../../assets/simulation.jpg";

export const projectsData = [
  {
    id: 1,
    image: polybuddy,
    title: "PolyBuddy",
    tags: ["JavaScript", "React", "MongoDB"],
    description: "PolyBuddy is a mobile application project. It provides an intuitive platform aimed to seamlessly guide students and faculty through the Cal Poly SLO campus, enhacing overall campus experience.",
    demo: "https://mango-coast-050270d10.5.azurestaticapps.net/",
    code: "https://github.com/michellechi/PolyBuddy-App",
  },
  {
    id: 2,
    image: bank,
    title: "Banking Risk Assessment Model",
    tags: ["SQL", "Python", "Tableau", "Excel"],
    description: "Developed a ML model to predict credit risk and loan default probability using client financial and behavioral data. Built data pipelines and classifiers to improve risk assessment accuracy.",
    demo: "",
    code: "https://github.com/michellechi/Banking-Risk-Assessment-Model",
  },
  {
    id: 3,
    image: library,
    title: "Library Management App",
    tags: ["Java", "MySQL", "Apache Maven"],
    description: "Libaray Management App is a user-friendly interface for users and admin. It has key functionalities including login, book management, returns, search, and automated fine capabilities.",
    demo: "",
    code: "https://github.com/michellechi/Library-Management-System",
  },
  {
    id: 4,
    image: simulation,
    title: "Interactive Game Simulation",
    tags: ["Java"],
    description:  "An interactive game simulation where dynamic entities like DUDEs, FAIRYs, and growing TREES interact within defined rules, navigating, transforming, and influencing their environment.",
    demo: "",
    code: "https://github.com/michellechi/InteractiveVirtualSimulation",
  },
  {
    id: 5,
    image: apptrak,
    title: "AppTrak",
    tags: ["TypeScript", "Express.js", "MongoDB"],
    description: "AppTrak is a streamlined job application tracker designed to simplify and organize the application process.",
    demo: "",
    code: "https://github.com/michellechi/csc437-job-app-tracker",
  },
  {
    id: 6,
    image: bitmap,
    title: "Bitmap Image Encoding/Decoding",
    tags: ["C"],
    description: "An image encoder and decoder to convert image data into a binary format and reconstructs the original image.",
    demo: "",
    code: "https://github.com/michellechi/BMP-Image-Encoding-Decoding",
  }
];