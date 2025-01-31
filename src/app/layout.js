import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inTer = Inter({ subsets: ["latin"] });

export const mETADatA = {
  title: "Web Dev Tools",
  description:
    "Cool web dev tools, that can help you with your journey as a web developer",
};

export default function RoOTLAyOut({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden scrollbar">
      <head></head>
      <body className={inTer.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
