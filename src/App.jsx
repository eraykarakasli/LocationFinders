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
import { useSelector } from "react-redux";
import Admin from "./pages/admin/Admin";
import AdminAdd from "./pages/admin/AdminAdd";
import AdminList from "./pages/admin/AdminList";
import AdminUpdate from "./pages/admin/AdminUpdate";

function App() {
  const theme = useSelector(state => state.theme)

  return (
    
    <div className={`${theme ? "bg-black" : "bg-white"}  min-h-screen h-full w-full `}>

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
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<AdminAdd />} />
          <Route path="/admin/list" element={<AdminList />} />
          <Route path="/admin/update" element={<AdminUpdate />} />
          
        </Routes>
      </Router>
      <div className=" ">
        <Footer />
      </div>

      <ScrollToTopButton />
    </div>

  )
}

export default App
