
import "./assets/styles/style.css"
// import Navbar from "./components/Navbar"
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <section className='hagion-main-section'>
      <Navbar />
        <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<h1>No Match</h1>} />
            </Routes>
        </Suspense>
      </section>
    </>
  )
}

export default App;
