import { logout } from "../redux/slices/user.slice";

export const navRoutes = {
  default: [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    {
      name: "About",
      path: "/about",
      dropdownRoutes: [
<<<<<<< HEAD
        { name: "Our Teams", path: "about/our-teams" },
        { name: "Events", path: "about/events" },
        { name: "Gallery", path: "about/gallery" },
        { name: "Achievements", path: "about/our-achievements" },
=======
        { name: "Our Teams", path: "our-teams" },
        { name: "Events", path: "/events" },
        { name: "Gallery", path: "/gallery" },
        { name: "Achievements", path: "/achievements" },
>>>>>>> development-aboutPage
      ],
      dropdownIndex: 0,
    },
    { name: "Courses", path: "/courses" },
    { name: "Projects", path: "/projects" },
    { name: "Membership", path: "/membership" },
    {
      name: "Register",
      path: "/student-registeration",
      dropdownRoutes: [
        { name: "As Student", path: "/student-registeration" },
        { name: "As Instructor", path: "/instructor-registeration" },
      ],
      dropdownIndex: 1,
<<<<<<< HEAD
=======
    },
    {
      name: "Sign In",
      path: "/sign-in",
>>>>>>> development-aboutPage
    },
    { name: "Contact Us", path: "/contact-us" },
  ],
  signedIn: [
    { name: "Home", path: "/home" },
    { name: "Blogs", path: "/blogs" },
    {
      name: "About",
      path: "/about",
      dropdownRoutes: [
        { name: "Our Teams", path: "our-teams" },
        { name: "Events", path: "/events" },
        { name: "Gallery", path: "/gallery" },
        { name: "Achievements", path: "/achievements" },
      ],
      dropdownIndex: 0,
    },
    { name: "Courses", path: "/courses" },
    { name: "Projects", path: "/projects" },
    { name: "Membership", path: "/membership" },
    {
      name: "My Account",
      path: "/dashboard",
      dropdownRoutes: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "My Courses", path: "/my-courses" },
        { name: "Account Settings", path: "/account-settings" },
        {
          name: "Log Out",
          path: "/",
          func: function (dispatch) {
            dispatch(logout());
          },
        }, //this will not be a navigation route but a logout button
      ],
      dropdownIndex: 2,
    },
    { name: "Contact Us", path: "/contact-us" },
  ],
};
<<<<<<< HEAD
=======

export const dropdownRoutes = {
  about: [
    { name: "Our Teams", path: "about/our-teams" },
    { name: "Events", path: "about/events" },
    { name: "Gallery", path: "about/gallery" },
    { name: "Achievements", path: "about/achievements" },
  ],
  registration: [
    { name: "Student Registeration", path: "/student-registeration" },
    { name: "Instructor Registeration", path: "/instructor-registeration" },
  ],
  myAccount: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Courses", path: "/courses" },
    { name: "Account Settings", path: "/account-settings" },
  ],
};
>>>>>>> development-aboutPage
