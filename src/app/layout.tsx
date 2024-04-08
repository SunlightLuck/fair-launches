import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Provider } from "./provider";
import { Toaster } from "react-hot-toast";
import Progressbar from "@/components/Progressbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fair Launches",
  description: "Fair Launches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="h-screen bg-back pb-16 overflow-hidden">
            <div className="overflow-y-scroll h-full overflow-x-hidden">
              <div className="flex items-center justify-center h-full w-full px-14 py-16">
                <Progressbar />
                {children}
              </div>
            </div>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </Provider>
      </body>
    </html>
  );
}
