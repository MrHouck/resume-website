import "./globals.css";
import { FAMILY } from "@/utils/constants";
import { AppProvider } from "./provider";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";


export const metadata = {
  title: "Nathan Houck",
  description: "Nathan Houck is a motivated aerospace engineering student open for opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="ubuntu w-screen overflow-x-hidden h-screen text-[var(--primary-text)] bg-[var(--bg)] transition-colors">
        <ThemeProvider attribute="class" className="dark">
          <AppProvider>
            <Navbar/>
            
            {children}

            </AppProvider>
        </ThemeProvider>

      </body>
     
    </html>
  );
}
