import { get, post } from "../axiosConfig";

const authServices = {
  register: (registerForm) => {
    return post("users/register", registerForm);
  },
  login: (loginForm) => {
    return post("users/login", loginForm);
  },
  authenticate: (accessToken) => {
    return get("users/auth", { headers: { Authorization: accessToken } });
  },
};

export default authServices;
