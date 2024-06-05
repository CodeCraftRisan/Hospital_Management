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