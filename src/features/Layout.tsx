import React, { ReactChild } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
