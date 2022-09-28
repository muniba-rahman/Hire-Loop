import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import "./App.css";
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
import BlogsPage from "./pages/blogs/BlogsPage";
import OurAchievmentsPage from "./pages/about/OurAchievmentsPage";
import BlogPage from "./pages/blogs/BlogPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectPage from "./pages/projects/ProjectPage";

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
      dispatch(validateToken()).then((res, err) => {
        console.log("token validation: res, err ===>", res, err);
        if (res.type === "user/validateToken/rejected") {
          alert(
            "ACCESS TOKEN EXPIRED:\nYour access token has expired and you have been logged out. Please log in again."
          );
        }
      });
    }
    if (drawerOpen === false && document.body.style.overflow != "auto") {
      document.body.style.overflow = "auto";
    }
  }, [location]); //this useEffect will be called on every route change to re validate the auth token if present

  return (
    <div className="App">
      <Drawer isOpen={drawerOpen} />
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Outlet />}>
            <Route index element={<BlogsPage />} />
            <Route path=":id" element={<BlogPage />} />
          </Route>
          {token ? (
            <Route path="/dashboard/:userid" element={<Dashboard />}>
              <Route index path="my-courses" element={<UserCourses />} />
              <Route path="create-blog" element={<CreateBlog />} />
              <Route path="account-settings" element={<AccountSettings />} />
            </Route>
          ) : null}
          <Route index path="/about" element={<AboutPage />} />
          <Route path="/our-teams" element={<Outlet />}>
            <Route index element={<OurTeamsPage />} />
            <Route path=":path" element={<TeamPage />} />
          </Route>
          <Route path="/events" element={<OurTeamsPage />} />
          <Route path="/achievements" element={<OurAchievmentsPage />} />
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

          <Route path="/projects" element={<ProjectsPage/>}></Route>
          <Route path="/projects/:id" element={<ProjectPage/>}/>
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default App;
