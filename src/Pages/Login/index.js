import React, { useState } from "react";
import awan2 from '../../img/awan2.webp';

function PageContent_Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Email dan password tidak boleh kosong");
    } else if (!isValidEmail(email)) {
      alert("Email tidak valid");
    } else {
      onLogin(); 
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-container">
      <img src={awan2} alt="Awan2" className="welcome-image1" />
      <h2 className="welcome-1">Selamat Datang di WeatherNow!</h2>
      <h3 className="welcome-2">Silahkan Login</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default PageContent_Login;


