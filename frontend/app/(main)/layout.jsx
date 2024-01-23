import "../globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import SessionProvider from "@/nextauth-utils/SessionProvider";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Insights",
  description: "Job application metrics",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        <SessionProvider>
          <main className="flex flex-row">
            <Sidebar></Sidebar>
            <ContentContainer children={children}></ContentContainer>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
