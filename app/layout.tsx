import "./css/style.css";

import { Inter, Permanent_Marker } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

const hkgrotesk = localFont({
  src: [
    {
      path: "../public/fonts/HKGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/HKGrotesk-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-hkgrotesk",
  display: "swap",
});

export const metadata = {
  title: "Code & Cash - Podcast",
  description: "Les développeurs aussi peuvent faire du cash.",
  metadataBase: new URL("https://code-et-cash.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${permanent_marker.variable} ${hkgrotesk.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen overflow-hidden">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
