import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ value, onChange, className }) => {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className={`relative w-full max-w-2xl ${className}`}>
      <input
        className="w-full py-3 px-5 border border-gray-500 rounded"
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        value={value}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button
        className="absolute top-0 text-xl right-0 w-10 h-full text-gray-500 focus:outline-none"
        onClick={(e) => togglePasswordVisibility(e)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export { PasswordInput };