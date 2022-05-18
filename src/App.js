import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import authServices from "./axios/services/auth.service";
import Drawer from "./components/drawer/Drawer";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about/AboutPage";
import OurTeamsPage from "./pages/about/OurTeamsPage";
import ContactPage from "./pages/contact/ContactPage";
import "./pages/home/HomePage";
import HomePage from "./pages/home/HomePage";
import InstructorRegisteration from "./pages/registration/InstructorRegisteration";
import StudentRegisteration from "./pages/registration/StudentRegisteration";
import SignInPage from "./pages/signIn/SignInPage";
import { closeDrawer } from "./redux/slices/appStates.slice";

function App() {
  const drawerOpen = useSelector((state) => state.appStates.drawer_open);
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const callAuthenticateRequest = async () => {
    const res = authServices.authenticate(accessToken);
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
  }, [location]); //this useEffect will be called on every re-render to re validate the auth token if present

  return (
    <div className="App">
      <Drawer isOpen={drawerOpen} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index path="/about" element={<AboutPage />} />
        <Route path="/our-teams" element={<OurTeamsPage />} />
        <Route path="/events" element={<OurTeamsPage />} />
        <Route path="/achievements" element={<OurTeamsPage />} />
        <Route path="/gallery" element={<OurTeamsPage />} />
        <Route
          path="/student-registeration"
          element={<StudentRegisteration />}
        />
        <Route
          path="/instructor-registeration"
          element={<InstructorRegisteration />}
        />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route exact path="/contact-us" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
