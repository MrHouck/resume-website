
import "./globals.css";
import { FAMILY } from "@/utils/constants";
import { AppProvider } from "./provider";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import 'katex/dist/katex.min.css';



export const metadata = {
  metadataBase: new URL("https://nathanhouck.com"),
  title: {
    default: "Nathan Houck",
    template: "%s — Nathan Houck",
  },
  description: "Aerospace engineering student at Embry-Riddle studying astronautics, aerodynamics, and experimental methods.",
  manifest: "/favicon-assets/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-assets/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-assets/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-assets/icon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/favicon-assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    siteName: "Nathan Houck",
    images: [{ url: "/headshot.jpg", width: 800, alt: "Nathan Houck" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://nathanhouck.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossOrigin="anonymous"/>
        </Head>
        <body className={`${FAMILY.className} w-screen overflow-x-hidden h-screen text-[var(--primary-text)] bg-[var(--bg)] transition-colors`}>
        <ThemeProvider attribute="class" className="dark" suppressHydrationWarning>
          <AppProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-(--accent) focus:text-white focus:rounded focus:text-sm"
            >
              Skip to main content
            </a>
            <Navbar/>

            {children}

            </AppProvider>
        </ThemeProvider>

      </body>
     
    </html>
  );
}
