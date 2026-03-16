
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