export const navRoutes = {
  default: [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    {
      name: "About",
      path: "/about",
      dropdownRoutes: [
        { name: "Our Teams", path: "about/our-teams" },
        { name: "Events", path: "about/events" },
        { name: "Gallery", path: "about/gallery" },
        { name: "Achievements", path: "about/our-achievements" },
      ],
      dropdownIndex: 0,
    },
    { name: "Courses", path: "/courses" },
    { name: "Projects", path: "/projects" },
    { name: "Membership", path: "/membership" },
    {
      name: "Registeration",
      path: "/student-registeration",
      dropdownRoutes: [
        { name: "Student Registeration", path: "/student-registeration" },
        { name: "Instructor Registeration", path: "/student-registeration" },
      ],
      dropdownIndex: 1,
    },
    {
      name: "My Account",
      path: "/dashboard",
      dropdownRoutes: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "My Courses", path: "/my-courses" },
        { name: "Account Settings", path: "/account-settings" },
      ],
      dropdownIndex: 2,
    },
    { name: "Contact Us", path: "/contact-us" },
  ],
};
