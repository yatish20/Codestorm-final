import React, { useState } from 'react';
import './SignUpForm.css'; // Import your styles

const SignUpForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
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
    const HOST = "http://localhost:5001"
    try {
      const { name, email, password } = formData;
      const url = `${HOST}/api/auth/createuser`

      //new user
      const newUser = {
      name,
      email,
      password
    };

      // Send the form data to the backend (adjust the URL as needed)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // Convert the note object to a JSON string for the body
        body: JSON.stringify(newUser),
      });

       if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      if (data.authToken) {
        setSuccessMessage('Successfully signed up!');
        setErrorMessage('');
        // Save auth token in localStorage or any state management (optional)
        localStorage.setItem('authToken', data.authToken);
      }
    } catch (error) {
      // Handle error response
      setErrorMessage('Failed to create user. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-modal-content">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>Sign Up</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

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

        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
