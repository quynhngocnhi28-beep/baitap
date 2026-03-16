import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" ? (
        <Login goToRegister={() => setPage("register")} />
      ) : (
        <Register goToLogin={() => setPage("login")} />
      )}
    </div>
  );
}

export default App;
