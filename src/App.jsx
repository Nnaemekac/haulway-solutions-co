
import "./assets/styles/style.css"
// import Navbar from "./components/Navbar"
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import About from "./pages/About";
import ITServices from "./pages/ITServices";

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
      <section className='hw-main-section'>
      <Navbar />
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/it/services" element={<ITServices />} />
              <Route path="*" element={<h1>No Match</h1>} />
            </Routes>
        </Suspense>
        {/* <Footer /> */}
      </section>
    </>
  )
}

export default App;
