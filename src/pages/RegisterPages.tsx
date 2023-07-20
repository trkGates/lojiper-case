import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

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


  const [formData, setFormData] = useState<RegisterFormState>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          // 1.5 saniye beklet ve sonra yönlendir
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else if (response.status === 401) {
          console.log("Kayıt Başarısız:", response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Kayıt Başarısız:", error.response.data.message);
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
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Doğum Tarihi:</label>
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterPages;
