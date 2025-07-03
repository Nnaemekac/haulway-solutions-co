import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ROI from './pages/ROI'
import Contact from './pages/Contact'
import JobPool from './pages/JobPool'
import ScrollToTop from './components/ScrollToTop'
import BPOSolutions from './pages/BPOSolutions'
import ITServices from './pages/ITServices'
import Cursor from './components/Cursor'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ComingSoon from './pages/ComingSoon'
import Blogs from './pages/Blogs'
import StackCheck from './pages/StackCheck'
import Chatbot from './components/Chatbot'
import LiveChat from './pages/LiveChats'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className="min-h-screen bg-[#141416] text-white overflow-x-hidden">
      <Cursor />
      <ScrollToTop />
      <Chatbot />
      {/* <TawkToChat /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bpo-solutions" element={<BPOSolutions />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/stack-check" element={<StackCheck />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/signin" element={<ComingSoon />} />
          <Route path="/roi" element={<ROI />} />
          <Route path="/jobs" element={<JobPool />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App