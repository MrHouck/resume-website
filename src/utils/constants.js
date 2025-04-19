import { DM_Mono, Ubuntu } from "next/font/google";
export const DM_MONO_FAMILY = DM_Mono({weight: "300", subsets: ["latin"]});
export const FAMILY = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
  });

export const TITLE_TEXT = "Aerospace Engineering Student";
export const LOCATION_TEXT = "Daytona Beach, FL | West Chester PA";

export const ABOUT_ME = `I'm Nathan, a junior aerospace engineering student studying at Embry-Riddle Aeronautical University.

My academic passions revolve around astronautics, thermodynamics, and heat transfer. I hope to pursue a career in one of these fields. When I'm not studying or doing homework, I love to scuba dive, play guitar, and hang out with my friends.
I'm also working towards my private pilot license.`


export const DEFAULT_PDF_URL =
  "https://mag.wcoomd.org/uploads/2018/05/blank.pdf";
export const PDF_WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";