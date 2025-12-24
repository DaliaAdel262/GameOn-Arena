import { useState } from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/Hero'
import TeamSection from './components/TeamSection/TeamSection'
import MatchesSection from './components/MatchesSection/MatchesSection'
import MerchSection from './components/MerchSection/MerchSection'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import MerchStore from './pages/MerchStore/MerchStore'
import Cart from './pages/Cart/Cart'

function App() {
  const location = useLocation();

  return (
    <>
      {/* <Navbar isHome={location.pathname === '/'} /> */}
      <div className="min-h-screen w-full bg-dark-bg flex flex-col app-cont md:app-cont-md lg:app-cont-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<MerchStore />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/matches" element={<Matches />} />
          <Route path="/team" element={<Team />} />
          <Route path="/store" element={<Store />} />
          <Route path="/livestream" element={<Livestream />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
