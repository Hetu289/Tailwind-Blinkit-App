import React from "react";

import HeaderApp from "./Components/HeaderApp.jsx";
import FooterApp from "./Components/FooterApp.jsx";
import BannerApp from "./Components/BannerApp.jsx";
import ContentApp from "./Components/ContentApp.jsx";

export default function Layout() {
  return (
    <>
      <HeaderApp />
      <BannerApp />
      <ContentApp />
      <FooterApp />
    </>
  );
}