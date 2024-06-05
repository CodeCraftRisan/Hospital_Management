import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
 const { isAuthenticated, setIsAuthenticated } = useContext(Context);

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 const navigateTo = useNavigate();

 const handleLogin = (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
   toast.error("Passwords do not match");
   return;
  }
setTimeout(() => {
       toast.success("Login successful!");
       setIsAuthenticated(true);
       navigateTo("/");
       setEmail("");
       setPassword("");
       setConfirmPassword("");
      }, 1000);
     };
    
     if (isAuthenticated) {
      return <Navigate to={"/"} />;
     }
    
     return (
      <>
       <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
         voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleLogin}>
         <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         />
         <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         />
         <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
         />
         <div
          style={{
           gap: "10px",
           justifyContent: "flex-end",
           flexDirection: "row",
          }}
         >
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
           to={"/register"}
           style={{ textDecoration: "none", color: "#271776ca" }}
          >
           Register Now
          </Link>
         </div>
         <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Login</button>
         </div>
        </form>
       </div>
      </>
     );
    };
    
    export default Login;