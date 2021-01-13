import React, { useEffect } from "react";
import Nav from "../components/Others/Nav/Nav";
import Footer from "../components/Others/Footer/Footer";
import app from "../utils/app";
import AppLoader from "./AppLoader";
import { useLocation } from "react-router-dom";

export default function DefaultLayout({ children, hasFooterSpacer }) {
  const location = useLocation();

  useEffect(() => {
    app.scrollToTop();
  }, [location]);

  return (
    <>
      <AppLoader />
      <Nav />
      {children}
      <Footer hasFooterSpacer={hasFooterSpacer} />
    </>
  );
}
