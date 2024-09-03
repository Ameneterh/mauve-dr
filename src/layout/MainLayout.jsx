import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      {/* <main className="min-h-[calc(100vh-120px)] max-w-6xl md:mx-auto"> */}
      <main className="min-h-screen w-full">{children}</main>
      {window.location.pathname === "/" ||
      window.location.pathname === "/service" ? (
        <FooterComponent />
      ) : (
        <></>
      )}
    </>
  );
}
