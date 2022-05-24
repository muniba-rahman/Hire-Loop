import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
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
import TeamPage from "./pages/about/TeamPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Dashboard from "./pages/user/Dashboard";
import CreateBlog from "./pages/user/CreateBlog";
import UserCourses from "./pages/user/UserCourses";
import AccountSettings from "./pages/user/AccountSettings";
import { validateToken } from "./redux/slices/user.slice";

function App() {
  const drawerOpen = useSelector((state) => state.appStates.drawer_open);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (drawerOpen === true) {
      dispatch(closeDrawer());
      document.body.style.overflow = "auto";
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); //page scrolls to top on page transition.
  }, [location]);

  useEffect(() => {
    if (token) {
      dispatch(validateToken());
    }
    if (drawerOpen === false && document.body.style.overflow != "auto") {
      document.body.style.overflow = "auto";
    }
  }, [location]); //this useEffect will be called on every re-render to re validate the auth token if present

  return (
    <div className="App">
      <Drawer isOpen={drawerOpen} />
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {token ? (
            <Route path="/dashboard/:userid" element={<Dashboard />}>
              <Route path="create-blog" element={<CreateBlog />} />
              <Route index path="my-courses" element={<UserCourses />} />
              <Route path="account-settings" element={<AccountSettings />} />
            </Route>
          ) : null}
          <Route index path="/about" element={<AboutPage />} />
          <Route path="/our-teams" element={<Outlet />}>
            <Route index element={<OurTeamsPage />} />
            <Route path=":path" element={<TeamPage />} />
          </Route>
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
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default App;
