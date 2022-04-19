export const navRoutes = {
  default: [
    { name: "Home", path: "/home" },
    { name: "Blogs", path: "/blogs" },
    {
      name: "About",
      path: "/about",
      dropdownRoutes: [
        { name: "Our Teams", path: "/our-teams" },
        { name: "Events", path: "/events" },
        { name: "Gallery", path: "/gallery" },
        { name: "Achievements", path: "/achievements" },
      ],
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
    },
    {
      name: "MyAccount",
      path: "/dashboard",
      dropdownRoutes: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "My Courses", path: "/my-courses" },
        { name: "Account Settings", path: "/account-settings" },
      ],
    },
    { name: "Contact Us", path: "/contact-us" },
  ],
};

export const dropdownRoutes = {
  about: [
    { name: "Our Teams", path: "/our-teams" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Achievements", path: "/achievements" },
  ],
  registration: [
    { name: "Student Registeration", path: "/student-registeration" },
    { name: "Instructor Registeration", path: "/student-registeration" },
  ],
  myAccount: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Courses", path: "/courses" },
    { name: "Account Settings", path: "/account-settings" },
  ],
};
