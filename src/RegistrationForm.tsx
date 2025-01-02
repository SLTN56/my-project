import React, { useState } from 'react';
import './RegistrationForm.css';

interface FormData {
  username: string;
  mobileNumber: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    mobileNumber: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement registration logic
    console.log('Registration Data:', formData);
  };

  return (
    <div className="registration-container">
      <img src="/logo.png" alt="Anteli Logo" className="logo" />
      
      <div className="highlights">
        <h2>Experience Live:</h2>
        <ul>
          <li>Sports Events</li>
          <li>Concerts</li>
          <li>Exclusive Content</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="progress-indicator">
          Step {step} of 2
        </div>

        {step === 1 && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={() => setStep(2)}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="social-signup">
              <button type="button">Sign up with Google</button>
              <button type="button">Sign up with Facebook</button>
            </div>
            <label>
              <input type="checkbox" required />
              I agree to the Privacy Policy
            </label>
            <button type="submit" className="cta-button">Create Account</button>
          </>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;