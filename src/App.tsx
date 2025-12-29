import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound'
import { Route, Routes, useLocation } from 'react-router-dom'
import LivestreamPage from './pages/LivestreamPage/LivestreamPage'
import MerchStore from './pages/MerchStore/MerchStore'
import Cart from './pages/Cart/Cart'
import TeamMembersPage from './pages/TeamMembersPage/TeamMembersPage'
import 'swiper/css';
import MatchesPage from './pages/MatchesPage/MatchesPage'

function App() {
  const location = useLocation();

  return (
    <div className='bg-dark-bg'>
      <Navbar isHome={location.pathname === '/'} />
      <div className="min-h-screen w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<MerchStore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/live" element={<LivestreamPage />} />
          <Route path="/team" element={<TeamMembersPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
