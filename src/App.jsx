
import "./assets/styles/style.css"
// import Navbar from "./components/Navbar"
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BPOService from "./pages/BPOService";
import { useLocation } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const BPOServices = lazy(() => import('./pages/BPOServices'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <section className='hw-main-section xui-overflow-x-hidden'>
      <Navbar />
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bpo-services" element={<BPOServices />} />
              <Route path="/bpo-services/:id" element={<BPOService />} />
              <Route path="*" element={<h1>No Match</h1>} />
            </Routes>
        </Suspense>
        <Footer />
      </section>
    </>
  )
}

export default App;
