import axios from "axios";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./CSS/RegisterPages.css";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Message } from "primereact/message";

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

  const [formData, setFormData] = useState<RegisterFormState>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLSelectElement>
  ) => {
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
          toast.success(response.data.message);
        } else if (response.status === 401) {
          console.log("Kayıt Başarısız:", response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Kayıt Başarısızzzz:", error.response.data.message);
          setErrorDurumu(error.response.data.message);
          toast.error(error.response.data.message);
        } else if (error.request) {
          console.log("Sunucuya ulaşılamıyor.");
        } else {
          console.log("Bir hata oluştu:", error.message);
        }
      });
  };

  return (
    <div id="Register-Main">
      <div id="Register-Container">
        <div id="Register-Container1">
          <div>
            <h1 id="KayitOl">Kayıt Ol</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <label htmlFor="username">Username</label>
              </span>
            </div>

            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-question-circle"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <label htmlFor="password">Password</label>
              </span>
            </div>

            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-send"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
              </span>
            </div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <label htmlFor="firstName">Ad</label>
              </span>
            </div>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <label htmlFor="lastName">Soyad</label>
              </span>
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
            <div>
              {errorDurumu ? (
                <Message id="Message" severity="warn" text={errorDurumu} />
              ) : null}
            </div>
            <div id="BTN-KAYIT">
              <Button type="submit" label="Kayıt Ol" severity="secondary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPages;
