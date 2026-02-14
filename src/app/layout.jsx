
import "./globals.css";
import { FAMILY } from "@/utils/constants";
import { AppProvider } from "./provider";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import 'katex/dist/katex.min.css';



export const metadata = {
  title: "Nathan Houck",
  description: "Nathan Houck is a motivated aerospace engineering student open for opportunities.",
  icons: {
    icon: "./favicon.ico"
  }
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
            <Navbar/>
            
            {children}

            </AppProvider>
        </ThemeProvider>

      </body>
     
    </html>
  );
}
