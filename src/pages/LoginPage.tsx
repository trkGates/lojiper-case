import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import { LoginBilgileriContext } from "../context/LoginBilgileri";

import "react-toastify/dist/ReactToastify.css";

import "./CSS/LoginPage.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

interface LoginFormState {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { loginBilgileri, setLoginBilgileri } = useContext(LoginBilgileriContext);
  const [hataliGiris, setHataliGiris] = useState(""); // [hataliGiris, setHataliGiris
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
          console.log("Login success:", response.data.message, response.data.token);

          // Güncelleme işlemini burada yapıyoruz.
          setLoginBilgileri({
            username: formData.username,
            password: formData.password
          });
          console.log("Login bilgileri güncellendi:", loginBilgileri);
          navigate("/");
          notifySuccess();
        } else {
          console.log("Login failed!");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log("Kullanıcı adı veya şifre hatalı!");
           setHataliGiris("Kullanıcı adı veya şifre hatalı!");
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
          <InputText
          placeholder="Username" className="w-full mb-3"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <InputText
           placeholder="Password" className="w-full mb-3"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <p>{hataliGiris}</p>
        <Button icon="pi pi-user" className="w-full"  type="submit">Login</Button>
      </form>
      {formData.username && <p>Username: {formData.username}</p>}
      {formData.password && <p>Password: {formData.password}</p>}
    </div>
  );
};

export default LoginPage;
