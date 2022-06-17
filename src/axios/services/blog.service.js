import { get, post } from "../axiosConfig";

const blogServices = {
  postBlog: ({ blog, accessToken }) => {
    return post("blogs/post/", blog, {
      headers: { Authorization: accessToken },
    });
  },
  getBlogList: (limit) => {
    return get("blogs", {
      params: { limit: limit },
      timeout: 120000,
    });
  },
  getBlog: (id) => {
    return get("blogs/blog", {
      params: { id: id },
    });
  },
};

export default blogServices;
