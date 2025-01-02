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
        {/* Registration form content */}
      </form>
    </div>
  );
};

export default RegistrationForm;