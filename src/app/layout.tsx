import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "August 2024 - ATZ Newsletter",
  description: "Discover the latest news and updates from ATZ. August 2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="standard">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} w-screen flex flex-col items-center justify-center bg-base-300`}
      >
        <main className="w-full max-w-[1800px] bg-base-300 z-[1] font-mont ">
          {/* <Navbar /> */}
          <div
            className="flex flex-col items-center min-h-screen"
            // style={{
            //   minHeight: `calc(100vh - ${NAVBAR_REM_HEIGHT}rem)`,
            // }}
          >
            {children}
          </div>
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
