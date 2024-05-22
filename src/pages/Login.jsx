import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="login-page page-height">
      <div className="login-page-container">
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className='van-links'>Submit</button>
        </form>
        <span>
          Don’t have an account? <Link to="."> Create one now</Link>
        </span>
      </div>
    </div>
  );
}
