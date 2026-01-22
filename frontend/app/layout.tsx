import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Contract Management Platform",
  description: "Full Stack Contract Management System",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
