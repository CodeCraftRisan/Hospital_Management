//import axios from "axios";
import React, { useState } from "react";
//import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleMessage = async (e) => {
    e.preventDefault();
  };
  return (