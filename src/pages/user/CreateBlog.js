import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "quill/dist/quill.snow.css";
import blogServices from "../../axios/services/blog.service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/imageResize", ImageResize);

const CreateBlog = () => {
  const user = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    preview: "",
    content: "",
    thumbnail: null,
  });
  const [charLimit, setCharLimit] = useState(form.preview?.length || 0);
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: "" }, { align: "center" }, { align: "right" }],
      ["clean"],
    ],
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  useEffect(() => {
    console.log("form ===>", form);
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let blog = {
      ...form,
      user_id: user.data._id,
    };
    const fieldIsEmpty = Object.values(blog).some((value) => {
      if (value === null || value.length == 0) {
        console.log("null value ==>", value);
        return true;
      }
      return false;
    });
    if (!fieldIsEmpty) {
      //form is valid and request will be initiated
      setLoader(true); //when loader is true, no more requests can be sent
      const response = await blogServices.postBlog({
        blog: blog,
        accessToken: user.token,
      });
      if (response.status == 200) {
        setLoader(false);
        navigate(`/blogs`, { replace: true });
      } else if ((response.status = 413)) {
        setLoader(false);
        alert(
          "ERROR: File Size Exceeded Maximum\nFile size should not exceed 16 MB. Thankyou."
        );
      } else {
        setLoader(false);
        alert("ERROR\nblog could not be posted for some reason");
      }
    } else {
      alert(
        "Fill all fields\nAll fields are required for posting the blog. Thankyou for complying."
      );
    }
  };

  return (
    <div className={"create-blog"}>
      <h2>Write Your Blog And Share With The World!</h2>
      <br />
      <form className={"quill-container"} onSubmit={handleSubmit}>
        <div className={"input-container"}>
          <input
            type="text"
            placeholder={"Add a Title for the Blog ..."}
            onChange={(e) => {
              setForm({ ...form, title: e.target.value });
            }}
            required={true}
          />
        </div>
        <div className={"file-input"}>
          <p>Add a Thumbnail</p>
          <input
            id="thumbnail-img"
            type="file"
            name="thumbnail"
            onChange={async (e) => {
              if (e.target.files && e.target.files[0]) {
                let img = e.target.files[0];
                const base64Img = await getBase64(img);
                if (base64Img) {
                  setForm({
                    ...form,
                    thumbnail: base64Img,
                  });
                }
              }
            }}
          />
          {form.thumbnail && (
            <img
              style={{
                objectFit: "contain",
                border: "1px solid grey",
                padding: "8px",
                borderRadius: "8px",
                marginTop: "15px",
              }}
              src={form.thumbnail}
            />
          )}
        </div>
        <ReactQuill
          placeholder={"Start writing ..."}
          modules={modules}
          theme="snow"
          className={"react-quill"}
          onChange={(val) => {
            setForm({ ...form, content: val });
          }}
        />
        <div className={"input-container"}>
          <label>Preview</label>
          <textarea
            type="text"
            rows="4"
            placeholder={"Write a preview ..."}
            maxLength={200 + (form?.preview?.split(" ").length - 1)}
            onChange={({ target: { value } }) => {
              setForm({ ...form, preview: value });
              setCharLimit(value.replace(/\s/g, "").length); //removes all white spaces
            }}
            required={true}
          />
          <p style={{ fontSize: "14px" }}>
            {200 - charLimit} out of 200 characters left
          </p>
        </div>
        <div className={"button-container"} style={{ marginBottom: "10vh" }}>
          <button className={"button-primary"} disabled={!loader}>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
