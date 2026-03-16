import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword({ goToLogin }) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Vui lòng nhập email!");
            return;
        }

        alert("Link đặt lại mật khẩu đã được gửi đến email!");
    };

    return (
        <div className="forgot-page">
            <div className="forgot-box">
                <h2>🔑 Quên Mật Khẩu</h2>
                <p>Nhập email để khôi phục mật khẩu</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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