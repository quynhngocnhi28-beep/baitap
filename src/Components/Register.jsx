import React, { useState } from "react";
import "./Register.css";

function Register({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    alert("Đăng ký thành công!");
    goToLogin();
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>🛒 Đăng Ký Tài Khoản</h2>
        <p>Hệ thống quản lý siêu thị mini</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Đăng ký</button>
        </form>

        <p className="switch">
          Đã có tài khoản?{" "}
          <span onClick={goToLogin}>Đăng nhập</span>
        </p>
      </div>
    </div>
  );
}

export default Register;