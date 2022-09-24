import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

const BlogPage = () => {
  const {
    state: { blog },
  } = useLocation();

  console.log("blog ===>", blog);
  return (
    <div className={"blog-page"}>
      <Banner title={blog.title} />
      <section className={"sec-1"}>
        <ReactQuill
          className={"content"}
          value={blog.content}
          readOnly={true}
          theme={"bubble"}
        />
      </section>
    </div>
  );
};

export default BlogPage;
