import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

import Navbar from "./_components/navbar/DropdownNav/NavBar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "G'Danse",
  description: "Danse Civray 86",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable}  antialiased`}
      >
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
