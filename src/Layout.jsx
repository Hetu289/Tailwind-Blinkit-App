import React from 'react'
import HeaderApp from './components/HeaderApp'
import BannerApp from './components/BannerApp'
import ContentApp from './components/ContentApp'
import FooterApp from './components/FooterApp'
import LoginApp from './components/pages/LoginApp.jsx'
import CartApp from './components/pages/CartApp.jsx'
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