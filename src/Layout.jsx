import React from 'react'
import HeaderApp from "./components/HeaderApp.jsx";
import BannerApp from "./components/BannerApp.jsx";
import ContentApp from "./components/ContentApp.jsx";
import FooterApp from "src/components/FooterApp.jsx";
import LoginApp from "./components/pages/LoginApp.jsx";
import CartApp from "./components/CartApp.jsx";
export default function Layout() {
  return (
    <>
     <HeaderApp />
     <BannerApp />
     <ContentApp />
     <FooterApp />
     <LoginApp />
     <CartApp />
    
    </>
  )
}