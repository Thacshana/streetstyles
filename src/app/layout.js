import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StreetStyles.co",
  description: "Your shopping made easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-gray-900 p-2 min-h-dvh overflow-hidden"
        )}
      >
        <main className="w-full h-[calc(100dvh-1rem)] bg-white rounded-2xl overflow-y-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
