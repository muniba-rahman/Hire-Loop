import { get, post } from "../axiosConfig";

const authServices = {
  register: (registerForm) => {
    return post("user/register", registerForm);
  },
  login: (loginForm) => {
    return post("user/login", loginForm, {});
  },
  authenticate: (accessToken) => {
    return get("user/auth", { headers: { Authorization: accessToken } });
  },
};

export default authServices;
