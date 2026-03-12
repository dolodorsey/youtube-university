import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube University | KHG",
  description: "Curated educational video library — learn anything, skip the noise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <div className="grain" />
      {children}
    </body></html>
  );
}
