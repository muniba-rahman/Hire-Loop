import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Drawer from "./components/drawer/Drawer";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about/AboutPage";
import EventsPage from "./pages/about/EventsPage";
import GalleryPage from "./pages/about/GalleryPage";
import OurAchievmentsPage from "./pages/about/OurAchievmentsPage";
import OurTeamsPage from "./pages/about/OurTeamsPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import ContactPage from "./pages/contact/ContactPage";
import "./pages/home/HomePage";
import HomePage from "./pages/home/HomePage";
import { closeDrawer } from "./redux/slices/appStates.slice";

function App() {
  const drawerOpen = useSelector((state) => state.appStates.drawer_open);
  const dispatch = useDispatch();
  useEffect(() => {
    if (drawerOpen === true) {
      dispatch(closeDrawer());
      document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <div className="App">
      <Drawer isOpen={drawerOpen} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="about"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route index element={<AboutPage />} />
          <Route path="our-teams" element={<OurTeamsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="our-achievements" element={<OurAchievmentsPage />} />
        </Route>
        <Route path="blogs" element={<BlogsPage />} />
        <Route exact path="/contact-us" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
