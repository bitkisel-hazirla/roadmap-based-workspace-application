import React, { useState } from 'react';
import { AuthButton } from '../../components/UI/AuthButton';
import { PasswordInput } from '../../components/UI/PasswordInput';
import axios from 'axios';

function SignUp() {
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    birthday: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/user', formValues);
      console.log(response);
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
        <h1 className="mb-16 text-2xl md:text-4xl lg:text-5xl">Create Account</h1>
        <div className="xl:w-9/12 lg:w-8/12 md:w-6/12 sm:w-5/12 w-4/12 max-w-2xl">
          <input
            className="w-full mb-8 py-3 px-5 border border-gray-500 rounded"
            type="text"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="w-full mb-8 py-3 px-5 border border-gray-500 rounded"
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            className="w-full mb-8 py-3 px-5 border border-gray-500 rounded"
            type="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            required
          />
          <PasswordInput value={formValues.password} onChange={handleChange} className={'mb-8'} />
          <input
            className="w-full py-3 px-5 border border-gray-500 rounded"
            type="date"
            id="birthday"
            name="birthday"
            value={formValues.birthday}
            onChange={handleChange}
            max="2999-12-30"
            required
          />
          <AuthButton
            className="signBtn w-full rounded mt-16"
            onClick={handleSubmit}
            theme="secondary"
          >
            Sign Up
          </AuthButton>
        </div>
      </form>
    </div>
  );
}

export { SignUp };
