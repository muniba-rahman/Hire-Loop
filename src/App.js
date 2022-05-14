import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import authServices from "./axios/services/auth.service";
import Drawer from "./components/drawer/Drawer";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import "./pages/home/HomePage";
import HomePage from "./pages/home/HomePage";
import { closeDrawer } from "./redux/slices/appStates.slice";

function App() {
  const drawerOpen = useSelector((state) => state.appStates.drawer_open);
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const callAuthenticateRequest = async () => {
    const res = authServices.authenticate(accessToken);
    console.log(res);
  };

  useEffect(() => {
    if (drawerOpen === true) {
      dispatch(closeDrawer());
      document.body.style.overflow = "auto";
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      callAuthenticateRequest();
    }
  }); //this useEffect will be called on every re-render to re validate the auth token if present

  return (
    <div className="App">
      <Drawer isOpen={drawerOpen} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact-us" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
