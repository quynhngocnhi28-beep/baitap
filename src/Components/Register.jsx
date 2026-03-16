import React, { useState } from "react";
import "./Register.css";

function Register({ goToLogin }) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username) newErrors.username = "Vui lòng nhập tên đăng nhập";
    if (!email) newErrors.email = "Vui lòng nhập email";
    if (!password) newErrors.password = "Vui lòng nhập mật khẩu";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Đăng ký thành công!");
      goToLogin();
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        <h2>Đăng ký</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
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

          <button type="submit">Đăng ký</button>

        </form>

        <p className="switch">
          Đã có tài khoản{" "}
          <span onClick={goToLogin}>Đăng nhập</span>
        </p>

      </div>
    </div>
  );
}

export default Register;