import React  , {useState}from 'react'
import './CSS/LoginPage.css'
interface LoginFormState {
    username: string;
    password: string;
  }
    
const LoginPage : React.FC = () => {
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
        // Burada login işlemleri yapılabilir veya sunucuya gönderilebilir.
        console.log("Form submitted:", formData);
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
    </div>
  ) 
} 

export default LoginPage
