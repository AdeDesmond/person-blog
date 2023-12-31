import { NextAuthProvider } from "./libs/Providers";
import { TansStackProvider } from "./libs/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderPage from "./components/HeaderPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TansStackProvider>
          <NextAuthProvider>
            <div className="max-w-[90rem] mx-auto">
              <HeaderPage />
              {children}
            </div>
          </NextAuthProvider>
        </TansStackProvider>
      </body>
    </html>
  );
}
