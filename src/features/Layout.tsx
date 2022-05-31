import React, { ReactChild } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/layout/Footer";
import Loader from "../components/layout/Loader";
import Navbar from "../components/layout/Navbar";
import { Store } from "../config/interfaces/store/types";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};

const Layout = ({ children }: LayoutProps) => {
  const loading = useSelector((store: Store) => store.app.loading);

  return (
    <>
      <Navbar />

      <section>
        {loading ? <Loader /> : null }
        {children }
      </section>

      <Footer />
    </>
  );
};

export default Layout;
