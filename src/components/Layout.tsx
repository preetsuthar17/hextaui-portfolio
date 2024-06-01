import React from "react";
import { GeistSans } from "geist/font/sans";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main >{children}</main>
    </>
  );
};

export { Layout };
