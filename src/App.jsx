
import "./assets/styles/style.css"
// import Navbar from "./components/Navbar"
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import About from "./pages/About";
import ITServices from "./pages/ITServices";
import MainFooter from "./components/MainFooter";
import BPOSolutions from "./pages/BPOSolutions";
import Contact from "./pages/contact/Contact";
import useDynamicStyles from "./hooks/useDynamicStyles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NotFound from "./pages/NotFound";
import ROI from "./pages/ROI";
import ComingSoon from "./pages/ComingSoon";

const Home = lazy(() => import('./pages/Home'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function DynamicStylesWrapper() {
  useDynamicStyles();
  return null; // Prevents rendering issues
}

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section className='bg-[#141416] xui-text-white xui-h-fluid-100 xui-overflow-x-hidden'>
      <Navbar />
      <DynamicStylesWrapper />
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roi/calculator" element={<ROI />} />
              <Route path="/about" element={<About />} />
              <Route path="/it/services" element={<ITServices />} />
              <Route path="/bpo/solutions" element={<BPOSolutions />} />
              <Route path="/signin" element={<ComingSoon />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <MainFooter />
        </Suspense>
        
        {/* <Footer /> */}
      </section>
    </>
  )
}

export default App;
