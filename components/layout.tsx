import React from "react";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {router.pathname === "/signup" ||
      router.pathname === "/signin" ||
      router.pathname === "/404" ? null : (
        <div>
          <Navbar />
        </div>
      )}
      <div
        style={{
          width: "100%",
          height: "fit-content",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
