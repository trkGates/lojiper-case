import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface RegisterFormState {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
}

const RegisterPages = () => {
  const navigate = useNavigate();
  const [errorDurumu, setErrorDurumu] = useState(false);
  const notifyFail = () =>
    toast.warn("Kayıt Başarısız!!", {
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
    toast.success("Kayıt başarılı!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [formData, setFormData] = useState<RegisterFormState>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("login/register", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Kayıt Başarılı:", response.data.message);
          navigate("/login");
          notifySuccess();
        } else if (response.status === 401) {
          notifyFail();
          console.log("Kayıt Başarısız:", response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Kayıt Başarısız:", error.response.data.message);
          setErrorDurumu(error.response.data.message);
        } else if (error.request) {
          console.log("Sunucuya ulaşılamıyor.");
        } else {
          console.log("Bir hata oluştu:", error.message);
        }
      });
  };

  return (
    <div>
      <h1>Kayıt Ol</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kullanıcı Adı:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>E-posta:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Ad:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Soyad:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Cinsiyet:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="Erkek">Erkek</option>
            <option value="Kadın">Kadın</option>
          </select>
        </div>
        <div>
          <label>Doğum Tarihi:</label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </div>
        <p>{errorDurumu}</p>
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterPages;
