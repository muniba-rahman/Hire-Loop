import React, { useState } from "react";
import authServices from "../../axios/services/auth.service";
import "./Registeration.css";

const RegisterationForm = ({ title }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmation: "",
  });
  const [err, setErr] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (form.password === form.confirmation) {
      let registerationForm = {
        name: form.name,
        email: form.email,
        password: form.password,
        member_type: title == "Instructor" ? "INSTRUCTOR" : "STUDENT",
      };
      authServices.register(registerationForm).then((res)=>{
        
        setErr("")
      }).catch((err) => {
        setErr(err?.response?.data?.error || "Unexpected Error")
      });
      setErr(err);
    } else {
      setErr("Passwords do not match");
    }
  };

  return (
    <div className={"registerForm"}>
      <form onSubmit={handleSubmission}>
        <h1 style={{ textDecoration: "underline" }}>{title} Registeration</h1>
        <br />
        <label>User Name</label>
        <input
          type="text"
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
        <label>Email Address</label>
        <input
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label>Create Password</label>
        <input
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <label>Re-type Password</label>
        <input
          type="password"
          onChange={(e) => setForm({ ...form, confirmation: e.target.value })}
        />
        <p style={{color:"red"}}>{err}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterationForm;
