import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from "react";
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
          goToForgot={() => setPage("forgot")}
        />
      )}

      {page === "register" && (
        <Register goToLogin={() => setPage("login")} />
      )}

      {page === "forgot" && (
        <ForgotPassword goToLogin={() => setPage("login")} />
      )}
    </>
  );
}

export default App;