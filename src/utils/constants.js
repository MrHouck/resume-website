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

export const WORK_EXPERIENCES = [
  {
      id: 1,
      title: "Mechanical Engineer (Club)",
      company: "Autonomous Maritime Robotics Association",
      time: "August 2024 | August 2025",
      url: "https://amraerau.org",
      responsibilities: [
          "Led a team to design a minimal-cost electronics cooling solution within the submarine to reduce internal temperatures by over 60°F",
          "Worked with a team of 4 to design, prototype, and manufacture an improved thruster mount",
          "Designed and modeled a torpedo launching system",
          "Prototyped a bin that releases weighted bags over a designated drop zone utilizing torsion springs and servo motors.",
          "Created a waterproof servo housing for a DS3225 servo motor utilizing o-rings and shaft seals."
      ]
  },
  {
      id: 2,
      title: "Customer Service Associate",
      company: "Wawa, Inc.",
      time: "July 2022 | August 2023",
      url: "https://www.wawa.com",
      responsibilities: [
          "Wawa, Inc. Customer Service Award -- Day Brightener, April 2023",
          "Worked in a fast-paced environment on a strict schedule to serve high-quality products to over 500 people in one shift",
          "Handled day-to-day operations of the store, including the sales floor, deli area, and cash register.",
          "Trained new sales associates on customer service skills and company policies."
      ]
  },
  {
      id: 3,
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