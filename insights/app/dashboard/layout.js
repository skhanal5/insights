import "../globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Insights",
  description: "Made by Subodh Khanal",
};

export default function DashboardLayout({ children }) {
  return (
    <section className="h-screen max-h-screen flex flex-row">
      <Sidebar></Sidebar>
      {children}
    </section>
  );
}
