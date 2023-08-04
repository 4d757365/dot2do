import { ModalProvider } from "@/providers/ModalProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import TaskProvider from "@/providers/TaskProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dot2do",
  description: "Organize your work and life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
