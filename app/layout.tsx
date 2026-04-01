import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "toastify-js/src/toastify.css"
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Bounce, ToastContainer } from "react-toastify";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Chronodoro",
  description: "Chronodoro - Pomodoro timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link
      rel="icon"
      type="image/png"
      href="/images/favicon/favicon-96x96.png"
      sizes="96x96"
    />

    <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
    <link rel="icon" type="image/png" href="/images/favicon/favicon.png" />

    <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/favicon/apple-touch-icon.png"
    />
    <link rel="manifest" href="/images/favicon/site.webmanifest" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        style={{
          background: 'var(--gradient-main)',
          color: 'var(--text-default)',
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        <TaskContextProvider>
          <Heading />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Bounce}
          />
        </TaskContextProvider>
      </body>
    </html>
  );
}
