
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
import BPOSolutions from "./pages/bpo-solutions/BPOSolutions";
import BPOPackage1 from "./pages/bpo-solutions/bpo-packages/BPOPackage1";
import BPOPackage2 from "./pages/bpo-solutions/bpo-packages/BPOPackage2";
import BPOPackage3 from "./pages/bpo-solutions/bpo-packages/BPOPackage3";
import BPOPackage4 from "./pages/bpo-solutions/bpo-packages/BPOPackage4";
import Contact from "./pages/contact/Contact";
const Home = lazy(() => import('./pages/Home'));

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
      <section className='xui-bg-black xui-text-white xui-h-fluid-100'>
      <Navbar />
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/it/services" element={<ITServices />} />
              <Route path="/bpo/solutions" element={<BPOSolutions />} />
              <Route path="/bpo/solutions/package/1" element={<BPOPackage1 />} />
              <Route path="/bpo/solutions/package/2" element={<BPOPackage2 />} />
              <Route path="/bpo/solutions/package/3" element={<BPOPackage3 />} />
              <Route path="/bpo/solutions/package/4" element={<BPOPackage4 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>No Match</h1>} />
            </Routes>
            <MainFooter />
        </Suspense>
        
        {/* <Footer /> */}
      </section>
    </>
  )
}

export default App;
