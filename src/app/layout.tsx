import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FC DIGITAL TECHNOLOGIES | Premium ICT Solutions",
  description: "Innovative technology services for businesses and individuals. Computer sales, repairs, networking, CCTV, software, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-background-950 text-white antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
