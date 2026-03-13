import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "UTUBE UNIVERSITY — Learn Real Skills for Real Life",
  description: "Guided tutorials, AI troubleshooting, live help — one action-first platform for real-world skills.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><div className="grain" />{children}</body></html>);
}
