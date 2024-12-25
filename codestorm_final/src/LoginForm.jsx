import React, { useState } from 'react';
import './LoginForm.css'; // Import your styles

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const HOST = "http://localhost:5001";
    try {
      const { email, password } = formData;
      const url = `${HOST}/api/auth/login`;

      // Login credentials
      const loginData = {
        email,
        password,
      };

      // Send the form data to the backend (adjust the URL as needed)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      // Assume the response contains an auth token
      if (data.authToken) {
        setSuccessMessage('Login successful!');
        setErrorMessage('');
        // Save auth token in localStorage or any state management (optional)
        localStorage.setItem('authToken', data.authToken);
      } else {
        setErrorMessage('Invalid login credentials.');
      }
    } catch (error) {
      // Handle error response
      setErrorMessage('Failed to log in. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-modal-content">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>Log In</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
