import { DM_Mono, Inter_Tight, Merriweather, Source_Serif_4, JetBrains_Mono } from "next/font/google";

export const DM_MONO_FAMILY = DM_Mono({ weight: "300", subsets: ["latin"] });
export const FAMILY = Inter_Tight({
  subsets: ["latin"],
  weight: ["400"],
});

export const MERRIWEATHER_FAMILY = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export const SOURCE_SERIF = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const JETBRAINS_MONO = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const TITLE_TEXT = "Aerospace Engineering Student";
export const LOCATION_TEXT = "● Daytona Beach, FL  /  West Chester, PA  /  ERAU '27";
export const LEDE_TEXT = "I'm a junior at Embry-Riddle studying astronautics, aerodynamics, and experimental methods. This summer I'm exploring how AI tools change engineering workflows at EPI-USE America, and I recently designed a boundary layer tripping experiment on a NACA 0012 airfoil.";

export const NOW_ITEMS = [
  { label: "INTERNING", value: "AI tools evaluation & prototyping, EPI-USE America" },
  { label: "GRADING", value: "AE319 Aerodynamics, Embry-Riddle" },
  { label: "READING", value: "Schaub, Analytical Mechanics of Space Systems" },
];

export const ABOUT_ME = `I'm Nathan, a junior aerospace engineering student studying at Embry-Riddle Aeronautical University.\n
My academic passions revolve around astronautics, thermodynamics, and heat transfer. I hope to pursue a career in one of these fields.\n
When I'm not studying or doing homework, I love to scuba dive, play guitar, and hang out with my friends. I'm also working towards my private pilot license.`
export const PROJECTS_INFO = [
  {
    id: 1,
    title: "Aerodynamics Data Processing",
    org: "Embry-Riddle Aeronautical University",
    role: "Undergraduate Researcher",
    time: "Jan 2026 – Apr 2026",
    url: "https://daytonabeach.erau.edu/about/labs",
    category: "Research",
    image: "/images/ae315-lab.jpeg",
    summary: "Built MATLAB scripts to clean, filter, and normalize wind tunnel sensor data. Designed and ran a boundary layer tripping experiment on a NACA 0012 airfoil to evaluate its effect on drag and boundary layer transition.",
    tags: ["MATLAB", "Aerodynamics", "Experiment"],
  },
  {
    id: 2,
    title: "AMRA Submarine — Cooling & Propulsion",
    org: "Autonomous Maritime Robotics Association",
    role: "Mechanical Engineer",
    time: "Aug 2024 – Aug 2025",
    url: "https://amraerau.org",
    category: "Team",
    image: "/images/amra-sub.png",
    summary: "Led design of a minimal-cost cooling system that dropped internal temps **60°F+**. Also built the thruster mount (reduced lateral movement), torpedo launcher, weighted-bag release bin, and an IP68-rated waterproof servo housing.",
    tags: ["Thermal", "Hardware", "CAD"],
  },
  {
    id: 3,
    title: "XJEP — Afterburner Cooling Design",
    org: "Experimental Jet Engine Propulsion Club",
    role: "Member",
    time: "Aug 2025 – Feb 2026",
    url: "https://daytonabeach.erau.edu",
    category: "Team",
    summary: "Designed a cooling solution for a modular afterburner on a KingTech turbine engine.",
    tags: ["Propulsion", "Thermal", "CAD"],
  },
  {
    id: 4,
    title: "Houck Airfoil — US 9976421B2",
    org: "Independent Research",
    role: "Inventor",
    time: "2025 – Present",
    url: "https://patents.google.com/patent/US9976421B2",
    category: "Patent",
    summary: "Researching practical applications for a patented lifting foil design and evaluating technology readiness for commercialization.",
    tags: ["Patent", "Aerodynamics"],
  },
]
export const WORK_EXPERIENCES = [
  {
    id: 1,
    title: "AI Exploration Intern",
    company: "EPI-USE America / AdvanceNA",
    time: "Summer 2026",
    url: "https://epiuse.com",
    summary: "Researching and evaluating AI tools, building lightweight prototypes, and writing recommendation briefs for practice leaders.",
  },
  {
    id: 2,
    title: "Grading Assistant — AE319 Aerodynamics",
    company: "Embry-Riddle Aeronautical University",
    time: "Jan 2026 – Present",
    url: "https://erau.edu",
    summary: "Grade and provide written feedback on homework for AE319 Aerodynamics.",
  },
  {
    id: 3,
    title: "Customer Service Associate",
    company: "Wawa, Inc.",
    time: "Jul 2022 – Apr 2026",
    url: "https://www.wawa.com",
    summary: "Day Brightener Award, April 2023. Served 500+ customers per shift; trained new associates.",
  },
  {
    id: 4,
    title: "Lifeguard",
    company: "Greater Philadelphia YMCA",
    time: "Feb 2023 – Aug 2023",
    url: "https://www.philaymca.org",
    summary: "Red Cross CPR/AED certified. Pool safety and inspections.",
  },
];

export const EDUCATION = [
  {
    id: 1,
    school: "Embry-Riddle Aeronautical University",
    time: "Aug 2023 – May 2027",
    gpa: "3.75 / 4.00",
    url: "https://erau.edu",
    honors: [
      "Dean's List: Fall '23, Spring '24, Spring '25, Fall '25",
      "Honor Roll: Fall '24",
      "Exceptional Eagles Award: Spring '25",
    ],
    activities: [
      "B.S. Aerospace Engineering — Astronautics Track",
      "Experimental Jet Engine Propulsion (XJEP)",
      "Autonomous Maritime Robotics Association (AMRA)",
      "Studying Habitats and Reef Kingdoms — Conservation Officer",
      "American Institute of Aeronautics and Astronautics (AIAA)",
    ],
  },
  {
    id: 2,
    school: "West Chester Bayard Rustin High School",
    time: "Aug 2019 – May 2023",
    gpa: "4.40 / 5.00",
    url: "https://rhs.wcasd.net",
    honors: [],
    activities: [
      "National Honor Society",
      "German National Honor Society",
      "Science Olympiad",
      "Academic Team — JV Captain",
    ],
  },
]

export const DEFAULT_PDF_URL =
  "https://mag.wcoomd.org/uploads/2018/05/blank.pdf";
export const PDF_WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";