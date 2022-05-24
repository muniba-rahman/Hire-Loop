import { get, post } from "../axiosConfig";

const emailServices = {
  sendEmail: (emailBody) => {
    return post("email/send", emailBody);
  },
};

export default emailServices;
