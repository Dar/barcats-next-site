import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Providers from "./utils/providers";
Providers

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}
