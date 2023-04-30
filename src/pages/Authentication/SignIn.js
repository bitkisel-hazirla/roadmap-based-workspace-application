import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { PasswordInput } from '../../components/UI/PasswordInput';
import { AuthButton } from '../../components/UI/AuthButton';

const SignIn = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', formValues);
      if (response.status === 200) {
        //redirect
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="login-form h-3/5 flex flex-col justify-center items-center"
      >
        <h1 className="mb-16 text-3xl md:text-4xl lg:text-5xl">Sign In To SHELLP</h1>
        <div className="xl:w-8/12 lg:w-7/12 md:w-6/12 sm:w-5/12 w-4/12 max-w-2xl">
          <input
            className="w-full mb-10 py-3 px-5 border border-gray-500 rounded"
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <PasswordInput value={formValues.password} onChange={handleChange} className={'mb-4'} />
          <div className="flex w-full justify-between">
            <label
              htmlFor="checkbox"
              className="checkbox-label flex items-center text-base cursor-pointer text-gray"
            >
              <input
                id="checkbox"
                type="checkbox"
                name="remember"
                checked={formValues.remember}
                onChange={handleChange}
                className="checkbox-input absolute opacity-0 pointer-events-none"
              />
              <span className="checkbox-icon inline-block w-5 h-5 mr-2.5 rounded border border-gray-500 rounded"></span>
              Remember me
            </label>
            <Link to="/">Forgot your password?</Link>
          </div>
          <AuthButton className="signBtn w-full rounded mt-12" theme="secondary">
            Sign In
          </AuthButton>
        </div>
      </form>
    </div>
  );
}

export { SignIn };
