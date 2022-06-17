import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import blogServices from "../../axios/services/blog.service";
import Banner from "../../components/banner/Banner";
import { deleteBlogs, getBlogList } from "../../redux/slices/blog.slice";
import "./Blogs.css";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  // const blogs = useSelector((state) => state.blog.blogs);

  const getBlogListAPI = async () => {
    const response = await blogServices.getBlogList();
    console.log("getBlogList ===>", response);
    if (response.data?.length && response.status === 200) {
      setBlogs(response.data);
    }
  };
  const getBlogAPI = async (blog) => {
    const response = await blogServices.getBlog(blog._id); //the response only includes the content of the blog fetched stored inside the data object
    if (response.data && response.status === 200) {
      navigate(`/blogs/${blog._id}`, {
        state: { blog: { ...blog, content: response.data.content } },
      });
    } else {
      alert("Could Not Fetch Blog From Server");
    }
  };

  useEffect(() => {
    getBlogListAPI();
    // dispatch(getBlogList());
  }, []);

  const RenderBlogsList = () => {
    console.log("render blogs ===>", blogs);
    return blogs.map((obj) => {
      console.log("obj ===>", obj);
      return (
        <div
          className={"blog-container"}
          key={obj._id}
          onClick={() => getBlogAPI(obj)}
        >
          <img src={obj.thumbnail} />
          <div>
            <h5>{obj.title}</h5>
            <i style={{ fontWeight: "bold" }}>
              {new Date(obj.created_on).toDateString()}
            </i>
            <p>{obj.preview}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={"blogsPage"}>
      <Banner title={"Blogs"} />
      <section className={"sec-1"}>
        {blogs?.length > 0 ? <RenderBlogsList /> : <></>}
      </section>
    </div>
  );
}

export default BlogsPage;
