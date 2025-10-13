import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/component/Header";
import WhatsAppButton from "@/component/WhatsAppButton";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SfProDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-SfProDisplay",
});

const PlusJakartaSans = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans-Italic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-PlusJakartaSans",
});

export const metadata = {
  title: "Ibrahim Arif",
  description:
    "Ibrahim Arif is a software engineer and entrepreneur specializing in mobile app development. Founder of INFILP, delivering scalable mobile solutions.",
  keywords: [
    "Ibrahim Arif",
    "Software Engineer",
    "Mobile App Development",
    "INFILP",
    "React Native",
  ],
  authors: [{ name: "Ibrahim Arif" }],
  openGraph: {
    title: "Ibrahim Arif | Software Engineer & Founder of INFILP",
    description:
      "Ibrahim Arif is a software engineer and entrepreneur specializing in mobile app development. Founder of INFILP, delivering scalable mobile solutions.",
    url: "https://www.ibrahimarif.dev",
    siteName: "Ibrahim Arif",
    images: [
      {
        url: "https://sjc.microlink.io/V1BUf9Baot_u1m7JHuamz6zgfzjG6KjmBmFu5_nX075cNRNmVF2Z3F-fYR4EwotfAAW_0xcsoHsZ4SJOe8b96Q.jpeg",
        width: 1200,
        height: 630,
        alt: "Ibrahim Arif - Software Engineer and Founder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Arif | Software Engineer & Founder of INFILP",
    description:
      "Ibrahim Arif is a software engineer and entrepreneur specializing in mobile app development. Founder of INFILP, delivering scalable mobile solutions.",
    images: [
      "https://sjc.microlink.io/V1BUf9Baot_u1m7JHuamz6zgfzjG6KjmBmFu5_nX075cNRNmVF2Z3F-fYR4EwotfAAW_0xcsoHsZ4SJOe8b96Q.jpeg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${SfProDisplay.variable} ${PlusJakartaSans.variable}  antialiased`}
      >
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
