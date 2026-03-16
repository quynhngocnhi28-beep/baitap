import React, { useState } from "react";
import "./Login.css";

function Login({ goToRegister }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        alert("Đăng nhập thành công!");
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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


                    <p className="forgot">
                        <span onClick={goToForgot}>Quên mật khẩu?</span>
                    </p>

                    <button type="submit">Đăng nhập</button>
                </form>

                <p className="switch">
                    Chưa có tài khoản?{" "}
                    <span onClick={goToRegister}>Đăng nhập</span>
                </p>
            </div>
        </div>
    );
}

export default Login;