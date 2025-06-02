import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/signup", { username, password });
    alert("Signup successful");
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  );
}
