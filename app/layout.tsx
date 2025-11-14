import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Transfer Services | Luxury Transportation",
  description: "Experience luxury transportation with our premium transfer services. Professional, reliable, and comfortable rides for all your travel needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
