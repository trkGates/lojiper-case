import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./CSS/LoginPage.css";
import { set } from "../../api/users/users-router";

interface LoginFormState {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const notifyFail = () =>
    toast.warn("Kullanıcı adı veya şifre hatalı!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifySuccess = () =>
    toast.success("Giriş başarılı!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [formData, setFormData] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("login/user", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Login success:", response.data.message);
          // 1 saniye beklet sonra yönlendir
          notifySuccess();

          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          console.log("Login failed!");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log("Kullanıcı adı veya şifre hatalı!");
          notifyFail();
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {formData.username && <p>Username: {formData.username}</p>}
      {formData.password && <p>Password: {formData.password}</p>}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
