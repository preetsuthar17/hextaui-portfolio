import React from "react";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className={`${GeistSans.className} min-h-[100vh]`}>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
