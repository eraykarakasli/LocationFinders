import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTopButton from './components/scrollTop/ScrollToTopButton';
import Navbar from "./components/navbarComps/Navbar"
import Home from "./pages/Home"
import LocationMap from "./pages/LocationMap"
import Passenger from "./pages/Passenger";
import Plates from "./pages/Plates";
import PageWrapper from "./components/wrappers/PageWrapper";
import LoginPage from "./pages/LoginRegister.jsx/LoginPage";
import LogReg from "./pages/LoginRegister.jsx/LogReg";

function App() {
  return (
    <div className="bg-gradient-to-t from-white via-blue-800 to-gray-900 h-full w-full ">

      <Navbar />
      <PageWrapper>

        <Router>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/locationmap" element={<LocationMap />} />
            <Route path="/passengers/:id" element={<Passenger />} />
            <Route path="/plates" element={<Plates />} />

            <Route path="/login" element={<LogReg />} />
            <Route path="/register" element={<LogReg  />} />
          </Routes>
        </Router>
        <ScrollToTopButton />
      </PageWrapper>
    </div>

  )
}

export default App
