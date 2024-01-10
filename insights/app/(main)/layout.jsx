import "../globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Insights",
  description: "Job application metrics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen max-h-screen flex flex-row">
          <Sidebar></Sidebar>
          <ContentContainer children={children}></ContentContainer>
        </main>
      </body>
    </html>
  );
}
