import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Drawer from "./components/drawer/Drawer";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import "./pages/home/HomePage";
import HomePage from "./pages/home/HomePage";
import { drawerToggle } from "./redux/slices/appStates.slice";

function App() {
  const drawerOpen = useSelector((state) => state.appStates.drawer_open);
  const dispatch = useDispatch();
  useEffect(() => {
    if (drawerOpen == true) {
      dispatch(drawerToggle());
      document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <div className="App">
      <Drawer isOpen={drawerOpen} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/contact_us" element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
