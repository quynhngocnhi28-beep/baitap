import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>🛒 Quản Lý Bán Hàng</h2>
        <p>Siêu thị mini</p>

        <form>
          <div className="input-group">
            <label>Tên đăng nhập</label>
            <input type="text" placeholder="Nhập username" />
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <input type="password" placeholder="Nhập password" />
          </div>

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
