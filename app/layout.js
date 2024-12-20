import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shri Panchami Global Gears",
  description: "Shri Panchami Global Gears Website",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="no-scrollbar">
      <head> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}
      >
        {children}
        
      </body>
      
    </html>
  );
}
