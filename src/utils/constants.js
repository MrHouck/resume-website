import { DM_Mono, Ubuntu } from "next/font/google";
export const DM_MONO_FAMILY = DM_Mono({weight: "300", subsets: ["latin"]});
export const FAMILY = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
  });

export const TITLE_TEXT = "Aerospace Engineering Student";
export const LOCATION_TEXT = "Daytona Beach, FL | West Chester PA";

export const ABOUT_ME = `I'm Nathan, a junior aerospace engineering student studying at Embry-Riddle Aeronautical University.\n
My academic passions revolve around astronautics, thermodynamics, and heat transfer. I hope to pursue a career in one of these fields.\n
When I'm not studying or doing homework, I love to scuba dive, play guitar, and hang out with my friends. I'm also working towards my private pilot license.`
export const PROJECTS_INFO = [
  {
    id: 1,
    title: "Mechanical Engineer (Club)",
    org: "Autonomous Maritime Robotics Association",
    time: "August 2024 | August 2025",
    url: "https://amraerau.org",
    responsibilities: [
        "Led a team to design a minimal-cost electronics cooling solution within the submarine to reduce internal temperatures by over 60°F",
        "Worked with a team of 4 to design, prototype, and manufacture an improved thruster mount, reducing lateral movement",
        "Designed and modeled a torpedo launching system",
        "Prototyped a bin that releases weighted bags over a designated drop zone utilizing torsion springs and servo motors",
        "Created an IP68 compliant waterproof servo housing for a DS3225 servo motor utilizing o-rings and shaft seals",
    ]
  },
  {
    id: 2,
    title: "Undergraduate Researcher",
    org: "Embry-Riddle Aeronautical University",
    time: "August 2025 | Present",
    url: "https://daytonabeach.erau.edu/about/labs/thermal-laboratory",
    responsibilities: [
        "Collaborating with students from Insituto Technológico de Aeronáutica to create a flow visualization model to study the behavior of phase change materials (PCM)",
        "Created a test section in Autodesk Inventor to contain the PCM and allow it to be oriented at any angle",
        "The test section simulates a constant heat flux boundary condition and a constant temperature boundary condition",
    ],
  },
  {
    id: 3,
    title: "Personal Research",
    org: "Houck Airfoil — US Patent US9976421B2",
    time: "August 2025 | Present",
    url: "https://nathanhouck.com/projects",
    responsibilities: [
      "Researching the patented lifting foil design and identifying potential, practical applications for aerospace technologies",
      "Evaluating the technology readiness level for further independent study with the intent to commercialize the technology",
    ]
  }
]
export const WORK_EXPERIENCES = [
  {
      id: 1,
      title: "Customer Service Associate",
      company: "Wawa, Inc.",
      time: "July 2022 | Present",
      url: "https://www.wawa.com",
      responsibilities: [
          "Wawa, Inc. Customer Service Award -- Day Brightener, April 2023",
          "Work in a fast-paced environment on a strict schedule to serve high-quality products to over 500 people in one shift",
          "Handle day-to-day operations of the store, including the sales floor, deli area, and cash register.",
          "Train new sales associates on customer service skills and company policies."
      ]
  },
  {
      id: 2,
      title: "Lifeguard",
      company: "Greater Philadelphia YMCA",
      time: "Feb 2023 | August 2023",
      url: "https://www.philaymca.org",
      responsibilities: [
          "Conducted regular pool inspections to ensure a safe and nonhazardous environment for guests",
          "Maintained compliance with Red Cross CPR, AED, and lifeguarding certifications",
          "Demonstrated strong interpersonal skills by effectively communicating with both guests and other team members",
      ]
  },
];

export const EDUCATION = [
  {
    id:1,
    school: "Embry-Riddle Aeronautical University",
    time: "Aug 2023 | May 2027",
    gpa: "GPA: 3.76/4.00",
    url: "https://erau.edu",
    activities: [
      "B.S. Aerospace Engineering | Astronautics Track           ",
      "Icarus Sounding Rocket Program (ISRP)                     ",
      "Autonomous Maritime Robotics Association (AMRA)           ",  
      "Diving Eagles Scuba Club (DESC)                           ",
      "American Institute of Aeronautics and Astronautics (AIAA) "
    ]
  },
  {
    id:2,
    school: "West Chester Bayard Rustin High School",
    time: "Aug 2019 | May 2023",
    gpa: "GPA: 4.40/5.00",
    url: "https://rhs.wcasd.net",
    activities: [
      "National Honor Society                                   ",
      "German National Honor Society                            ",
      "Science Olympiad                                         ",
      "Academic Team - Junior Varsity Captain                   "
    ]
  },
]

export const DEFAULT_PDF_URL =
  "https://mag.wcoomd.org/uploads/2018/05/blank.pdf";
export const PDF_WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";