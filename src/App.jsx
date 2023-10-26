import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTopButton from './components/scrollTop/ScrollToTopButton';
import NewBar from "./components/navbarComps/NewBar"
import Home from "./pages/Home"
import LocationMap from "./pages/LocationMap"
import Passenger from "./pages/Passenger";
import Plates from "./pages/Plates";
import PageWrapper from "./components/wrappers/PageWrapper";
import LoginPage from "./pages/LoginRegister.jsx/LoginPage";
import LogReg from "./pages/LoginRegister.jsx/LogReg";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#121212] min-h-screen h-full w-full ">

      {/* <Navbar /> */}
      <NewBar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locationmap" element={<LocationMap />} />
          <Route path="/passengers/:id" element={<Passenger />} />
          <Route path="/plates" element={<Plates />} />
          <Route path="/login" element={<LogReg />} />
          <Route path="/register" element={<LogReg />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>

      <ScrollToTopButton />
    </div>

  )
}

export default App
