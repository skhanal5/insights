import "../globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Insights",
  description: "Made by Subodh Khanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.classname}>
        <main className="h-screen max-h-screen flex flex-row">
          <Sidebar></Sidebar>
          {children}
        </main>
      </body>
    </html>
  );
}
