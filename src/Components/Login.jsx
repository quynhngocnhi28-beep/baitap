import React, { useState } from "react";
import "./Login.css";

function Login({ goToRegister, goToForgot }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) {
      newErrors.email = "Vui lòng nhập email";
    }

    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
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