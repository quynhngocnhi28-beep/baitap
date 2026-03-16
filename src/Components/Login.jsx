import React, { useState } from "react";
import "./Login.css";

function Login({ goToRegister, goToForgot }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = "";
    let passwordError = "";

    if (email === "") {
      emailError = "Vui lòng nhập email";
    }

    if (password === "") {
      passwordError = "Vui lòng nhập mật khẩu";
    }

    setErrors({
      email: emailError,
      password: passwordError
    });

    if (emailError === "" && passwordError === "") {
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h2>Đăng nhập</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <p className="switch">
            <span onClick={goToForgot}>Quên mật khẩu?</span>
          </p>

          <button type="submit">Đăng nhập</button>

        </form>

        <p className="switch">
          Chưa có tài khoản?{" "}
          <span onClick={goToRegister}>Đăng ký</span>
        </p>

      </div>
    </div>
  );
}

export default Login;