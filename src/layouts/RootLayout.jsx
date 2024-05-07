import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mt-5">{children}</main>
      <Footer />
    </>
  );
}

export default RootLayout;
