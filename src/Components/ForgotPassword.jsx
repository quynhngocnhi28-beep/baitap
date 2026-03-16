import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword({ goToLogin }) {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Vui lòng nhập email");
      return;
    }

    setError("");
    alert("Link đặt lại mật khẩu đã được gửi đến email!");
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h2>Quên mật khẩu</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && <p className="error">{error}</p>}
          </div>

          <button type="submit">Gửi yêu cầu</button>
        </form>

        <p className="back-login">
          <span onClick={goToLogin}>← Quay lại đăng nhập</span>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;