import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer} from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Car Hub" />
        <meta property="og:description" content="Discover the best cars in the world." />
        <meta property="og:type" content="website" />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
