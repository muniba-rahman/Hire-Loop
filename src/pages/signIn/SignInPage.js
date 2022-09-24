import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../registration/Registeration.css";
import { login } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      dispatch(login(form)).then((res) => {
        if (res.error) {
          alert("Error! Unable to sign in.");
        } else if (res.payload?.user?._id) {
          navigate(`/dashboard/${res.payload.user._id}`, { replace: true });
        }
      });
    }
  };

  return (
    <div className={"registerationPage"}>
      <section
        className={"banner"}
        href={"https://www.vecteezy.com/free-vector/black-background"}
      >
        <div
          className={"overlay titleContainer"}
          style={{
            alignItems: "stretch",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className={"registerForm"}>
            <form onSubmit={handleSubmit}>
              <h1 style={{ textDecoration: "underline" }}>Sign In</h1>
              <br />
              <label>Email Address</label>
              <input
                type="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default SignInPage;
