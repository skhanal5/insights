import "../globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import { getServerSession } from "next-auth";
import SessionProvider from "@/nextauth-utils/SessionProvider";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Insights",
  description: "Job application metrics",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <main className="h-screen max-h-screen flex flex-row">
            <Sidebar></Sidebar>
            <ContentContainer children={children}></ContentContainer>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
